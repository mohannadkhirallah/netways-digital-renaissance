import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { 
  Brain, 
  Users, 
  Zap, 
  Target, 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Shield,
  Globe,
  Cpu
} from 'lucide-react';

const Home = () => {
  const transformationPillars = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Engage",
      description: "Human Experience",
      points: [
        "Enhanced customer engagement through intelligent interfaces",
        "Personalized user experiences at scale",
        "Seamless omnichannel interactions",
        "Real-time sentiment analysis and response"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Empower", 
      description: "Mind Collaboration",
      points: [
        "AI-powered decision support systems",
        "Collaborative intelligence platforms",
        "Advanced analytics and insights",
        "Automated workflow optimization"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Optimize",
      description: "Thing Interaction",
      points: [
        "IoT ecosystem integration",
        "Smart device orchestration",
        "Predictive maintenance solutions",
        "Real-time operational intelligence"
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Transform",
      description: "Operation Optimization",
      points: [
        "End-to-end process transformation",
        "Intelligent automation implementation",
        "Data-driven strategic insights",
        "Continuous improvement frameworks"
      ]
    }
  ];

  const metrics = [
    { value: "40%", label: "IT Cost Reduction", description: "Average cost savings through optimization" },
    { value: "30%", label: "Call Time Decrease", description: "Improved customer service efficiency" },
    { value: "99.9%", label: "System Uptime", description: "Enterprise-grade reliability" },
    { value: "50%", label: "Faster Implementation", description: "Accelerated digital transformation" }
  ];

  const industries = [
    { name: "Financial Services", href: "/financialservices", icon: <TrendingUp className="w-6 h-6" /> },
    { name: "Government", href: "/government", icon: <Shield className="w-6 h-6" /> },
    { name: "Manufacturing", href: "/manufacture", icon: <Cpu className="w-6 h-6" /> },
    { name: "Healthcare", href: "/healthcare", icon: <Globe className="w-6 h-6" /> },
    { name: "Education", href: "/education", icon: <Users className="w-6 h-6" /> },
    { name: "Retail", href: "/retail", icon: <Target className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Transformation Pillars */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-display font-bold mb-6">
            Intelligent Digital Transformation Framework
          </h2>
          <p className="text-subheading max-w-3xl mx-auto">
            Our comprehensive approach to digital transformation encompasses four key pillars that drive sustainable business value and competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {transformationPillars.map((pillar, index) => (
            <Card key={pillar.title} className="card-enterprise group cursor-pointer hover:shadow-glow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-title font-bold text-primary mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground font-medium">{pillar.description}</p>
              </div>
              <ul className="space-y-3">
                {pillar.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Metrics Section */}
      <SectionWrapper background="muted">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold mb-6">
            Proven Results That Drive Success
          </h2>
          <p className="text-subheading max-w-3xl mx-auto">
            Our enterprise clients achieve measurable outcomes through intelligent digital transformation initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{metric.value}</div>
              <div className="text-lg font-semibold mb-2">{metric.label}</div>
              <div className="text-muted-foreground text-sm">{metric.description}</div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Industry Solutions */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-display font-bold mb-6">
            Industry-Specific Solutions
          </h2>
          <p className="text-subheading max-w-3xl mx-auto">
            Tailored digital transformation strategies designed for your industry's unique challenges and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link key={industry.name} to={industry.href}>
              <Card className="card-enterprise group text-center hover:shadow-glow">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
                <ArrowRight className="w-5 h-5 mx-auto mt-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/industries">
              View All Industries
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="dark">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-display font-bold mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Join industry leaders who have revolutionized their operations through intelligent digital transformation. Let's build your success story together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contactus">
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/case-studies-listing">
                View Success Stories
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Home;