import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  Shield, 
  Database, 
  Cpu, 
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Partners = () => {
  const partnerTiers = [
    {
      title: "Strategic Partners",
      description: "Global technology leaders we collaborate with to deliver comprehensive enterprise solutions",
      partners: [
        {
          name: "Microsoft Azure",
          category: "Cloud Platform",
          icon: <Cloud className="w-8 h-8" />,
          partnership: "Gold Partner",
          description: "Advanced cloud infrastructure and AI services integration",
          certifications: ["Azure Solutions Architect", "Azure AI Engineer", "Azure Security Engineer"]
        },
        {
          name: "Amazon Web Services",
          category: "Cloud Infrastructure", 
          icon: <Cloud className="w-8 h-8" />,
          partnership: "Advanced Consulting Partner",
          description: "Comprehensive cloud migration and optimization services",
          certifications: ["AWS Solutions Architect", "AWS DevOps Engineer", "AWS Security Specialist"]
        },
        {
          name: "Google Cloud",
          category: "AI & Analytics",
          icon: <Database className="w-8 h-8" />,
          partnership: "Premier Partner",
          description: "Advanced analytics, ML, and data platform solutions",
          certifications: ["Google Cloud Architect", "Data Engineer", "ML Engineer"]
        }
      ]
    },
    {
      title: "Technology Partners",
      description: "Specialized technology providers that enhance our solution capabilities",
      partners: [
        {
          name: "Salesforce",
          category: "CRM Platform",
          icon: <Users className="w-8 h-8" />,
          partnership: "Platinum Partner",
          description: "Customer relationship management and sales automation",
          certifications: ["Salesforce Architect", "Platform Developer", "Marketing Cloud Specialist"]
        },
        {
          name: "SAP",
          category: "Enterprise Software",
          icon: <Cpu className="w-8 h-8" />,
          partnership: "Gold Partner",
          description: "Enterprise resource planning and business process optimization",
          certifications: ["SAP S/4HANA", "SAP Analytics Cloud", "SAP SuccessFactors"]
        },
        {
          name: "Cybersecurity Alliance",
          category: "Security Solutions",
          icon: <Shield className="w-8 h-8" />,
          partnership: "Elite Partner",
          description: "Advanced cybersecurity and compliance solutions",
          certifications: ["CISSP", "CISM", "Security+", "Zero Trust Architecture"]
        }
      ]
    },
    {
      title: "Implementation Partners",
      description: "Regional and specialized partners that extend our global delivery capabilities",
      partners: [
        {
          name: "Regional System Integrators",
          category: "Implementation",
          icon: <Globe className="w-8 h-8" />,
          partnership: "Authorized Partners",
          description: "Local expertise and implementation support across global markets",
          certifications: ["Local Certifications", "Industry Expertise", "Regional Compliance"]
        },
        {
          name: "Industry Specialists",
          category: "Vertical Solutions",
          icon: <Award className="w-8 h-8" />,
          partnership: "Certified Partners",
          description: "Deep industry knowledge in healthcare, finance, manufacturing",
          certifications: ["Industry Standards", "Regulatory Compliance", "Best Practices"]
        }
      ]
    }
  ];

  const partnerBenefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Joint Go-to-Market",
      description: "Collaborative sales and marketing initiatives to reach new markets and customers"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Technical Certification",
      description: "Access to training, certification programs, and technical support resources"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Leverage our worldwide presence to expand your market footprint"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Proven Methodologies",
      description: "Access to our tested frameworks and best practices for successful delivery"
    }
  ];

  const partnershipModel = [
    {
      step: "01",
      title: "Partner Application",
      description: "Submit application and undergo partnership evaluation process"
    },
    {
      step: "02", 
      title: "Technical Certification",
      description: "Complete required training and certification programs"
    },
    {
      step: "03",
      title: "Agreement Execution",
      description: "Finalize partnership agreement and onboarding process"
    },
    {
      step: "04",
      title: "Joint Value Creation",
      description: "Begin collaborative delivery of customer solutions"
    }
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Strategic"
        subtitle="Partnerships"
        description="We collaborate with leading technology providers and implementation specialists to deliver comprehensive enterprise solutions worldwide."
        primaryCTA={{ text: "Become a Partner", href: "#partnership" }}
        secondaryCTA={{ text: "View Partners", href: "#partners" }}
      />

      {/* Partner Ecosystem */}
      <SectionWrapper id="partners">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold mb-6">
            Our Partner Ecosystem
          </h2>
          <p className="text-subheading max-w-3xl mx-auto">
            We've built strategic alliances with industry leaders to ensure our clients receive best-in-class solutions and support.
          </p>
        </div>

        <div className="space-y-16">
          {partnerTiers.map((tier, tierIndex) => (
            <div key={tierIndex}>
              <div className="text-center mb-12">
                <h3 className="text-headline font-bold mb-4">{tier.title}</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">{tier.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tier.partners.map((partner, index) => (
                  <Card key={index} className="card-enterprise">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                        {partner.icon}
                      </div>
                      <h4 className="text-lg font-bold mb-2">{partner.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{partner.category}</p>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {partner.partnership}
                      </span>
                    </div>

                    <p className="text-sm text-center mb-6">{partner.description}</p>

                    <div>
                      <h5 className="font-semibold mb-3 text-sm">Key Certifications</h5>
                      <ul className="space-y-2">
                        {partner.certifications.map((cert, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Partner Benefits */}
      <SectionWrapper background="muted">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold mb-6">
            Partnership Benefits
          </h2>
          <p className="text-subheading max-w-3xl mx-auto">
            Our partnership program offers mutual value creation through collaborative innovation and market expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnerBenefits.map((benefit, index) => (
            <Card key={index} className="card-enterprise">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Partnership Process */}
      <SectionWrapper id="partnership">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-display font-bold mb-6">
              How to Become a Partner
            </h2>
            <p className="text-subheading max-w-3xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {partnershipModel.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < partnershipModel.length - 1 && (
                  <ArrowRight className="hidden md:block mx-auto mt-4 w-6 h-6 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/contactus">
                Apply for Partnership
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Partner Success Stories */}
      <SectionWrapper background="muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display font-bold mb-6">
            Partnership Success Metrics
          </h2>
          <p className="text-subheading mb-12">
            Our collaborative approach with partners has delivered exceptional results for clients worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: "200+", label: "Active Partners", description: "Across global markets" },
              { metric: "95%", label: "Partner Satisfaction", description: "Consistently high ratings" },
              { metric: "50%", label: "Faster Delivery", description: "Through partner collaboration" },
              { metric: "$100M+", label: "Joint Revenue", description: "Generated with partners" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
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
            Let's Build Success Together
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Join our partner ecosystem and leverage our combined expertise to deliver exceptional value to clients worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contactus">
                Start Partnership Discussion
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/case-studies-listing">
                View Joint Success Stories
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Partners;