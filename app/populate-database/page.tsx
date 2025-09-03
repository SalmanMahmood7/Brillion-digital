"use client";

import { useState } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Trash2, Plus, RefreshCw, CheckCircle, AlertTriangle } from "lucide-react";

export default function PopulateDatabasePage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [collections, setCollections] = useState<{[key: string]: number}>({});

  // Sample services data
  const servicesData = [
    {
      title: "Digital Advisory",
      description: "Understand, anticipate, and accelerate with confidence.",
      icon: "Brain",
      href: "/services/digital-advisory",
      order: 1,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    },
    {
      title: "Applied Data & Analytics",
      description: "Transform raw data into actionable insights that drive business growth.",
      icon: "BarChart3",
      href: "/services/applied-data-analytics",
      order: 2,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    },
    {
      title: "Application Development",
      description: "Custom applications built with modern technologies to solve unique challenges.",
      icon: "Code",
      href: "/services/application-development",
      order: 3,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    },
    {
      title: "Digital Platforms",
      description: "Boost growth and productivity using ERP, CRM, and CMS platforms.",
      icon: "Globe",
      href: "/services/digital-platforms",
      order: 4,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    },
    {
      title: "Cyber Security & Privacy",
      description: "Minimize threats and proactively protect your most valuable assets.",
      icon: "Shield",
      href: "/services/cyber-security",
      order: 5,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    },
    {
      title: "Cloud Services",
      description: "Cloud migration and optimization services to accelerate transformation.",
      icon: "Cloud",
      href: "/services/cloud-services",
      order: 6,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    },
    {
      title: "Managed IT Services",
      description: "Reliable IT infrastructure management to keep your business running smoothly.",
      icon: "Settings",
      href: "/services/managed-it-services",
      order: 7,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    }
  ];

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
    }
  ];

  const checkCollectionCounts = async () => {
    setLoading(true);
    try {
      const counts: {[key: string]: number} = {};
      
      const collectionsToCheck = ['services', 'blogPosts', 'dashboard', 'activities', 'pageStats', 'test'];
      
      for (const collectionName of collectionsToCheck) {
        try {
          const snapshot = await getDocs(collection(db, collectionName));
          counts[collectionName] = snapshot.size;
        } catch (error) {
          console.error(`Error checking ${collectionName}:`, error);
          counts[collectionName] = 0;
        }
      }
      
      setCollections(counts);
      setMessage(`✅ Database checked successfully. Total collections: ${Object.keys(counts).length}`);
      setStatus('success');
    } catch (error) {
      console.error('Error checking database:', error);
      setMessage(`❌ Error checking database: ${error}`);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const populateServices = async () => {
    setLoading(true);
    try {
      console.log('Starting to populate services...');
      setMessage("🚀 Populating services...");
      
      // Clear existing services first
      const existingServices = await getDocs(collection(db, 'services'));
      console.log(`Found ${existingServices.size} existing services`);
      
      for (const serviceDoc of existingServices.docs) {
        await deleteDoc(serviceDoc.ref);
        console.log(`Deleted service: ${serviceDoc.id}`);
      }
      
      // Add new services
      let addedCount = 0;
      for (const service of servicesData) {
        console.log(`Adding service: ${service.title}`);
        const docRef = await addDoc(collection(db, 'services'), service);
        console.log(`Added service with ID: ${docRef.id}`);
        addedCount++;
      }
      
      setMessage(`✅ Successfully added ${addedCount} services to Firebase!`);
      setStatus('success');
      
      // Refresh collection counts
      setTimeout(checkCollectionCounts, 1000);
      
    } catch (error) {
      console.error('Error populating services:', error);
      setMessage(`❌ Error populating services: ${error}`);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const populateBlogPosts = async () => {
    setLoading(true);
    try {
      console.log('Starting to populate blog posts...');
      setMessage("📝 Populating blog posts...");
      
      let addedCount = 0;
      for (const post of samplePosts) {
        console.log(`Adding post: ${post.title}`);
        const docRef = await addDoc(collection(db, 'blogPosts'), post);
        console.log(`Added post with ID: ${docRef.id}`);
        addedCount++;
      }
      
      setMessage(`✅ Successfully added ${addedCount} blog posts to Firebase!`);
      setStatus('success');
      
      // Refresh collection counts
      setTimeout(checkCollectionCounts, 1000);
      
    } catch (error) {
      console.error('Error populating blog posts:', error);
      setMessage(`❌ Error populating blog posts: ${error}`);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const testFirebaseConnection = async () => {
    setLoading(true);
    try {
      setMessage("🔍 Testing Firebase connection...");
      
      // Try to write a test document
      const testData = {
        message: 'Connection test',
        timestamp: Timestamp.now(),
        testId: Math.random().toString(36).substring(7)
      };
      
      const docRef = await addDoc(collection(db, 'test'), testData);
      console.log('Test document written with ID:', docRef.id);
      
      // Try to read it back
      const testSnapshot = await getDocs(collection(db, 'test'));
      console.log('Test collection size:', testSnapshot.size);
      
      setMessage(`✅ Firebase connection successful! Test document ID: ${docRef.id}`);
      setStatus('success');
      
      // Refresh collection counts
      setTimeout(checkCollectionCounts, 1000);
      
    } catch (error) {
      console.error('Firebase connection test failed:', error);
      setMessage(`❌ Firebase connection failed: ${error}`);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const clearAllData = async () => {
    if (!confirm('Are you sure you want to clear ALL database data? This cannot be undone!')) {
      return;
    }

    setLoading(true);
    try {
      setMessage("🗑️ Clearing all database data...");
      
      const collectionsToClean = ['services', 'blogPosts', 'dashboard', 'activities', 'pageStats', 'test'];
      let totalDeleted = 0;
      
      for (const collectionName of collectionsToClean) {
        const snapshot = await getDocs(collection(db, collectionName));
        for (const docSnapshot of snapshot.docs) {
          await deleteDoc(docSnapshot.ref);
          totalDeleted++;
        }
        console.log(`Cleared ${snapshot.size} documents from ${collectionName}`);
      }
      
      setMessage(`✅ Cleared ${totalDeleted} documents from database`);
      setStatus('success');
      
      // Refresh collection counts
      setTimeout(checkCollectionCounts, 1000);
      
    } catch (error) {
      console.error('Error clearing database:', error);
      setMessage(`❌ Error clearing database: ${error}`);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Database Population Tool</h1>
          <p className="text-gray-600">Populate your Firebase database with initial data and test connectivity.</p>
        </div>

        {message && (
          <div className={`mb-6 p-4 rounded-lg border ${
            status === 'success' ? 'bg-green-50 border-green-200 text-green-800' :
            status === 'error' ? 'bg-red-50 border-red-200 text-red-800' :
            'bg-blue-50 border-blue-200 text-blue-800'
          }`}>
            <div className="flex items-center gap-2">
              {status === 'success' && <CheckCircle className="h-5 w-5" />}
              {status === 'error' && <AlertTriangle className="h-5 w-5" />}
              <p>{message}</p>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Database Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Database Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button 
                  onClick={checkCollectionCounts}
                  disabled={loading}
                  className="w-full"
                  variant="outline"
                >
                  <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                  Check Database Status
                </Button>

                <div className="space-y-2">
                  {Object.entries(collections).map(([collection, count]) => (
                    <div key={collection} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="font-medium capitalize">{collection}</span>
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {count} documents
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Connection Test */}
          <Card>
            <CardHeader>
              <CardTitle>Connection Test</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button 
                  onClick={testFirebaseConnection}
                  disabled={loading}
                  className="w-full"
                >
                  <Database className="h-4 w-4 mr-2" />
                  Test Firebase Connection
                </Button>

                <div className="text-sm text-gray-600">
                  <p><strong>Project:</strong> brilliongroup-ca</p>
                  <p><strong>Database:</strong> Cloud Firestore</p>
                  <p><strong>Region:</strong> Multi-region</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Population Actions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Populate Database</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button 
                onClick={populateServices}
                disabled={loading}
                className="flex items-center justify-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Populate Services ({servicesData.length})
              </Button>

              <Button 
                onClick={populateBlogPosts}
                disabled={loading}
                variant="outline"
                className="flex items-center justify-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Populate Blog Posts ({samplePosts.length})
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="text-red-800">Danger Zone</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={clearAllData}
              disabled={loading}
              variant="outline"
              className="text-red-600 border-red-300 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear All Database Data
            </Button>
            <p className="text-sm text-red-600 mt-2">
              ⚠️ This will permanently delete all data from all collections
            </p>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <a 
            href="https://console.firebase.google.com/project/brilliongroup-ca/firestore"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-center"
          >
            <strong className="text-blue-800">Firebase Console</strong>
            <p className="text-sm text-blue-600 mt-1">View database in Firebase Console</p>
          </a>
          
          <a 
            href="/services"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-center"
          >
            <strong className="text-green-800">Services Page</strong>
            <p className="text-sm text-green-600 mt-1">View populated services on website</p>
          </a>
        </div>
      </div>
    </div>
  );
}