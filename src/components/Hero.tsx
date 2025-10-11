import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left">
            <h1 className="font-orbitron font-black text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                The Future of Value
              </span>
              <br />
              <span className="text-foreground">is Intelligent.</span>
            </h1>
            
            <p className="font-inter text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A conceptual vision by a creator exploring the fusion of AI, insight, and digital value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="font-orbitron text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow transition-all hover:scale-105"
                onClick={() => scrollToSection('vision')}
              >
                Explore the Vision
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="font-orbitron text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10"
                onClick={() => scrollToSection('contact')}
              >
                Connect
              </Button>
            </div>
          </div>

          {/* Right side - Coin image placeholder */}
          <div className="relative flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-lg aspect-square">
              {/* Add your coin image here */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-3xl animate-glow-pulse" />
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-4/5 h-4/5 border-2 border-primary/30 rounded-full flex items-center justify-center animate-float">
                  <span className="font-orbitron text-6xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    IMC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('vision')}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-8 h-8 text-primary animate-glow-pulse" />
        </button>
      </div>
    </section>
  );
};
