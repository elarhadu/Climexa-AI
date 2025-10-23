import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Globe } from 'lucide-react';
import climexaLogo from '../assets/climexaai_logo.jpeg';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'about', label: 'About Us' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'blog', label: 'Insights' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#aed581]/90 via-[#059669]/80 to-[#22553a]/90 backdrop-blur supports-[backdrop-filter]:bg-gradient-to-r supports-[backdrop-filter]:from-[#aed581]/90 supports-[backdrop-filter]:via-[#059669]/80 supports-[backdrop-filter]:to-[#22553a]/90 border-b border-[#aed581]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src={climexaLogo} 
                alt="Climexa AI " 
                className="h-28 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-[#fafafa] text-[#22553a] shadow-sm'
                      : 'text-[#fafafa] hover:bg-[#fafafa]/20 hover:text-[#fafafa]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-[#fafafa] hover:bg-[#fafafa]/20">
              <Globe className="h-4 w-4 mr-2" />
              EN
            </Button>
            <Button onClick={() => onNavigate('contact')} size="sm" className="bg-[#fafafa] text-[#22553a] hover:bg-[#fafafa]/90">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#fafafa] hover:bg-[#fafafa]/20"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-r from-[#aed581]/95 via-[#059669]/90 to-[#22553a]/95 border-t border-[#aed581]/30">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-[#fafafa] text-[#22553a] shadow-sm'
                      : 'text-[#fafafa] hover:bg-[#fafafa]/20 hover:text-[#fafafa]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 mt-4 px-3">
                <Button variant="ghost" size="sm" className="justify-start text-[#fafafa] hover:bg-[#fafafa]/20">
                  <Globe className="h-4 w-4 mr-2" />
                  Language: EN
                </Button>
                <Button onClick={() => onNavigate('contact')} size="sm" className="bg-[#fafafa] text-[#22553a] hover:bg-[#fafafa]/90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
