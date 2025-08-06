import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const featuredCase = {
    client: "Global Financial Institution",
    industry: "Financial Services",
    challenge: "Legacy system modernization and regulatory compliance",
    solution: "AI-powered automation platform with real-time compliance monitoring",
    results: [
      { metric: "65%", description: "Reduction in processing time" },
      { metric: "$2.3M", description: "Annual cost savings" },
      { metric: "99.9%", description: "Compliance accuracy" },
      { metric: "40%", description: "Faster time-to-market" }
    ],
    technologies: ["AI/ML", "Cloud Infrastructure", "Process Automation", "Data Analytics"]
  };

  const caseStudies = [
    {
      client: "Healthcare Network",
      industry: "Healthcare",
      title: "Digital Patient Care Transformation",
      challenge: "Fragmented patient data and inefficient care coordination",
      solution: "Integrated electronic health records with AI-powered clinical decision support",
      results: [
        { metric: "45%", description: "Improved patient outcomes" },
        { metric: "30%", description: "Reduction in readmissions" },
        { metric: "60%", description: "Faster diagnosis time" }
      ],
      technologies: ["EHR Integration", "AI Analytics", "Mobile Platforms"],
      category: "Healthcare"
    },
    {
      client: "Manufacturing Conglomerate", 
      industry: "Manufacturing",
      title: "Smart Factory Implementation",
      challenge: "Production inefficiencies and unpredictable equipment failures",
      solution: "IoT-enabled predictive maintenance with real-time production optimization",
      results: [
        { metric: "35%", description: "Increase in productivity" },
        { metric: "50%", description: "Reduction in downtime" },
        { metric: "25%", description: "Lower maintenance costs" }
      ],
      technologies: ["IoT Sensors", "Predictive Analytics", "Automation"],
      category: "Manufacturing"
    },
    {
      client: "Government Agency",
      industry: "Government",
      title: "Citizen Services Digitization",
      challenge: "Slow manual processes and poor citizen experience",
      solution: "Self-service digital portal with automated workflow processing",
      results: [
        { metric: "70%", description: "Faster service delivery" },
        { metric: "85%", description: "Citizen satisfaction increase" },
        { metric: "40%", description: "Cost reduction" }
      ],
      technologies: ["Digital Portals", "Workflow Automation", "Cloud Services"],
      category: "Government"
    },
    {
      client: "Retail Chain",
      industry: "Retail", 
      title: "Omnichannel Customer Experience",
      challenge: "Disconnected shopping experiences across channels",
      solution: "Unified commerce platform with personalized customer journeys",
      results: [
        { metric: "80%", description: "Increase in customer retention" },
        { metric: "55%", description: "Higher conversion rates" },
        { metric: "30%", description: "Revenue growth" }
      ],
      technologies: ["E-commerce Platform", "Customer Analytics", "Mobile Apps"],
      category: "Retail"
    },
    {
      client: "Educational Institution",
      industry: "Education",
      title: "Digital Learning Platform",
      challenge: "Limited online learning capabilities and student engagement",
      solution: "Comprehensive learning management system with virtual collaboration tools",
      results: [
        { metric: "90%", description: "Student engagement increase" },
        { metric: "50%", description: "Improved learning outcomes" },
        { metric: "60%", description: "Administrative efficiency gain" }
      ],
      technologies: ["LMS Platform", "Virtual Classrooms", "Analytics"],
      category: "Education"
    },
    {
      client: "Telecommunications Provider",
      industry: "Telecom",
      title: "Network Optimization & 5G Deployment",
      challenge: "Network performance issues and 5G infrastructure needs",
      solution: "AI-driven network optimization with accelerated 5G rollout",
      results: [
        { metric: "40%", description: "Network performance improvement" },
        { metric: "75%", description: "Faster 5G deployment" },
        { metric: "35%", description: "Customer satisfaction increase" }
      ],
      technologies: ["5G Infrastructure", "Network Analytics", "Automation"],
      category: "Telecom"
    }
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Success"
        subtitle="Stories & Case Studies"
        description="Discover how leading organizations have transformed their operations and achieved measurable results through our intelligent solutions."
        primaryCTA={{ text: "Explore Cases", href: "#cases" }}
        secondaryCTA={{ text: "Discuss Your Project", href: "/contactus" }}
      />

      {/* Featured Case Study */}
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-display font-bold mb-12 text-center">Featured Success Story</h2>
          
          <Card className="card-enterprise overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {featuredCase.industry}
                    </span>
                    <span className="text-muted-foreground text-sm">Featured Case Study</span>
                  </div>
                  <h3 className="text-title font-bold mb-3">{featuredCase.client}</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Challenge:</strong> {featuredCase.challenge}
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> {featuredCase.solution}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {featuredCase.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{result.metric}</div>
                      <div className="text-sm text-muted-foreground">{result.description}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredCase.technologies.map((tech, index) => (
                      <span key={index} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 flex flex-col justify-center items-center bg-gradient-card rounded-lg p-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    FS
                  </div>
                  <h4 className="font-semibold mb-3">Ready to Transform?</h4>
                  <p className="text-sm text-muted-foreground mb-6">
                    See how we can help your organization achieve similar results.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full">
                      Download Case Study
                    </Button>
                    <Button variant="outline" asChild className="w-full">
                      <Link to="/contactus">
                        Discuss Your Project
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrapper>

      {/* Case Studies Grid */}
      <SectionWrapper id="cases" background="muted">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold mb-6">
            Industry Success Stories
          </h2>
          <p className="text-subheading max-w-3xl mx-auto">
            Explore how organizations across different industries have leveraged our solutions to drive transformation and achieve remarkable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="card-enterprise group cursor-pointer">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                    {study.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">{study.client}</p>
              </div>

              <div className="mb-4">
                <p className="text-sm mb-2">
                  <strong>Challenge:</strong> {study.challenge}
                </p>
                <p className="text-sm">
                  <strong>Solution:</strong> {study.solution}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {study.results.map((result, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-lg font-bold text-primary">{result.metric}</div>
                    <div className="text-xs text-muted-foreground">{result.description}</div>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {study.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-secondary/50 text-secondary-foreground px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                View Full Case Study
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Results Summary */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display font-bold mb-6">
            Collective Impact Across All Projects
          </h2>
          <p className="text-subheading mb-12">
            The cumulative results from our client engagements demonstrate the tangible value of intelligent digital transformation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                icon: <TrendingUp className="w-8 h-8" />,
                metric: "Average 45%", 
                label: "Efficiency Improvement",
                description: "Across all transformation projects"
              },
              { 
                icon: <Clock className="w-8 h-8" />,
                metric: "60% Faster", 
                label: "Time-to-Market",
                description: "For new products and services"
              },
              { 
                icon: <DollarSign className="w-8 h-8" />,
                metric: "$50M+", 
                label: "Cost Savings",
                description: "Generated for clients annually"
              },
              { 
                icon: <Users className="w-8 h-8" />,
                metric: "95%", 
                label: "Client Satisfaction",
                description: "Consistently high satisfaction rates"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="dark">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-display font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Let's discuss how we can help your organization achieve similar transformational results and competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contactus">
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/solutions">
                Explore Solutions
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default CaseStudies;