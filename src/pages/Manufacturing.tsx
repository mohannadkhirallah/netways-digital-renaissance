import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from "@/components/ui/card";
import { Cpu, Cog, TrendingUp, Shield } from 'lucide-react';

const Manufacturing = () => {
  return (
    <div className="pt-20">
      <HeroSection
        title="Manufacturing"
        subtitle="Industry 4.0"
        description="Optimize production processes, supply chains, and quality control with Industry 4.0 technologies and smart manufacturing."
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: <Cpu className="w-8 h-8" />, title: "Smart Factory", description: "IoT-enabled production automation and monitoring" },
            { icon: <Cog className="w-8 h-8" />, title: "Predictive Maintenance", description: "AI-powered equipment maintenance optimization" },
            { icon: <TrendingUp className="w-8 h-8" />, title: "Supply Chain Optimization", description: "End-to-end supply chain visibility and control" },
            { icon: <Shield className="w-8 h-8" />, title: "Quality Management", description: "Automated quality control and compliance monitoring" }
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

export default Manufacturing;