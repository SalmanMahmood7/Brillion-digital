"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { servicesService } from "@/lib/firebase-services";
import { toast } from "sonner";

export default function TestFirebase() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>("");

  const testCreate = async () => {
    setLoading(true);
    try {
      const testService = {
        title: "Test Service",
        description: "This is a test service",
        icon: "Brain",
        href: "/test",
        order: 999
      };
      
      console.log("Attempting to create service:", testService);
      const id = await servicesService.create(testService);
      console.log("Service created with ID:", id);
      setResult(`Success! Created service with ID: ${id}`);
      toast.success("Service created successfully!");
    } catch (error) {
      console.error("Firebase test error:", error);
      setResult(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      toast.error("Failed to create service");
    } finally {
      setLoading(false);
    }
  };

  const testRead = async () => {
    setLoading(true);
    try {
      console.log("Attempting to read services...");
      const services = await servicesService.getAll();
      console.log("Services loaded:", services);
      setResult(`Success! Found ${services.length} services: ${services.map(s => s.title).join(', ')}`);
      toast.success("Services loaded successfully!");
    } catch (error) {
      console.error("Firebase test error:", error);
      setResult(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      toast.error("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Firebase Test Page</h1>
      
      <div className="space-y-4">
        <Button 
          onClick={testRead} 
          disabled={loading}
          className="mr-4"
        >
          {loading ? "Testing..." : "Test Read Services"}
        </Button>
        
        <Button 
          onClick={testCreate} 
          disabled={loading}
          variant="outline"
        >
          {loading ? "Testing..." : "Test Create Service"}
        </Button>
        
        {result && (
          <div className="mt-4 p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Result:</h3>
            <pre className="whitespace-pre-wrap text-sm">{result}</pre>
          </div>
        )}
      </div>
    </div>
  );
}