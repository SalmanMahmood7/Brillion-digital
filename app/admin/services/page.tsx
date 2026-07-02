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
  const [activeTab, setActiveTab] = useState<'basic' | 'content' | 'advanced'>('basic');
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    icon: "Brain",
    href: "",
    order: 0,
    slug: "",
    heroTitle: "",
    heroDescription: "",
    backgroundImage: "",
    ctaTitle: "",
    ctaDescription: "",
    ctaBackgroundImage: "",
    features: [] as string[],
    benefits: [] as string[],
    keyPoints: [] as string[],
    approach: {
      title: "",
      points: [] as string[]
    },
    servicesData: [] as {
      id: string;
      title: string;
      description: string;
      image: string;
      features: string[];
    }[],
    color: "",
    category: ""
  });

  // Helper functions for managing arrays
  const addArrayItem = (arrayName: keyof typeof formData, item: any) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: [...(prev[arrayName] as any[]), item]
    }));
  };

  const removeArrayItem = (arrayName: keyof typeof formData, index: number) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: (prev[arrayName] as any[]).filter((_, i) => i !== index)
    }));
  };

  const updateArrayItem = (arrayName: keyof typeof formData, index: number, value: any) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: (prev[arrayName] as any[]).map((item, i) => i === index ? value : item)
    }));
  };

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
      order: service.order || 0,
      slug: service.slug || "",
      heroTitle: service.heroTitle || "",
      heroDescription: service.heroDescription || "",
      backgroundImage: service.backgroundImage || "",
      ctaTitle: service.ctaTitle || "",
      ctaDescription: service.ctaDescription || "",
      ctaBackgroundImage: service.ctaBackgroundImage || "",
      features: service.features || [],
      benefits: service.benefits || [],
      keyPoints: service.keyPoints || [],
      approach: service.approach || { title: "", points: [] },
      servicesData: service.servicesData || [],
      color: service.color || "",
      category: service.category || ""
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
      order: services.length + 1,
      slug: "",
      heroTitle: "",
      heroDescription: "",
      backgroundImage: "",
      ctaTitle: "",
      ctaDescription: "",
      ctaBackgroundImage: "",
      features: [],
      benefits: [],
      keyPoints: [],
      approach: { title: "", points: [] },
      servicesData: [],
      color: "",
      category: ""
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
              <div className="flex flex-col items-center justify-center py-12">
                <div className="relative w-12 h-12 mb-4">
                  {/* Outer rotating ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-orange-500 border-r-orange-500 animate-spin" style={{animationDuration: '1.5s'}}></div>
                  {/* Middle rotating ring (opposite direction) */}
                  <div className="absolute inset-1 rounded-full border border-transparent border-b-blue-500 border-l-blue-500 animate-spin" style={{animationDuration: '1s', animationDirection: 'reverse'}}></div>
                  {/* Inner pulsing core */}
                  <div className="absolute inset-3 rounded-full bg-gradient-to-br from-orange-500 to-blue-500 animate-pulse opacity-80" style={{animationDuration: '2s'}}></div>
                  {/* Center dot */}
                  <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
                </div>
                <p className="text-sm text-gray-600 animate-pulse">Loading services...</p>
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

        {/* Enhanced Edit/Add Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="fixed top-[5%] left-[50%] translate-x-[-50%] translate-y-[0%] w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden z-50 bg-background border rounded-lg shadow-lg">
            <div className="flex flex-col max-h-[90vh]">
              <DialogHeader className="flex-shrink-0 p-6 pb-4">
                <DialogTitle>{editingService ? 'Edit Service' : 'Add New Service'}</DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground mt-1">
                  {editingService ? 'Update the service details below' : 'Fill in the details for the new service'}
                </DialogDescription>
                
                {/* Tab Navigation */}
                <div className="flex space-x-1 mt-4 bg-muted p-1 rounded-lg">
                  <button
                    onClick={() => setActiveTab('basic')}
                    className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === 'basic' 
                        ? 'bg-background text-foreground shadow-sm' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Basic Info
                  </button>
                  <button
                    onClick={() => setActiveTab('content')}
                    className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === 'content' 
                        ? 'bg-background text-foreground shadow-sm' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Rich Content
                  </button>
                  <button
                    onClick={() => setActiveTab('advanced')}
                    className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === 'advanced' 
                        ? 'bg-background text-foreground shadow-sm' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Advanced
                  </button>
                </div>
              </DialogHeader>
              
              <div className="flex-1 overflow-y-auto px-6 py-2 space-y-4 min-h-0">
                
                {/* Basic Info Tab */}
                {activeTab === 'basic' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-sm font-medium">Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Service title"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="slug" className="text-sm font-medium">Slug</Label>
                      <Input
                        id="slug"
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                        placeholder="service-slug"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="description" className="text-sm font-medium">Description *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Service description"
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="icon" className="text-sm font-medium">Icon *</Label>
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
                    <div className="space-y-2">
                      <Label htmlFor="href" className="text-sm font-medium">URL Path *</Label>
                      <Input
                        id="href"
                        value={formData.href}
                        onChange={(e) => setFormData({ ...formData, href: e.target.value })}
                        placeholder="/services/example"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="order" className="text-sm font-medium">Display Order</Label>
                      <Input
                        id="order"
                        type="number"
                        value={formData.order}
                        onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                        placeholder="1"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="color" className="text-sm font-medium">Color Theme</Label>
                      <Input
                        id="color"
                        value={formData.color}
                        onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                        placeholder="blue, red, green, etc."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category" className="text-sm font-medium">Category</Label>
                      <Input
                        id="category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        placeholder="Technology, Consulting, etc."
                      />
                    </div>
                  </div>
                )}
                
                {/* Rich Content Tab */}
                {activeTab === 'content' && (
                  <div className="space-y-6">
                    {/* Hero Section */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Hero Section</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="heroTitle" className="text-sm font-medium">Hero Title</Label>
                          <Input
                            id="heroTitle"
                            value={formData.heroTitle}
                            onChange={(e) => setFormData({ ...formData, heroTitle: e.target.value })}
                            placeholder="Hero title for service page"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="backgroundImage" className="text-sm font-medium">Background Image</Label>
                          <Input
                            id="backgroundImage"
                            value={formData.backgroundImage}
                            onChange={(e) => setFormData({ ...formData, backgroundImage: e.target.value })}
                            placeholder="/hero-bg.jpg"
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="heroDescription" className="text-sm font-medium">Hero Description</Label>
                          <Textarea
                            id="heroDescription"
                            value={formData.heroDescription}
                            onChange={(e) => setFormData({ ...formData, heroDescription: e.target.value })}
                            placeholder="Detailed description for hero section"
                            rows={2}
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA Section */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Call to Action</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="ctaTitle" className="text-sm font-medium">CTA Title</Label>
                          <Input
                            id="ctaTitle"
                            value={formData.ctaTitle}
                            onChange={(e) => setFormData({ ...formData, ctaTitle: e.target.value })}
                            placeholder="Ready to get started?"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ctaBackgroundImage" className="text-sm font-medium">CTA Background</Label>
                          <Input
                            id="ctaBackgroundImage"
                            value={formData.ctaBackgroundImage}
                            onChange={(e) => setFormData({ ...formData, ctaBackgroundImage: e.target.value })}
                            placeholder="/cta-bg.jpg"
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="ctaDescription" className="text-sm font-medium">CTA Description</Label>
                          <Textarea
                            id="ctaDescription"
                            value={formData.ctaDescription}
                            onChange={(e) => setFormData({ ...formData, ctaDescription: e.target.value })}
                            placeholder="Description for call to action"
                            rows={2}
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Features Array */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">Features</h3>
                        <Button 
                          type="button" 
                          size="sm" 
                          onClick={() => addArrayItem('features', '')}
                          className="h-8"
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Add Feature
                        </Button>
                      </div>
                      {formData.features.map((feature, index) => (
                        <div key={index} className="flex gap-2">
                          <Input
                            value={feature}
                            onChange={(e) => updateArrayItem('features', index, e.target.value)}
                            placeholder="Feature description"
                          />
                          <Button
                            type="button"
                            size="sm"
                            variant="outline"
                            onClick={() => removeArrayItem('features', index)}
                            className="h-10 px-3"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                    
                    {/* Benefits Array */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">Benefits</h3>
                        <Button 
                          type="button" 
                          size="sm" 
                          onClick={() => addArrayItem('benefits', '')}
                          className="h-8"
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Add Benefit
                        </Button>
                      </div>
                      {formData.benefits.map((benefit, index) => (
                        <div key={index} className="flex gap-2">
                          <Input
                            value={benefit}
                            onChange={(e) => updateArrayItem('benefits', index, e.target.value)}
                            placeholder="Benefit description"
                          />
                          <Button
                            type="button"
                            size="sm"
                            variant="outline"
                            onClick={() => removeArrayItem('benefits', index)}
                            className="h-10 px-3"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Advanced Tab */}
                {activeTab === 'advanced' && (
                  <div className="space-y-6">
                    {/* Approach Section */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Approach</h3>
                      <div className="space-y-2">
                        <Label htmlFor="approachTitle" className="text-sm font-medium">Approach Title</Label>
                        <Input
                          id="approachTitle"
                          value={formData.approach.title}
                          onChange={(e) => setFormData({ 
                            ...formData, 
                            approach: { ...formData.approach, title: e.target.value }
                          })}
                          placeholder="Our Approach"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label className="text-sm font-medium">Approach Points</Label>
                          <Button 
                            type="button" 
                            size="sm" 
                            onClick={() => setFormData({
                              ...formData,
                              approach: {
                                ...formData.approach,
                                points: [...formData.approach.points, '']
                              }
                            })}
                            className="h-8"
                          >
                            <Plus className="h-4 w-4 mr-1" />
                            Add Point
                          </Button>
                        </div>
                        {formData.approach.points.map((point, index) => (
                          <div key={index} className="flex gap-2">
                            <Input
                              value={point}
                              onChange={(e) => {
                                const newPoints = [...formData.approach.points];
                                newPoints[index] = e.target.value;
                                setFormData({ 
                                  ...formData, 
                                  approach: { ...formData.approach, points: newPoints }
                                });
                              }}
                              placeholder="Approach point"
                            />
                            <Button
                              type="button"
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                const newPoints = formData.approach.points.filter((_, i) => i !== index);
                                setFormData({ 
                                  ...formData, 
                                  approach: { ...formData.approach, points: newPoints }
                                });
                              }}
                              className="h-10 px-3"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
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