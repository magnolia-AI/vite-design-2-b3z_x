import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Zap, Globe, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function HomePage() {
  return (
    <div className="container mx-auto px-6 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
        />
        
        <motion.div {...fadeInUp} className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs uppercase tracking-[0.2em]">
            <Sparkles className="w-4 h-4" /> Now Powered by Neon Precision
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
            THE ELECTRIC COLLISION OF <span className="text-primary italic">FLAVOR</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-serif max-w-2xl mx-auto italic leading-relaxed">
            "Tokyo's neon-lit precision meets Mexico City's sun-drenched vibrancy. A fusion found only on the edge."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Button size="lg" className="h-14 px-10 rounded-full text-lg shadow-2xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
              <Link to="/chat">
                Get Started <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="link" className="text-lg font-mono tracking-widest uppercase h-14">
              Explore Menu
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid */}
      <section className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 p-12 bg-secondary/50 rounded-[2rem] border border-border flex flex-col justify-between min-h-[400px] overflow-hidden group"
          >
            <Zap className="w-12 h-12 text-primary" />
            <div className="space-y-4">
              <h3 className="text-4xl font-bold tracking-tighter uppercase leading-none">Instant <br/>Electric Umami</h3>
              <p className="text-muted-foreground font-serif text-lg">Our spices are tuned to frequencies that resonate with your soul.</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-12 bg-accent/20 rounded-[2rem] border border-border flex flex-col justify-between overflow-hidden relative"
          >
            <Globe className="w-12 h-12 text-accent-foreground" />
            <div className="space-y-4">
              <h3 className="text-4xl font-bold tracking-tighter uppercase leading-none">Global <br/>Roots</h3>
              <p className="text-muted-foreground font-serif text-lg">Cross-cultural alchemy in every bite.</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-10 bg-card/50 rounded-[2rem] border border-border backdrop-blur-sm"
          >
            <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-6">Latest Updates</h4>
            <ul className="space-y-6">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-center justify-between group cursor-pointer border-b border-border/50 pb-4">
                  <span className="font-serif italic text-lg group-hover:text-primary transition-colors">Yuzu Chili Fusion Roll</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-primary" />
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 p-1 rounded-[2rem] bg-gradient-to-br from-primary via-accent to-secondary overflow-hidden"
          >
            <div className="w-full h-full bg-background rounded-[1.9rem] p-12 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <h3 className="text-5xl font-bold tracking-tighter uppercase">Neon Nights Season</h3>
                <p className="text-muted-foreground font-serif text-lg leading-relaxed">
                  Join us after dark for exclusive dishes that glow under UV light. Architectural flavors for the modern night owl.
                </p>
                <Button className="rounded-full px-8">View Calendar</Button>
              </div>
              <div className="w-full md:w-1/2 aspect-square bg-muted rounded-3xl grid-pattern opacity-50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial/Quote */}
      <section className="py-24 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-5xl font-serif italic max-w-4xl mx-auto leading-tight"
        >
          "Bootsushi isn't a kitchen, it's a particle accelerator for street food."
        </motion.p>
        <p className="mt-8 font-mono text-sm uppercase tracking-widest text-muted-foreground">— The Underground Gastro Collective</p>
      </section>
    </div>
  );
}

