import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Globe,
  Linkedin,
  Twitter,
  MessageSquare
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    farmSize: '',
    inquiryType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        farmSize: '',
        inquiryType: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Us",
      details: "info@climafarm.ai",
      description: "General inquiries and support"
    },
    {
      icon: <Phone className="h-6 w-6 text-secondary" />,
      title: "Call Us",
      details: "+44 1234 567890",
      description: "Monday - Friday, 9 AM - 6 PM"
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: "Visit Us",
      details: "United Kingdom",
      description: "Schedule an appointment"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-500" />,
      title: "Live Chat",
      details: "Available on our website",
      description: "Real-time support during business hours"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn", url: "#" },
    { icon: <Twitter className="h-5 w-5" />, name: "Twitter", url: "#" },
    { icon: <Globe className="h-5 w-5" />, name: "Website", url: "#" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Get In Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Contact{' '}
              <span className="text-primary">ClimaFarm AI™</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to transform your agricultural operations? We're here to help you explore 
              how our AI-powered solutions can benefit your farm. Get in touch with our experts today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-green-800 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-green-600">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company/Farm Name</Label>
                          <Input
                            id="company"
                            type="text"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            placeholder="Your organization"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="farmSize">Farm Size</Label>
                          <Select onValueChange={(value) => handleInputChange('farmSize', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select farm size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="small">Small (&lt; 50 acres)</SelectItem>
                              <SelectItem value="medium">Medium (50-500 acres)</SelectItem>
                              <SelectItem value="large">Large (500-2000 acres)</SelectItem>
                              <SelectItem value="enterprise">Enterprise (&gt; 2000 acres)</SelectItem>
                              <SelectItem value="other">Other/Not applicable</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type *</Label>
                        <Select onValueChange={(value) => handleInputChange('inquiryType', value)} required>
                          <SelectTrigger>
                            <SelectValue placeholder="What can we help you with?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="demo">Schedule a Demo</SelectItem>
                            <SelectItem value="pricing">Pricing Information</SelectItem>
                            <SelectItem value="technical">Technical Questions</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                            <SelectItem value="investment">Investment Inquiries</SelectItem>
                            <SelectItem value="support">Customer Support</SelectItem>
                            <SelectItem value="media">Media/Press Inquiries</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Tell us more about your needs and how we can help..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        By submitting this form, you agree to our privacy policy and terms of service.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                <p className="text-muted-foreground mb-6">
                  Our team is here to help you explore how ClimaFarm AI™ can transform 
                  your agricultural operations.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        {info.icon}
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{info.title}</h4>
                          <p className="text-primary font-medium mb-1">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Office Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <CardDescription>
                    Stay connected for the latest updates and insights
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Button key={index} variant="outline" size="sm">
                        {social.icon}
                        <span className="ml-2">{social.name}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-2xl font-bold">Find Us</h2>
            <p className="text-muted-foreground">
              Visit our headquarters in the heart of San Francisco's innovation district
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="h-12 w-12 text-primary mx-auto" />
                <div>
                  <h4 className="font-semibold">ClimaFarm AI™ Headquarters</h4>
                  <p className="text-muted-foreground">123 Innovation Drive</p>
                  <p className="text-muted-foreground">United Kingdom</p>
                </div>
                <Button variant="outline">
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our platform and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How quickly can I see results?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Most farms see initial improvements within 30-60 days of installation, 
                  with significant water savings and energy generation visible immediately.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What farm sizes do you support?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our platform scales from small family farms to large commercial operations. 
                  We customize solutions based on your specific size and needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer financing options?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Yes, we work with various financing partners to provide flexible payment 
                  options, including lease-to-own and performance-based agreements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What ongoing support do you provide?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We provide 24/7 system monitoring, regular maintenance, software updates, 
                  and dedicated customer support to ensure optimal performance.
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
              Ready to Start Your Sustainability Journey?
            </h2>
            <p className="text-lg opacity-90">
              Join the growing community of farmers who are building a more sustainable 
              and profitable future with ClimaFarm AI™.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => onNavigate('dashboard')}
                className="text-base"
              >
                View Platform Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onNavigate('about')}
                className="text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}