import { AlertCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8 p-4 bg-primary/10 border border-primary/30 rounded-xl">
          <AlertCircle className="w-6 h-6 text-primary flex-shrink-0" />
          <p className="font-inter text-sm text-foreground text-center">
            <span className="font-semibold">Important Disclaimer:</span> This is a conceptual creative project—not a real cryptocurrency or investment offering.
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="font-orbitron font-bold text-2xl">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              InsightsMatrix Coin
            </span>
          </div>
          
          <p className="font-inter text-sm text-muted-foreground max-w-2xl mx-auto">
            A visionary concept exploring the intersection of artificial intelligence, data insights, and digital value systems. Created as a creative portfolio piece and thought experiment.
          </p>

          <div className="pt-6 border-t border-border">
            <p className="font-inter text-xs text-muted-foreground">
              © 2025 InsightsMatrix Coin Concept. All creative rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
