import { Brain, TrendingUp, Users, Database } from 'lucide-react';

const principles = [
  {
    icon: Brain,
    title: 'Insight Economy',
    description: 'Value derived from predictive accuracy, pattern recognition, and actionable intelligence.'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Intelligence',
    description: 'Systems that reward foresight, anticipation, and strategic thinking in complex environments.'
  },
  {
    icon: Users,
    title: 'Human–AI Value Systems',
    description: 'Collaborative frameworks where human creativity and machine precision create synergistic worth.'
  },
  {
    icon: Database,
    title: 'Data as Currency',
    description: 'Transforming information quality and insight depth into a measurable, exchangeable asset.'
  }
];

export const CorePrinciples = () => {
  return (
    <section id="principles" className="relative py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4 text-center">
          <span className="text-foreground">Core</span>{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Principles
          </span>
        </h2>
        
        <p className="font-inter text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          The conceptual foundations of an intelligent value system
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.title}
                className="group bg-card border border-border rounded-xl p-6 sm:p-8 shadow-card backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-secondary transition-colors duration-500" />
                </div>
                
                <h3 className="font-orbitron font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-foreground">
                  {principle.title}
                </h3>
                
                <p className="font-inter text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
