"use client";

import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, Timestamp, doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FirebaseDebugPage() {
  const [logs, setLogs] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    setLogs(prev => [...prev, logMessage]);
  };

  const testBasicConnection = async () => {
    setLoading(true);
    setLogs([]);
    
    try {
      addLog("🚀 Starting Firebase connection test...");
      addLog(`Database object: ${db ? 'Available' : 'Not available'}`);
      addLog(`Firebase app: ${db.app.name}`);
      addLog(`Project ID: ${db.app.options.projectId}`);
      
      // Test 1: Try to read from a collection (this should work even if empty)
      addLog("📖 Testing read operation...");
      try {
        const testRead = await getDocs(collection(db, 'test'));
        addLog(`✅ Read test successful - found ${testRead.size} documents`);
      } catch (readError) {
        addLog(`❌ Read test failed: ${readError}`);
      }

      // Test 2: Try to write a document
      addLog("✍️ Testing write operation...");
      try {
        const testData = {
          message: "Firebase debug test",
          timestamp: Timestamp.now(),
          userAgent: navigator.userAgent,
          testNumber: Math.floor(Math.random() * 1000)
        };
        
        const docRef = await addDoc(collection(db, 'debugTest'), testData);
        addLog(`✅ Write test successful - document ID: ${docRef.id}`);
      } catch (writeError) {
        addLog(`❌ Write test failed: ${writeError}`);
        
        // Try alternative write method
        addLog("🔄 Trying alternative write method...");
        try {
          const altTestData = {
            message: "Alternative write test",
            timestamp: Timestamp.now()
          };
          
          await setDoc(doc(db, 'debugTest', 'test-doc'), altTestData);
          addLog(`✅ Alternative write successful`);
        } catch (altError) {
          addLog(`❌ Alternative write also failed: ${altError}`);
        }
      }

      // Test 3: Try to write to services collection specifically
      addLog("🔧 Testing services collection write...");
      try {
        const serviceData = {
          title: "Test Service",
          description: "This is a test service",
          icon: "Settings",
          href: "/test",
          order: 999,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now()
        };
        
        const serviceRef = await addDoc(collection(db, 'services'), serviceData);
        addLog(`✅ Services write successful - ID: ${serviceRef.id}`);
      } catch (serviceError) {
        addLog(`❌ Services write failed: ${serviceError}`);
      }

      addLog("🎉 Test completed!");
      
    } catch (error) {
      addLog(`💥 Critical error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const addSingleService = async () => {
    setLoading(true);
    setLogs([]);
    
    try {
      addLog("➕ Adding single service to database...");
      
      const serviceData = {
        title: "Digital Marketing",
        description: "Comprehensive digital marketing strategies to grow your online presence.",
        icon: "Zap",
        href: "/services/digital-marketing",
        order: 8,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };
      
      addLog(`Service data: ${JSON.stringify(serviceData, null, 2)}`);
      
      const docRef = await addDoc(collection(db, 'services'), serviceData);
      addLog(`✅ Service added successfully with ID: ${docRef.id}`);
      
      // Verify it was added
      addLog("🔍 Verifying service was added...");
      const servicesSnapshot = await getDocs(collection(db, 'services'));
      addLog(`Services collection now has ${servicesSnapshot.size} documents`);
      
      servicesSnapshot.docs.forEach(doc => {
        addLog(`- Service: ${doc.data().title} (ID: ${doc.id})`);
      });
      
    } catch (error) {
      addLog(`❌ Error adding service: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const checkServicesCollection = async () => {
    setLoading(true);
    setLogs([]);
    
    try {
      addLog("🔍 Checking services collection...");
      
      const servicesSnapshot = await getDocs(collection(db, 'services'));
      addLog(`Found ${servicesSnapshot.size} services in database`);
      
      if (servicesSnapshot.empty) {
        addLog("❌ Services collection is empty!");
      } else {
        servicesSnapshot.docs.forEach((doc, index) => {
          const data = doc.data();
          addLog(`${index + 1}. ${data.title} - ${data.description.substring(0, 50)}...`);
        });
      }
      
    } catch (error) {
      addLog(`❌ Error checking services: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const initializeAllServices = async () => {
    setLoading(true);
    setLogs([]);
    
    try {
      addLog("🚀 Initializing all services with new ones...");
      
      const defaultServices = [
        {
          title: "Digital Advisory",
          description: "Understand, anticipate, and accelerate with confidence.",
          icon: "Lightbulb",
          href: "/services/digital-advisory",
          order: 1
        },
        {
          title: "Data & Analytics", 
          description: "Transform raw data into actionable insights that drive business growth.",
          icon: "BarChart3",
          href: "/services/applied-data-analytics",
          order: 2
        },
        {
          title: "App Development",
          description: "Custom applications built with modern technologies to solve unique challenges.",
          icon: "Zap",
          href: "/services/application-development",
          order: 3
        },
        {
          title: "Digital Platforms",
          description: "Boost growth and productivity using ERP, CRM, and CMS platforms.",
          icon: "Rocket",
          href: "/services/digital-platforms",
          order: 4
        },
        {
          title: "Cyber Security",
          description: "Minimize threats and proactively protect your most valuable assets.",
          icon: "Shield",
          href: "/services/cyber-security",
          order: 5
        },
        {
          title: "Cloud Services",
          description: "Cloud migration and optimization services to accelerate transformation.",
          icon: "Cloud",
          href: "/services/cloud-services",
          order: 6
        },
        {
          title: "Managed IT",
          description: "Reliable IT infrastructure management to keep your business running smoothly.",
          icon: "Settings",
          href: "/services/managed-it-services",
          order: 7
        },
        {
          title: "Dynamics 365 and Microsoft Solutions",
          description: "Leverage Microsoft's ecosystem to streamline operations and boost productivity.",
          icon: "Globe",
          href: "/services/dynamics-365-microsoft",
          order: 8
        },
        {
          title: "Artificial Intelligence and Smart Solutions",
          description: "Harness AI to automate processes and unlock intelligent insights.",
          icon: "Brain",
          href: "/services/ai-smart-solutions",
          order: 9
        }
      ];

      addLog(`📝 Adding ${defaultServices.length} services to database...`);
      
      for (let i = 0; i < defaultServices.length; i++) {
        const service = defaultServices[i];
        const serviceData = {
          ...service,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now()
        };
        
        try {
          const docRef = await addDoc(collection(db, 'services'), serviceData);
          addLog(`✅ Added "${service.title}" with ID: ${docRef.id}`);
        } catch (error) {
          addLog(`❌ Failed to add "${service.title}": ${error}`);
        }
      }
      
      // Verify final count
      addLog("🔍 Verifying services were added...");
      const verifySnapshot = await getDocs(collection(db, 'services'));
      addLog(`📊 Services collection now has ${verifySnapshot.size} total documents`);
      
    } catch (error) {
      addLog(`❌ Error initializing services: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Firebase Debug Tool</h1>
          <p className="text-gray-600">Debug Firebase connectivity and database operations.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Button 
            onClick={testBasicConnection}
            disabled={loading}
            className="h-16"
          >
            🔍 Test Connection
          </Button>

          <Button 
            onClick={checkServicesCollection}
            disabled={loading}
            variant="outline"
            className="h-16"
          >
            📋 Check Services
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Button 
            onClick={addSingleService}
            disabled={loading}
            variant="outline"
            className="h-16"
          >
            ➕ Add Test Service
          </Button>

          <Button 
            onClick={initializeAllServices}
            disabled={loading}
            variant="destructive"
            className="h-16"
          >
            🚀 Initialize All Services
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Debug Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm max-h-96 overflow-y-auto">
              {logs.length === 0 ? (
                <div className="text-gray-500">No logs yet. Click a button above to start debugging.</div>
              ) : (
                logs.map((log, index) => (
                  <div key={index} className="mb-1">
                    {log}
                  </div>
                ))
              )}
              {loading && (
                <div className="text-yellow-400 animate-pulse">
                  Running test...
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <a 
            href="/services"
            className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-center"
          >
            <strong className="text-blue-800">Check Services Page</strong>
            <p className="text-sm text-blue-600 mt-1">See if services are showing up</p>
          </a>
          
          <a 
            href="https://console.firebase.google.com/project/brilliongroup-ca/firestore"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-center"
          >
            <strong className="text-green-800">Firebase Console</strong>
            <p className="text-sm text-green-600 mt-1">Check database directly</p>
          </a>
        </div>
      </div>
    </div>
  );
}