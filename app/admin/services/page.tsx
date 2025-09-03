"use client";

import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter 
} from "@/components/ui/dialog";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save,
  X,
  ArrowUp,
  ArrowDown,
  RefreshCw,
  Database,
  AlertTriangle,
  CheckCircle
} from "lucide-react";
import { servicesService, type Service } from "@/lib/firebase-services";
import { toast } from "sonner";

const iconOptions = [
  { value: "Brain", label: "Brain" },
  { value: "BarChart3", label: "Bar Chart" },
  { value: "Code", label: "Code" },
  { value: "Globe", label: "Globe" },
  { value: "Shield", label: "Shield" },
  { value: "Cloud", label: "Cloud" },
  { value: "Settings", label: "Settings" },
  { value: "Lightbulb", label: "Light Bulb" },
  { value: "Zap", label: "Lightning" },
  { value: "Rocket", label: "Rocket" },
  { value: "Lock", label: "Lock" },
];

export default function AdminServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'unknown' | 'connected' | 'error'>('unknown');
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    icon: "Brain",
    href: "",
    order: 0
  });

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      setLoading(true);
      console.log('🔄 Loading services from Firebase...');
      
      const firebaseServices = await servicesService.getAll();
      console.log('✅ Firebase services loaded:', firebaseServices);
      
      setServices(firebaseServices);
      setConnectionStatus('connected');
      
      if (firebaseServices.length === 0) {
        console.log('ℹ️ No services found in Firebase');
        toast.info("No services found. Click 'Initialize Default Services' to add some.");
      } else {
        console.log(`📊 Loaded ${firebaseServices.length} services from Firebase`);
      }
      
    } catch (error) {
      console.error('❌ Error loading services from Firebase:', error);
      setConnectionStatus('error');
      setServices([]);
      toast.error(`Failed to load services from Firebase: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const initializeDefaultServices = async () => {
    if (!confirm('This will add 7 default services to your Firebase database. Continue?')) return;
    
    setLoading(true);
    try {
      const defaultServices = [
        {
          title: "Digital Advisory",
          description: "Understand, anticipate, and accelerate with confidence.",
          icon: "Brain",
          href: "/services/digital-advisory",
          order: 1
        },
        {
          title: "Applied Data & Analytics",
          description: "Transform raw data into actionable insights that drive business growth.",
          icon: "BarChart3",
          href: "/services/applied-data-analytics",
          order: 2
        },
        {
          title: "Application Development",
          description: "Custom applications built with modern technologies to solve unique challenges.",
          icon: "Code",
          href: "/services/application-development",
          order: 3
        },
        {
          title: "Digital Platforms",
          description: "Boost growth and productivity using ERP, CRM, and CMS platforms.",
          icon: "Globe",
          href: "/services/digital-platforms",
          order: 4
        },
        {
          title: "Cyber Security & Privacy",
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
          title: "Managed IT Services",
          description: "Reliable IT infrastructure management to keep your business running smoothly.",
          icon: "Settings",
          href: "/services/managed-it-services",
          order: 7
        }
      ];

      let successCount = 0;
      for (const service of defaultServices) {
        try {
          const id = await servicesService.create(service);
          console.log(`✅ Created service: ${service.title} (ID: ${id})`);
          successCount++;
        } catch (error) {
          console.error(`❌ Failed to create ${service.title}:`, error);
        }
      }

      toast.success(`Successfully created ${successCount} services!`);
      await loadServices(); // Reload services
      
    } catch (error) {
      console.error('Error initializing services:', error);
      toast.error(`Failed to initialize services: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description,
      icon: service.icon,
      href: service.href,
      order: service.order || 0
    });
    setIsDialogOpen(true);
  };

  const handleAdd = () => {
    setEditingService(null);
    setFormData({
      title: "",
      description: "",
      icon: "Brain",
      href: "/services/",
      order: services.length + 1
    });
    setIsDialogOpen(true);
  };

  const handleSave = async () => {
    try {
      // Validate form data
      if (!formData.title || !formData.description || !formData.icon || !formData.href) {
        toast.error("Please fill in all required fields");
        return;
      }

      console.log('💾 Saving service to Firebase:', formData);
      
      if (editingService) {
        console.log('✏️ Updating existing service:', editingService.id);
        await servicesService.update(editingService.id!, formData);
        toast.success(`Service "${formData.title}" updated successfully!`);
      } else {
        console.log('➕ Creating new service');
        const newId = await servicesService.create(formData);
        console.log('✅ Service created with ID:', newId);
        toast.success(`Service "${formData.title}" created successfully!`);
      }
      
      setIsDialogOpen(false);
      await loadServices(); // Reload services to show changes
      
    } catch (error) {
      console.error('❌ Error saving service:', error);
      toast.error(`Failed to save service: ${error}`);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"? This cannot be undone.`)) return;
    
    try {
      console.log('🗑️ Deleting service:', id);
      await servicesService.delete(id);
      toast.success(`Service "${title}" deleted successfully!`);
      await loadServices(); // Reload services
      
    } catch (error) {
      console.error('❌ Error deleting service:', error);
      toast.error(`Failed to delete service: ${error}`);
    }
  };

  const handleReorder = async (service: Service, direction: 'up' | 'down') => {
    const currentIndex = services.findIndex(s => s.id === service.id);
    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    
    if (newIndex < 0 || newIndex >= services.length) return;
    
    const otherService = services[newIndex];
    
    try {
      // Swap order values
      await servicesService.update(service.id!, { order: otherService.order });
      await servicesService.update(otherService.id!, { order: service.order });
      toast.success("Service order updated");
      await loadServices();
    } catch (error) {
      console.error('Error reordering services:', error);
      toast.error("Failed to reorder services");
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">Services Management</h1>
            <p className="text-muted-foreground mt-1">Manage services stored in Firebase database</p>
            
            {/* Connection Status */}
            <div className="flex items-center gap-2 mt-2 text-sm">
              {connectionStatus === 'connected' && (
                <>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-green-600">Connected to Firebase</span>
                </>
              )}
              {connectionStatus === 'error' && (
                <>
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                  <span className="text-red-600">Firebase connection error</span>
                </>
              )}
              {connectionStatus === 'unknown' && (
                <>
                  <Database className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">Checking connection...</span>
                </>
              )}
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button onClick={loadServices} variant="outline" disabled={loading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            
            {services.length === 0 && !loading && (
              <Button onClick={initializeDefaultServices} variant="outline">
                <Database className="h-4 w-4 mr-2" />
                Initialize Default Services
              </Button>
            )}
            
            <Button onClick={handleAdd} disabled={connectionStatus === 'error'}>
              <Plus className="h-4 w-4 mr-2" />
              Add Service
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Services List ({services.length})</CardTitle>
            <CardDescription>
              {connectionStatus === 'connected' 
                ? "All services are synced with Firebase in real-time" 
                : "Connection to Firebase required to manage services"
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : connectionStatus === 'error' ? (
              <div className="text-center py-8">
                <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <p className="text-red-600 mb-2">Unable to connect to Firebase</p>
                <p className="text-sm text-gray-600 mb-4">Please check your internet connection and Firebase configuration</p>
                <Button onClick={loadServices} variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Retry Connection
                </Button>
              </div>
            ) : services.length === 0 ? (
              <div className="text-center py-8">
                <Database className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">No services found in Firebase database</p>
                <Button onClick={initializeDefaultServices}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Default Services
                </Button>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">Order</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Icon</TableHead>
                    <TableHead>URL</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {services.map((service, index) => (
                    <TableRow key={service.id}>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-6 w-6"
                            onClick={() => handleReorder(service, 'up')}
                            disabled={index === 0}
                          >
                            <ArrowUp className="h-3 w-3" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-6 w-6"
                            onClick={() => handleReorder(service, 'down')}
                            disabled={index === services.length - 1}
                          >
                            <ArrowDown className="h-3 w-3" />
                          </Button>
                          <span className="text-xs text-gray-500 ml-1">{service.order}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{service.title}</TableCell>
                      <TableCell className="max-w-xs truncate">{service.description}</TableCell>
                      <TableCell>{service.icon}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{service.href}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => handleEdit(service)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="outline"
                            className="text-red-500 hover:text-red-600"
                            onClick={() => handleDelete(service.id!, service.title)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        {/* Edit/Add Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="fixed top-[10%] left-[50%] translate-x-[-50%] translate-y-[0%] w-full max-w-sm mx-4 max-h-[80vh] overflow-hidden z-50 bg-background border rounded-lg shadow-lg">
            <div className="flex flex-col max-h-[80vh]">
              <DialogHeader className="flex-shrink-0 p-6 pb-2">
                <DialogTitle>{editingService ? 'Edit Service' : 'Add New Service'}</DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground mt-1">
                  {editingService ? 'Update the service details below' : 'Fill in the details for the new service'}
                </DialogDescription>
              </DialogHeader>
              
              <div className="flex-1 overflow-y-auto px-6 py-2 space-y-3 min-h-0">
                <div className="space-y-1">
                  <Label htmlFor="title" className="text-sm font-medium">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Service title"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="description" className="text-sm font-medium">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Service description"
                    rows={3}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="icon" className="text-sm font-medium">Icon</Label>
                  <select
                    id="icon"
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    className="w-full p-2 border border-input rounded-md"
                  >
                    {iconOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="href" className="text-sm font-medium">URL Path</Label>
                  <Input
                    id="href"
                    value={formData.href}
                    onChange={(e) => setFormData({ ...formData, href: e.target.value })}
                    placeholder="/services/example"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="order" className="text-sm font-medium">Display Order</Label>
                  <Input
                    id="order"
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                    placeholder="1"
                  />
                </div>
              </div>
              
              <div className="flex-shrink-0 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-6 pt-4 border-t bg-background">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="mt-2 sm:mt-0">
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
                <Button onClick={handleSave}>
                  <Save className="h-4 w-4 mr-2" />
                  {editingService ? 'Update' : 'Create'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}