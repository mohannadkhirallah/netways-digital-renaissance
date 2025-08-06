import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, Zap, Users } from 'lucide-react';

const FinancialServices = () => {
  return (
    <div className="pt-20">
      <HeroSection
        title="Financial Services"
        subtitle="Digital Transformation"
        description="Transform banking, insurance, and fintech operations with intelligent automation and enhanced customer experiences."
      />

      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-display font-bold mb-6">Industry Challenges</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: <TrendingUp className="w-8 h-8" />, title: "Digital Banking", description: "Modern banking platforms with real-time processing" },
            { icon: <Shield className="w-8 h-8" />, title: "Compliance Automation", description: "Automated regulatory compliance monitoring" },
            { icon: <Zap className="w-8 h-8" />, title: "Fraud Detection", description: "AI-powered fraud prevention systems" },
            { icon: <Users className="w-8 h-8" />, title: "Customer Experience", description: "Personalized financial services platform" }
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

export default FinancialServices;