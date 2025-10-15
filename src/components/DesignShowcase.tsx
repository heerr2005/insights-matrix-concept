import coinShowcase1 from '@/assets/coin-showcase-1.png';
import coinFrontside from '@/assets/coin-frontside.png';
import coinBackside from '@/assets/coin-backside.png';

export const DesignShowcase = () => {
  const showcaseItems = [
    {
      image: coinShowcase1,
      title: "Interactive Environment",
      description: "Immersive data visualization",
      alt: "InsightsMatrix Coin in interactive 3D environment with matrix-style data visualization and digital particles"
    },
    {
      image: coinFrontside,
      title: "Front Design",
      description: "InsightsMatrix identity",
      alt: "Front face of InsightsMatrix Coin showing brand logo, geometric patterns, and AI-powered value system design"
    },
    {
      image: coinBackside,
      title: "Back Design",
      description: "Geometric precision",
      alt: "Back face of InsightsMatrix Coin featuring intricate geometric patterns and precision engineering details"
    }
  ];

  return (
    <section id="design" className="relative py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-background to-space-deep">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Design
          </span>{' '}
          <span className="text-foreground">Showcase</span>
        </h2>
        
        <p className="font-inter text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          Visual explorations of an intelligent value system
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden border border-border shadow-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
              
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-background/95 via-background/80 to-transparent">
                <h3 className="font-orbitron font-bold text-lg sm:text-xl text-foreground mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="font-inter text-xs sm:text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
