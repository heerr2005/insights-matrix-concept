import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            The Future of Value
          </span>
          <br />
          <span className="text-foreground">is Intelligent.</span>
        </h1>
        
        <p className="font-inter text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          A conceptual vision by a creator exploring the fusion of AI, insight, and digital value.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
