import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from 'lucide-react';

const Locations = () => {
  const offices = [
    { city: "New York", country: "USA", address: "123 Broadway, NY 10001", phone: "+1-555-0123", email: "ny@netways.com" },
    { city: "London", country: "UK", address: "456 Oxford St, London W1", phone: "+44-20-7123-4567", email: "london@netways.com" },
    { city: "Singapore", country: "Singapore", address: "789 Orchard Rd, Singapore", phone: "+65-6123-4567", email: "sg@netways.com" },
    { city: "Dubai", country: "UAE", address: "Sheikh Zayed Rd, Dubai", phone: "+971-4-123-4567", email: "dubai@netways.com" }
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Global"
        subtitle="Locations"
        description="Find Netways offices worldwide. We're here to serve you wherever your business takes you."
        primaryCTA={{ text: "Contact Us", href: "/contactus" }}
      />

      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-display font-bold mb-6">Our Worldwide Presence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offices.map((office, index) => (
            <Card key={index} className="card-enterprise text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">{office.city}</h3>
              <p className="text-muted-foreground text-sm mb-4">{office.country}</p>
              <div className="space-y-2 text-sm">
                <p>{office.address}</p>
                <div className="flex items-center justify-center gap-1">
                  <Phone className="w-4 h-4" />
                  {office.phone}
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Mail className="w-4 h-4" />
                  {office.email}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Locations;