"use client"

import { useState, useEffect } from "react"
import { webinarsService, initializeWebinars } from "@/lib/firebase-services"
import { Button } from "@/components/ui/button"

export default function TestWebinars() {
  const [webinars, setWebinars] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [logs, setLogs] = useState([])

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    setLogs(prev => [...prev, `[${timestamp}] ${message}`])
    console.log(`[${timestamp}] ${message}`)
  }

  const testFetchWebinars = async () => {
    try {
      setLoading(true)
      setError(null)
      addLog("🔍 Attempting to fetch webinars...")
      
      const webinarsList = await webinarsService.getAll()
      addLog(`✅ Successfully fetched ${webinarsList.length} webinars`)
      setWebinars(webinarsList)
      
      if (webinarsList.length === 0) {
        addLog("⚠️ No webinars found in database")
      }
    } catch (err) {
      addLog(`❌ Error fetching webinars: ${err.message}`)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const testInitializeWebinars = async () => {
    try {
      setLoading(true)
      setError(null)
      addLog("🚀 Initializing sample webinars...")
      
      await initializeWebinars()
      addLog("✅ Sample webinars initialized successfully")
      
      // Fetch again to see the results
      await testFetchWebinars()
    } catch (err) {
      addLog(`❌ Error initializing webinars: ${err.message}`)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const testAddSingleWebinar = async () => {
    try {
      setLoading(true)
      setError(null)
      addLog("➕ Adding a single test webinar...")
      
      const testWebinar = {
        title: "Test Webinar - Firebase Connection",
        description: "This is a test webinar to verify Firebase connectivity.",
        category: "Digital Transformation",
        duration: "30 min",
        views: "100",
        date: "Dec 26, 2024",
        youtubeId: "dQw4w9WgXcQ",
        speaker: "Test Speaker",
        topics: ["Testing", "Firebase", "Connectivity"],
        thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
        status: "completed" as const,
        featured: false
      }
      
      const id = await webinarsService.create(testWebinar)
      addLog(`✅ Test webinar created with ID: ${id}`)
      
      // Fetch again to see the results
      await testFetchWebinars()
    } catch (err) {
      addLog(`❌ Error adding test webinar: ${err.message}`)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    addLog("🎬 Test page loaded")
    testFetchWebinars()
  }, [])

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Webinars Firebase Test</h1>
        
        <div className="grid gap-4 mb-8">
          <Button 
            onClick={testFetchWebinars} 
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {loading ? "Loading..." : "Test Fetch Webinars"}
          </Button>
          
          <Button 
            onClick={testInitializeWebinars} 
            disabled={loading}
            className="bg-green-600 hover:bg-green-700"
          >
            {loading ? "Loading..." : "Initialize Sample Webinars"}
          </Button>
          
          <Button 
            onClick={testAddSingleWebinar} 
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700"
          >
            {loading ? "Loading..." : "Add Single Test Webinar"}
          </Button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <strong>Error:</strong> {error}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Logs */}
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Debug Logs</h2>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm max-h-64 overflow-y-auto">
              {logs.map((log, index) => (
                <div key={index}>{log}</div>
              ))}
            </div>
          </div>

          {/* Webinars List */}
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Fetched Webinars ({webinars.length})</h2>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {webinars.map((webinar, index) => (
                <div key={webinar.id || index} className="border-l-4 border-blue-500 pl-3 py-2">
                  <div className="font-medium">{webinar.title}</div>
                  <div className="text-sm text-gray-600">
                    {webinar.category} • {webinar.speaker} • {webinar.status}
                  </div>
                </div>
              ))}
              {webinars.length === 0 && (
                <div className="text-gray-500 italic">No webinars found</div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
          <h3 className="font-semibold text-yellow-800">Instructions:</h3>
          <ul className="list-disc list-inside text-yellow-700 mt-2 space-y-1">
            <li>First click "Test Fetch Webinars" to see current database state</li>
            <li>If no webinars found, click "Initialize Sample Webinars"</li>
            <li>You can also add a single test webinar to verify connectivity</li>
            <li>Check the debug logs for detailed information</li>
            <li>Once working, go back to /webinars to see the results</li>
          </ul>
        </div>
      </div>
    </div>
  )
}