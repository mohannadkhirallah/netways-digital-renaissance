import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from "@/components/ui/card";
import { ShoppingCart, Users, TrendingUp, Smartphone } from 'lucide-react';

const Retail = () => {
  return (
    <div className="pt-20">
      <HeroSection
        title="Retail"
        subtitle="Omnichannel Experience"
        description="Create seamless omnichannel experiences, optimize supply chains, and personalize customer interactions at scale."
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: <ShoppingCart className="w-8 h-8" />, title: "E-commerce Platform", description: "Modern e-commerce with unified inventory management" },
            { icon: <Users className="w-8 h-8" />, title: "Customer Analytics", description: "360-degree customer insights and personalization" },
            { icon: <TrendingUp className="w-8 h-8" />, title: "Inventory Optimization", description: "AI-powered demand forecasting and stock management" },
            { icon: <Smartphone className="w-8 h-8" />, title: "Mobile Commerce", description: "Native mobile apps with seamless shopping experience" }
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

export default Retail;