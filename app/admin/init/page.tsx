"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { initializeDatabase } from "@/lib/init-database";

export default function AdminInitPage() {
  const [isInitializing, setIsInitializing] = useState(false);
  const [message, setMessage] = useState("");

  const handleInitialize = async () => {
    setIsInitializing(true);
    setMessage("");
    
    try {
      await initializeDatabase();
      setMessage("✅ Database initialized successfully!");
    } catch (error) {
      console.error('Initialization error:', error);
      setMessage("❌ Error initializing database. Check console for details.");
    } finally {
      setIsInitializing(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-md mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold">Database Initialization</h1>
        <p className="text-gray-600">
          Initialize the database with default service data.
        </p>
        
        <Button 
          onClick={handleInitialize}
          disabled={isInitializing}
          className="w-full"
        >
          {isInitializing ? "Initializing..." : "Initialize Database"}
        </Button>
        
        {message && (
          <div className={`p-4 rounded-lg ${
            message.includes("✅") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}>
            {message}
          </div>
        )}
        
        <div className="text-left text-sm text-gray-600 space-y-2">
          <p><strong>This will initialize:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Basic services data</li>
            <li>Detailed service pages data</li>
            <li>Cyber Security & Privacy service</li>
            <li>Application Development service</li>
          </ul>
          <p className="text-orange-600 font-medium">
            Note: Only runs if collections are empty
          </p>
        </div>
      </div>
    </div>
  );
}