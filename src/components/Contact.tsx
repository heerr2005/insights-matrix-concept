import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = contactSchema.parse(formData);
      
      const whatsappMessage = `Hi! My name is ${validatedData.name}.\n\nEmail: ${validatedData.email}\n\nMessage: ${validatedData.message}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank');
      
      toast.success("Opening WhatsApp...", {
        description: "Your message is ready to send!"
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error("Validation Error", {
          description: error.issues[0].message
        });
      }
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Connect
          </span>{' '}
          <span className="text-foreground">& Collaborate</span>
        </h2>
        
        <p className="font-inter text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          Interested in discussing creative concepts, collaborating on visionary projects, or exploring new ideas together?
        </p>

        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 shadow-card backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="font-inter text-sm font-semibold text-foreground mb-2 block">
                Your Name
              </label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                required
                className="bg-input border-border focus:border-primary"
              />
            </div>

            <div>
              <label className="font-inter text-sm font-semibold text-foreground mb-2 block">
                Email Address
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
                className="bg-input border-border focus:border-primary"
              />
            </div>

            <div>
              <label className="font-inter text-sm font-semibold text-foreground mb-2 block">
                Your Message
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your thoughts, ideas, or collaboration proposals..."
                required
                rows={6}
                className="bg-input border-border focus:border-primary resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full font-orbitron text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow transition-all hover:scale-105"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Send via WhatsApp
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="font-inter text-muted-foreground mb-4">
              Or connect via social media
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => toast.info("Social links coming soon")}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Social Media
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
