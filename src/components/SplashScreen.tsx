import { useState, useEffect } from "react";
import { Sparkles, Users, TrendingUp, Lightbulb } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { icon: Sparkles, text: "Initializing Excellence..." },
    { icon: Users, text: "Connecting Ambitious Minds..." },
    { icon: Lightbulb, text: "Igniting Innovation..." },
    { icon: TrendingUp, text: "Preparing Your Journey..." },
  ];

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 50; // Update every 50ms
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        
        // Update current step based on progress
        const stepIndex = Math.floor((newProgress / 100) * steps.length);
        setCurrentStep(Math.min(stepIndex, steps.length - 1));
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay before completing
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete, steps.length]);

  const CurrentIcon = steps[currentStep]?.icon || Sparkles;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90">
        <div className="absolute inset-0 animate-pulse">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo Animation */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            {/* Outer Ring */}
            <div className="absolute inset-0 border-4 border-primary/30 rounded-full animate-spin" 
                 style={{ animationDuration: "3s" }} />
            
            {/* Inner Ring */}
            <div className="absolute inset-2 border-4 border-primary/60 rounded-full animate-spin" 
                 style={{ animationDuration: "2s", animationDirection: "reverse" }} />
            
            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <CurrentIcon className="h-8 w-8 text-primary animate-pulse" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent animate-fade-in">
            Halls of Achiever
          </h1>
          <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Powered by PROCBSE
          </p>
        </div>

        {/* Loading Step */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-lg font-medium text-foreground mb-4">
            {steps[currentStep]?.text || "Loading..."}
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-300 ease-out rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>

          {/* Progress Percentage */}
          <p className="text-sm text-muted-foreground mt-2">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Feature Dots */}
        <div className="flex justify-center space-x-2 animate-fade-in" style={{ animationDelay: "0.9s" }}>
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index <= currentStep ? "bg-primary scale-125" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;