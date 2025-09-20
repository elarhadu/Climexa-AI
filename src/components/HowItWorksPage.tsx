import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Sun, 
  Droplets, 
  Sprout, 
  Snowflake, 
  Brain,
  Zap,
  Shield,
  Thermometer,
  BarChart3
} from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (page: string) => void;
}

export function HowItWorksPage({ onNavigate }: HowItWorksPageProps) {
  const steps = [
    {
      number: 1,
      title: "Generate Clean Energy",
      description: "AgriPV panels capture solar power for households and farm operations.",
      icon: <Sun className="h-12 w-12 text-primary" />,
      details: [
        "Solar panels positioned above crops",
        "Dual-purpose land use optimization",
        "Clean energy for farm and household use",
        "Reduced carbon footprint"
      ],
      color: "from-primary to-primary/80"
    },
    {
      number: 2,
      title: "Pump & Purify Water",
      description: "AI-driven borehole and treatment systems deliver safe, potable water to households.",
      icon: <Droplets className="h-12 w-12 text-primary" />,
      details: [
        "Smart borehole pumping systems",
        "AI-powered water treatment",
        "Real-time quality monitoring",
        "Safe drinking water delivery"
      ],
      color: "from-primary to-primary/80"
    },
    {
      number: 3,
      title: "Smart Irrigation",
      description: "Soil and weather sensors feed AI models that decide when and how much to irrigate.",
      icon: <Sprout className="h-12 w-12 text-accent" />,
      details: [
        "Soil moisture sensors",
        "Weather pattern analysis",
        "Precision water delivery",
        "Crop-specific optimization"
      ],
      color: "from-accent to-accent/80"
    },
    {
      number: 4,
      title: "Crop Preservation",
      description: "Solar-powered cold storage reduces post-harvest losses and ensures food security.",
      icon: <Snowflake className="h-12 w-12 text-primary" />,
      details: [
        "Solar-powered cold storage",
        "Temperature-controlled environments",
        "Post-harvest loss reduction",
        "Extended shelf life"
      ],
      color: "from-primary to-accent"
    },
    {
      number: 5,
      title: "Data & Automation",
      description: "The Climexa AI software manages energy, water, and crop systems seamlessly, with minimal human input.",
      icon: <Brain className="h-12 w-12 text-accent" />,
      details: [
        "Unified AI management platform",
        "Automated system coordination",
        "Predictive analytics",
        "Minimal human intervention"
      ],
      color: "from-accent to-primary"
    }
  ];

  const flowDiagram = [
    { icon: <Sun className="h-8 w-8" />, label: "AgriPV", color: "bg-primary" },
    { icon: <Zap className="h-8 w-8" />, label: "Energy Storage", color: "bg-accent" },
    { icon: <Droplets className="h-8 w-8" />, label: "Pump & Treatment", color: "bg-primary" },
    { icon: <Sprout className="h-8 w-8" />, label: "Smart Irrigation", color: "bg-accent" },
    { icon: <Snowflake className="h-8 w-8" />, label: "Cold Storage", color: "bg-primary" },
    { icon: <Shield className="h-8 w-8" />, label: "Households", color: "bg-accent" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Process
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              How{' '}
              <span className="text-primary">Climexa AI</span>{' '}
              Works
            </h1>
            <p className="text-lg text-muted-foreground">
              Our integrated system combines renewable energy, smart water management, and AI automation 
              to create a self-sustaining agricultural ecosystem that works for communities.
            </p>
          </div>
        </div>
      </section>

      {/* Flow Diagram */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Integrated System Flow
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Visual flow diagram showing how our systems work together to create a complete 
              sustainable farming solution.
            </p>
          </div>

          <div className="relative">
            {/* Background Flow Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-20 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
              {flowDiagram.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center space-y-4 group">
                    <div className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-all duration-300 relative z-10`}>
                      {item.icon}
                    </div>
                    <div className="text-center">
                      <span className="text-sm font-semibold text-foreground block">{item.label}</span>
                      <div className="w-8 h-0.5 bg-primary mx-auto mt-2 opacity-60"></div>
                    </div>
                    {/* Connection Arrow */}
                    {index < flowDiagram.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-4 h-0.5 bg-gradient-to-r from-primary to-accent opacity-40 transform translate-x-2"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-20"></div>
            
            <div className="space-y-24">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Step Number Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 z-10">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-background">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:flex-row items-center gap-12 pt-8">
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                        <CardHeader className="pb-4">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              {step.icon}
                            </div>
                            <div>
                              <h3 className="text-2xl sm:text-3xl font-bold">
                                {step.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                Step {step.number} of 5
                              </p>
                            </div>
                          </div>
                          <p className="text-lg text-muted-foreground">
                            {step.description}
                          </p>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                              Key Features
                            </h4>
                            <ul className="space-y-2">
                              {step.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                                  <span className="text-muted-foreground">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Visual Element */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                      <div className="relative">
                        <div className={`w-full h-64 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-2xl group-hover:scale-105 transition-transform duration-300`}>
                          <div className="text-center">
                            {step.icon}
                            <div className="mt-4 text-2xl font-bold">
                              {step.title.split(' ')[0]}
                            </div>
                          </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-60"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-40"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why This Approach Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our integrated system approach ensures maximum efficiency and sustainability 
              by connecting all components into one cohesive solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <BarChart3 className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-xl">Data-Driven Decisions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  AI analyzes real-time data from all systems to optimize performance 
                  and resource allocation automatically.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 group border-2 hover:border-secondary/20">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Thermometer className="h-8 w-8 text-secondary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-xl">Self-Regulating Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  All components work together to maintain optimal conditions with 
                  minimal human intervention required.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 group border-2 hover:border-accent/20">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shield className="h-8 w-8 text-accent-foreground" />
                  </div>
                </div>
                <CardTitle className="text-xl">Community Resilience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Provides reliable access to clean energy, water, and food security 
                  for entire communities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to See It in Action?
            </h2>
            <p className="text-lg opacity-90">
              Learn more about our solutions and how we can help transform your 
              agricultural operations with our integrated approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => onNavigate('solutions')}
                className="text-base"
              >
                Explore Solutions
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="text-base border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
