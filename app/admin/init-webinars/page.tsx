"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/AdminLayout"
import { webinarsService, initializeWebinars } from "@/lib/firebase-services"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InitWebinars() {
  const [loading, setLoading] = useState(false)
  const [logs, setLogs] = useState<string[]>([])
  const [webinars, setWebinars] = useState([])

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    const logMessage = `[${timestamp}] ${message}`
    setLogs(prev => [...prev, logMessage])
    console.log(logMessage)
  }

  const handleInitialize = async () => {
    try {
      setLoading(true)
      addLog("🚀 Starting webinars initialization...")
      
      await initializeWebinars()
      addLog("✅ Webinars initialization completed")
      
      // Fetch to verify
      const allWebinars = await webinarsService.getAll()
      addLog(`📊 Total webinars in database: ${allWebinars.length}`)
      setWebinars(allWebinars)
      
    } catch (error) {
      addLog(`❌ Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleFetch = async () => {
    try {
      setLoading(true)
      addLog("🔍 Fetching current webinars...")
      
      const allWebinars = await webinarsService.getAll()
      addLog(`📊 Found ${allWebinars.length} webinars`)
      setWebinars(allWebinars)
      
    } catch (error) {
      addLog(`❌ Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleAddSample = async () => {
    try {
      setLoading(true)
      addLog("➕ Adding a sample webinar...")
      
      const sampleWebinar = {
        title: "Test Webinar - Database Connection",
        description: "This is a test webinar to verify the database connection is working properly.",
        category: "Digital Transformation",
        duration: "30 min",
        views: "100",
        date: "Dec 26, 2024",
        youtubeId: "dQw4w9WgXcQ",
        speaker: "System Test",
        topics: ["Testing", "Database", "Connectivity"],
        thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
        status: "completed" as const,
        featured: true
      }
      
      const id = await webinarsService.create(sampleWebinar)
      addLog(`✅ Sample webinar created with ID: ${id}`)
      
      // Refresh the list
      await handleFetch()
      
    } catch (error) {
      addLog(`❌ Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Initialize Webinars</h1>
          <p className="text-gray-600 mt-1">Set up the webinars database with sample data</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Database Actions</CardTitle>
              <CardDescription>Initialize or test the webinars database</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={handleFetch}
                disabled={loading}
                className="w-full"
                variant="outline"
              >
                {loading ? "Loading..." : "Check Current Webinars"}
              </Button>
              
              <Button 
                onClick={handleInitialize}
                disabled={loading}
                className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white"
              >
                {loading ? "Initializing..." : "Initialize Sample Webinars"}
              </Button>
              
              <Button 
                onClick={handleAddSample}
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                {loading ? "Adding..." : "Add Single Test Webinar"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Webinars ({webinars.length})</CardTitle>
              <CardDescription>Webinars currently in the database</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {webinars.map((webinar, index) => (
                  <div key={webinar.id || index} className="border-l-4 border-[#f97316] pl-3 py-2 bg-gray-50">
                    <div className="font-medium text-sm">{webinar.title}</div>
                    <div className="text-xs text-gray-600">
                      {webinar.category} • {webinar.speaker} • {webinar.status}
                    </div>
                  </div>
                ))}
                {webinars.length === 0 && (
                  <div className="text-gray-500 italic text-center py-8">
                    No webinars found in database
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Debug Logs</CardTitle>
            <CardDescription>Real-time initialization logs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm max-h-64 overflow-y-auto">
              {logs.map((log, index) => (
                <div key={index}>{log}</div>
              ))}
              {logs.length === 0 && (
                <div className="text-gray-500">Ready to initialize...</div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2">Instructions:</h3>
          <ol className="list-decimal list-inside text-blue-800 space-y-1">
            <li>First click "Check Current Webinars" to see if any exist</li>
            <li>If none exist, click "Initialize Sample Webinars" to add all sample data</li>
            <li>Or click "Add Single Test Webinar" to test database connectivity</li>
            <li>Once successful, go to <code>/webinars</code> to see the results</li>
            <li>You can also manage webinars from <code>/admin/webinars</code></li>
          </ol>
        </div>
      </div>
    </AdminLayout>
  )
}