import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, Monitor, BarChart3 } from 'lucide-react';

const Education = () => {
  return (
    <div className="pt-20">
      <HeroSection
        title="Education"
        subtitle="Digital Learning"
        description="Transform learning experiences and institutional operations with digital education platforms and intelligent analytics."
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: <GraduationCap className="w-8 h-8" />, title: "Learning Management", description: "Comprehensive LMS with personalized learning paths" },
            { icon: <Users className="w-8 h-8" />, title: "Student Information System", description: "Integrated student lifecycle management" },
            { icon: <Monitor className="w-8 h-8" />, title: "Virtual Classrooms", description: "Interactive online learning environments" },
            { icon: <BarChart3 className="w-8 h-8" />, title: "Academic Analytics", description: "Data-driven insights for student success" }
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

export default Education;