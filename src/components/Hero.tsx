import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import coinImage from "@/assets/insightsmatrix-coin.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-0">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="relative text-left">
            {/* Glow effects behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] bg-primary/20 rounded-full blur-[80px] sm:blur-[120px] animate-glow-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-secondary/20 rounded-full blur-[60px] sm:blur-[100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
            <h1 className="relative font-orbitron font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 animate-fade-in leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                The Future of Value
              </span>
              <br />
              <span className="text-foreground">is Intelligent.</span>
            </h1>
            
            <p className="relative font-inter text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A conceptual vision by a creator exploring the fusion of AI, insight, and digital value.
            </p>
            
            <div className="relative flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="font-orbitron text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow transition-all hover:scale-105"
                onClick={() => scrollToSection('vision')}
              >
                Explore the Vision
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="font-orbitron text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-primary text-primary hover:bg-primary/10"
                onClick={() => scrollToSection('contact')}
              >
                Connect
              </Button>
            </div>
          </div>

          {/* Right side - Coin image */}
          <div className="relative flex items-center justify-center animate-fade-in mt-8 lg:mt-0" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-[300px] sm:max-w-md lg:max-w-lg">
              {/* Coin image - clean background */}
              <img 
                src={coinImage} 
                alt="InsightsMatrix Coin" 
                className="relative w-full h-auto animate-float"
              />
            </div>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('vision')}
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 animate-float"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6 md:w-8 md:h-8 text-primary animate-glow-pulse" />
        </button>
      </div>
    </section>
  );
};
