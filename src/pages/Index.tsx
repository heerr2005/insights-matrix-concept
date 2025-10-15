import { MatrixBackground } from "@/components/MatrixBackground";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Vision } from "@/components/Vision";
import { CorePrinciples } from "@/components/CorePrinciples";
import { DesignShowcase } from "@/components/DesignShowcase";
import { FuturePotential } from "@/components/FuturePotential";
import { Creator } from "@/components/Creator";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <MatrixBackground />
      <Navigation />
      
      <main className="relative z-10" id="main-content" role="main">
        <Hero />
        <Vision />
        <CorePrinciples />
        <DesignShowcase />
        <FuturePotential />
        <Creator />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
