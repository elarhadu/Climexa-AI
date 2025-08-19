// import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Cpu, 
  Droplets, 
  Sun, 
  BarChart3, 
  Zap, 
  Shield, 
  // Target, 
  AlertTriangle,
  Star,
  ArrowRight,
  Mail
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const platformFeatures = [
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "AI Automation",
      description: "Advanced machine learning for predictive farming decisions"
    },
    {
      icon: <Zap className="h-8 w-8 text-secondary" />,
      title: "Smart Energy",
      description: "Agrivoltaic systems that optimize energy production and crop yield"
    },
    {
      icon: <Droplets className="h-8 w-8 text-blue-500" />,
      title: "Water Management",
      description: "Precision irrigation and water quality monitoring"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-accent" />,
      title: "Analytics",
      description: "Real-time insights and performance tracking"
    }
  ];

  const benefits = [
    {
      icon: <Droplets className="h-6 w-6 text-blue-500" />,
      title: "Optimize Irrigation",
      description: "AI-driven water management reduces usage by up to 40% while improving crop health."
    },
    {
      icon: <Sun className="h-6 w-6 text-yellow-500" />,
      title: "Smarter Energy Use",
      description: "Generate clean energy above crops with intelligent solar panel positioning."
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "Ensure Clean Water",
      description: "Advanced filtration and monitoring systems maintain water purity."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-orange-500" />,
      title: "Predict Failures",
      description: "Proactive maintenance alerts prevent costly equipment breakdowns."
    }
  ];

  const testimonials = [
    {
      quote: "ClimaFarm AI has transformed our irrigation efficiency by 35%. The predictive analytics are game-changing.",
      author: "Jane Doe",
      role: "Farm Manager",
      company: "XYZ Farms",
      rating: 5
    },
    {
      quote: "The agrivoltaic system increased our energy independence while maintaining crop yields. Excellent ROI.",
      author: "John Doe",
      role: "Agricultural Director",
      company: "Sustainable Acres",
      rating: 5
    },
    {
      quote: "Water quality monitoring has never been this precise. We can detect issues before they impact our crops.",
      author: "Jane Doe",
      role: "Operations Manager",
      company: "EcoHarvest Co.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Climate-Tech Innovation
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  AI-Powered Farming for a{' '}
                  <span className="text-primary">Sustainable Future</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Transform your agricultural operations with our comprehensive agrivoltaic platform. 
                  Harness the power of AI to optimize irrigation, generate clean energy, and ensure 
                  sustainable farming practices for generations to come.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => onNavigate('dashboard')}
                  className="text-base"
                >
                  Discover Our Platform
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => onNavigate('contact')}
                  className="text-base"
                >
                  Get Involved
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdXN0YWluYWJsZSUyMGZhcm0lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NTQ2OTYxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern sustainable farming technology"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              The ClimaFarm AI™ Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our integrated solution combines cutting-edge AI with proven agricultural practices 
              to deliver unprecedented efficiency and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Transformative Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience measurable improvements in efficiency, sustainability, and profitability 
              with our comprehensive climate-smart farming solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {benefit.icon}
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from our pilot partners who are already experiencing the benefits of 
              ClimaFarm AI™ technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-1">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-lg opacity-90">
              Join the sustainable agriculture revolution. Partner with us to bring 
              ClimaFarm AI™ to your community and create a more resilient future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="text-base"
              >
                Partner with Us
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onNavigate('about')}
                className="text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-bold">Stay Updated</h3>
            <p className="text-muted-foreground">
              Get the latest insights on sustainable farming and climate technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="px-6">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}