"use client";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import AuthButton from "@/components/auth/AuthButton";
import { 
  Brain,
  Cpu,
  Bot,
  LineChart,
  Sparkles,
  Target,
  ArrowRight,
  CheckCircle,
  Zap,
  Network,
  Eye,
  MessageSquare,
  Shield,
  Users,
  Globe,
  TrendingUp,
  Briefcase,
  Cloud
} from "lucide-react";
import { useState } from "react";
import ServiceDetailModal from "@/components/ServiceDetailModal";

export default function AISmartSolutions() {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleLearnMore = (serviceKey) => {
    setSelectedService(servicesData[serviceKey]);
    setShowModal(true);
  };

  const servicesData = {
    machineLearning: {
      title: "Machine Learning Solutions",
      description: "Custom ML models and algorithms to solve complex business problems",
      fullDescription: "Develop sophisticated machine learning solutions that learn from your data to provide predictive insights, automate decision-making, and optimize business processes. Our ML experts create custom models tailored to your specific industry and use cases.",
      features: [
        {
          title: "Predictive Analytics",
          description: "Forecast trends and behaviors with advanced ML algorithms",
          icon: LineChart
        },
        {
          title: "Natural Language Processing",
          description: "Process and understand human language at scale",
          icon: MessageSquare
        },
        {
          title: "Computer Vision",
          description: "Extract insights from images and video content",
          icon: Eye
        },
        {
          title: "Recommendation Systems",
          description: "Personalized recommendations to enhance user experience",
          icon: Target
        }
      ],
      benefits: [
        {
          title: "Accuracy Improvement",
          description: "Average improvement in prediction accuracy",
          metric: "+85%"
        },
        {
          title: "Process Automation",
          description: "Tasks automated through ML implementation",
          metric: "70%"
        },
        {
          title: "Decision Speed",
          description: "Faster decision making with AI insights",
          metric: "10x faster"
        }
      ],
      process: [
        {
          step: 1,
          title: "Data Assessment",
          description: "Evaluate data quality and identify ML opportunities",
          duration: "1-2 weeks"
        },
        {
          step: 2,
          title: "Model Development",
          description: "Design and train custom machine learning models",
          duration: "4-8 weeks"
        },
        {
          step: 3,
          title: "Integration & Testing",
          description: "Integrate models into existing systems with thorough testing",
          duration: "2-4 weeks"
        },
        {
          step: 4,
          title: "Deployment & Monitoring",
          description: "Deploy to production with continuous monitoring and optimization",
          duration: "1-2 weeks"
        }
      ],
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Apache Spark", "MLflow", "Kubeflow", "AWS SageMaker"],
      caseStudy: {
        client: "Retail Chain (500+ stores)",
        challenge: "Needed to optimize inventory management and reduce waste by 30%",
        solution: "Implemented ML-powered demand forecasting and inventory optimization system",
        results: [
          "35% reduction in inventory waste",
          "25% improvement in stock availability",
          "2x faster restocking decisions",
          "$2.5M annual cost savings"
        ]
      },
      deliverables: [
        "Custom trained ML models",
        "Model deployment pipeline",
        "Performance monitoring dashboard",
        "Documentation and training",
        "Integration with existing systems",
        "6 months optimization support"
      ]
    },
    intelligentAutomation: {
      title: "Intelligent Automation",
      description: "AI-powered automation solutions to streamline business processes",
      fullDescription: "Transform your business operations with intelligent automation that combines AI, machine learning, and process automation. Our solutions go beyond basic RPA to deliver cognitive automation that can handle complex, unstructured tasks.",
    },
    conversationalAI: {
      title: "Conversational AI & Chatbots",
      description: "Advanced chatbots and virtual assistants powered by natural language processing",
      fullDescription: "Create sophisticated conversational AI solutions that understand context, maintain dialogue flow, and provide personalized responses. Our chatbots integrate seamlessly with your existing systems and continuously learn from interactions.",
    },
    dataAnalytics: {
      title: "AI-Powered Data Analytics",
      description: "Transform raw data into actionable insights with artificial intelligence",
      fullDescription: "Leverage AI to unlock hidden patterns in your data and generate actionable business insights. Our analytics solutions provide real-time dashboards, predictive models, and automated reporting to drive data-driven decision making.",
    },
    computerVision: {
      title: "Computer Vision Solutions",
      description: "Advanced image and video analysis for automated visual intelligence",
      fullDescription: "Implement computer vision solutions that can analyze, interpret, and act on visual information. From quality control to security monitoring, our CV solutions provide automated visual intelligence for various industries.",
    },
    naturalLanguageProcessing: {
      title: "Natural Language Processing Solutions",
      description: "Advanced text processing and language understanding capabilities",
      fullDescription: "Transform how your business processes and understands human language with our advanced NLP solutions. From chatbots and sentiment analysis to document processing and language translation, we help you unlock the value in textual data.",
      features: [
        {
          title: "Text Analysis & Classification",
          description: "Automatically categorize and analyze large volumes of text",
          icon: MessageSquare
        },
        {
          title: "Sentiment Analysis",
          description: "Understand emotions and opinions in customer feedback",
          icon: TrendingUp
        },
        {
          title: "Language Translation",
          description: "Real-time translation across multiple languages",
          icon: Globe
        },
        {
          title: "Chatbots & Virtual Assistants",
          description: "Intelligent conversational interfaces for customer service",
          icon: Bot
        }
      ],
      benefits: [
        {
          title: "Processing Speed",
          description: "Faster text processing and analysis",
          metric: "50x faster"
        },
        {
          title: "Accuracy Rate",
          description: "Text classification and sentiment accuracy",
          metric: "95%+"
        },
        {
          title: "Cost Reduction",
          description: "Reduced manual text processing costs",
          metric: "60%"
        }
      ],
    }
  };
  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="relative bg-slate-900 py-24">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="AI Solutions Background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/90"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-6xl">
            <div className="text-center space-y-6">
              <div className="h-20 mb-6"></div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span style={{color: '#f97316'}}>Artificial Intelligence</span> <span className="text-white">and</span> <br />
                <span style={{color: '#f97316'}}>Smart Solutions</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Harness the power of AI to transform your business. From intelligent automation to predictive analytics, 
                we deliver cutting-edge solutions that drive innovation and competitive advantage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <AuthButton 
                  href="/contact"
                  requireAuth={true}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                >
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </AuthButton>
                <Button 
                  asChild
                  className="text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                  style={{backgroundColor: '#f97316'}}
                >
                  <a href="#solutions">
                    Explore AI Solutions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Solutions Grid */}
        <section id="solutions" className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                AI-Powered <span className="text-orange-500">Solutions</span>
              </h2>
              <p className="text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed">
                Leverage state-of-the-art artificial intelligence to automate processes, gain insights, and create exceptional experiences
              </p>
            </div>
            
            {/* Solutions with Images Grid */}
            <div className="space-y-20 mb-20">
              
              {/* Machine Learning & Analytics - Image Left */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Machine Learning Analytics"
                    className="rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl opacity-20"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="inline-flex p-4 rounded-xl shadow-lg" style={{background: `linear-gradient(to right, #f97316, #ea580c)`}}>
                    <LineChart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-blue-900">Machine Learning & Analytics</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Unlock patterns in your data and make accurate predictions about future trends and behaviors with our advanced ML solutions.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#f97316'}}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-blue-700">Predictive maintenance and forecasting</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#f97316'}}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-blue-700">Customer behavior analysis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#f97316'}}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-blue-700">Risk assessment and fraud detection</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={() => handleLearnMore('machineLearning')}
                    className="text-white" 
                    style={{backgroundColor: '#f97316'}}
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Intelligent Automation - Image Right */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 lg:order-1">
                  <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-blue-900">Intelligent Automation</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Automate complex business processes with AI-driven robots and intelligent workflows that adapt and learn.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-blue-700">Robotic Process Automation (RPA)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-blue-700">Document processing and extraction</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-blue-700">Workflow optimization</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={() => handleLearnMore('intelligentAutomation')}
                    className="bg-blue-900 hover:bg-blue-800 text-white"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="relative order-1 lg:order-2">
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Intelligent Automation"
                    className="rounded-2xl shadow-xl"
                  />
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl opacity-20"></div>
                </div>
              </div>

              {/* Natural Language Processing - Image Left */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Natural Language Processing"
                    className="rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl opacity-20"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="inline-flex p-4 rounded-xl shadow-lg" style={{background: `linear-gradient(to right, #f97316, #ea580c)`}}>
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-blue-900">Natural Language Processing</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Enable machines to understand, interpret, and respond to human language naturally with advanced NLP.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#f97316'}}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-blue-700">Intelligent chatbots and virtual assistants</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#f97316'}}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-blue-700">Sentiment analysis and text mining</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#f97316'}}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-blue-700">Language translation and localization</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={() => handleLearnMore('naturalLanguageProcessing')}
                    className="text-white" 
                    style={{backgroundColor: '#f97316'}}
                  >
                    Discover NLP Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Computer Vision - Image Right */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 lg:order-1">
                  <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-blue-900">Computer Vision</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Extract meaningful information from images and videos to automate visual tasks and gain insights.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-blue-700">Object detection and recognition</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-blue-700">Quality inspection and defect detection</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-blue-700">Facial recognition and biometrics</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={() => handleLearnMore('computerVision')}
                    className="bg-blue-900 hover:bg-blue-800 text-white"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="relative order-1 lg:order-2">
                  <img 
                    src="https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Computer Vision"
                    className="rounded-2xl shadow-xl"
                  />
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl opacity-20"></div>
                </div>
              </div>
            </div>
            
          </div>
        </section>


        {/* Industry Applications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Industry <span className="text-orange-500">Applications</span>
              </h2>
              <p className="text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed">
                AI solutions tailored for specific industries and use cases
              </p>
            </div>

            {/* Industry Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl border border-blue-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">Healthcare</h3>
                <p className="text-gray-600 text-sm">Medical imaging, diagnosis assistance, drug discovery, and patient care optimization.</p>
              </div>

              <div className="group bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-2xl border border-orange-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">Finance</h3>
                <p className="text-gray-600 text-sm">Fraud detection, algorithmic trading, risk assessment, and automated compliance.</p>
              </div>

              <div className="group bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl border border-blue-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">Manufacturing</h3>
                <p className="text-gray-600 text-sm">Predictive maintenance, quality control, supply chain optimization, and robotics.</p>
              </div>

              <div className="group bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-2xl border border-orange-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">Retail</h3>
                <p className="text-gray-600 text-sm">Personalized recommendations, inventory management, price optimization, and customer insights.</p>
              </div>
            </div>

          </div>
        </section>

        {/* AI Implementation Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Our AI Implementation <span className="text-orange-500">Process</span>
              </h2>
              <p className="text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed">
                A structured approach to successfully integrate AI into your business operations
              </p>
            </div>

            {/* Process Steps */}
            <div className="space-y-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4" style={{backgroundColor: '#f97316'}}>1</div>
                    <h3 className="text-2xl font-bold text-blue-900">Assessment & Strategy</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    We analyze your current processes, identify AI opportunities, and develop a comprehensive strategy aligned with your business goals.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-900">5-10</div>
                        <div className="text-sm text-blue-600">Business Days</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">100%</div>
                        <div className="text-sm text-orange-600">Custom Strategy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">2</div>
                    <h3 className="text-2xl font-bold text-blue-900">Development & Training</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our experts develop and train AI models using your data, ensuring optimal performance and accuracy for your specific use cases.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-900">95%+</div>
                        <div className="text-sm text-blue-600">Accuracy Rate</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">24/7</div>
                        <div className="text-sm text-orange-600">Monitoring</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4" style={{backgroundColor: '#f97316'}}>3</div>
                    <h3 className="text-2xl font-bold text-blue-900">Deployment & Integration</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Seamless integration with your existing systems, ensuring minimal disruption while maximizing the benefits of AI implementation.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-900">Zero</div>
                        <div className="text-sm text-blue-600">Downtime</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">Ongoing</div>
                        <div className="text-sm text-orange-600">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Our <span className="text-orange-500">Technology Stack</span>
              </h2>
              <p className="text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed">
                Cutting-edge tools and frameworks we use to build intelligent solutions
              </p>
            </div>

            {/* Tech Categories */}
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Machine Learning */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  Machine Learning
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    TensorFlow & PyTorch
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    Scikit-learn & Pandas
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    Azure ML & AWS SageMaker
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    Jupyter & MLflow
                  </div>
                </div>
              </div>

              {/* Deep Learning */}
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100">
                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
                    <Network className="w-4 h-4 text-white" />
                  </div>
                  Deep Learning
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    Neural Networks & CNNs
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    LSTM & Transformers
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    OpenAI GPT & BERT
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    Computer Vision APIs
                  </div>
                </div>
              </div>

              {/* Cloud & Infrastructure */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <Cloud className="w-4 h-4 text-white" />
                  </div>
                  Cloud & Infrastructure
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    Microsoft Azure
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    AWS & Google Cloud
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    Docker & Kubernetes
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    REST APIs & GraphQL
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80" 
              alt="AI Technology Future"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-orange-600/90"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-6xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Transform with <span className="text-orange-400">AI?</span>
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Let's discuss how artificial intelligence can revolutionize your business operations and unlock new opportunities for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AuthButton 
                  href="/contact"
                  requireAuth={true}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </AuthButton>
                <Button 
                  asChild
                  variant="outline"
                  className="border-2 text-white hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-[#f97316]"
                  style={{borderColor: '#f97316', backgroundColor: 'transparent'}}
                >
                  <a href="/services">
                    Explore All Services
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedService(null);
          }}
          service={selectedService}
        />
      )}
    </PageLayout>
  );
}