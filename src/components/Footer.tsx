import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-headline font-bold mb-4">
              Don't miss out and get insider access
            </h3>
            <p className="text-lg text-white/80 mb-8">
              News around the latest innovation in the digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold">Netways</span>
            </div>
            <p className="text-white/80 mb-6">
              Leading enterprise digital transformation through intelligent solutions and innovative technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/NetwaysGlobal" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="http://www.twitter.com/netwaysglobal" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCF-7KOCft8X-G6k4ANuQtnQ" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/netways" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/intelligent" className="text-white/80 hover:text-white transition-colors">Intelligent Transformation</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/solutions" className="text-white/80 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/industries" className="text-white/80 hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/case-studies-listing" className="text-white/80 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/our-partners" className="text-white/80 hover:text-white transition-colors">Partners</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Industries</h4>
            <ul className="space-y-3">
              <li><Link to="/financialservices" className="text-white/80 hover:text-white transition-colors">Financial Services</Link></li>
              <li><Link to="/government" className="text-white/80 hover:text-white transition-colors">Government</Link></li>
              <li><Link to="/manufacture" className="text-white/80 hover:text-white transition-colors">Manufacturing</Link></li>
              <li><Link to="/education" className="text-white/80 hover:text-white transition-colors">Education</Link></li>
              <li><Link to="/retail" className="text-white/80 hover:text-white transition-colors">Retail</Link></li>
              <li><Link to="/healthcare" className="text-white/80 hover:text-white transition-colors">Healthcare</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 text-white/60" />
                <div>
                  <p className="text-white/80">24/7 Customer Care</p>
                  <a href="https://netwayscare.powerappsportals.com/" 
                     className="text-white hover:text-white/80 transition-colors">
                    Support Portal
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-white/60" />
                <div>
                  <p className="text-white/80">Global Locations</p>
                  <Link to="/findlocation" className="text-white hover:text-white/80 transition-colors">
                    Find Locations
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 text-white/60" />
                <div>
                  <p className="text-white/80">Get in Touch</p>
                  <Link to="/contactus" className="text-white hover:text-white/80 transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <p className="text-white/60 text-sm">
              © 2024 Netways. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacypolicy" className="text-white/60 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/aboutus" className="text-white/60 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/career" className="text-white/60 hover:text-white transition-colors text-sm">
                Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;