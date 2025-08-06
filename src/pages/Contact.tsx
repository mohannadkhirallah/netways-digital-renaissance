import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20">
      <HeroSection
        title="Get In"
        subtitle="Touch"
        description="Ready to transform your enterprise? Contact our experts to discuss your digital transformation journey."
        primaryCTA={{ text: "Start Conversation", href: "#contact" }}
      />

      <SectionWrapper id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-display font-bold mb-6">Let's Start Your Transformation</h2>
            <p className="text-muted-foreground mb-8">
              Our experts are ready to help you navigate your digital transformation journey. 
              Reach out to discuss your specific needs and discover how we can accelerate your success.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Phone className="w-6 h-6" />, title: "Phone", content: "+1 (555) 123-4567" },
                { icon: <Mail className="w-6 h-6" />, title: "Email", content: "contact@netways.com" },
                { icon: <MapPin className="w-6 h-6" />, title: "Headquarters", content: "123 Broadway, New York, NY 10001" },
                { icon: <Clock className="w-6 h-6" />, title: "Business Hours", content: "Mon-Fri: 9AM-6PM EST" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="card-enterprise">
            <h3 className="text-title font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Company Name" />
              <Input placeholder="Phone Number" />
              <Textarea placeholder="Tell us about your project..." rows={5} />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Contact;