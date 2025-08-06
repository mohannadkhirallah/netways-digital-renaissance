import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from "@/components/ui/card";
import { Phone, Radio, Users, Zap } from 'lucide-react';

const Telecom = () => {
  return (
    <div className="pt-20">
      <HeroSection
        title="Telecommunications"
        subtitle="Network Innovation"
        description="Modernize network operations, enhance customer experiences, and accelerate 5G deployment with intelligent solutions."
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: <Radio className="w-8 h-8" />, title: "5G Infrastructure", description: "Advanced 5G network deployment and optimization" },
            { icon: <Zap className="w-8 h-8" />, title: "Network Automation", description: "Self-healing networks with AI-powered optimization" },
            { icon: <Users className="w-8 h-8" />, title: "Customer Experience", description: "Omnichannel customer service platforms" },
            { icon: <Phone className="w-8 h-8" />, title: "Service Orchestration", description: "Automated service provisioning and management" }
          ].map((solution, index) => (
            <Card key={index} className="card-enterprise">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Telecom;