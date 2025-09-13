// Temporary Firebase mock to resolve import errors during development

export const db = {
  // Mock Firestore instance
};

export const storage = {
  // Mock Firebase Storage instance  
};

// Mock Firestore functions
export const collection = (db: any, path: string) => ({
  _path: path
});

export const addDoc = async (collection: any, data: any) => {
  console.log('Mock addDoc called with:', collection._path, data);
  return { id: 'mock-doc-id' };
};

export const query = (collection: any, ...constraints: any[]) => ({
  _collection: collection,
  _constraints: constraints
});

export const where = (field: string, operator: string, value: any) => ({
  field,
  operator, 
  value
});

export const getDocs = async (query: any) => {
  console.log('Mock getDocs called with query');
  return {
    empty: false,
    docs: []
  };
};

// Mock Storage functions
export const ref = (storage: any, path: string) => ({
  _path: path
});

export const uploadBytes = async (ref: any, bytes: any) => {
  console.log('Mock uploadBytes called for:', ref._path);
  return { metadata: {} };
};

export const getDownloadURL = async (ref: any) => {
  console.log('Mock getDownloadURL called for:', ref._path);
  return 'https://mock-download-url.com/file';
};