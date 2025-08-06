import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  Shield, 
  Cog, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Database,
  Monitor,
  Smartphone,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCategories = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Transformation",
      description: "Modernize your infrastructure with intelligent cloud solutions that scale with your business.",
      services: [
        "Cloud strategy and roadmap development",
        "Multi-cloud and hybrid cloud architectures",
        "Cloud migration and modernization",
        "Cloud-native application development",
        "Container orchestration and microservices"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      services: [
        "Security assessment and audit",
        "Identity and access management",
        "Threat detection and response",
        "Compliance management",
        "Security awareness training"
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data & Analytics",
      description: "Transform data into actionable insights with advanced analytics and AI capabilities.",
      services: [
        "Data strategy and governance",
        "Big data platform implementation",
        "Advanced analytics and ML",
        "Real-time data processing",
        "Business intelligence solutions"
      ]
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation and workflow optimization.",
      services: [
        "Robotic Process Automation (RPA)",
        "Business process reengineering",
        "Workflow automation platforms",
        "Intelligent document processing",
        "Exception handling systems"
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Digital Experience",
      description: "Create engaging digital experiences that delight customers and empower employees.",
      services: [
        "User experience design",
        "Mobile application development",
        "Web platform modernization",
        "Omnichannel integration",
        "Digital accessibility compliance"
      ]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "IT Modernization",
      description: "Modernize legacy systems and infrastructure for improved performance and agility.",
      services: [
        "Legacy system modernization",
        "Infrastructure optimization",
        "Application portfolio assessment",
        "Technology stack consolidation",
        "Performance optimization"
      ]
    }
  ];

  const engagementModels = [
    {
      title: "Strategic Consulting",
      description: "Expert guidance for digital transformation strategy and roadmap development",
      features: ["Executive advisory", "Technology strategy", "Digital roadmap", "Change management"]
    },
    {
      title: "Implementation Services",
      description: "End-to-end project delivery with proven methodologies and best practices",
      features: ["Project management", "Solution delivery", "Integration services", "Quality assurance"]
    },
    {
      title: "Managed Services",
      description: "Ongoing support and optimization for sustained business value",
      features: ["24/7 monitoring", "Proactive maintenance", "Performance optimization", "Continuous improvement"]
    }
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Enterprise"
        subtitle="Services Portfolio"
        description="Comprehensive digital transformation services designed to accelerate your journey to intelligent operations and sustainable growth."
        primaryCTA={{ text: "Explore Services", href: "#services" }}
        secondaryCTA={{ text: "Get Quote", href: "/contactus" }}
      />

      {/* Service Categories */}
      <SectionWrapper id="services">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold mb-6">
            Comprehensive Service Offerings
          </h2>
          <p className="text-subheading max-w-3xl mx-auto">
            Our full-spectrum services cover every aspect of digital transformation, from strategy to implementation and ongoing optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="card-enterprise">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                  {category.icon}
                </div>
                <h3 className="text-title font-bold mb-3">{category.title}</h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </div>
              <ul className="space-y-3">
                {category.services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Engagement Models */}
      <SectionWrapper background="muted">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold mb-6">
            Flexible Engagement Models
          </h2>
          <p className="text-subheading max-w-3xl mx-auto">
            Choose the engagement model that best fits your organization's needs, timeline, and budget requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engagementModels.map((model, index) => (
            <Card key={index} className="card-enterprise text-center">
              <h3 className="text-title font-bold mb-4">{model.title}</h3>
              <p className="text-muted-foreground mb-6">{model.description}</p>
              <ul className="space-y-3 mb-6">
                {model.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Service Methodology */}
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-display font-bold mb-6">
              Proven Service Methodology
            </h2>
            <p className="text-subheading max-w-3xl mx-auto">
              Our structured approach ensures successful service delivery with measurable outcomes and minimal business disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { phase: "Discover", description: "Understand current state and requirements" },
              { phase: "Plan", description: "Develop detailed implementation roadmap" },
              { phase: "Execute", description: "Deliver solutions with agile methodology" },
              { phase: "Deploy", description: "Implement with minimal business impact" },
              { phase: "Optimize", description: "Continuous improvement and scaling" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.phase}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="dark">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-display font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Partner with our experts to accelerate your digital transformation journey and achieve measurable business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contactus">
                Request Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/case-studies-listing">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Services;