import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Calendar, 
  Clock, 
  User, 
  Search,
  Tag,
  TrendingUp,
  Bookmark,
  Share2,
  ArrowRight
} from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Sustainable Agriculture',
    'AI & Technology',
    'Climate Solutions',
    'Case Studies',
    'Industry News',
    'Research'
  ];

  const featuredPost = {
    id: 'featured',
    title: "The Future of Agrivoltaics: How Solar Panels and Crops Can Coexist",
    excerpt: "Exploring the revolutionary approach to dual land use that's transforming both agriculture and renewable energy sectors. Learn how farmers are increasing yields while generating clean energy.",
    content: "Agrivoltaics represents a groundbreaking approach to sustainable land use...",
    author: "Michelle Lotker",
    publishDate: "2025-01-29",
    readTime: "8 min read",
    category: "Sustainable Agriculture",
    image: "https://images.unsplash.com/photo-1715605569625-1ec3b5624a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1NTQ2OTYxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Agrivoltaics", "Renewable Energy", "Sustainable Farming"]
  };

  const blogPosts = [
    {
      id: '1',
      title: "Precision Irrigation: How AI Can Optimize Water Usage in Agriculture",
      excerpt: "How machine learning algorithms are revolutionizing water management in agriculture, leading to significant water savings while improving crop yields.",
      author: "Michael Abramov",
      publishDate: "2024-08-24",
      readTime: "6 min read",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1738598665698-7fd7af4b5e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhcm1pbmclMjBpcnJpZ2F0aW9ufGVufDF8fHx8MTc1NTQ2OTYxNnww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["AI", "Water Management", "Precision Agriculture"]
    },
    {
      id: '2',
      title: "Case Study: Green Valley Farm's Sustainability Transformation",
      excerpt: "A detailed look at how one farm implemented our comprehensive platform and achieved remarkable improvements in efficiency and sustainability.",
      author: "Dr. James Park",
      publishDate: "2025-01-05",
      readTime: "10 min read",
      category: "Case Studies",
      image: "https://images.unsplash.com/photo-1666015212938-b96bb465f5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjB0ZWNobm9sb2d5JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1NTQ2OTYxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Case Study", "Transformation", "ROI"]
    },
    {
      id: '3',
      title: "Current Progress and Future Prospects of Agriculture Technology: Gateway to Sustainable Agriculture",
      excerpt: "Breaking down the financial benefits of investing in climate-smart agricultural technologies and the long-term ROI for farmers.",
      author: "Nawab Khan",
      publishDate: "2021-04-27",
      readTime: "5 min read",
      category: "Industry News",
      image: "https://images.unsplash.com/photo-1738598665698-7fd7af4b5e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhcm1pbmclMjBpcnJpZ2F0aW9ufGVufDF8fHx8MTc1NTQ2OTYxNnww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Economics", "ROI", "Investment"]
    },
    {
      id: '4',
      title: "Predictive Maintenance: How It's Redefining and Evolving the Tractor Fleet",
      excerpt: "How AI-driven predictive maintenance is preventing costly equipment failures and reducing downtime for agricultural operations.",
      author: "BKT",
      publishDate: "2025-05-02",
      readTime: "2 min read",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzU1MzkyOTIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Predictive Maintenance", "Equipment", "AI"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Insights & Research
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              ClimaFarm AI™{' '}
              <span className="text-primary">Insights Hub</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay informed with the latest insights, research, and innovations in sustainable 
              agriculture technology. Discover how AI is transforming farming for a more 
              resilient future.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Featured Article</span>
            </div>
            <h2 className="text-2xl font-bold">Editor's Pick</h2>
          </div>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="aspect-w-16 aspect-h-9 h-64 md:h-full">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <Badge variant="outline">{featuredPost.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(featuredPost.publishDate)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold">{featuredPost.title}</h3>
                  <p className="text-muted-foreground">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{featuredPost.author}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button>
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            <p className="text-muted-foreground">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No articles found matching your search criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-9 h-48">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(post.publishDate)}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm">
                      {post.excerpt}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Read More
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated with Our Latest Insights</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest articles, research findings, 
                and industry insights directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Implement These Innovations?
            </h2>
            <p className="text-lg opacity-90">
              Learn how you can apply these cutting-edge technologies and practices 
              to your own agricultural operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="text-base"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onNavigate('solutions')}
                className="text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}