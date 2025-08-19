import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Target, 
  Eye, 
  Heart, 
  Linkedin, 
  Mail,
  Users,
  Award,
  Globe,
  Lightbulb
} from 'lucide-react';
import Naa from "../assets/naa.jpeg"
import Manuel from "../assets/manuel.jpeg"
import Emmanuella from "../assets/emmanuella.jpeg"

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const teamMembers = [
    {
      name: "Naa Okailey El-Cathedral Narh",
      role: "CEO & Co-Founder",
      bio: "Dedicated to addressing energy challenges in Africa by developing sustainable and innovative solutions that empower underserved communities and drive meaningful societal impact.",
      image: Naa,
      linkedin: "https://www.linkedin.com/in/naa-okailey-ayitey/",
      email: "naaokailey.ayitey.noa@gmail.com"
    },
    {
      name: "Manuel El-Cathedral Narh",
      role: "COO & Co-Founder",
      bio: "Passionate about driving transformative change across Africa, leveraging innovation and sustainable solutions to create meaningful impact for communities.",
      image: Manuel,
      linkedin: "https://www.linkedin.com/in/manuel-tetteh-narh/",
      email: "t.emmanuellilastan@gmail.com"
    },
    {
      name: "Emmanuella Adu",
      role: "CTO & Co-Founder",
      bio: "Passionate about building data-driven solutions to optimize sustainable farming and advance climate-smart agriculture.",
      image: Emmanuella, 
      linkedin: "https://www.linkedin.com/in/emmanuella-adu/",
      email: "elarhadu@gmail.com"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We pioneer cutting-edge solutions that push the boundaries of agricultural technology and sustainability."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Sustainability",
      description: "Every decision is guided by our commitment to environmental stewardship and future generations."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Partnership",
      description: "We believe in collaborative relationships with farmers, communities, and stakeholders."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: "Excellence",
      description: "We strive for the highest standards in technology, service, and environmental impact."
    }
  ];

  const milestones = [
    {
      year: "2025",
      title: "Project Kickoff",
      description: "ClimaFarm AI™ was founded to bring climate-smart agricultural solutions to African farmers."
    },
    {
      year: "2025",
      title: "Prototype Development",
      description: "Built initial versions of our AI-powered platform and agrivoltaic system for pilot testing."
    },
    {
      year: "2026",
      title: "Pilot Program",
      description: "Launch first pilot with partner farms to validate technology and gather performance data."
    },
    {
      year: "2026",
      title: "Platform Expansion",
      description: "Refine and scale the platform for broader adoption across multiple farms and regions."
    },
    {
      year: "2027",
      title: "Commercial Launch",
      description: "Full commercial launch offering comprehensive AI-driven solutions for sustainable agriculture."
    }
  ];
  

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Our Story
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Building Climate Resilience Through{' '}
                <span className="text-primary">Smart Agriculture</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Born from the urgent need to address climate change while feeding a growing population, 
                ClimaFarm AI™ represents the convergence of cutting-edge technology and sustainable 
                farming practices.
              </p>
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="text-base"
              >
                Join Our Mission
              </Button>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1715605569625-1ec3b5624a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1NTQ2OTYxNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Solar panels in agricultural setting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                The ClimaFarm AI™ Story
              </h2>
              <p className="text-lg text-muted-foreground">
                Our journey began with a simple yet powerful vision: transform agriculture 
                into a force for climate resilience and sustainability.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-muted-foreground">
                <p>
                In 2025, a group of passionate innovators came together with a shared goal: to support 
                African farmers and communities by addressing critical challenges in energy access, 
                water management, and sustainable agriculture.
                </p>
                <p>
                We imagined a future where farms could thrive while regenerating the environment, 
                leveraging technology to work in harmony with nature. This vision inspired the creation 
                of ClimaFarm AI™ – a platform integrating AI-driven solutions and climate-smart farming practices.
                </p>
                <p>
                As we launch our project, our focus is on piloting solutions that improve water efficiency, 
                optimize energy use, and enhance farm productivity, laying the foundation for sustainable 
                and resilient agricultural systems across the continent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-6">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  To empower farmers worldwide with AI-driven, sustainable agricultural solutions 
                  that enhance productivity, reduce environmental impact, and build climate resilience 
                  for future generations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-6">
                <Eye className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  A world where agriculture is a net positive force for climate recovery, where 
                  every farm contributes to carbon sequestration, clean energy generation, and 
                  ecosystem restoration while producing nutritious food.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we develop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Meet Our Founding Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our diverse team brings together expertise in climate science, artificial intelligence, 
              agriculture, and sustainable technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm">
                    {member.bio}
                  </CardDescription>
                  <div className="flex justify-center space-x-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Key milestones in our mission to transform sustainable agriculture.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">
                        {milestone.year.slice(-2)}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-medium">{milestone.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {milestone.year}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Join Us in Transforming Agriculture
            </h2>
            <p className="text-lg opacity-90">
              Whether you're a farmer, investor, researcher, or sustainability advocate, 
              there's a place for you in our mission to create a more resilient food system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="text-base"
              >
                Get Involved
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onNavigate('solutions')}
                className="text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}