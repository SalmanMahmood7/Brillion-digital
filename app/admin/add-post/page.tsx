"use client";

import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, FileText, Calendar, User } from "lucide-react";

interface BlogPost {
  id?: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  tags: string[];
  imageUrl: string;
  published: boolean;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export default function AddPostPage() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    excerpt: "",
    author: "",
    tags: "",
    imageUrl: "",
    published: true,
  });
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const postsCol = collection(db, 'blogPosts');
      const snapshot = await getDocs(postsCol);
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as BlogPost));
      setPosts(postsData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const postData: Omit<BlogPost, 'id'> = {
        title: formData.title,
        content: formData.content,
        excerpt: formData.excerpt,
        author: formData.author,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        imageUrl: formData.imageUrl,
        published: formData.published,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };

      const docRef = await addDoc(collection(db, 'blogPosts'), postData);
      console.log('Post added with ID:', docRef.id);
      
      setMessage(`✅ Post added successfully with ID: ${docRef.id}`);
      
      // Reset form
      setFormData({
        title: "",
        content: "",
        excerpt: "",
        author: "",
        tags: "",
        imageUrl: "",
        published: true,
      });

      // Refresh posts list
      fetchPosts();
    } catch (error) {
      console.error('Error adding post:', error);
      setMessage(`❌ Error adding post: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const createSamplePosts = async () => {
    setLoading(true);
    const samplePosts: Omit<BlogPost, 'id'>[] = [
      {
        title: "The Future of Digital Transformation in 2025",
        content: `Digital transformation continues to evolve at breakneck speed, and 2025 promises to be a pivotal year for organizations worldwide. As we stand at the intersection of artificial intelligence, cloud computing, and data analytics, businesses must adapt their strategies to remain competitive.

## Key Trends Shaping Digital Transformation

### 1. AI-Powered Automation
Artificial intelligence is no longer a futuristic concept—it's here, and it's transforming how businesses operate. From chatbots handling customer service to machine learning algorithms optimizing supply chains, AI is becoming integral to digital transformation strategies.

### 2. Cloud-First Strategies
The cloud has moved from being a cost-saving measure to a strategic enabler. Organizations are adopting cloud-first strategies that prioritize scalability, flexibility, and innovation over traditional on-premises solutions.

### 3. Data-Driven Decision Making
Companies that leverage data analytics for decision-making are outperforming their competitors. The ability to collect, analyze, and act on data in real-time has become a critical competitive advantage.

## Challenges and Opportunities

While the opportunities are immense, organizations face several challenges:

- **Skills Gap**: Finding talent with the right digital skills remains a challenge
- **Security Concerns**: As digital footprints expand, so do security risks
- **Change Management**: Getting teams to adopt new technologies and processes requires careful planning

## Conclusion

The organizations that will thrive in 2025 are those that embrace digital transformation not as a one-time project, but as an ongoing journey of innovation and adaptation.`,
        excerpt: "Explore the key trends and challenges shaping digital transformation in 2025, from AI-powered automation to cloud-first strategies.",
        author: "Sarah Johnson",
        tags: ["Digital Transformation", "AI", "Cloud Computing", "2025 Trends"],
        imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop&auto=format",
        published: true,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      },
      {
        title: "Why Cloud Security Should Be Your Top Priority",
        content: `As organizations migrate more of their operations to the cloud, security has become a paramount concern. The shared responsibility model means that while cloud providers secure the infrastructure, organizations must secure their data, applications, and access controls.

## Understanding the Cloud Security Landscape

### The Shared Responsibility Model
Cloud security operates on a shared responsibility model where:
- **Cloud Provider**: Secures the infrastructure, physical security, and platform services
- **Customer**: Responsible for data, applications, operating systems, and network configurations

### Common Security Challenges

1. **Misconfigurations**: The leading cause of cloud security breaches
2. **Inadequate Access Controls**: Overprivileged accounts and weak authentication
3. **Data Exposure**: Unsecured databases and storage buckets
4. **Compliance Issues**: Meeting regulatory requirements in multi-cloud environments

## Best Practices for Cloud Security

### 1. Implement Zero Trust Architecture
Never trust, always verify. Implement strict access controls and continuous monitoring.

### 2. Regular Security Assessments
Conduct regular penetration testing and vulnerability assessments to identify weaknesses.

### 3. Data Encryption
Encrypt data both in transit and at rest to protect sensitive information.

### 4. Employee Training
Regular security awareness training helps prevent human errors that lead to breaches.

## The Cost of Poor Cloud Security

Data breaches can cost organizations millions in:
- Regulatory fines
- Loss of customer trust
- Business disruption
- Legal costs

## Conclusion

Investing in robust cloud security measures isn't just about compliance—it's about protecting your organization's most valuable assets and maintaining customer trust in an increasingly digital world.`,
        excerpt: "Learn why cloud security should be your organization's top priority and discover best practices for protecting your digital assets.",
        author: "Michael Chen",
        tags: ["Cloud Security", "Cybersecurity", "Data Protection", "Best Practices"],
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&auto=format",
        published: true,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      },
      {
        title: "Data Analytics: Turning Information into Business Intelligence",
        content: `In today's data-driven world, the ability to extract meaningful insights from vast amounts of information has become a critical business capability. Organizations that master data analytics gain a significant competitive advantage through informed decision-making.

## The Evolution of Data Analytics

### From Descriptive to Predictive
Modern analytics has evolved from simply describing what happened to predicting what will happen:

- **Descriptive Analytics**: What happened?
- **Diagnostic Analytics**: Why did it happen?
- **Predictive Analytics**: What will happen?
- **Prescriptive Analytics**: What should we do?

## Key Components of Successful Analytics

### 1. Data Quality
High-quality data is the foundation of reliable analytics. This includes:
- Accuracy: Data reflects reality
- Completeness: All necessary data is available
- Consistency: Data is uniform across systems
- Timeliness: Data is up-to-date and relevant

### 2. The Right Tools
Choosing the appropriate analytics tools depends on your specific needs:
- **Business Intelligence Platforms**: Tableau, Power BI, Qlik
- **Statistical Software**: R, SAS, SPSS
- **Big Data Platforms**: Hadoop, Spark, Apache Kafka
- **Cloud Analytics**: AWS Analytics, Google Analytics Intelligence, Azure Analytics

### 3. Skilled Personnel
Success requires a team with diverse skills:
- Data Scientists: Advanced statistical analysis and machine learning
- Data Engineers: Data pipeline development and maintenance
- Business Analysts: Translation between technical and business teams
- Domain Experts: Industry knowledge and context

## Real-World Applications

### Retail
- Customer segmentation for targeted marketing
- Inventory optimization
- Price optimization strategies

### Healthcare
- Predictive modeling for patient outcomes
- Drug discovery and development
- Population health management

### Finance
- Risk assessment and management
- Fraud detection
- Algorithmic trading

## Common Challenges and Solutions

### Challenge: Data Silos
**Solution**: Implement data integration platforms that break down silos and create unified data views.

### Challenge: Skills Gap
**Solution**: Invest in training existing staff and partner with analytics experts or service providers.

### Challenge: ROI Measurement
**Solution**: Establish clear metrics and KPIs before starting analytics projects.

## The Future of Data Analytics

Emerging trends shaping the future:
- **Automated Machine Learning (AutoML)**: Making advanced analytics accessible to non-experts
- **Real-time Analytics**: Immediate insights for faster decision-making
- **Edge Analytics**: Processing data closer to where it's generated
- **Ethical AI**: Ensuring responsible use of analytics and AI

## Getting Started with Data Analytics

1. **Assess Your Current State**: Understand what data you have and its quality
2. **Define Business Questions**: Start with specific questions you want to answer
3. **Start Small**: Begin with pilot projects to demonstrate value
4. **Build Gradually**: Expand your analytics capabilities over time
5. **Measure Success**: Track ROI and business impact

## Conclusion

Data analytics is not just about technology—it's about transforming how organizations make decisions. By combining the right data, tools, and people, businesses can unlock insights that drive growth, efficiency, and innovation.

The organizations that will thrive in the future are those that view data as a strategic asset and invest in the capabilities to turn information into actionable intelligence.`,
        excerpt: "Discover how to transform raw data into actionable business intelligence and gain a competitive advantage through strategic analytics.",
        author: "Dr. Emily Rodriguez",
        tags: ["Data Analytics", "Business Intelligence", "Machine Learning", "Data Strategy"],
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format",
        published: true,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      }
    ];

    try {
      for (const post of samplePosts) {
        await addDoc(collection(db, 'blogPosts'), post);
      }
      setMessage(`✅ Successfully added ${samplePosts.length} sample posts to Firebase!`);
      fetchPosts();
    } catch (error) {
      console.error('Error creating sample posts:', error);
      setMessage(`❌ Error creating sample posts: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Firebase Database Management</h1>
          <p className="text-gray-600">Add blog posts to Firebase and manage your content database.</p>
        </div>

        {message && (
          <div className="mb-6 p-4 rounded-lg bg-blue-50 border border-blue-200">
            <p className="text-blue-800">{message}</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Add Post Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Add New Post
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma-separated)</label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Technology, AI, Cloud"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                  <input
                    type="url"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="https://images.unsplash.com/..."
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="published"
                    id="published"
                    checked={formData.published}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="published" className="text-sm font-medium text-gray-700">Published</label>
                </div>

                <div className="flex gap-3">
                  <Button type="submit" disabled={loading} className="flex-1">
                    {loading ? 'Adding...' : 'Add Post'}
                  </Button>
                  <Button 
                    type="button" 
                    onClick={createSamplePosts} 
                    disabled={loading}
                    variant="outline"
                    className="flex-1"
                  >
                    {loading ? 'Creating...' : 'Create Sample Posts'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Posts List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Existing Posts ({posts.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {posts.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No posts found. Create some posts to get started!</p>
                ) : (
                  posts.map((post) => (
                    <div key={post.id} className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-2">{post.title}</h3>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.createdAt?.toDate().toLocaleDateString()}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs ${post.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                          {post.published ? 'Published' : 'Draft'}
                        </span>
                      </div>
                      {post.tags && post.tags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {post.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}