"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { websiteInfoService } from "@/lib/firebase-services";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, MessageSquare, Database, RefreshCw, AlertCircle, CheckCircle } from "lucide-react";

interface WebsiteInfo {
  id?: string;
  section: 'company' | 'services' | 'contact' | 'features';
  key: string;
  title: string;
  description: string;
  keywords: string[];
  content: string;
  order?: number;
  active: boolean;
}

// Predefined website info data for easy population
const websiteInfoData = [
  // COMPANY INFORMATION
  {
    section: 'company' as const,
    key: 'about_company',
    title: 'About Brillion Digital',
    description: 'Leading digital transformation company',
    keywords: ['about', 'company', 'who are you', 'what is brillion', 'brillion digital', 'your company', 'business', 'who', 'information', 'details'],
    content: 'Brillion Digital is a leading digital transformation company with 500+ projects delivered across 50+ enterprise clients. We\'re Microsoft Gold Partners with expertise in cloud, security, and modern workplace solutions.',
    order: 1,
    active: true
  },
  {
    section: 'company' as const,
    key: 'location',
    title: 'Location & Coverage',
    description: 'Based in Canada, serving globally',
    keywords: ['location', 'where', 'address', 'office', 'based', 'country', 'canada', 'place', 'where located'],
    content: 'We\'re based in Canada and serve clients across North America with remote and on-site services available. We work with businesses globally through our remote capabilities.',
    order: 2,
    active: true
  },
  {
    section: 'company' as const,
    key: 'certifications',
    title: 'Certifications & Partnerships',
    description: 'Industry-leading certifications and partnerships',
    keywords: ['certification', 'certified', 'partner', 'gold partner', 'microsoft partner', 'qualification', 'accredited', 'iso', 'soc', 'compliance'],
    content: 'We hold ISO 27001, SOC 2 Type II, PIPEDA compliance, and Microsoft Gold Partner status. Our team is certified across Microsoft 365, Dynamics 365, Azure, AWS, and Google Cloud platforms.',
    order: 3,
    active: true
  },
  {
    section: 'company' as const,
    key: 'experience',
    title: 'Experience & Track Record',
    description: '15+ years of digital transformation expertise',
    keywords: ['experience', 'years', 'how long', 'expertise', 'background', 'history', 'established', 'founded', 'track record'],
    content: '15+ years of digital transformation experience with a 99.9% success rate and 24/7 support available. We have successfully completed over 500 projects for enterprise clients.',
    order: 4,
    active: true
  },
  // SERVICES INFORMATION
  {
    section: 'services' as const,
    key: 'digital_transformation',
    title: 'Digital Transformation',
    description: 'Comprehensive digital transformation services',
    keywords: ['digital transformation', 'digitalization', 'digital change', 'modernization', 'digital upgrade', 'business transformation', 'digital solution', 'transform business', 'modernize', 'upgrade system'],
    content: 'We offer comprehensive digital transformation services including Microsoft 365 implementation, cloud migration, process automation, and digital strategy consulting. Our Gold Partner status with Microsoft ensures expert implementation.',
    order: 1,
    active: true
  },
  {
    section: 'services' as const,
    key: 'cybersecurity',
    title: 'Cybersecurity & Protection',
    description: 'Comprehensive cybersecurity solutions',
    keywords: ['cybersecurity', 'cyber security', 'security', 'protect', 'protection', 'secure', 'safety', 'hacking', 'hack', 'virus', 'malware', 'threat', 'firewall', 'antivirus', 'data protection', 'information security'],
    content: 'We provide comprehensive cybersecurity solutions including security assessments, threat detection, compliance (SOC 2, ISO 27001), incident response, and ongoing security monitoring. We protect your business from all cyber threats.',
    order: 5,
    active: true
  },
  // CONTACT INFORMATION
  {
    section: 'contact' as const,
    key: 'pricing',
    title: 'Pricing & Quotes',
    description: 'Project-based pricing and consultation',
    keywords: ['price', 'pricing', 'cost', 'how much', 'expensive', 'cheap', 'budget', 'money', 'fees', 'charges', 'rate', 'quote'],
    content: 'Our pricing is project-based and tailored to your specific needs. Contact us for a free consultation and custom quote based on your requirements. We offer competitive rates with transparent pricing.',
    order: 1,
    active: true
  }
];

export default function ChatbotKnowledgePage() {
  const router = useRouter();
  const [websiteInfo, setWebsiteInfo] = useState<WebsiteInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [stats, setStats] = useState({ total: 0, company: 0, services: 0, contact: 0, features: 0 });

  useEffect(() => {
    loadWebsiteInfo();
  }, []);

  const loadWebsiteInfo = async () => {
    try {
      setLoading(true);
      const data = await websiteInfoService.getAll();
      setWebsiteInfo(data);
      
      // Calculate stats
      const stats = {
        total: data.length,
        company: data.filter(item => item.section === 'company').length,
        services: data.filter(item => item.section === 'services').length,
        contact: data.filter(item => item.section === 'contact').length,
        features: data.filter(item => item.section === 'features').length
      };
      setStats(stats);
    } catch (error) {
      console.error('Error loading website info:', error);
      setMessage("❌ Error loading chatbot knowledge");
    } finally {
      setLoading(false);
    }
  };

  const populateDefaultData = async () => {
    try {
      setLoading(true);
      setMessage("📝 Populating chatbot knowledge...");
      
      let successCount = 0;
      for (const info of websiteInfoData) {
        try {
          await websiteInfoService.create(info);
          successCount++;
        } catch (error) {
          console.error(`Failed to create: ${info.title}`, error);
        }
      }
      
      setMessage(`✅ Successfully populated ${successCount}/${websiteInfoData.length} knowledge items`);
      await loadWebsiteInfo(); // Reload the data
      
    } catch (error) {
      console.error('Error populating data:', error);
      setMessage("❌ Error populating chatbot knowledge");
    } finally {
      setLoading(false);
    }
  };

  const clearAllData = async () => {
    if (!confirm('Are you sure you want to clear all chatbot knowledge? This cannot be undone.')) {
      return;
    }
    
    try {
      setLoading(true);
      setMessage("🗑️ Clearing all knowledge...");
      
      for (const item of websiteInfo) {
        if (item.id) {
          await websiteInfoService.delete(item.id);
        }
      }
      
      setMessage("✅ All chatbot knowledge cleared");
      await loadWebsiteInfo(); // Reload the data
      
    } catch (error) {
      console.error('Error clearing data:', error);
      setMessage("❌ Error clearing chatbot knowledge");
    } finally {
      setLoading(false);
    }
  };

  const testChatbotAPI = async () => {
    try {
      setLoading(true);
      setMessage("🧪 Testing chatbot API...");
      
      const response = await fetch('/api/website-info');
      const result = await response.json();
      
      if (result.success) {
        const { websiteInfo, services, articles } = result.data;
        setMessage(`✅ API Test Successful!\n📊 Knowledge: ${websiteInfo?.length || 0} items\n🛠️ Services: ${services?.length || 0} items\n📰 Articles: ${articles?.length || 0} items`);
      } else {
        setMessage(`❌ API Test Failed: ${result.error}`);
      }
    } catch (error) {
      console.error('Error testing API:', error);
      setMessage("❌ API Test Failed: Network error");
    } finally {
      setLoading(false);
    }
  };

  const getSectionIcon = (section: string) => {
    switch (section) {
      case 'company': return '🏢';
      case 'services': return '🛠️';
      case 'contact': return '📞';
      case 'features': return '✨';
      default: return '📄';
    }
  };

  const getSectionColor = (section: string) => {
    switch (section) {
      case 'company': return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'services': return 'bg-green-50 border-green-200 text-green-800';
      case 'contact': return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'features': return 'bg-purple-50 border-purple-200 text-purple-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto py-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Brain className="w-8 h-8 text-orange-500" />
                Chatbot Knowledge Base
              </h1>
              <p className="text-gray-600 mt-2">Manage the information that powers our AI assistant</p>
            </div>
          </div>
        </div>

        {/* Message */}
        {message && (
          <div className={`mb-6 p-4 rounded-lg border ${
            message.startsWith('✅') 
              ? 'bg-green-50 border-green-200 text-green-800' 
              : message.startsWith('❌')
              ? 'bg-red-50 border-red-200 text-red-800'
              : 'bg-blue-50 border-blue-200 text-blue-800'
          }`}>
            <pre className="whitespace-pre-wrap font-sans">{message}</pre>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Items</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                </div>
                <Database className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Company Info</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.company}</p>
                </div>
                <div className="text-2xl">🏢</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Services</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.services}</p>
                </div>
                <div className="text-2xl">🛠️</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Contact Info</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.contact}</p>
                </div>
                <div className="text-2xl">📞</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Features</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.features}</p>
                </div>
                <div className="text-2xl">✨</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Button
            onClick={populateDefaultData}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
          >
            <Database className="w-4 h-4" />
            {loading ? 'Populating...' : 'Populate Default Data'}
          </Button>
          
          <Button
            onClick={testChatbotAPI}
            disabled={loading}
            variant="outline"
            className="flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            {loading ? 'Testing...' : 'Test Chatbot API'}
          </Button>

          <Button
            onClick={loadWebsiteInfo}
            disabled={loading}
            variant="outline"
            className="flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh Data
          </Button>

          <Button
            onClick={clearAllData}
            disabled={loading}
            variant="destructive"
            className="flex items-center gap-2"
          >
            <AlertCircle className="w-4 h-4" />
            Clear All Data
          </Button>
        </div>

        {/* Knowledge Items */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All ({stats.total})</TabsTrigger>
            <TabsTrigger value="company">Company ({stats.company})</TabsTrigger>
            <TabsTrigger value="services">Services ({stats.services})</TabsTrigger>
            <TabsTrigger value="contact">Contact ({stats.contact})</TabsTrigger>
            <TabsTrigger value="features">Features ({stats.features})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {websiteInfo.map((item) => (
                <Card key={item.id} className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <span className="text-xl">{getSectionIcon(item.section)}</span>
                        {item.title}
                      </CardTitle>
                      <Badge className={getSectionColor(item.section)}>
                        {item.section}
                      </Badge>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">Content Preview:</p>
                        <p className="text-sm text-gray-800 line-clamp-3">{item.content}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">Keywords:</p>
                        <div className="flex flex-wrap gap-1">
                          {item.keywords.slice(0, 4).map((keyword, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                          {item.keywords.length > 4 && (
                            <Badge variant="secondary" className="text-xs">
                              +{item.keywords.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pt-2">
                        {item.active ? (
                          <Badge className="bg-green-100 text-green-800 border-green-200">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Active
                          </Badge>
                        ) : (
                          <Badge variant="secondary">Inactive</Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {['company', 'services', 'contact', 'features'].map(section => (
            <TabsContent key={section} value={section} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {websiteInfo
                  .filter(item => item.section === section)
                  .map((item) => (
                    <Card key={item.id} className="h-full">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <span className="text-xl">{getSectionIcon(item.section)}</span>
                          {item.title}
                        </CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium text-gray-600 mb-1">Content:</p>
                            <p className="text-sm text-gray-800">{item.content}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-600 mb-1">Keywords:</p>
                            <div className="flex flex-wrap gap-1">
                              {item.keywords.map((keyword, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {keyword}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </AdminLayout>
  );
}