import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Cpu, Network, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Intelligent = () => {
  const capabilities = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Artificial Intelligence & Machine Learning",
      description: "Advanced AI algorithms that learn, adapt, and optimize your business processes in real-time.",
      features: [
        "Predictive analytics and forecasting",
        "Natural language processing",
        "Computer vision and image recognition", 
        "Automated decision-making systems"
      ]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Intelligent Automation",
      description: "End-to-end process automation that combines RPA with cognitive technologies.",
      features: [
        "Robotic Process Automation (RPA)",
        "Intelligent document processing",
        "Workflow orchestration",
        "Exception handling and learning"
      ]
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Connected Ecosystems",
      description: "Seamlessly integrate all your systems, devices, and stakeholders into one intelligent network.",
      features: [
        "IoT device integration",
        "API-first architecture",
        "Real-time data synchronization",
        "Edge computing capabilities"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Intelligent Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and visualization.",
      features: [
        "Real-time dashboards and reporting",
        "Advanced data visualization",
        "Predictive modeling",
        "Performance optimization insights"
      ]
    }
  ];

  const benefits = [
    { title: "85% Faster Decision Making", description: "AI-powered insights enable rapid, data-driven decisions" },
    { title: "60% Process Efficiency Gain", description: "Intelligent automation streamlines complex workflows" },
    { title: "99.9% System Reliability", description: "Predictive maintenance prevents costly downtime" },
    { title: "40% Cost Reduction", description: "Optimized operations and resource allocation" }
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Intelligent"
        subtitle="Digital Transformation"
        description="Harness the power of AI, machine learning, and intelligent automation to revolutionize your enterprise operations and create unprecedented value."
        primaryCTA={{ text: "Explore Solutions", href: "/solutions" }}
        secondaryCTA={{ text: "Schedule Consultation", href: "/contactus" }}
      />

      {/* Core Capabilities */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-display font-bold mb-6">
            Core Intelligence Capabilities
          </h2>
          <p className="text-subheading max-w-3xl mx-auto">
            Our intelligent transformation platform combines cutting-edge technologies to deliver measurable business outcomes and competitive advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <Card key={index} className="card-enterprise">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {capability.icon}
                </div>
                <div>
                  <h3 className="text-title font-bold mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {capability.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper background="muted">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold mb-6">
            Measurable Business Impact
          </h2>
          <p className="text-subheading max-w-3xl mx-auto">
            Organizations implementing our intelligent transformation solutions experience significant improvements across key performance indicators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Implementation Framework */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display font-bold mb-6">
            Your Path to Intelligent Transformation
          </h2>
          <p className="text-subheading mb-12">
            We follow a proven methodology that ensures successful implementation and sustainable value creation across your organization.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              { step: "01", title: "Assess", description: "Evaluate current capabilities and identify transformation opportunities" },
              { step: "02", title: "Design", description: "Architect intelligent solutions tailored to your business objectives" },
              { step: "03", title: "Implement", description: "Deploy and integrate solutions with minimal business disruption" },
              { step: "04", title: "Optimize", description: "Continuously improve and scale intelligent capabilities" }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-6 h-6 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contactus">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
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

export default Intelligent;