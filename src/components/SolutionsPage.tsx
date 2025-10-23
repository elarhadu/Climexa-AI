// import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Counter } from './Counter';
import { 
  Droplets, 
  Shield, 
  Wheat, 
  ArrowRight,
  Zap,
  Sprout,
  Snowflake,
  Brain
} from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: string) => void;
}

export function SolutionsPage({ onNavigate }: SolutionsPageProps) {
  const solutions = [
    {
      id: 'energy-plus',
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Energy+",
      description: "Autonomous AgriPV power for homes and farms. Generate clean energy while optimizing crop yields with intelligent solar panel positioning.",
      features: [
        "AgriPV solar panel installation",
        "Dual-purpose land optimization",
        "Energy storage systems",
        "Grid integration and backup power"
      ],
      badge: "Core Module",
      image: "energy"
    },
    {
      id: 'water-plus',
      icon: <Droplets className="h-8 w-8 text-secondary" />,
      title: "Water+",
      description: "Borehole pumping, AI-driven treatment, and potable water delivery. Ensure clean, safe water for both irrigation and household use.",
      features: [
        "Smart borehole pumping systems",
        "AI-powered water treatment",
        "Real-time quality monitoring",
        "Automated distribution networks"
      ],
      badge: "Essential Module",
      image: "water"
    },
    {
      id: 'irrigate-plus',
      icon: <Sprout className="h-8 w-8 text-accent" />,
      title: "Irrigate+",
      description: "Smart irrigation system with soil & weather forecasting. Optimize water usage with AI-driven precision agriculture.",
      features: [
        "Soil moisture sensor networks",
        "Weather pattern analysis",
        "Precision irrigation control",
        "Crop-specific optimization"
      ],
      badge: "AI-Powered",
      image: "irrigation"
    },
    {
      id: 'preserve-plus',
      icon: <Snowflake className="h-8 w-8 text-primary" />,
      title: "Preserve+",
      description: "Solar cold-chain storage for crops, reducing food loss. Extend shelf life and ensure food security with renewable-powered preservation.",
      features: [
        "Solar-powered cold storage",
        "Temperature-controlled environments",
        "Post-harvest loss reduction",
        "Food security optimization"
      ],
      badge: "Storage Module",
      image: "preservation"
    },
    {
      id: 'climafarm-platform',
      icon: <Brain className="h-8 w-8 text-accent" />,
      title: "Climexa AI Platform",
      description: "The brain that integrates all modules into one seamless, self-running system. Complete automation and coordination of your agricultural ecosystem.",
      features: [
        "Unified AI management platform",
        "Automated system coordination",
        "Predictive analytics and insights",
        "Minimal human intervention"
      ],
      badge: "Integration Hub",
      image: "platform"
    }
  ];

  const stats = [
    { 
      label: "Significant Water Savings", 
      value: "", 
      suffix: "", 
      icon: <Droplets className="h-5 w-5 text-green-500" /> 
    },
    { 
      label: "Improved Crop Yield and Consistency", 
      value: "", 
      suffix: "", 
      icon: <Wheat className="h-5 w-5 text-green-500" /> 
    },
    { 
      label: "Reduced Post-Harvest Losses", 
      value: "", 
      suffix: "", 
      icon: <Snowflake className="h-5 w-5 text-green-500" /> 
    },
    { 
      label: "Lower Carbon Footprint and Cleaner Energy Use", 
      value: "", 
      suffix: "", 
      icon: <Shield className="h-5 w-5 text-green-500" /> 
    }
  ];

  const differentiators = [
    {
      icon: "🔄",
      title: "Fully Integrated",
      description: "One platform for power, water, irrigation, and preservation."
    },
    {
      icon: "🧠",
      title: "AI-Driven",
      description: "Smart forecasts and automation for minimal human effort."
    },
    {
      icon: "⚡",
      title: "Energy-Aware",
      description: "Adapts operations to available solar power."
    },
    {
      icon: "🌍",
      title: "Community Impact",
      description: "Improves food security, resilience, and livelihoods."
    },
    {
      icon: "📊",
      title: "Scalable",
      description: "Works for single farms, villages, and regional clusters."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Comprehensive Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Integrated Climate-Smart{' '}
              <span className="text-primary">Agricultural Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Our comprehensive suite of AI-powered tools and systems work together to create 
              a sustainable, efficient, and profitable farming operation.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-sm font-semibold text-green-800">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Our Solutions Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each solution is designed to work independently or as part of an integrated 
              system, providing flexibility and scalability for farms of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, _index) => (
              <Card key={solution.id} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      {solution.icon}
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {solution.title}
                        </CardTitle>
                        <Badge variant="outline" className="mt-1">
                          {solution.badge}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => onNavigate('contact')}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Climexa AI Is Different */}
      <section className="py-20 bg-gradient-to-br from-green-100 to-green-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900">
              Why Climexa AI Is Different
            </h2>
            <p className="text-lg text-green-700">
              Our integrated approach sets us apart from traditional agricultural solutions 
              by creating a complete ecosystem that works together seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {differentiators.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 bg-white border-green-200 hover:border-green-300">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-green-900">{item.title}</h3>
                  <p className="text-green-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Seamless Integration
            </h2>
            <p className="text-lg text-muted-foreground">
              All solutions are built on a unified platform, ensuring seamless data flow, 
              coordinated operations, and maximum efficiency across your entire farm ecosystem.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">1</span>
                    </div>
                  </div>
                  <CardTitle>Unified Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Monitor all systems from a single, comprehensive dashboard with real-time data and insights.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                      <span className="text-secondary-foreground font-bold">2</span>
                    </div>
                  </div>
                  <CardTitle>AI Coordination</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Advanced AI algorithms coordinate between systems for optimal resource allocation and timing.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <span className="text-accent-foreground font-bold">3</span>
                    </div>
                  </div>
                  <CardTitle>Scalable Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Modular design allows you to start with specific solutions and expand as your needs grow.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Implement These Solutions?
            </h2>
            <p className="text-lg opacity-90">
              Our team of experts will work with you to design and implement the perfect 
              combination of solutions for your specific farming needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="text-base bg-white text-green-700 hover:bg-green-50"
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="text-base border-white text-green-700 hover:bg-white hover:text-green-700"
              >
                View Platform Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}