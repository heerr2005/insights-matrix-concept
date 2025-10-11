import { Sparkles, Network, Zap } from 'lucide-react';

const potentials = [
  {
    icon: Network,
    title: 'Decentralized Insight Networks',
    description: 'Imagine a global ecosystem where insights flow freely, validated by consensus, and rewarded automatically.'
  },
  {
    icon: Zap,
    title: 'Real-Time Value Exchange',
    description: 'Instantaneous valuation and exchange of predictive intelligence across industries and applications.'
  },
  {
    icon: Sparkles,
    title: 'AI-Human Collaboration Protocol',
    description: 'Standardized frameworks for measuring and compensating collaborative intelligence creation.'
  }
];

export const FuturePotential = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 text-center">
          <span className="text-foreground">Future</span>{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Potential
          </span>
        </h2>
        
        <p className="font-inter text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Where this conceptual framework could evolve
        </p>

        <div className="space-y-6 mb-16">
          {potentials.map((potential, index) => {
            const Icon = potential.icon;
            return (
              <div
                key={potential.title}
                className="flex gap-6 items-start bg-card border border-border rounded-xl p-8 shadow-card backdrop-blur-sm hover:border-primary/50 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                
                <div>
                  <h3 className="font-orbitron font-bold text-xl mb-3 text-foreground">
                    {potential.title}
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    {potential.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/30 rounded-xl p-8 text-center">
          <p className="font-inter text-lg text-foreground leading-relaxed">
            This project could evolve into a{' '}
            <span className="text-primary font-semibold">living ecosystem</span>—a platform where researchers, creators, and organizations collaborate to build the infrastructure for intelligent value exchange. From concept to reality, one insight at a time.
          </p>
        </div>
      </div>
    </section>
  );
};
