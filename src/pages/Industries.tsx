import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Shield, 
  Cpu, 
  Heart, 
  GraduationCap, 
  ShoppingCart,
  Phone,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Industries = () => {
  const industries = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Financial Services",
      description: "Transform banking, insurance, and fintech operations with intelligent automation and enhanced customer experiences.",
      challenges: [
        "Regulatory compliance complexity",
        "Legacy system modernization",
        "Cybersecurity threats",
        "Customer experience expectations"
      ],
      solutions: [
        "Digital banking platforms",
        "Automated compliance monitoring",
        "Fraud detection systems",
        "Personalized financial services"
      ],
      href: "/financialservices",
      metrics: "40% faster loan processing, 60% reduction in compliance costs"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Government",
      description: "Modernize public sector operations with secure, citizen-centric digital services and intelligent governance solutions.",
      challenges: [
        "Citizen service delivery",
        "Data security and privacy",
        "Budget constraints",
        "Interagency collaboration"
      ],
      solutions: [
        "Digital citizen services",
        "Secure cloud infrastructure",
        "Process automation",
        "Data analytics platforms"
      ],
      href: "/government",
      metrics: "50% reduction in service delivery time, 70% increase in citizen satisfaction"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Manufacturing",
      description: "Optimize production processes, supply chains, and quality control with Industry 4.0 technologies and smart manufacturing.",
      challenges: [
        "Production efficiency",
        "Supply chain visibility",
        "Quality control",
        "Equipment maintenance"
      ],
      solutions: [
        "Smart factory automation",
        "Predictive maintenance",
        "Supply chain optimization",
        "Quality management systems"
      ],
      href: "/manufacture",
      metrics: "35% increase in productivity, 45% reduction in downtime"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare",
      description: "Enhance patient care, streamline operations, and improve outcomes with intelligent healthcare solutions and data analytics.",
      challenges: [
        "Patient care coordination",
        "Regulatory compliance",
        "Cost management",
        "Data interoperability"
      ],
      solutions: [
        "Electronic health records",
        "Telemedicine platforms",
        "Clinical decision support",
        "Population health analytics"
      ],
      href: "/healthcare",
      metrics: "30% improvement in patient outcomes, 25% reduction in operational costs"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education",
      description: "Transform learning experiences and institutional operations with digital education platforms and intelligent analytics.",
      challenges: [
        "Student engagement",
        "Administrative efficiency",
        "Learning outcomes",
        "Technology integration"
      ],
      solutions: [
        "Learning management systems",
        "Student information systems",
        "Virtual classroom platforms",
        "Academic analytics"
      ],
      href: "/education",
      metrics: "40% increase in student engagement, 50% improvement in administrative efficiency"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Retail",
      description: "Create seamless omnichannel experiences, optimize supply chains, and personalize customer interactions at scale.",
      challenges: [
        "Omnichannel integration",
        "Inventory management",
        "Customer personalization",
        "Supply chain optimization"
      ],
      solutions: [
        "E-commerce platforms",
        "Inventory optimization",
        "Customer analytics",
        "Supply chain visibility"
      ],
      href: "/retail",
      metrics: "60% increase in customer retention, 35% improvement in inventory turnover"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Telecommunications",
      description: "Modernize network operations, enhance customer experiences, and accelerate 5G deployment with intelligent solutions.",
      challenges: [
        "Network optimization",
        "Customer churn",
        "5G deployment",
        "Operational efficiency"
      ],
      solutions: [
        "Network automation",
        "Customer experience platforms",
        "5G infrastructure",
        "Service orchestration"
      ],
      href: "/telecom",
      metrics: "30% reduction in network downtime, 45% improvement in customer satisfaction"
    }
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Industry"
        subtitle="Solutions & Expertise"
        description="Specialized digital transformation solutions tailored to address the unique challenges and opportunities in your industry vertical."
        primaryCTA={{ text: "Explore Industries", href: "#industries" }}
        secondaryCTA={{ text: "Discuss Your Needs", href: "/contactus" }}
      />

      {/* Industries Overview */}
      <SectionWrapper id="industries">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold mb-6">
            Industry-Specific Transformation
          </h2>
          <p className="text-subheading max-w-3xl mx-auto">
            We understand that every industry has unique requirements, regulations, and challenges. Our specialized solutions deliver targeted outcomes for your sector.
          </p>
        </div>

        <div className="space-y-12">
          {industries.map((industry, index) => (
            <Card key={index} className="card-enterprise overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {industry.icon}
                    </div>
                    <div>
                      <h3 className="text-title font-bold mb-3">{industry.title}</h3>
                      <p className="text-muted-foreground">{industry.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Challenges</h4>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">
                            • {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Our Solutions</h4>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="text-sm text-foreground">
                            • {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-primary/10 rounded-lg">
                    <h5 className="font-semibold text-primary mb-2">Proven Results</h5>
                    <p className="text-sm">{industry.metrics}</p>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="lg:col-span-4 flex flex-col justify-center items-center bg-gradient-card rounded-lg p-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {industry.icon}
                    </div>
                    <h4 className="font-semibold mb-3">Learn More About {industry.title}</h4>
                    <p className="text-sm text-muted-foreground mb-6">
                      Discover how we've helped organizations in {industry.title.toLowerCase()} transform their operations.
                    </p>
                    <div className="space-y-3">
                      <Button asChild className="w-full">
                        <Link to={industry.href}>
                          View Solutions
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild className="w-full">
                        <Link to="/case-studies-listing">
                          Case Studies
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Industry Expertise */}
      <SectionWrapper background="muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display font-bold mb-6">
            Why Choose Industry-Specific Solutions?
          </h2>
          <p className="text-subheading mb-12">
            Our deep industry expertise enables us to deliver solutions that address sector-specific challenges and compliance requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Domain Expertise",
                description: "Deep understanding of industry processes, regulations, and best practices"
              },
              {
                title: "Proven Methodologies",
                description: "Industry-tested approaches that minimize risk and accelerate time-to-value"
              },
              {
                title: "Compliance Ready",
                description: "Built-in compliance frameworks for industry-specific regulatory requirements"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="dark">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-display font-bold mb-6">
            Ready to Transform Your Industry Operations?
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Connect with our industry experts to discuss how we can accelerate your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contactus">
                Schedule Consultation
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

export default Industries;