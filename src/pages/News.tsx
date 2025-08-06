import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const News = () => {
  const featuredNews = {
    title: "Netways Announces Revolutionary AI-Powered Enterprise Platform",
    excerpt: "New intelligent automation platform delivers 70% faster processing times and reduces operational costs by 45% for enterprise clients.",
    date: "December 15, 2024",
    category: "Product Launch",
    author: "Sarah Johnson",
    image: "/api/placeholder/800/400"
  };

  const newsArticles = [
    {
      title: "Digital Transformation Trends for 2025: What Enterprises Need to Know",
      excerpt: "Industry experts share insights on emerging technologies and strategies that will shape enterprise transformation in the coming year.",
      date: "December 10, 2024",
      category: "Industry Insights",
      author: "Michael Chen",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Netways Partners with Leading Cloud Provider for Enhanced Security",
      excerpt: "Strategic partnership enables enhanced cybersecurity capabilities and zero-trust architecture implementation for enterprise clients.",
      date: "December 5, 2024",
      category: "Partnerships",
      author: "David Wilson",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Case Study: Healthcare Giant Achieves 40% Efficiency Gain",
      excerpt: "Major healthcare organization transforms patient care operations through intelligent automation and data analytics platform.",
      date: "November 28, 2024",
      category: "Case Study",
      author: "Lisa Zhang",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Netways Receives Industry Recognition for Innovation Excellence",
      excerpt: "Company honored with multiple awards for outstanding achievement in enterprise digital transformation and client satisfaction.",
      date: "November 20, 2024",
      category: "Awards",
      author: "John Smith",
      image: "/api/placeholder/400/250"
    },
    {
      title: "The Future of Intelligent Automation in Enterprise Operations",
      excerpt: "Exploring how AI-driven automation is revolutionizing business processes and creating new opportunities for growth.",
      date: "November 15, 2024",
      category: "Technology",
      author: "Robert Taylor",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Netways Expands Global Presence with New European Operations Center",
      excerpt: "New facility in Amsterdam strengthens company's ability to serve European clients with localized expertise and support.",
      date: "November 8, 2024",
      category: "Company News",
      author: "Emma Rodriguez",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = [
    "All",
    "Product Launch",
    "Industry Insights", 
    "Case Study",
    "Partnerships",
    "Awards",
    "Technology",
    "Company News"
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Latest"
        subtitle="News & Insights"
        description="Stay informed about the latest developments in digital transformation, industry trends, and Netways innovations."
        primaryCTA={{ text: "Subscribe to Updates", href: "#newsletter" }}
        secondaryCTA={{ text: "View All Articles", href: "#news" }}
      />

      {/* Featured Article */}
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-display font-bold mb-12 text-center">Featured Story</h2>
          
          <Card className="card-enterprise overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-gradient-card h-64 lg:h-auto flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    AI
                  </div>
                  <p className="text-sm text-muted-foreground">Featured Article</p>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {featuredNews.category}
                  </span>
                </div>
                <h3 className="text-title font-bold mb-4">{featuredNews.title}</h3>
                <p className="text-muted-foreground mb-6">{featuredNews.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredNews.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredNews.author}
                  </div>
                </div>
                <Button>
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrapper>

      {/* News Grid */}
      <SectionWrapper id="news" background="muted">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <h2 className="text-display font-bold">Latest Articles</h2>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 4).map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <Card key={index} className="card-enterprise group cursor-pointer">
                <div className="bg-gradient-card h-48 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">
                      {article.category.charAt(0)}
                    </div>
                    <p className="text-xs text-muted-foreground">{article.category}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3" />
                    {article.author}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Newsletter Signup */}
      <SectionWrapper id="newsletter" background="dark">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-display font-bold mb-6">
            Stay Informed
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Subscribe to our newsletter for the latest insights on digital transformation, industry trends, and Netways innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button variant="secondary">
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default News;