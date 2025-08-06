import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from 'lucide-react';
import heroBrain from '@/assets/hero-brain.jpg';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  overlay?: boolean;
}

const HeroSection = ({ 
  title = "Intelligence of Everything",
  subtitle = "Intelligent Digital Transformation", 
  description = "Transform your enterprise with intelligent solutions that drive innovation, optimize operations, and create exceptional experiences.",
  primaryCTA = { text: "Get Started", href: "/contactus" },
  secondaryCTA = { text: "Watch Demo", href: "#demo" },
  backgroundImage = heroBrain,
  overlay = true
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      )}
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-brand-primary/20 to-transparent rounded-full animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-brand-secondary/20 to-transparent rounded-full animate-pulse delay-1000" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-hero font-bold mb-6 animate-fade-in">
            <span className="block">{title}</span>
            <span className="block text-gradient bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {subtitle}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed animate-slide-up">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-4 group"
              asChild
            >
              <a href={primaryCTA.href}>
                {primaryCTA.text}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 group"
              asChild
            >
              <a href={secondaryCTA.href}>
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                {secondaryCTA.text}
              </a>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;