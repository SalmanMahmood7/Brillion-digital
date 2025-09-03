"use client";

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { servicesService } from "@/lib/firebase-services";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Database, 
  RefreshCw, 
  FileText, 
  Settings, 
  BarChart, 
  Activity,
  Globe,
  ExternalLink,
  CheckCircle,
  XCircle,
  Loader2
} from "lucide-react";

interface DatabaseStats {
  collection: string;
  count: number;
  icon: any;
  description: string;
  adminUrl?: string;
}

export default function DatabaseOverviewPage() {
  const [stats, setStats] = useState<DatabaseStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'error'>('connecting');
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    loadDatabaseStats();
  }, []);

  const loadDatabaseStats = async () => {
    setLoading(true);
    setConnectionStatus('connecting');
    
    try {
      const collections = [
        { name: 'services', icon: Settings, description: 'Website services', adminUrl: '/admin/services' },
        { name: 'blogPosts', icon: FileText, description: 'Blog articles', adminUrl: '/admin/add-post' },
        { name: 'dashboard', icon: BarChart, description: 'Dashboard statistics' },
        { name: 'activities', icon: Activity, description: 'User activities' },
        { name: 'pageStats', icon: Globe, description: 'Page view statistics' },
        { name: 'test', icon: Database, description: 'Test documents' },
      ];

      const statsData: DatabaseStats[] = [];

      for (const col of collections) {
        try {
          const snapshot = await getDocs(collection(db, col.name));
          statsData.push({
            collection: col.name,
            count: snapshot.size,
            icon: col.icon,
            description: col.description,
            adminUrl: col.adminUrl
          });
        } catch (error) {
          console.error(`Error fetching ${col.name}:`, error);
          statsData.push({
            collection: col.name,
            count: 0,
            icon: col.icon,
            description: col.description + ' (Error)',
            adminUrl: col.adminUrl
          });
        }
      }

      setStats(statsData);
      setConnectionStatus('connected');
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error loading database stats:', error);
      setConnectionStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const runInitScript = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/init-db', { method: 'POST' });
      if (response.ok) {
        setTimeout(() => {
          loadDatabaseStats();
        }, 2000);
      } else {
        console.error('Failed to run init script');
      }
    } catch (error) {
      console.error('Error running init script:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalDocuments = stats.reduce((sum, stat) => sum + stat.count, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Database Overview</h1>
              <p className="text-gray-600">Real-time Firebase Firestore database statistics and management</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {connectionStatus === 'connecting' && <Loader2 className="h-4 w-4 animate-spin text-blue-500" />}
                {connectionStatus === 'connected' && <CheckCircle className="h-4 w-4 text-green-500" />}
                {connectionStatus === 'error' && <XCircle className="h-4 w-4 text-red-500" />}
                <span className="text-sm font-medium capitalize text-gray-700">{connectionStatus}</span>
              </div>
              
              <Button onClick={loadDatabaseStats} disabled={loading} variant="outline">
                <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
          </div>
          
          {lastUpdated && (
            <p className="text-xs text-gray-500 mt-2">
              Last updated: {lastUpdated.toLocaleString()}
            </p>
          )}
        </div>

        {/* Connection Status Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Firebase Connection Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{totalDocuments}</div>
                <div className="text-sm text-gray-600">Total Documents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{stats.length}</div>
                <div className="text-sm text-gray-600">Collections</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">brilliongroup-ca</div>
                <div className="text-sm text-gray-600">Project ID</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card key={stat.collection} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="capitalize">{stat.collection}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.count}</div>
                      <div className="text-sm text-gray-600">{stat.description}</div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="flex-1"
                      >
                        <a 
                          href={`https://console.firebase.google.com/project/brilliongroup-ca/firestore/data/~2F${stat.collection}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Console
                        </a>
                      </Button>
                      
                      {stat.adminUrl && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild
                          className="flex-1"
                        >
                          <a href={stat.adminUrl}>
                            <Settings className="h-3 w-3 mr-1" />
                            Manage
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Database Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" asChild>
                  <a href="/admin/services">
                    <Settings className="h-4 w-4 mr-2" />
                    Manage Services
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/admin/add-post">
                    <FileText className="h-4 w-4 mr-2" />
                    Manage Posts
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/test-firebase">
                    <Database className="h-4 w-4 mr-2" />
                    Test Firebase
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/services">
                    <Globe className="h-4 w-4 mr-2" />
                    View Services
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Firebase Console Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a 
                href="https://console.firebase.google.com/project/brilliongroup-ca/firestore"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              >
                <div className="font-medium text-blue-800">Firestore Database</div>
                <div className="text-sm text-blue-600">View all collections and documents</div>
              </a>
              
              <a 
                href="https://console.firebase.google.com/project/brilliongroup-ca/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <div className="font-medium text-gray-800">Project Overview</div>
                <div className="text-sm text-gray-600">Project settings and analytics</div>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Database Schema Information */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Database Schema</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Collections Structure:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li><code>services</code> - Main website services with title, description, icon, href, order</li>
                  <li><code>blogPosts</code> - Blog articles with content, metadata, and timestamps</li>
                  <li><code>dashboard</code> - Analytics data for admin dashboard</li>
                  <li><code>activities</code> - User activity tracking</li>
                  <li><code>pageStats</code> - Page view statistics and analytics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Flow:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>Services page → Firebase services collection</li>
                  <li>Admin panels → Real-time database updates</li>
                  <li>Blog posts → Content management system</li>
                  <li>Analytics → Dashboard statistics tracking</li>
                  <li>All data synced in real-time with Firebase</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}