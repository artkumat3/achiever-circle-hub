import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import SplashScreen from "@/components/SplashScreen";
import { 
  Users, 
  Lightbulb, 
  TrendingUp, 
  Briefcase, 
  MessageCircle,
  CheckCircle,
  XCircle,
  Star,
  Shield,
  BookOpen,
  Rocket,
  Heart,
  Target,
  Award,
  Users2,
  Sparkles,
  ArrowRight,
  ChevronDown
} from "lucide-react";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!showSplash) {
      setTimeout(() => setIsVisible(true), 100);
    }
  }, [showSplash]);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className={`min-h-screen bg-gradient-hero transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative px-6 py-32 text-center overflow-hidden min-h-screen flex items-center">
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="relative max-w-6xl mx-auto animate-fade-in">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              Powered by PROCBSE
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Halls of Achiever
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
              A Circle of Ambitious Students
            </p>
            <p className="text-xl text-primary font-semibold mb-12">
              Where Knowledge, Skills & Growth Converge
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join an exclusive community of driven students who are passionate about learning, growing, 
              and achieving excellence. Connect with like-minded peers, share insights, and build the future together.
            </p>
          </div>

          <div className="space-y-4">
            <Button variant="hero" size="lg" className="text-lg px-12 py-6 animate-glow group">
              <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Join Our Circle
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            {/* Scroll indicator */}
            <div className="flex flex-col items-center mt-16 animate-bounce-slow">
              <p className="text-sm text-muted-foreground mb-2">Discover More</p>
              <ChevronDown className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-background/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What is Halls of Achiever?</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Halls of Achiever is more than just a student community - it's a movement of ambitious 
                individuals dedicated to personal and professional growth. Powered by PROCBSE, we bring 
                together passionate students who believe in the power of collaboration, knowledge sharing, 
                and mutual support.
              </p>
              <Card className="bg-gradient-card border-primary/20 shadow-card">
                <CardContent className="p-8">
                  <Target className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To create an active, valuable space where students can share expertise, develop 
                    business ideas, and grow together in a respectful, supportive environment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What You Can Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover endless opportunities to connect, learn, and grow within our vibrant community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 p-4 bg-primary/10 rounded-full w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Connect & Collaborate</h3>
                <ul className="text-muted-foreground space-y-2 text-left">
                  <li>• Engage in friendly discussions with fellow achievers</li>
                  <li>• Build meaningful relationships with passionate students</li>
                  <li>• Form teams for personal business ventures</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 p-4 bg-primary/10 rounded-full w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Share & Learn</h3>
                <ul className="text-muted-foreground space-y-2 text-left">
                  <li>• Exchange innovative ideas and knowledge</li>
                  <li>• Share your skills and expertise with the community</li>
                  <li>• Get feedback and reviews on your projects</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 p-4 bg-primary/10 rounded-full w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Grow & Achieve</h3>
                <ul className="text-muted-foreground space-y-2 text-left">
                  <li>• Participate in exclusive growth opportunities</li>
                  <li>• Receive constructive feedback on your work</li>
                  <li>• Access improvement ideas and solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 p-4 bg-primary/10 rounded-full w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Business Development</h3>
                <ul className="text-muted-foreground space-y-2 text-left">
                  <li>• Discuss and refine business ideas</li>
                  <li>• Get support for your entrepreneurial journey</li>
                  <li>• Connect with potential co-founders and partners</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 p-4 bg-primary/10 rounded-full w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Stay Active & Engaged</h3>
                <ul className="text-muted-foreground space-y-2 text-left">
                  <li>• Participate in daily discussions</li>
                  <li>• Share your day-to-day experiences</li>
                  <li>• Stay updated with community activities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section id="community" className="px-6 py-20 bg-background/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Community Guidelines</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our community thrives on respect, collaboration, and shared growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* We Encourage */}
            <Card className="bg-gradient-card border-green-500/30 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-green-400 mr-3" />
                  <h3 className="text-2xl font-semibold">We Encourage</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Respectful and friendly communication
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Knowledge and idea sharing
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Collaborative team building
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Business idea discussions
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Skill development and sharing
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Active participation in opportunities
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Strictly Prohibited */}
            <Card className="bg-gradient-card border-red-500/30 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <XCircle className="h-8 w-8 text-red-400 mr-3" />
                  <h3 className="text-2xl font-semibold">Strictly Prohibited</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Abusive or vulgar language</strong> → Instant ban</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Money requests</strong> → Contact admins directly</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    Spam or scam activities
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    Promotion of outside content
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    Sharing pirated/copyrighted material
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Inappropriate behavior</strong> → Permanent ban</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Join Halls of Achiever?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the unique advantages that set our community apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-4">Learn from Peers</h3>
                <p className="text-muted-foreground">
                  Access diverse perspectives and expertise from ambitious students across different fields and backgrounds.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-4">Exclusive Opportunities</h3>
                <p className="text-muted-foreground">
                  Get first access to growth opportunities, competitions, and collaborative projects within the community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <Users2 className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-4">Build Your Network</h3>
                <p className="text-muted-foreground">
                  Connect with future entrepreneurs, innovators, and leaders who share your passion for excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-4">Accelerate Growth</h3>
                <p className="text-muted-foreground">
                  Receive mentorship, feedback, and support to fast-track your personal and professional development.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-4">Stay Motivated</h3>
                <p className="text-muted-foreground">
                  Surround yourself with driven individuals who will inspire and challenge you to achieve your goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Values */}
      <section id="values" className="px-6 py-20 bg-background/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Community Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our community and shape our interactions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center group">
              <div className="mb-4 p-6 bg-primary/10 rounded-full w-fit mx-auto group-hover:scale-110 transition-all duration-300 group-hover:bg-primary/20">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">We strive for the highest standards in everything we do.</p>
            </div>

            <div className="text-center group">
              <div className="mb-4 p-6 bg-primary/10 rounded-full w-fit mx-auto group-hover:scale-110 transition-all duration-300 group-hover:bg-primary/20">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
              <p className="text-sm text-muted-foreground">Together we achieve more than we ever could alone.</p>
            </div>

            <div className="text-center group">
              <div className="mb-4 p-6 bg-primary/10 rounded-full w-fit mx-auto group-hover:scale-110 transition-all duration-300 group-hover:bg-primary/20">
                <BookOpen className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Learning</h3>
              <p className="text-sm text-muted-foreground">Knowledge sharing is the foundation of our growth.</p>
            </div>

            <div className="text-center group">
              <div className="mb-4 p-6 bg-primary/10 rounded-full w-fit mx-auto group-hover:scale-110 transition-all duration-300 group-hover:bg-primary/20">
                <Lightbulb className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">We encourage creative thinking and entrepreneurial spirit.</p>
            </div>

            <div className="text-center group">
              <div className="mb-4 p-6 bg-primary/10 rounded-full w-fit mx-auto group-hover:scale-110 transition-all duration-300 group-hover:bg-primary/20">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Respect</h3>
              <p className="text-sm text-muted-foreground">Every member deserves dignity and professional treatment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="join" className="px-6 py-24 bg-gradient-hero relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-primary/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8 relative">
            <Rocket className="h-16 w-16 text-primary mx-auto mb-8 animate-float" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-primary/10 rounded-full animate-ping"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Ready to Join the Movement?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <strong>Halls of Achiever</strong> isn't just another student group - it's your gateway to meaningful 
            connections, real opportunities, and a supportive environment where ambitious minds meet and future leaders are born.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="lg" className="text-lg px-12 py-6 animate-glow group">
              <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Join Our Circle Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/50 text-primary hover:bg-primary/10">
              Learn More
            </Button>
          </div>

          <p className="text-sm text-muted-foreground italic animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Where ambitious minds meet, innovative ideas flourish, and future leaders are born.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Halls of Achiever</h3>
            <p className="text-muted-foreground mb-4">Powered by PROCBSE • Exclusive Student Circle</p>
            <p className="text-sm text-muted-foreground">
              Focus: Knowledge, Skills & Growth • For Investment Ideas or Special Requests: Contact admins directly
            </p>
          </div>
          
          <div className="pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground">
              © 2024 Halls of Achiever. This is an exclusive community with strict guidelines. 
              By joining, you agree to maintain the highest standards of respect and professionalism.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;