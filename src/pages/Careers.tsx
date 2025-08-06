import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, Users, ArrowRight } from 'lucide-react';

const Careers = () => {
  const openings = [
    { title: "Senior Solutions Architect", location: "New York, NY", type: "Full-time", department: "Engineering" },
    { title: "Digital Transformation Consultant", location: "London, UK", type: "Full-time", department: "Consulting" },
    { title: "AI/ML Engineer", location: "San Francisco, CA", type: "Full-time", department: "Engineering" },
    { title: "Project Manager", location: "Remote", type: "Full-time", department: "Operations" }
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Join Our"
        subtitle="Global Team"
        description="Be part of a team that's shaping the future of enterprise technology and driving meaningful transformation worldwide."
        primaryCTA={{ text: "View Open Positions", href: "#careers" }}
        secondaryCTA={{ text: "Learn More", href: "#culture" }}
      />

      <SectionWrapper id="careers">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold mb-6">Current Opportunities</h2>
          <p className="text-subheading max-w-3xl mx-auto">Join our team of innovators and help transform enterprises worldwide.</p>
        </div>

        <div className="space-y-6">
          {openings.map((job, index) => (
            <Card key={index} className="card-enterprise">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {job.department}
                    </span>
                  </div>
                </div>
                <Button>
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Careers;