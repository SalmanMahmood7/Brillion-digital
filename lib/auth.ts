import { 
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  sendPasswordResetEmail,
  confirmPasswordReset,
  verifyPasswordResetCode
} from 'firebase/auth';
import { auth } from './firebase';
import { usersService } from './firebase-services';

export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<AuthUser>;
  signUp: (email: string, password: string, displayName: string) => Promise<AuthUser>;
  signInWithGoogle: () => Promise<AuthUser>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  confirmPasswordReset: (code: string, newPassword: string) => Promise<void>;
}

// Convert Firebase User to AuthUser
const mapFirebaseUser = (user: User): AuthUser => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
  photoURL: user.photoURL,
});

// Sign in with email and password
export const signIn = async (email: string, password: string): Promise<AuthUser> => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const authUser = mapFirebaseUser(result.user);
    
    // Save/update user in database
    try {
      await usersService.createOrUpdate(authUser, 'email');
    } catch (dbError) {
      console.error('Error saving user to database during sign-in:', dbError);
      // Continue with sign-in even if database save fails
      // User can still use the app, just won't appear in admin panel until next successful save
    }
    
    return authUser;
  } catch (error: any) {
    throw new Error(getAuthErrorMessage(error.code));
  }
};

// Sign up with email and password
export const signUp = async (email: string, password: string, displayName: string): Promise<AuthUser> => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update the user's display name
    if (displayName) {
      await updateProfile(result.user, { displayName });
    }
    
    const authUser = mapFirebaseUser(result.user);
    
    // Save new user to database
    try {
      await usersService.createOrUpdate({
        ...authUser,
        displayName: displayName // Ensure we use the provided display name
      }, 'email');
    } catch (dbError) {
      console.error('Error saving new user to database during sign-up:', dbError);
      // Continue with sign-up even if database save fails
      // User can still use the app, just won't appear in admin panel until next successful save
    }
    
    return authUser;
  } catch (error: any) {
    throw new Error(getAuthErrorMessage(error.code));
  }
};

// Sign in with Google
export const signInWithGoogle = async (): Promise<AuthUser> => {
  try {
    const provider = new GoogleAuthProvider();
    provider.addScope('email');
    provider.addScope('profile');
    
    const result = await signInWithPopup(auth, provider);
    const authUser = mapFirebaseUser(result.user);
    
    // Save/update user in database
    try {
      await usersService.createOrUpdate(authUser, 'google');
    } catch (dbError) {
      console.error('Error saving Google user to database during Google sign-in:', dbError);
      // Continue with sign-in even if database save fails
      // User can still use the app, just won't appear in admin panel until next successful save
    }
    
    return authUser;
  } catch (error: any) {
    throw new Error(getAuthErrorMessage(error.code));
  }
};

// Sign out
export const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error: any) {
    throw new Error('Failed to sign out');
  }
};

// Reset password
export const resetPassword = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error: any) {
    throw new Error(getAuthErrorMessage(error.code));
  }
};

// Confirm password reset
export const confirmPasswordResetHandler = async (code: string, newPassword: string): Promise<void> => {
  try {
    await confirmPasswordReset(auth, code, newPassword);
  } catch (error: any) {
    throw new Error(getAuthErrorMessage(error.code));
  }
};

// Verify password reset code
export const verifyPasswordResetCodeHandler = async (code: string): Promise<string> => {
  try {
    return await verifyPasswordResetCode(auth, code);
  } catch (error: any) {
    throw new Error(getAuthErrorMessage(error.code));
  }
};

// Auth state listener
export const onAuthStateChange = (callback: (user: AuthUser | null) => void) => {
  return onAuthStateChanged(auth, (user) => {
    callback(user ? mapFirebaseUser(user) : null);
  });
};

// Get friendly error messages
const getAuthErrorMessage = (errorCode: string): string => {
  switch (errorCode) {
    case 'auth/user-not-found':
      return 'No account found with this email address';
    case 'auth/wrong-password':
      return 'Incorrect password';
    case 'auth/email-already-in-use':
      return 'An account with this email already exists';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters';
    case 'auth/invalid-email':
      return 'Invalid email address';
    case 'auth/user-disabled':
      return 'This account has been disabled';
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please try again later';
    case 'auth/popup-closed-by-user':
      return 'Sign-in popup was closed';
    case 'auth/cancelled-popup-request':
      return 'Sign-in was cancelled';
    case 'auth/popup-blocked':
      return 'Sign-in popup was blocked by your browser';
    case 'auth/invalid-credential':
      return 'Invalid email or password';
    case 'auth/requires-recent-login':
      return 'Please sign in again to complete this action';
    default:
      return 'An error occurred during authentication';
  }
};

export { auth };