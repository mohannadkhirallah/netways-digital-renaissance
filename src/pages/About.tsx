import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Globe, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Centric Excellence",
      description: "We put our clients at the center of everything we do, delivering solutions that exceed expectations and drive measurable value."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation Leadership",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that give our clients competitive advantages."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Expertise",
      description: "Our worldwide presence enables us to deliver consistent, high-quality services across diverse markets and industries."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Results",
      description: "Our track record of successful transformations speaks to our commitment to delivering tangible business outcomes."
    }
  ];

  const leadership = [
    {
      name: "John Smith",
      title: "Chief Executive Officer",
      experience: "20+ years in digital transformation",
      description: "Visionary leader driving enterprise innovation"
    },
    {
      name: "Sarah Johnson",
      title: "Chief Technology Officer", 
      experience: "15+ years in enterprise architecture",
      description: "Technology strategist and innovation catalyst"
    },
    {
      name: "Michael Chen",
      title: "Chief Operating Officer",
      experience: "18+ years in operational excellence",
      description: "Operations leader focused on delivery excellence"
    }
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="About"
        subtitle="Netways"
        description="We are a global leader in intelligent digital transformation, helping enterprises unlock their full potential through innovative technology solutions and strategic guidance."
        primaryCTA={{ text: "Join Our Team", href: "/career" }}
        secondaryCTA={{ text: "Our Locations", href: "/findlocation" }}
      />

      {/* Company Overview */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-display font-bold mb-6">
            Transforming Enterprises Worldwide
          </h2>
          <p className="text-subheading mb-8">
            For over two decades, Netways has been at the forefront of digital transformation, helping organizations navigate complex technological landscapes and achieve sustainable growth through intelligent solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "500+", label: "Successful Projects", description: "Delivered across global markets" },
              { metric: "50+", label: "Countries Served", description: "Worldwide presence and expertise" },
              { metric: "99%", label: "Client Satisfaction", description: "Proven track record of excellence" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Our Values */}
      <SectionWrapper background="muted">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold mb-6">
            Our Core Values
          </h2>
          <p className="text-subheading max-w-3xl mx-auto">
            These fundamental principles guide our approach to client partnerships, solution development, and business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="card-enterprise">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-title font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Leadership Team */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-display font-bold mb-6">
            Leadership Team
          </h2>
          <p className="text-subheading max-w-3xl mx-auto">
            Our experienced leadership team brings decades of industry expertise and a shared vision for driving digital transformation excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((leader, index) => (
            <Card key={index} className="card-enterprise text-center">
              <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                {leader.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-title font-bold mb-2">{leader.name}</h3>
              <p className="text-primary font-semibold mb-3">{leader.title}</p>
              <p className="text-sm text-muted-foreground mb-3">{leader.experience}</p>
              <p className="text-sm">{leader.description}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Company History */}
      <SectionWrapper background="muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-display font-bold mb-6">
              Our Journey
            </h2>
            <p className="text-subheading max-w-3xl mx-auto">
              From our founding to today, we've consistently evolved to meet the changing needs of enterprise clients worldwide.
            </p>
          </div>

          <div className="space-y-8">
            {[
              { year: "2000", milestone: "Company Founded", description: "Netways established with a vision to transform enterprise operations through technology" },
              { year: "2005", milestone: "Global Expansion", description: "Expanded operations to serve clients across multiple continents" },
              { year: "2010", milestone: "Cloud Innovation", description: "Pioneered cloud transformation services for enterprise clients" },
              { year: "2015", milestone: "AI & Analytics", description: "Integrated artificial intelligence and advanced analytics into our solution portfolio" },
              { year: "2020", milestone: "Digital-First", description: "Accelerated digital transformation initiatives in response to global changes" },
              { year: "2024", milestone: "Intelligent Everything", description: "Leading the next wave of intelligent enterprise transformation" }
            ].map((milestone, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {milestone.year}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{milestone.milestone}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="dark">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-display font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Be part of a team that's shaping the future of enterprise technology and driving meaningful transformation worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/career">
                Explore Careers
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contactus">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;