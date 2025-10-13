import creatorPhoto from '@/assets/creator-photo.jpeg';

export const Creator = () => {
  return (
    <section id="creator" className="relative py-24 px-6 bg-gradient-to-b from-background to-space-deep">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 text-center">
          <span className="text-foreground">About the</span>{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Creator
          </span>
        </h2>
        
        <div className="mt-16 bg-card border border-border rounded-2xl p-8 md:p-12 shadow-card backdrop-blur-sm">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-8 overflow-hidden p-1">
              <img 
                src={creatorPhoto} 
                alt="Creator" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            <h3 className="font-orbitron font-bold text-2xl mb-6 text-foreground">
              Visionary Designer & Conceptual Thinker
            </h3>
            
            <div className="space-y-4 font-inter text-lg text-muted-foreground leading-relaxed max-w-2xl">
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
