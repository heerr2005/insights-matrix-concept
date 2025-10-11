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
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 text-center">
          <span className="text-foreground">Core</span>{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Principles
          </span>
        </h2>
        
        <p className="font-inter text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          The conceptual foundations of an intelligent value system
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.title}
                className="group bg-card border border-border rounded-xl p-8 shadow-card backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-500" />
                </div>
                
                <h3 className="font-orbitron font-bold text-2xl mb-4 text-foreground">
                  {principle.title}
                </h3>
                
                <p className="font-inter text-muted-foreground leading-relaxed">
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
