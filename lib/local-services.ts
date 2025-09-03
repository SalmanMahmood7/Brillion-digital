// Local storage fallback for services when Firebase is not available
import { Service } from './firebase-services';

const STORAGE_KEY = 'brillion_services';

// Local storage service implementation
export const localServicesService = {
  // Get all services from localStorage
  async getAll(): Promise<Service[]> {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
      return [];
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return [];
    }
  },

  // Get single service by ID
  async getById(id: string): Promise<Service | null> {
    try {
      const services = await this.getAll();
      return services.find(s => s.id === id) || null;
    } catch (error) {
      console.error('Error getting service by ID:', error);
      return null;
    }
  },

  // Create new service
  async create(service: Omit<Service, 'id'>): Promise<string> {
    try {
      const services = await this.getAll();
      const newId = `service_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const newService: Service = {
        ...service,
        id: newId,
        createdAt: { seconds: Math.floor(Date.now() / 1000) } as any,
        updatedAt: { seconds: Math.floor(Date.now() / 1000) } as any
      };
      
      services.push(newService);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(services));
      console.log('Service saved to localStorage:', newService);
      return newId;
    } catch (error) {
      console.error('Error creating service in localStorage:', error);
      throw error;
    }
  },

  // Update service
  async update(id: string, serviceUpdate: Partial<Service>): Promise<void> {
    try {
      const services = await this.getAll();
      const index = services.findIndex(s => s.id === id);
      if (index === -1) {
        throw new Error(`Service with ID ${id} not found`);
      }
      
      services[index] = {
        ...services[index],
        ...serviceUpdate,
        updatedAt: { seconds: Math.floor(Date.now() / 1000) } as any
      };
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(services));
      console.log('Service updated in localStorage:', services[index]);
    } catch (error) {
      console.error('Error updating service in localStorage:', error);
      throw error;
    }
  },

  // Delete service
  async delete(id: string): Promise<void> {
    try {
      const services = await this.getAll();
      const filteredServices = services.filter(s => s.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredServices));
      console.log('Service deleted from localStorage:', id);
    } catch (error) {
      console.error('Error deleting service from localStorage:', error);
      throw error;
    }
  }
};

// Initialize default services if none exist
export async function initializeLocalServices() {
  const defaultServices: Omit<Service, 'id'>[] = [
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
      href: "/services/cyber-security-privacy",
      order: 5
    },
    {
      title: "Cloud Services",
      description: "Cloud migration and optimization services to accelerate transformation.",
      icon: "Cloud",
      href: "/services/cloud-services",
      order: 6
    }
  ];

  try {
    const existingServices = await localServicesService.getAll();
    if (existingServices.length === 0) {
      for (const service of defaultServices) {
        await localServicesService.create(service);
      }
      console.log('Default services initialized in localStorage');
    }
  } catch (error) {
    console.error('Error initializing local services:', error);
  }
}