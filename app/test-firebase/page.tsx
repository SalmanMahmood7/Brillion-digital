"use client";

import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Plus, Check, X } from "lucide-react";

export default function TestFirebasePage() {
  const [status, setStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const testFirebaseConnection = async () => {
    setStatus('testing');
    setMessage('Testing Firebase connection...');
    
    try {
      // Try to read from Firebase
      console.log('Testing read operation...');
      const testCollection = collection(db, 'test');
      const snapshot = await getDocs(testCollection);
      console.log('Read test successful, documents found:', snapshot.size);

      // Try to write to Firebase
      console.log('Testing write operation...');
      const testData = {
        message: 'Firebase connection test',
        timestamp: Timestamp.now(),
        testId: Math.random().toString(36).substring(7)
      };
      
      const docRef = await addDoc(collection(db, 'test'), testData);
      console.log('Write test successful, document ID:', docRef.id);
      
      setStatus('success');
      setMessage(`✅ Firebase connection successful! Test document created with ID: ${docRef.id}`);
    } catch (error) {
      console.error('Firebase test failed:', error);
      setStatus('error');
      setMessage(`❌ Firebase connection failed: ${error}`);
    }
  };

  const createSamplePosts = async () => {
    setLoading(true);
    
    const samplePosts = [
      {
        title: "Getting Started with Firebase",
        content: "Firebase is a powerful platform for building web and mobile applications...",
        excerpt: "Learn the basics of Firebase and how to integrate it into your project.",
        author: "Tech Team",
        tags: ["Firebase", "Database", "Cloud"],
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&auto=format",
        published: true,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      },
      {
        title: "Building Modern Web Applications",
        content: "Modern web applications require robust backend services and real-time data...",
        excerpt: "Explore the architecture and tools needed for modern web development.",
        author: "Development Team",
        tags: ["Web Development", "Modern Apps", "Architecture"],
        imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop&auto=format",
        published: true,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      },
      {
        title: "The Power of Real-time Databases",
        content: "Real-time databases enable applications to sync data instantly across all clients...",
        excerpt: "Discover how real-time databases can transform user experiences.",
        author: "Data Team",
        tags: ["Database", "Real-time", "Synchronization"],
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format",
        published: true,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      }
    ];

    try {
      for (const post of samplePosts) {
        await addDoc(collection(db, 'blogPosts'), post);
        console.log('Added post:', post.title);
      }
      
      setMessage(`✅ Successfully created ${samplePosts.length} sample blog posts!`);
      fetchPosts(); // Refresh the posts list
    } catch (error) {
      console.error('Error creating sample posts:', error);
      setMessage(`❌ Error creating sample posts: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const fetchPosts = async () => {
    try {
      const postsCol = collection(db, 'blogPosts');
      const snapshot = await getDocs(postsCol);
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData);
      console.log('Fetched posts:', postsData.length);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const getStatusIcon = () => {
    switch (status) {
      case 'testing':
        return <Database className="h-6 w-6 animate-pulse text-blue-500" />;
      case 'success':
        return <Check className="h-6 w-6 text-green-500" />;
      case 'error':
        return <X className="h-6 w-6 text-red-500" />;
      default:
        return <Database className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Firebase Database Test</h1>
          <p className="text-gray-600">Test your Firebase connection and create sample data.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Connection Test */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {getStatusIcon()}
                Connection Test
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={testFirebaseConnection} 
                disabled={status === 'testing'}
                className="w-full"
              >
                {status === 'testing' ? 'Testing...' : 'Test Firebase Connection'}
              </Button>
              
              {message && (
                <div className={`p-3 rounded-lg text-sm ${
                  status === 'success' ? 'bg-green-50 text-green-800' :
                  status === 'error' ? 'bg-red-50 text-red-800' :
                  'bg-blue-50 text-blue-800'
                }`}>
                  {message}
                </div>
              )}

              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Project ID:</strong> brilliongroup-ca</p>
                <p><strong>Database:</strong> Cloud Firestore</p>
                <p><strong>Region:</strong> Multi-region</p>
              </div>
            </CardContent>
          </Card>

          {/* Sample Data Creation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Sample Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">Create sample blog posts in Firebase to test the database functionality.</p>
              
              <Button 
                onClick={createSamplePosts} 
                disabled={loading}
                variant="outline" 
                className="w-full"
              >
                {loading ? 'Creating...' : 'Create Sample Posts'}
              </Button>

              <div className="text-sm text-gray-500">
                <p><strong>Posts in database:</strong> {posts.length}</p>
                {posts.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {posts.slice(0, 3).map((post, index) => (
                      <p key={index} className="truncate">• {post.title}</p>
                    ))}
                    {posts.length > 3 && <p>• ... and {posts.length - 3} more</p>}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Firebase Console Links */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Firebase Console Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <a 
                href="https://console.firebase.google.com/project/brilliongroup-ca/firestore"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              >
                <strong className="text-blue-800">Firestore Database</strong>
                <p className="text-sm text-blue-600">View and manage your Firestore collections</p>
              </a>
              
              <a 
                href="https://console.firebase.google.com/project/brilliongroup-ca/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <strong className="text-gray-800">Project Overview</strong>
                <p className="text-sm text-gray-600">General project settings and analytics</p>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Recent Posts Display */}
        {posts.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recent Posts from Firebase</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {posts.map((post) => (
                  <div key={post.id} className="p-3 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900">{post.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{post.excerpt}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span>By {post.author}</span>
                      <span>{post.tags?.join(', ')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}