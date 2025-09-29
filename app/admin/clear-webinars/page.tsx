"use client";

import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { webinarsService, initializeWebinars } from "@/lib/firebase-services";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ClearWebinars() {
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [webinars, setWebinars] = useState([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const logMessage = `[${timestamp}] ${message}`;
    setLogs(prev => [...prev, logMessage]);
    console.log(logMessage);
  };

  const handleFetch = async () => {
    try {
      setLoading(true);
      addLog("🔍 Fetching current webinars...");
      
      const allWebinars = await webinarsService.getAll();
      addLog(`📊 Found ${allWebinars.length} webinars`);
      setWebinars(allWebinars);
      
    } catch (error: any) {
      addLog(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleClearAll = async () => {
    try {
      setLoading(true);
      addLog("🗑️ Clearing all webinars...");
      
      const allWebinars = await webinarsService.getAll();
      addLog(`📊 Found ${allWebinars.length} webinars to delete`);
      
      for (const webinar of allWebinars) {
        if (webinar.id) {
          await webinarsService.delete(webinar.id);
          addLog(`🗑️ Deleted: ${webinar.title}`);
        }
      }
      
      addLog("✅ All webinars cleared!");
      setWebinars([]);
      
    } catch (error: any) {
      addLog(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleInitializeOnly6 = async () => {
    try {
      setLoading(true);
      addLog("🚀 Adding exactly 6 webinars...");
      
      await initializeWebinars();
      addLog("✅ 6 webinars added successfully");
      
      // Fetch to verify
      const allWebinars = await webinarsService.getAll();
      addLog(`📊 Total webinars now: ${allWebinars.length}`);
      setWebinars(allWebinars);
      
    } catch (error: any) {
      addLog(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleClearAndReset = async () => {
    try {
      setLoading(true);
      addLog("🔄 Clearing all and adding only 6...");
      
      // First clear all
      const allWebinars = await webinarsService.getAll();
      for (const webinar of allWebinars) {
        if (webinar.id) {
          await webinarsService.delete(webinar.id);
        }
      }
      addLog(`🗑️ Cleared ${allWebinars.length} existing webinars`);
      
      // Then add only 6
      await initializeWebinars();
      addLog("✅ Added exactly 6 new webinars");
      
      // Fetch to verify
      const newWebinars = await webinarsService.getAll();
      addLog(`📊 Final count: ${newWebinars.length} webinars`);
      setWebinars(newWebinars);
      
    } catch (error: any) {
      addLog(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clear & Reset Webinars</h1>
          <p className="text-gray-600 mt-1">Remove old data and ensure only 6 webinars exist</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Database Actions</CardTitle>
              <CardDescription>Manage webinars database</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={handleFetch}
                disabled={loading}
                variant="outline"
                className="w-full"
              >
                {loading ? "Loading..." : "Check Current Count"}
              </Button>
              
              <Button 
                onClick={handleClearAll}
                disabled={loading}
                variant="destructive"
                className="w-full"
              >
                {loading ? "Clearing..." : "🗑️ Clear All Webinars"}
              </Button>
              
              <Button 
                onClick={handleInitializeOnly6}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {loading ? "Adding..." : "➕ Add Only 6 Webinars"}
              </Button>
              
              <Button 
                onClick={handleClearAndReset}
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {loading ? "Processing..." : "🔄 Clear All & Add Only 6"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Webinars ({webinars.length})</CardTitle>
              <CardDescription>Webinars currently in database</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {webinars.map((webinar: any, index) => (
                  <div key={webinar.id || index} className="border-l-4 border-orange-500 pl-3 py-2 bg-gray-50">
                    <div className="font-medium text-sm">{webinar.title}</div>
                    <div className="text-xs text-gray-600">
                      {webinar.category} • {webinar.speaker} • {webinar.youtubeId}
                    </div>
                  </div>
                ))}
                {webinars.length === 0 && (
                  <div className="text-gray-500 italic text-center py-8">
                    No webinars in database
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Debug Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm max-h-64 overflow-y-auto">
              {logs.map((log, index) => (
                <div key={index}>{log}</div>
              ))}
              {logs.length === 0 && (
                <div className="text-gray-500">Ready to clear and reset...</div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <h3 className="font-semibold text-orange-900 mb-2">🎯 Goal: Exactly 6 Webinars</h3>
          <ol className="list-decimal list-inside text-orange-800 space-y-1">
            <li>Click "Check Current Count" to see how many exist</li>
            <li>Click "🔄 Clear All & Add Only 6" to reset everything</li>
            <li>Verify you see exactly 6 webinars in the list</li>
            <li>Go to <code>/webinars</code> to confirm</li>
          </ol>
        </div>
      </div>
    </AdminLayout>
  );
}