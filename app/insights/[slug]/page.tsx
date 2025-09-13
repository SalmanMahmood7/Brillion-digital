"use client";

import { useParams, useRouter } from "next/navigation";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, Share, TrendingUp, Shield, Database, Cloud, Cpu, Server } from "lucide-react";

const articles = [
  {
    slug: "microsoft-365-team-adoption",
    title: "How to get your whole team using Microsoft 365",
    content: `
      <h2>Introduction</h2>
      <p>Getting your entire team to adopt Microsoft 365 can be challenging, but with the right strategy, you can maximize your investment and boost productivity across your organization.</p>
      
      <h2>Key Strategies for Success</h2>
      <p>Here are the most effective approaches to drive Microsoft 365 adoption:</p>
      
      <h3>1. Start with Executive Buy-in</h3>
      <p>Leadership support is crucial for successful adoption. When executives use and champion the tools, it sets the tone for the entire organization.</p>
      
      <h3>2. Identify Champions</h3>
      <p>Find early adopters in each department who can serve as local experts and help their colleagues navigate the new tools.</p>
      
      <h3>3. Provide Comprehensive Training</h3>
      <p>Offer multiple training formats including live sessions, recorded videos, and hands-on workshops to accommodate different learning styles.</p>
      
      <h3>4. Focus on Real Business Problems</h3>
      <p>Show how Microsoft 365 tools solve actual pain points your team faces daily. Demonstrate concrete benefits rather than just features.</p>
      
      <h2>Implementation Timeline</h2>
      <p>A phased approach works best:</p>
      <ul>
        <li><strong>Week 1-2:</strong> Executive training and champion identification</li>
        <li><strong>Week 3-4:</strong> Core applications rollout (Teams, SharePoint, OneDrive)</li>
        <li><strong>Week 5-8:</strong> Advanced features and integrations</li>
        <li><strong>Week 9-12:</strong> Optimization and feedback collection</li>
      </ul>
      
      <h2>Measuring Success</h2>
      <p>Track these key metrics to measure adoption success:</p>
      <ul>
        <li>Active user percentages</li>
        <li>Feature utilization rates</li>
        <li>Collaboration frequency</li>
        <li>User satisfaction scores</li>
      </ul>
      
      <h2>Common Pitfalls to Avoid</h2>
      <p>Learn from these common mistakes:</p>
      <ul>
        <li>Rolling out all tools at once</li>
        <li>Insufficient training and support</li>
        <li>Not addressing security concerns</li>
        <li>Ignoring user feedback</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Successful Microsoft 365 adoption requires careful planning, strong leadership support, and a focus on solving real business problems. With the right approach, your team will embrace these powerful tools and significantly improve their productivity.</p>
    `,
    excerpt: "Discover strategies to drive adoption and maximize the value of your Microsoft 365 investment across your entire organization.",
    category: "Digital Transformation",
    author: "BRILLION Digital Team",
    date: "March 15, 2024",
    readTime: "5 min read",
    icon: TrendingUp,
    color: "from-blue-500 to-blue-700"
  },
  {
    slug: "cloud-security-2024",
    title: "The Future of Cloud Security in 2024",
    content: `
      <h2>The Evolving Threat Landscape</h2>
      <p>As we move through 2024, cloud security faces unprecedented challenges. The rapid adoption of cloud services, combined with increasingly sophisticated cyber threats, requires a new approach to security.</p>
      
      <h2>Key Trends Shaping Cloud Security</h2>
      
      <h3>Zero Trust Architecture</h3>
      <p>The "never trust, always verify" approach is becoming the gold standard for cloud security. Organizations are implementing comprehensive identity verification for every user and device.</p>
      
      <h3>AI-Powered Threat Detection</h3>
      <p>Machine learning algorithms are revolutionizing how we detect and respond to threats, providing real-time analysis of potential security breaches.</p>
      
      <h3>Multi-Cloud Security Management</h3>
      <p>With organizations using multiple cloud providers, unified security management across different platforms is crucial.</p>
      
      <h2>Best Practices for 2024</h2>
      
      <h3>1. Implement Comprehensive Monitoring</h3>
      <p>Deploy 24/7 monitoring solutions that can detect anomalies across your entire cloud infrastructure.</p>
      
      <h3>2. Regular Security Audits</h3>
      <p>Conduct quarterly security assessments to identify vulnerabilities and ensure compliance.</p>
      
      <h3>3. Employee Training</h3>
      <p>Ensure your team stays updated on the latest security threats and best practices.</p>
      
      <h3>4. Data Encryption</h3>
      <p>Implement end-to-end encryption for all sensitive data, both at rest and in transit.</p>
      
      <h2>Emerging Technologies</h2>
      
      <h3>Confidential Computing</h3>
      <p>This technology protects data while it's being processed, adding an extra layer of security.</p>
      
      <h3>Quantum-Safe Cryptography</h3>
      <p>Preparing for the quantum computing era by implementing quantum-resistant encryption methods.</p>
      
      <h2>Regulatory Compliance</h2>
      <p>Stay ahead of evolving regulations like GDPR, CCPA, and industry-specific requirements. Ensure your cloud security strategy aligns with compliance mandates.</p>
      
      <h2>Conclusion</h2>
      <p>The future of cloud security requires a proactive, multi-layered approach. By staying informed about emerging threats and implementing robust security measures, organizations can protect their digital assets in an increasingly complex threat landscape.</p>
    `,
    excerpt: "Explore the latest trends and best practices in cloud security to protect your digital assets in an evolving threat landscape.",
    category: "Cybersecurity",
    author: "Security Team",
    date: "March 12, 2024",
    readTime: "7 min read",
    icon: Shield,
    color: "from-blue-500 to-blue-600"
  },
  {
    slug: "ai-powered-analytics",
    title: "AI-Powered Analytics: Transforming Business Intelligence",
    content: `
      <h2>The AI Revolution in Analytics</h2>
      <p>Artificial Intelligence is fundamentally changing how businesses analyze data and make decisions. Traditional business intelligence tools are being enhanced with AI capabilities that provide deeper insights and predictive analytics.</p>
      
      <h2>Key Benefits of AI-Powered Analytics</h2>
      
      <h3>Automated Insights Discovery</h3>
      <p>AI can automatically identify patterns and trends in large datasets that human analysts might miss, uncovering hidden opportunities and risks.</p>
      
      <h3>Predictive Analytics</h3>
      <p>Machine learning models can forecast future trends, customer behavior, and market conditions with unprecedented accuracy.</p>
      
      <h3>Natural Language Processing</h3>
      <p>Ask questions in plain English and get instant answers from your data, making analytics accessible to non-technical users.</p>
      
      <h2>Implementation Strategies</h2>
      
      <h3>1. Start with Clean Data</h3>
      <p>AI is only as good as the data it processes. Invest in data quality and governance before implementing AI solutions.</p>
      
      <h3>2. Choose the Right Tools</h3>
      <p>Select AI analytics platforms that integrate well with your existing systems and data sources.</p>
      
      <h3>3. Train Your Team</h3>
      <p>Provide comprehensive training on AI tools and interpretation of AI-generated insights.</p>
      
      <h2>Real-World Applications</h2>
      
      <h3>Customer Analytics</h3>
      <p>AI can analyze customer behavior patterns to improve retention, personalization, and lifetime value predictions.</p>
      
      <h3>Financial Forecasting</h3>
      <p>Advanced algorithms can process market data, economic indicators, and internal metrics for accurate financial predictions.</p>
      
      <h3>Operational Optimization</h3>
      <p>AI can identify inefficiencies in processes and suggest optimizations for cost reduction and performance improvement.</p>
      
      <h2>Challenges and Considerations</h2>
      
      <h3>Data Privacy and Security</h3>
      <p>Ensure AI analytics solutions comply with data protection regulations and maintain security standards.</p>
      
      <h3>Model Transparency</h3>
      <p>Choose solutions that provide explainable AI, allowing you to understand how conclusions are reached.</p>
      
      <h3>Continuous Learning</h3>
      <p>AI models need regular updates and retraining to maintain accuracy as business conditions change.</p>
      
      <h2>The Future of AI Analytics</h2>
      <p>Looking ahead, we can expect even more sophisticated AI capabilities, including augmented analytics that work alongside human analysts, and autonomous systems that can make certain decisions independently.</p>
      
      <h2>Getting Started</h2>
      <p>Begin your AI analytics journey with a pilot project focused on a specific business problem. Measure results, learn from the experience, and gradually expand AI capabilities across your organization.</p>
    `,
    excerpt: "Learn how artificial intelligence is revolutionizing data analytics and providing unprecedented insights for business growth.",
    category: "Data & Analytics",
    author: "AI Research Team",
    date: "March 8, 2024",
    readTime: "6 min read",
    icon: Database,
    color: "from-blue-400 to-blue-600"
  },
  {
    slug: "cloud-migration-best-practices",
    title: "Cloud Migration Best Practices for Enterprise",
    content: `
      <h2>Planning Your Cloud Migration Journey</h2>
      <p>Enterprise cloud migration is a complex undertaking that requires careful planning, execution, and management. With the right approach, you can minimize downtime and maximize the benefits of cloud computing.</p>
      
      <h2>Pre-Migration Assessment</h2>
      
      <h3>Application Inventory</h3>
      <p>Catalog all applications, dependencies, and data flows to understand what needs to be migrated and in what order.</p>
      
      <h3>Cost Analysis</h3>
      <p>Perform a thorough cost-benefit analysis comparing current infrastructure costs with projected cloud expenses.</p>
      
      <h3>Risk Assessment</h3>
      <p>Identify potential risks and develop mitigation strategies for each phase of the migration.</p>
      
      <h2>Migration Strategies</h2>
      
      <h3>Lift and Shift (Rehosting)</h3>
      <p>Move applications to the cloud with minimal changes. This approach offers quick migration but may not fully leverage cloud benefits.</p>
      
      <h3>Re-platforming</h3>
      <p>Make minor optimizations to applications during migration to take advantage of cloud capabilities.</p>
      
      <h3>Refactoring</h3>
      <p>Redesign applications to be cloud-native, maximizing scalability and cost-effectiveness.</p>
      
      <h2>Step-by-Step Migration Process</h2>
      
      <h3>Phase 1: Foundation Setup</h3>
      <ul>
        <li>Establish cloud governance and security policies</li>
        <li>Set up networking and connectivity</li>
        <li>Configure monitoring and logging</li>
      </ul>
      
      <h3>Phase 2: Pilot Migration</h3>
      <ul>
        <li>Select low-risk applications for initial migration</li>
        <li>Test migration procedures and tools</li>
        <li>Validate performance and functionality</li>
      </ul>
      
      <h3>Phase 3: Scaled Migration</h3>
      <ul>
        <li>Migrate applications in planned waves</li>
        <li>Monitor performance and user experience</li>
        <li>Optimize configurations as needed</li>
      </ul>
      
      <h2>Critical Success Factors</h2>
      
      <h3>Executive Sponsorship</h3>
      <p>Ensure strong leadership support and clear communication about migration goals and benefits.</p>
      
      <h3>Change Management</h3>
      <p>Prepare your team for new processes and technologies through training and support.</p>
      
      <h3>Security First</h3>
      <p>Implement cloud security best practices from day one, including identity management and data encryption.</p>
      
      <h2>Common Pitfalls to Avoid</h2>
      
      <h3>Inadequate Planning</h3>
      <p>Rushing the migration without proper assessment and planning often leads to cost overruns and performance issues.</p>
      
      <h3>Ignoring Dependencies</h3>
      <p>Failing to map application dependencies can result in broken functionality after migration.</p>
      
      <h3>Lack of Testing</h3>
      <p>Insufficient testing in cloud environments can lead to unexpected issues in production.</p>
      
      <h2>Post-Migration Optimization</h2>
      
      <h3>Performance Monitoring</h3>
      <p>Continuously monitor application performance and user experience to identify optimization opportunities.</p>
      
      <h3>Cost Optimization</h3>
      <p>Regularly review cloud spending and optimize resource allocation to control costs.</p>
      
      <h3>Security Monitoring</h3>
      <p>Implement continuous security monitoring and threat detection capabilities.</p>
      
      <h2>Conclusion</h2>
      <p>Successful enterprise cloud migration requires a methodical approach, strong planning, and ongoing optimization. By following these best practices, organizations can achieve their cloud objectives while minimizing risks and maximizing benefits.</p>
    `,
    excerpt: "A comprehensive guide to successfully migrating your enterprise applications to the cloud with minimal downtime.",
    category: "Cloud Services",
    author: "Cloud Architects",
    date: "March 5, 2024",
    readTime: "8 min read",
    icon: Cloud,
    color: "from-blue-400 to-blue-600"
  },
  {
    slug: "nextjs-scalable-applications",
    title: "Building Scalable Web Applications with Next.js",
    content: `
      <h2>Why Next.js for Scalable Applications?</h2>
      <p>Next.js has become the go-to framework for building modern, scalable web applications. Its powerful features like server-side rendering, static generation, and API routes make it ideal for applications that need to handle growth effectively.</p>
      
      <h2>Key Architecture Principles</h2>
      
      <h3>Component-Based Design</h3>
      <p>Build reusable components that encapsulate functionality and can be easily maintained and scaled across your application.</p>
      
      <h3>State Management</h3>
      <p>Choose appropriate state management solutions based on your application's complexity, from React's built-in state to Redux or Zustand for complex scenarios.</p>
      
      <h3>API Design</h3>
      <p>Design clean, RESTful APIs using Next.js API routes or integrate with external APIs following best practices.</p>
      
      <h2>Performance Optimization Strategies</h2>
      
      <h3>Static Generation vs Server-Side Rendering</h3>
      <p>Choose the right rendering method for each page based on data requirements and update frequency.</p>
      
      <h3>Code Splitting and Lazy Loading</h3>
      <p>Implement automatic code splitting and lazy loading to reduce initial bundle size and improve load times.</p>
      
      <h3>Image Optimization</h3>
      <p>Leverage Next.js Image component for automatic image optimization, lazy loading, and responsive images.</p>
      
      <h2>Scalability Best Practices</h2>
      
      <h3>Caching Strategies</h3>
      <p>Implement effective caching at multiple levels: CDN, server-side, and client-side caching.</p>
      
      <h3>Database Optimization</h3>
      <p>Use connection pooling, query optimization, and appropriate indexing for database operations.</p>
      
      <h3>Microservices Architecture</h3>
      <p>Consider breaking large applications into smaller, manageable services that can be scaled independently.</p>
      
      <h2>Development Workflow</h2>
      
      <h3>TypeScript Integration</h3>
      <p>Use TypeScript for better code quality, improved developer experience, and easier refactoring.</p>
      
      <h3>Testing Strategy</h3>
      <ul>
        <li>Unit tests for components and utilities</li>
        <li>Integration tests for API routes</li>
        <li>End-to-end tests for critical user flows</li>
      </ul>
      
      <h3>CI/CD Pipeline</h3>
      <p>Set up automated testing, building, and deployment pipelines for reliable releases.</p>
      
      <h2>Monitoring and Analytics</h2>
      
      <h3>Performance Monitoring</h3>
      <p>Implement tools like Vercel Analytics, Google Analytics, or custom monitoring solutions.</p>
      
      <h3>Error Tracking</h3>
      <p>Use services like Sentry or LogRocket to track and debug production errors.</p>
      
      <h3>User Experience Metrics</h3>
      <p>Monitor Core Web Vitals and user experience metrics to ensure optimal performance.</p>
      
      <h2>Deployment and Hosting</h2>
      
      <h3>Vercel Platform</h3>
      <p>The fastest and easiest way to deploy Next.js applications with automatic scaling and optimization.</p>
      
      <h3>Custom Server Deployment</h3>
      <p>Deploy to your own infrastructure using Docker, AWS, Google Cloud, or other platforms.</p>
      
      <h3>Edge Functions</h3>
      <p>Leverage edge computing for ultra-low latency and improved user experience worldwide.</p>
      
      <h2>Security Considerations</h2>
      
      <h3>Authentication and Authorization</h3>
      <p>Implement secure authentication using NextAuth.js or other proven solutions.</p>
      
      <h3>API Security</h3>
      <p>Secure your API routes with proper validation, rate limiting, and authentication.</p>
      
      <h3>Content Security Policy</h3>
      <p>Implement CSP headers and other security measures to protect against XSS and other attacks.</p>
      
      <h2>Future-Proofing Your Application</h2>
      
      <h3>Stay Updated</h3>
      <p>Keep Next.js and dependencies updated to benefit from performance improvements and security fixes.</p>
      
      <h3>Progressive Enhancement</h3>
      <p>Build applications that work without JavaScript and enhance progressively.</p>
      
      <h3>Accessibility</h3>
      <p>Ensure your application is accessible to all users by following WCAG guidelines.</p>
      
      <h2>Conclusion</h2>
      <p>Building scalable web applications with Next.js requires careful planning, best practices implementation, and continuous optimization. By following these guidelines, you can create applications that grow with your business needs.</p>
    `,
    excerpt: "Deep dive into modern web development practices and how Next.js can help you build performant, scalable applications.",
    category: "Development",
    author: "Dev Team",
    date: "March 1, 2024",
    readTime: "10 min read",
    icon: Cpu,
    color: "from-blue-500 to-blue-700"
  },
  {
    slug: "infrastructure-as-code-devops",
    title: "Infrastructure as Code: DevOps Revolution",
    content: `
      <h2>The Infrastructure as Code Revolution</h2>
      <p>Infrastructure as Code (IaC) is transforming how organizations manage their IT infrastructure. By treating infrastructure the same way we treat application code, teams can achieve greater reliability, scalability, and speed in their deployment processes.</p>
      
      <h2>Core Principles of IaC</h2>
      
      <h3>Version Control</h3>
      <p>Store all infrastructure definitions in version control systems, enabling track changes, rollbacks, and collaboration.</p>
      
      <h3>Automation</h3>
      <p>Automate infrastructure provisioning and management through code, reducing manual errors and improving consistency.</p>
      
      <h3>Repeatability</h3>
      <p>Create identical environments across development, staging, and production using the same code base.</p>
      
      <h2>Popular IaC Tools</h2>
      
      <h3>Terraform</h3>
      <p>A cloud-agnostic tool that supports multiple providers and offers a declarative approach to infrastructure management.</p>
      
      <h3>AWS CloudFormation</h3>
      <p>Native AWS service for defining cloud resources using JSON or YAML templates.</p>
      
      <h3>Ansible</h3>
      <p>Configuration management tool that can also handle infrastructure provisioning with a focus on simplicity.</p>
      
      <h3>Pulumi</h3>
      <p>Modern IaC platform that allows you to use familiar programming languages like Python, JavaScript, and Go.</p>
      
      <h2>Implementation Best Practices</h2>
      
      <h3>1. Start Small</h3>
      <p>Begin with simple resources and gradually expand to more complex infrastructure components.</p>
      
      <h3>2. Modular Design</h3>
      <p>Create reusable modules for common infrastructure patterns to promote consistency and reduce duplication.</p>
      
      <h3>3. Environment Separation</h3>
      <p>Maintain separate configurations for different environments while sharing common components.</p>
      
      <h3>4. State Management</h3>
      <p>Properly manage and secure your infrastructure state files, especially in team environments.</p>
      
      <h2>CI/CD Integration</h2>
      
      <h3>Pipeline Automation</h3>
      <p>Integrate IaC into your CI/CD pipelines for automated testing, validation, and deployment of infrastructure changes.</p>
      
      <h3>Testing Strategies</h3>
      <ul>
        <li>Syntax validation and linting</li>
        <li>Security scanning and compliance checks</li>
        <li>Plan validation before applying changes</li>
        <li>Integration testing in staging environments</li>
      </ul>
      
      <h3>Approval Workflows</h3>
      <p>Implement approval processes for production infrastructure changes to maintain control and oversight.</p>
      
      <h2>Security and Compliance</h2>
      
      <h3>Policy as Code</h3>
      <p>Define security policies and compliance rules as code that can be automatically enforced.</p>
      
      <h3>Secret Management</h3>
      <p>Use secure secret management solutions and avoid hardcoding sensitive information in infrastructure code.</p>
      
      <h3>Least Privilege Access</h3>
      <p>Implement IAM policies that follow the principle of least privilege for all infrastructure components.</p>
      
      <h2>Monitoring and Observability</h2>
      
      <h3>Infrastructure Monitoring</h3>
      <p>Include monitoring and alerting configuration as part of your infrastructure code.</p>
      
      <h3>Change Tracking</h3>
      <p>Monitor infrastructure changes and maintain audit trails for compliance and troubleshooting.</p>
      
      <h3>Cost Management</h3>
      <p>Implement cost monitoring and optimization strategies directly in your infrastructure code.</p>
      
      <h2>Common Challenges and Solutions</h2>
      
      <h3>Learning Curve</h3>
      <p>Invest in training and start with simple projects to build team expertise gradually.</p>
      
      <h3>Legacy System Integration</h3>
      <p>Develop migration strategies for existing infrastructure and plan for hybrid approaches.</p>
      
      <h3>Team Collaboration</h3>
      <p>Establish clear processes for code reviews, change management, and knowledge sharing.</p>
      
      <h2>Advanced Patterns</h2>
      
      <h3>Blue-Green Deployments</h3>
      <p>Use IaC to implement blue-green deployment strategies for zero-downtime updates.</p>
      
      <h3>Multi-Cloud Strategies</h3>
      <p>Design infrastructure code that can work across multiple cloud providers for vendor flexibility.</p>
      
      <h3>GitOps Workflows</h3>
      <p>Implement GitOps practices where infrastructure changes are triggered by Git commits.</p>
      
      <h2>Future of IaC</h2>
      <p>The future of Infrastructure as Code includes AI-assisted infrastructure design, enhanced security scanning, and even more seamless integration with development workflows.</p>
      
      <h2>Getting Started</h2>
      <p>Begin your IaC journey by identifying a small, non-critical infrastructure component to manage with code. Focus on learning the fundamentals before tackling complex scenarios.</p>
    `,
    excerpt: "Explore how Infrastructure as Code is transforming DevOps practices and enabling more reliable, scalable deployments.",
    category: "DevOps",
    author: "DevOps Team",
    date: "February 28, 2024",
    readTime: "9 min read",
    icon: Server,
    color: "from-blue-500 to-blue-600"
  }
];

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <PageLayout>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <Button onClick={() => router.push('/insights')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Button>
          </div>
        </div>
      </PageLayout>
    );
  }

  const IconComponent = article.icon;

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/* Back Button */}
        <div className="fixed top-20 left-6 z-50">
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push('/insights')}
            className="bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-[#f97316] hover:text-white hover:border-[#f97316]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Button>
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-16">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-4xl">
            {/* Category Badge */}
            <div className="mb-6">
              <Badge className="bg-blue-50 text-blue-700 border-blue-200 text-sm">
                {article.category}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-900 mb-6">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${article.color} mr-3`}>
                  <IconComponent className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    <span className="font-medium text-gray-700">{article.author}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                <span>{article.date}</span>
              </div>
              
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                <span className="text-blue-600 font-medium">{article.readTime}</span>
              </div>

              <Button variant="outline" size="sm" className="ml-auto">
                <Share className="w-3 h-3 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-32">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-4xl">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-blue-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-blue-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Call to Action */}
            <div className="mt-16 relative overflow-hidden rounded-2xl">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="/images/cityscape-bg.jpg" 
                  alt="Cityscape Background"
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-slate-800/70"></div>
              </div>
              
              <div className="relative z-10 p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  <span className="text-orange-500">Stay Updated with Our Insights</span>
                </h3>
                <p className="text-white/90 mb-6">
                  Get the latest digital trends, best practices, and industry insights delivered directly to your inbox.
                </p>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-blue-900 mb-8">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {articles
                  .filter(a => a.slug !== slug && a.category === article.category)
                  .slice(0, 2)
                  .map((relatedArticle, index) => {
                    const RelatedIcon = relatedArticle.icon;
                    return (
                      <div
                        key={index}
                        onClick={() => router.push(`/insights/${relatedArticle.slug}`)}
                        className="group cursor-pointer bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${relatedArticle.color} group-hover:scale-110 transition-transform`}>
                            <RelatedIcon className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <Badge className="bg-gray-100 text-gray-600 text-xs mb-2">
                              {relatedArticle.category}
                            </Badge>
                            <h4 className="font-semibold text-blue-900 group-hover:text-blue-600 transition-colors mb-2">
                              {relatedArticle.title}
                            </h4>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                              {relatedArticle.excerpt}
                            </p>
                            <div className="flex items-center text-xs text-gray-500">
                              <span>{relatedArticle.date}</span>
                              <span className="mx-2">•</span>
                              <span className="text-blue-600 font-medium">{relatedArticle.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}