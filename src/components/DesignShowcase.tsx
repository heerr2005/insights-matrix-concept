import { Hexagon } from 'lucide-react';

export const DesignShowcase = () => {
  return (
    <section id="design" className="relative py-24 px-6 bg-gradient-to-b from-background to-space-deep">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Design
          </span>{' '}
          <span className="text-foreground">Showcase</span>
        </h2>
        
        <p className="font-inter text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Visual explorations of an intelligent value system
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <div
              key={item}
              className="relative aspect-square rounded-xl overflow-hidden border border-border shadow-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-secondary/10 group-hover:scale-110 transition-transform duration-700" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <Hexagon className="w-32 h-32 text-primary/30 animate-float" style={{ animationDelay: `${item * 0.5}s` }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-orbitron text-4xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                      {item}
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-card to-transparent">
                <h3 className="font-orbitron font-bold text-xl text-foreground mb-2">
                  Concept Visual {item}
                </h3>
                <p className="font-inter text-sm text-muted-foreground">
                  Architectural exploration
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
