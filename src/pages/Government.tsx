import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from "@/components/ui/card";
import { Shield, Users, Database, Globe } from 'lucide-react';

const Government = () => {
  return (
    <div className="pt-20">
      <HeroSection
        title="Government"
        subtitle="Digital Services"
        description="Modernize public sector operations with secure, citizen-centric digital services and intelligent governance solutions."
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: <Users className="w-8 h-8" />, title: "Citizen Services", description: "Digital self-service portals for citizens" },
            { icon: <Shield className="w-8 h-8" />, title: "Secure Infrastructure", description: "Government-grade security and compliance" },
            { icon: <Database className="w-8 h-8" />, title: "Data Analytics", description: "Evidence-based policy making with data insights" },
            { icon: <Globe className="w-8 h-8" />, title: "Interagency Collaboration", description: "Seamless information sharing between agencies" }
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

export default Government;