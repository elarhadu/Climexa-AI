import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { 
  Sun, 
  Droplets, 
  Sprout, 
  Snowflake, 
  Brain,
  Shield,
  Thermometer,
  BarChart3,
  Play
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
      icon: <Sun className="h-12 w-12 text-white" />,
      videoUrl: "", // Replace with actual video URLs
      color: "from-green-500 to-green-600"
    },
    {
      number: 2,
      title: "Pump & Purify Water",
      description: "AI-driven borehole and treatment systems deliver safe, potable water to households.",
      icon: <Droplets className="h-12 w-12 text-white" />,
      videoUrl: "", // Replace with actual video URLs
      color: "from-green-500 to-green-600"
    },
    {
      number: 3,
      title: "Smart Irrigation",
      description: "Soil and weather sensors feed AI models that decide when and how much to irrigate.",
      icon: <Sprout className="h-12 w-12 text-white" />,
      videoUrl: "", // Replace with actual video URLs
      color: "from-green-400 to-green-500"
    },
    {
      number: 4,
      title: "Crop Preservation",
      description: "Solar-powered cold storage reduces post-harvest losses and ensures food security.",
      icon: <Snowflake className="h-12 w-12 text-white" />,
      videoUrl: "", // Replace with actual video URLs
      color: "from-green-500 to-green-400"
    },
    {
      number: 5,
      title: "Data & Automation",
      description: "The Climexa AI software manages energy, water, and crop systems seamlessly, with minimal human input.",
      icon: <Brain className="h-12 w-12 text-white" />,
      videoUrl: "", // Replace with actual video URLs
      color: "from-green-400 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto bg-green-600 text-white">
              Our Process
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              How{' '}
              <span className="text-green-300">Climexa AI</span>{' '}
              Works
            </h1>
            <p className="text-lg text-green-100">
              Our integrated system combines renewable energy, smart water management, and AI automation 
              to create a self-sustaining agricultural ecosystem that works for communities.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Process Visualization */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900">
              Interactive Process Overview
            </h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              Click on each section to explore how our integrated systems work together to create 
              a complete sustainable farming solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <Dialog key={step.number}>
                <DialogTrigger asChild>
                  <Card className="hover:shadow-xl transition-all duration-300 group cursor-pointer bg-white border-green-200 hover:border-green-400">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-green-900">
                            {step.title}
                          </h3>
                          <p className="text-sm text-green-600 mt-1">
                            Step {step.number} of 5
                          </p>
                        </div>
                      </div>
                      <p className="text-base text-green-700">
                        {step.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="mt-4 pt-4 border-t border-green-200">
                        <div className="flex items-center justify-center space-x-2 text-green-600 font-medium">
                          <Play className="h-4 w-4" />
                          <span>Click to view detailed process video</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-green-900">
                      {step.title} - Process Video
                    </DialogTitle>
                  </DialogHeader>
                  <div className="aspect-video w-full">
                    <iframe
                      src={step.videoUrl}
                      title={`${step.title} Process Video`}
                      className="w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gradient-to-br from-green-100 to-green-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900">
              Why This Approach Works
            </h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              Our integrated system approach ensures maximum efficiency and sustainability 
              by connecting all components into one cohesive solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 group border-2 hover:border-green-300 bg-white">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-green-900">Data-Driven Decisions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-green-700">
                  AI analyzes real-time data from all systems to optimize performance 
                  and resource allocation automatically.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 group border-2 hover:border-green-300 bg-white">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Thermometer className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-green-900">Self-Regulating Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-green-700">
                  All components work together to maintain optimal conditions with 
                  minimal human intervention required.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 group border-2 hover:border-green-300 bg-white">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-green-900">Community Resilience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-green-700">
                  Provides reliable access to clean energy, water, and food security 
                  for entire communities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
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
                className="text-base bg-white text-green-700 hover:bg-green-50"
              >
                Explore Solutions
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="text-base border-white text-white hover:bg-white hover:text-green-700"
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
