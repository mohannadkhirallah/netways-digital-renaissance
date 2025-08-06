import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  BarChart3,
  Globe,
  Smartphone,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const solutionPortfolio = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Enterprise Resource Planning",
      description: "Integrated ERP solutions that unify business processes and provide real-time visibility across your organization.",
      capabilities: [
        "Financial management and reporting",
        "Supply chain optimization",
        "Human capital management",
        "Customer relationship management",
        "Business intelligence and analytics"
      ],
      benefits: "40% faster financial close, 30% reduction in operational costs"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Experience Platform",
      description: "Omnichannel customer engagement solutions that deliver personalized experiences at every touchpoint.",
      capabilities: [
        "Unified customer data platform",
        "Real-time personalization engine",
        "Multi-channel campaign management",
        "Customer journey analytics",
        "AI-powered recommendations"
      ],
      benefits: "60% increase in customer satisfaction, 25% boost in conversion rates"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Intelligent Automation Suite",
      description: "End-to-end automation platform combining RPA, AI, and process intelligence for operational excellence.",
      capabilities: [
        "Robotic process automation",
        "Intelligent document processing",
        "Process mining and optimization",
        "Cognitive decision engines",
        "Exception handling and learning"
      ],
      benefits: "70% reduction in processing time, 50% fewer manual errors"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Command Center",
      description: "Comprehensive security operations platform providing 24/7 threat detection and response capabilities.",
      capabilities: [
        "Advanced threat detection",
        "Security orchestration and response",
        "Vulnerability management",
        "Compliance monitoring",
        "Security awareness training"
      ],
      benefits: "99.9% threat detection accuracy, 80% faster incident response"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Intelligence Platform",
      description: "Advanced analytics and AI platform that transforms raw data into actionable business insights.",
      capabilities: [
        "Real-time data processing",
        "Predictive analytics and ML",
        "Interactive visualization",
        "Automated reporting",
        "Self-service analytics"
      ],
      benefits: "5x faster insights generation, 35% improvement in decision quality"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Workplace Solution",
      description: "Modern workplace platform that enables seamless collaboration and productivity from anywhere.",
      capabilities: [
        "Unified communication tools",
        "Collaborative workspaces",
        "Mobile-first applications",
        "Knowledge management",
        "Virtual reality integration"
      ],
      benefits: "45% increase in productivity, 60% improvement in employee satisfaction"
    }
  ];

  const implementationApproach = [
    {
      title: "Assessment & Strategy",
      description: "Comprehensive evaluation of current state and strategic roadmap development",
      duration: "2-4 weeks",
      deliverables: ["Current state assessment", "Gap analysis", "Implementation roadmap", "ROI projections"]
    },
    {
      title: "Solution Design",
      description: "Detailed solution architecture and technical specifications",
      duration: "4-8 weeks", 
      deliverables: ["Technical architecture", "Integration design", "Security framework", "Change management plan"]
    },
    {
      title: "Implementation",
      description: "Agile deployment with continuous testing and validation",
      duration: "12-24 weeks",
      deliverables: ["Solution deployment", "Integration testing", "User training", "Performance optimization"]
    },
    {
      title: "Optimization",
      description: "Continuous improvement and scaling for maximum value realization",
      duration: "Ongoing",
      deliverables: ["Performance monitoring", "User feedback analysis", "Feature enhancements", "Scaling recommendations"]
    }
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Enterprise"
        subtitle="Solutions Portfolio"
        description="Comprehensive enterprise solutions designed to drive digital transformation, enhance operational efficiency, and deliver measurable business value."
        primaryCTA={{ text: "Explore Solutions", href: "#solutions" }}
        secondaryCTA={{ text: "Request Demo", href: "/contactus" }}
      />

      {/* Solutions Portfolio */}
      <SectionWrapper id="solutions">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold mb-6">
            Integrated Solution Portfolio
          </h2>
          <p className="text-subheading max-w-3xl mx-auto">
            Our comprehensive solutions address every aspect of enterprise operations, from core business processes to emerging technology adoption.
          </p>
        </div>

        <div className="space-y-12">
          {solutionPortfolio.map((solution, index) => (
            <Card key={index} className="card-enterprise overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-title font-bold mb-3">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-3">Key Capabilities</h4>
                      <ul className="space-y-2">
                        {solution.capabilities.map((capability, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Business Impact</h4>
                      <div className="bg-gradient-primary/10 p-4 rounded-lg">
                        <p className="text-sm font-medium text-primary">{solution.benefits}</p>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-1 flex items-center justify-center bg-gradient-card rounded-lg p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {solution.icon}
                    </div>
                    <p className="text-sm text-muted-foreground">Enterprise-Grade Solution</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Implementation Approach */}
      <SectionWrapper background="muted">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold mb-6">
            Proven Implementation Methodology
          </h2>
          <p className="text-subheading max-w-3xl mx-auto">
            Our structured approach ensures successful solution deployment with minimal business disruption and maximum value realization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {implementationApproach.map((phase, index) => (
            <Card key={index} className="card-enterprise text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold mb-3">{phase.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>
              <div className="text-xs text-primary font-medium mb-4">{phase.duration}</div>
              <ul className="space-y-2 text-xs">
                {phase.deliverables.map((deliverable, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Solution Benefits */}
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-display font-bold mb-6">
              Measurable Business Outcomes
            </h2>
            <p className="text-subheading max-w-3xl mx-auto">
              Our enterprise solutions deliver quantifiable results that drive competitive advantage and sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "65%", label: "Faster Time-to-Market", description: "Accelerated product development and deployment" },
              { metric: "50%", label: "Operational Cost Reduction", description: "Optimized processes and resource utilization" },
              { metric: "90%", label: "Process Automation", description: "Reduced manual effort and human error" },
              { metric: "99.9%", label: "System Uptime", description: "Enterprise-grade reliability and performance" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="dark">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-display font-bold mb-6">
            Transform Your Enterprise Today
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Discover how our enterprise solutions can accelerate your digital transformation and drive measurable business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contactus">
                Schedule Demo
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

export default Solutions;