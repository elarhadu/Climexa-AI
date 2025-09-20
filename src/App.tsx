import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { SolutionsPage } from './components/SolutionsPage';
import { AboutPage } from './components/AboutPage';
import { HowItWorksPage } from './components/HowItWorksPage';
import { DashboardPage } from './components/DashboardPage';
import { BlogPage } from './components/BlogPage';
import { ContactPage } from './components/ContactPage';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Separator } from './components/ui/separator';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Globe,
  ChevronUp
} from 'lucide-react';
import climexaLogo from './assets/climexaai_logo.jpeg';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle page navigation
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Monitor scroll position for scroll-to-top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Render current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'solutions':
        return <SolutionsPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'how-it-works':
        return <HowItWorksPage onNavigate={handleNavigate} />;
      case 'dashboard':
        return <DashboardPage onNavigate={handleNavigate} />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  const footerLinks = {
    company: [
      { label: 'About Us', page: 'about' },
      { label: 'Our Team', page: 'about' },
      { label: 'Careers', page: 'contact' },
      { label: 'Press', page: 'blog' }
    ],
    solutions: [
      { label: 'Energy Dashboard', page: 'solutions' },
      { label: 'Smart Irrigation', page: 'solutions' },
      { label: 'Water Quality', page: 'solutions' },
      { label: 'Crop Preservation', page: 'solutions' }
    ],
    resources: [
      { label: 'Insights Hub', page: 'blog' },
      { label: 'Case Studies', page: 'blog' },
      { label: 'Documentation', page: 'contact' },
      { label: 'Support', page: 'contact' }
    ],
    legal: [
      { label: 'Privacy Policy', page: 'contact' },
      { label: 'Terms of Service', page: 'contact' },
      { label: 'Cookie Policy', page: 'contact' },
      { label: 'Compliance', page: 'contact' }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content */}
      <main>
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <img 
                  src={climexaLogo} 
                  alt="Climexa AI " 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-muted-foreground max-w-md">
                Transforming agriculture through AI-powered sustainable solutions. 
                Building climate resilience for farms and communities worldwide.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>United Kingdom</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+44 7555 819582</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>info@climexaai.com</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleNavigate(link.page)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Solutions</h4>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleNavigate(link.page)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleNavigate(link.page)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleNavigate(link.page)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Newsletter Signup */}
          <div className="mb-8">
            <div className="max-w-md mx-auto lg:mx-0 space-y-4">
              <h4 className="font-semibold">Stay Updated</h4>
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 Climexa AI ™. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <a href="https://www.linkedin.com/in/climexa-ai" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg z-50"
          size="sm"
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}