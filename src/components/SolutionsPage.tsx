// import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  BarChart3, 
  Droplets, 
  Shield, 
  Wheat, 
  Wrench,
  ArrowRight,
  Zap,
  Gauge,
  Activity
} from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: string) => void;
}

export function SolutionsPage({ onNavigate }: SolutionsPageProps) {
  const solutions = [
    {
      id: 'energy-dashboard',
      icon: <BarChart3 className="h-8 w-8 text-yellow-500" />,
      title: "Energy Dashboard",
      description: "Monitor and optimize your agrivoltaic system performance with real-time energy generation tracking, weather forecasting, and intelligent panel positioning.",
      features: [
        "Real-time energy generation monitoring",
        "Weather-based optimization algorithms", 
        "ROI tracking and reporting",
        "Grid integration management"
      ],
      badge: "Core Platform",
      image: "energy"
    },
    {
      id: 'smart-irrigation',
      icon: <Droplets className="h-8 w-8 text-blue-500" />,
      title: "Smart Irrigation",
      description: "AI-powered irrigation system that analyzes soil moisture, weather patterns, and crop needs to deliver precise water management.",
      features: [
        "Soil moisture sensor integration",
        "Weather pattern analysis",
        "Crop-specific water scheduling",
        "Water usage optimization"
      ],
      badge: "AI-Powered",
      image: "irrigation"
    },
    {
      id: 'water-quality',
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Water Quality & Treatment",
      description: "Advanced monitoring and treatment systems ensure clean, safe water for irrigation while maintaining optimal nutrient levels.",
      features: [
        "Real-time water quality monitoring",
        "Automated treatment systems",
        "Nutrient level optimization",
        "Contamination detection alerts"
      ],
      badge: "Environmental",
      image: "water"
    },
    {
      id: 'crop-preservation',
      icon: <Wheat className="h-8 w-8 text-amber-500" />,
      title: "Crop Preservation",
      description: "Protect and optimize crop growth with environmental monitoring, disease detection, and climate-controlled microenvironments.",
      features: [
        "Disease and pest detection",
        "Climate monitoring & control",
        "Growth pattern analysis",
        "Harvest optimization"
      ],
      badge: "Smart Agriculture",
      image: "crops"
    },
    {
      id: 'predictive-maintenance',
      icon: <Wrench className="h-8 w-8 text-purple-500" />,
      title: "Predictive Maintenance",
      description: "Prevent costly equipment failures with AI-powered maintenance scheduling and equipment health monitoring.",
      features: [
        "Equipment health monitoring",
        "Failure prediction algorithms",
        "Maintenance scheduling automation",
        "Cost optimization insights"
      ],
      badge: "Predictive AI",
      image: "maintenance"
    },
    {
      id: 'analytics-platform',
      icon: <Activity className="h-8 w-8 text-indigo-500" />,
      title: "Analytics Platform",
      description: "Comprehensive data analytics and insights platform providing actionable intelligence for farm operations and sustainability metrics.",
      features: [
        "Performance analytics dashboard",
        "Sustainability reporting",
        "ROI and cost analysis",
        "Predictive modeling"
      ],
      badge: "Business Intelligence",
      image: "analytics"
    }
  ];

  const stats = [
    { label: "Water Savings", value: "40%", icon: <Droplets className="h-5 w-5 text-blue-500" /> },
    { label: "Energy Generation", value: "25MW", icon: <Zap className="h-5 w-5 text-yellow-500" /> },
    { label: "Crop Yield Increase", value: "18%", icon: <Wheat className="h-5 w-5 text-green-500" /> },
    { label: "Maintenance Cost Reduction", value: "35%", icon: <Gauge className="h-5 w-5 text-purple-500" /> }
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
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
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

      {/* Integration Section */}
      <section className="py-20 bg-muted/50">
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
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
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
                className="text-base"
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onNavigate('dashboard')}
                className="text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
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