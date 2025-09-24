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
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          {/* Aurora Background */}
          <div className="absolute inset-0 bg-gradient-aurora animate-aurora opacity-30"></div>
          
          {/* Mesh Pattern */}
          <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
          
          {/* Morphing Shapes */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 animate-morphing opacity-40 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/20 animate-morphing opacity-30 blur-3xl" style={{ animationDelay: "4s" }}></div>
          
          {/* Advanced Floating Particles */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-particle-float ${
                i % 3 === 0 ? 'w-2 h-2 bg-primary/40' :
                i % 3 === 1 ? 'w-1 h-1 bg-primary-glow/60' :
                'w-3 h-3 bg-primary/20'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            />
          ))}
          
          {/* Floating Geometric Shapes */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`geo-${i}`}
              className={`absolute opacity-20 animate-tilt ${
                i % 4 === 0 ? 'w-4 h-4 bg-primary/30 rotate-45' :
                i % 4 === 1 ? 'w-6 h-1 bg-primary-glow/40' :
                i % 4 === 2 ? 'w-2 h-8 bg-primary/25' :
                'w-3 h-3 bg-primary/35 rounded-full'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
        <div className="relative max-w-6xl mx-auto animate-slide-up z-10">
          <div className="mb-8 relative">
            {/* Floating Badge */}
            <div className="relative inline-block animate-zoom-in" style={{ animationDelay: "0.2s" }}>
              <Badge variant="secondary" className="mb-4 px-6 py-3 text-sm font-medium backdrop-blur-sm bg-card/80 border border-primary/30 shadow-neon hover:shadow-glow transition-all duration-500 hover:scale-110">
                <Sparkles className="mr-2 h-4 w-4 animate-wave" />
                Powered by PROCBSE
              </Badge>
              <div className="absolute -inset-1 bg-gradient-primary rounded-lg blur opacity-30 animate-pulse-ring"></div>
            </div>
            
            {/* Main Title with Advanced Effects */}
            <div className="relative mb-6">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-foreground via-primary via-primary-glow to-foreground bg-clip-text text-transparent animate-slide-up leading-tight" style={{ animationDelay: "0.3s" }}>
                Halls of Achiever
              </h1>
              <div className="absolute inset-0 text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary/20 via-primary-glow/30 to-primary/20 bg-clip-text text-transparent blur-xl animate-glow"></div>
            </div>
            {/* Animated Subtitles */}
            <p className="text-2xl md:text-4xl text-muted-foreground mb-4 animate-fade-in font-light tracking-wide" style={{ animationDelay: "0.5s" }}>
              A Circle of <span className="text-primary font-semibold">Ambitious Students</span>
            </p>
            <div className="relative">
              <p className="text-xl md:text-2xl text-primary font-semibold mb-12 animate-rotate-in" style={{ animationDelay: "0.7s" }}>
                Where Knowledge, Skills & Growth Converge
              </p>
              <div className="absolute inset-0 text-xl md:text-2xl font-semibold bg-gradient-to-r from-primary-glow/40 via-primary/50 to-primary-glow/40 bg-clip-text text-transparent blur-sm animate-pulse-ring"></div>
            </div>
          </div>
          
          {/* Enhanced Description */}
          <div className="max-w-4xl mx-auto mb-16 animate-slide-up" style={{ animationDelay: "0.9s" }}>
            <div className="relative p-8 rounded-2xl bg-card/30 backdrop-blur-xl border border-primary/20 shadow-floating">
              <div className="absolute inset-0 bg-gradient-mesh rounded-2xl opacity-30"></div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed relative z-10">
                Join an exclusive community of <span className="text-primary font-semibold">driven students</span> who are passionate about learning, growing, 
                and achieving excellence. Connect with <span className="text-primary-glow font-medium">like-minded peers</span>, share insights, and build the future together.
              </p>
            </div>
          </div>

          {/* Advanced CTA Section */}
          <div className="space-y-8 animate-zoom-in" style={{ animationDelay: "1.1s" }}>
            <div className="relative group cursor-pointer" onClick={() => window.open('https://t.me/+W8dAXP5j8nc0ODE1', '_blank')}>
              {/* Glowing Ring Effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-ring group-hover:animate-glow"></div>
              
              <Button 
                variant="hero" 
                size="lg" 
                className="relative text-xl px-16 py-8 rounded-full bg-gradient-to-r from-primary via-primary-glow to-primary hover:from-primary-glow hover:via-primary hover:to-primary-glow transform transition-all duration-500 hover:scale-110 shadow-neon hover:shadow-floating group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Users className="mr-3 h-6 w-6 group-hover:scale-125 transition-all duration-300 relative z-10 animate-wave" />
                <span className="relative z-10 font-bold tracking-wide">Join Our Circle</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300 relative z-10" />
              </Button>
            </div>
            
            {/* Animated Scroll Indicator */}
            <div className="flex flex-col items-center mt-20 animate-bounce-slow cursor-pointer group" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="relative">
                <p className="text-sm text-muted-foreground mb-4 group-hover:text-primary transition-colors duration-500 font-medium tracking-wider">Discover More</p>
                <div className="absolute inset-0 blur-sm bg-gradient-to-r from-primary/40 to-primary-glow/40 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">Discover More</div>
              </div>
              <div className="relative">
                <ChevronDown className="h-8 w-8 text-primary animate-float group-hover:scale-125 transition-all duration-300" />
                <div className="absolute inset-0 h-8 w-8 text-primary-glow animate-pulse-ring opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-background/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 animate-slide-up bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">What is Halls of Achiever?</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Halls of Achiever is more than just a student community - it's a movement of ambitious 
                individuals dedicated to personal and professional growth. Powered by PROCBSE, we bring 
                together passionate students who believe in the power of collaboration, knowledge sharing, 
                and mutual support.
              </p>
              <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 animate-zoom-in" style={{ animationDelay: "0.4s" }}>
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  <Target className="h-8 w-8 text-primary mx-auto mb-4 animate-pulse-ring relative z-10" />
                  <h3 className="text-xl font-semibold mb-4 relative z-10">Our Mission</h3>
                  <p className="text-muted-foreground relative z-10">
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
            <h2 className="text-4xl font-bold mb-6 animate-slide-up bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">What You Can Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Discover endless opportunities to connect, learn, and grow within our vibrant community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 group animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="mb-6 p-4 bg-primary/10 rounded-full w-fit mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 relative z-10">Connect & Collaborate</h3>
                <ul className="text-muted-foreground space-y-2 text-left relative z-10">
                  <li className="hover:text-primary transition-colors duration-300">• Engage in friendly discussions with fellow achievers</li>
                  <li className="hover:text-primary transition-colors duration-300">• Build meaningful relationships with passionate students</li>
                  <li className="hover:text-primary transition-colors duration-300">• Form teams for personal business ventures</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 group animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="mb-6 p-4 bg-primary/10 rounded-full w-fit mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 relative z-10">Share & Learn</h3>
                <ul className="text-muted-foreground space-y-2 text-left relative z-10">
                  <li className="hover:text-primary transition-colors duration-300">• Exchange innovative ideas and knowledge</li>
                  <li className="hover:text-primary transition-colors duration-300">• Share your skills and expertise with the community</li>
                  <li className="hover:text-primary transition-colors duration-300">• Get feedback and reviews on your projects</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 group animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="mb-6 p-4 bg-primary/10 rounded-full w-fit mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 relative z-10">Grow & Achieve</h3>
                <ul className="text-muted-foreground space-y-2 text-left relative z-10">
                  <li className="hover:text-primary transition-colors duration-300">• Participate in exclusive growth opportunities</li>
                  <li className="hover:text-primary transition-colors duration-300">• Receive constructive feedback on your work</li>
                  <li className="hover:text-primary transition-colors duration-300">• Access improvement ideas and solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 group animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="mb-6 p-4 bg-primary/10 rounded-full w-fit mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 relative z-10">Business Development</h3>
                <ul className="text-muted-foreground space-y-2 text-left relative z-10">
                  <li className="hover:text-primary transition-colors duration-300">• Discuss and refine business ideas</li>
                  <li className="hover:text-primary transition-colors duration-300">• Get support for your entrepreneurial journey</li>
                  <li className="hover:text-primary transition-colors duration-300">• Connect with potential co-founders and partners</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 group animate-slide-in-right" style={{ animationDelay: "0.5s" }}>
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="mb-6 p-4 bg-primary/10 rounded-full w-fit mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 relative z-10">Stay Active & Engaged</h3>
                <ul className="text-muted-foreground space-y-2 text-left relative z-10">
                  <li className="hover:text-primary transition-colors duration-300">• Participate in daily discussions</li>
                  <li className="hover:text-primary transition-colors duration-300">• Share your day-to-day experiences</li>
                  <li className="hover:text-primary transition-colors duration-300">• Stay updated with community activities</li>
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

      {/* Meet Our Top Members Section */}
      <section className="relative py-24 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-grid-16" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
              Meet Our Top 1% Members
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The driving force behind our community - exceptional individuals who lead by example
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { name: "Arvish", role: "Owner of Procbse", icon: "👑" },
              { name: "Nihal", role: "Admin", icon: "🛡️" },
              { name: "Dakshita Arora", role: "Highly Active", icon: "⭐" },
              { name: "baba yoga", role: "Editor", icon: "✍️" },
              { name: "aryan gupta", role: "Tech Guy", icon: "💻" },
              { name: "arth ⚡", role: "Trader Bro", icon: "📈" },
              { name: "boo", role: "Meme Wale Bhai", icon: "😄" },
              { name: "rAj", role: "Admin", icon: "🛡️" }
            ].map((member, index) => (
              <div 
                key={member.name}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors duration-300">
                    {member.role}
                  </p>
                </div>
                
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <p className="text-lg text-muted-foreground mb-8">
              Want to join the ranks of our top contributors? Be active, be helpful, be part of the change!
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-primary/50 text-primary hover:bg-primary/10 animate-glow"
              onClick={() => window.open('https://t.me/+W8dAXP5j8nc0ODE1', '_blank')}
            >
              <Users className="mr-2 h-5 w-5" />
              Join & Become a Top Member
            </Button>
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
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-12 py-6 animate-glow group"
              onClick={() => window.open('https://t.me/+W8dAXP5j8nc0ODE1', '_blank')}
            >
              <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Join Our Circle Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
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