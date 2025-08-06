import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from "@/components/ui/card";
import { Heart, Users, Database, Shield } from 'lucide-react';

const Healthcare = () => {
  return (
    <div className="pt-20">
      <HeroSection
        title="Healthcare"
        subtitle="Digital Health"
        description="Enhance patient care, streamline operations, and improve outcomes with intelligent healthcare solutions and data analytics."
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: <Heart className="w-8 h-8" />, title: "Electronic Health Records", description: "Comprehensive EHR with clinical decision support" },
            { icon: <Users className="w-8 h-8" />, title: "Telemedicine Platform", description: "Remote care delivery and patient monitoring" },
            { icon: <Database className="w-8 h-8" />, title: "Population Health Analytics", description: "Data-driven insights for better health outcomes" },
            { icon: <Shield className="w-8 h-8" />, title: "HIPAA Compliance", description: "Secure, compliant healthcare data management" }
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

export default Healthcare;