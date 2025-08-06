import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Intelligent Transformation', 
      href: '/intelligent'
    },
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { 
      label: 'Industries', 
      href: '/industries',
      submenu: [
        { label: 'Financial Services', href: '/financialservices' },
        { label: 'Government', href: '/government' },
        { label: 'Manufacturing', href: '/manufacture' },
        { label: 'Education', href: '/education' },
        { label: 'Retail', href: '/retail' },
        { label: 'Telecom', href: '/telecom' },
        { label: 'Healthcare', href: '/healthcare' },
      ]
    },
    { label: 'News', href: '/newslisting' },
    { label: 'Case Studies', href: '/case-studies-listing' },
    { label: 'Partners', href: '/our-partners' },
    { label: 'Careers', href: '/career' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-medium border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-2xl font-bold text-foreground">
              Netways
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                    location.pathname === item.href 
                      ? 'text-primary' 
                      : 'text-foreground'
                  }`}
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-strong opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href="https://netwayscare.powerappsportals.com/" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                24/7 Support
              </a>
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link to="/contactus">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className={`block px-4 py-3 text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === item.href 
                        ? 'text-primary bg-accent' 
                        : 'text-foreground'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4 space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://netwayscare.powerappsportals.com/" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4 mr-2" />
                    24/7 Support
                  </a>
                </Button>
                <Button variant="default" className="w-full" asChild>
                  <Link to="/contactus">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;