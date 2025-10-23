import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import heroVideo from '../assets/hero.mp4';
import { 
  Cpu, 
  Droplets, 
  Sun, 
  BarChart3, 
  Zap, 
  Shield, 
  AlertTriangle,
  ArrowRight,
  Mail
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const platformFeatures = [
    {
      icon: <Cpu className="h-8 w-8 text-[#059669]" />,
      title: "AI Automation",
      description: "Adaptive intelligence that learns from environmental, crop, and energy data to make real-time farming decisions, from irrigation scheduling to energy allocation with minimal human input."
    },
    {
      icon: <Zap className="h-8 w-8 text-[#059669]" />,
      title: "Smart Energy",
      description: "Agrivoltaic (AgriPV) systems that generate clean, reliable power while enhancing crop growth through optimized light distribution and temperature control."
    },
    {
      icon: <Droplets className="h-8 w-8 text-[#059669]" />,
      title: "Water Management",
      description: "Solar-powered boreholes and precision irrigation systems managed by AI models that forecast water needs, monitor quality, and ensure every drop counts."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-[#059669]" />,
      title: "Data & Analytics",
      description: "Real-time insights from integrated sensors and AI dashboards that track soil health, energy output, water usage, and system performance for continuous optimization."
    }
  ];

  const benefits = [
    {
      icon: <Droplets className="h-6 w-6 text-[#059669]" />,
      title: "Optimize Water Efficiency",
      description: "Intelligent irrigation powered by AI ensures precise water use and healthier, more resilient crops."
    },
    {
      icon: <Sun className="h-6 w-6 text-[#059669]" />,
      title: "Power Smarter, Live Greener",
      description: "Generate solar energy directly above your crops, powering homes, pumps, and processing equipment, all optimized through intelligent energy management."
    },
    {
      icon: <Shield className="h-6 w-6 text-[#059669]" />,
      title: "Secure Clean Water Access",
      description: "Integrated smart filtration systems provide safe, potable water for both farming and community use."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-[#059669]" />,
      title: "Predict, Prevent, and Protect",
      description: "Built-in AI maintenance diagnostics detect anomalies early, alerting users to prevent system failures and costly downtime."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-[1.5]"
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#22553A]/80 via-[#22553A]/70 to-[#22553A]/80"></div>
        </div>
        
        {/* Moving Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#AED581]/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#AED581]/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#059669]/5 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-[#059669] text-[#FAFAFA] mx-auto">
                  Climate-Tech Innovation
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAFAFA]">
                  Building Self-Sustaining{' '}
                  <span className="text-[#AED581]">Farms of the Future</span>
                </h1>
                <p className="text-lg text-[#FAFAFA] max-w-3xl mx-auto">
                  A unified technology platform combining solar energy and battery storage, smart irrigation, water purification, and AI-driven automation to make farming autonomous, sustainable, and profitable.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => onNavigate('how-it-works')}
                  className="text-base"
                >
                  How It Works
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => onNavigate('contact')}
                  className="text-base"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 bg-gradient-to-br from-[#AED581]/20 to-[#AED581]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#22553A]">
              The Climexa AI Platform
            </h2>
            <p className="text-lg text-[#37474F] max-w-3xl mx-auto">
              An autonomous climate-technology ecosystem that integrates AI, solar energy, water management, and smart agriculture into one self-sustaining platform. Designed to empower farms and communities, Climexa AI™ transforms resource use through data-driven automation and renewable energy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-[#FAFAFA] border-[#AED581] hover:border-[#059669]">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-[#22553A]">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-[#37474F]">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gradient-to-br from-[#AED581]/30 to-[#AED581]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#22553A]">
              Transformative Benefits
            </h2>
            <p className="text-lg text-[#37474F] max-w-3xl mx-auto">
              Experience autonomous, climate-resilient agriculture that maximizes productivity while minimizing waste, creating sustainable value for farms, households, and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-[#FAFAFA] border-[#AED581] hover:border-[#059669]">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {benefit.icon}
                    <CardTitle className="text-xl text-[#22553A]">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-[#37474F]">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Hidden for now */}
      {/* <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from our pilot partners who are already experiencing the benefits of 
              Climexa AI technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
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
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#22553A] to-[#059669] text-[#FAFAFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-lg opacity-90">
              Join the sustainable agriculture revolution. Partner with us to bring 
              Climexa AI to your community and create a more resilient future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="text-base bg-[#FAFAFA] text-[#22553A] hover:bg-[#AED581]"
              >
                Partner with Us
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onNavigate('about')}
                className="text-base border-[#FAFAFA] text-[#22553A] hover:bg-[#FAFAFA] hover:text-[#22553A]"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 border-t border-[#AED581] bg-[#AED581]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-bold text-[#22553A]">Stay Updated</h3>
            <p className="text-[#37474F]">
              Get the latest insights on sustainable farming and climate technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-[#AED581] bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#059669] text-[#37474F]"
              />
              <Button className="px-6 bg-[#059669] hover:bg-[#22553A] text-[#FAFAFA]">
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