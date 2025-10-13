import creatorPhoto from '@/assets/creator-photo.jpeg';

export const Creator = () => {
  return (
    <section id="creator" className="relative py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-background to-space-deep">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4 text-center">
          <span className="text-foreground">About the</span>{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Creator
          </span>
        </h2>
        
        <div className="mt-10 md:mt-16 bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 shadow-card backdrop-blur-sm">
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-6 sm:mb-8 overflow-hidden p-1">
              <img 
                src={creatorPhoto} 
                alt="Creator" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            <p className="font-orbitron font-semibold text-xs sm:text-sm tracking-wider text-primary mb-3 sm:mb-4">
              FOUNDER AND CEO OF INSIGHTSMATRIX
            </p>
            
            <h3 className="font-orbitron font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-foreground">
              Visionary Designer & Conceptual Thinker
            </h3>
            
            <div className="space-y-3 sm:space-y-4 font-inter text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                A creator at the intersection of technology, design, and philosophy—exploring the frontiers of what's possible when imagination meets innovation.
              </p>
              
              <p>
                Through projects like <span className="text-primary font-semibold">InsightsMatrix Coin</span>, this work investigates emerging paradigms in digital value, artificial intelligence, and the future of human-machine collaboration.
              </p>
              
              <p className="text-foreground font-semibold">
                Building concepts today that might become reality tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
