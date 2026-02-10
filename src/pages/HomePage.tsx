import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center">
        {/* Background Image Effect */}
        <div className="absolute inset-0 -z-10 opacity-30 mask-radial-fade">
          <img 
            src="/images/hero-fusion.webp" 
            alt="Hero Background" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"
        />
        
        <motion.div {...fadeInUp} className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs uppercase tracking-[0.2em]">
            <Sparkles className="w-4 h-4" /> Now Powered by Neon Precision
          </div>
          
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85]">
            THE ELECTRIC COLLISION OF <span className="text-primary italic">FLAVOR</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-serif max-w-2xl mx-auto italic leading-relaxed">
            "Tokyo's neon-lit precision meets Mexico City's sun-drenched vibrancy. A fusion found only on the edge."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Button size="lg" className="h-14 px-10 rounded-full text-lg shadow-2xl shadow-primary/40 hover:scale-105 transition-transform bg-primary" asChild>
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
            className="md:col-span-2 p-12 bg-secondary/70 rounded-[2.5rem] border border-border flex flex-col md:flex-row justify-between min-h-[450px] overflow-hidden group relative"
          >
            <div className="flex-1 flex flex-col justify-between z-10">
              <Zap className="w-12 h-12 text-primary" />
              <div className="space-y-4">
                <h3 className="text-5xl font-bold tracking-tighter uppercase leading-none">Instant <br/>Electric Umami</h3>
                <p className="text-muted-foreground font-serif text-xl max-w-sm">Our spices are tuned to frequencies that resonate with your soul.</p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <img src="/images/fusion-roll.webp" alt="Fusion dish" className="w-full h-full object-cover object-center translate-x-12 group-hover:translate-x-0 transition-transform duration-700" />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-12 bg-accent/30 rounded-[2.5rem] border border-border flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="absolute inset-0 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700">
                <img src="/images/night-vibes.webp" alt="Night Vibes" className="w-full h-full object-cover opacity-20 group-hover:opacity-40" />
            </div>
            <div className="relative z-10 space-y-24">
              <Globe className="w-12 h-12 text-accent-foreground" />
              <div className="space-y-4">
                <h3 className="text-4xl font-bold tracking-tighter uppercase leading-none">Global <br/>Roots</h3>
                <p className="text-accent-foreground/80 font-serif text-lg italic underline underline-offset-4 decoration-primary">Alchemy in every bite.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-10 bg-card rounded-[2.5rem] border border-border shadow-2xl shadow-black/5"
          >
            <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-8">Daily Transmissions</h4>
            <ul className="space-y-8">
              {[
                { name: "Yuzu Chili Fusion", type: "Roll" },
                { name: "Carnitas Temaki", type: "Handroll" },
                { name: "Matcha Horchata", type: "Liquid" }
              ].map((item, i) => (
                <li key={i} className="flex items-center justify-between group cursor-pointer border-b border-border/50 pb-6 last:border-0">
                  <div className="flex flex-col">
                    <span className="font-serif italic text-xl group-hover:text-primary transition-colors">{item.name}</span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{item.type}</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all text-primary translate-y-2 group-hover:translate-y-0" />
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 p-1 rounded-[2.5rem] bg-gradient-to-br from-primary/40 via-accent/40 to-secondary/40 overflow-hidden"
          >
            <div className="w-full h-full bg-background rounded-[2.4rem] p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group">
              <div className="flex-1 space-y-6 relative z-10">
                <h3 className="text-6xl font-bold tracking-tighter uppercase leading-[0.9]">Neon Nights <br/>Season</h3>
                <p className="text-muted-foreground font-serif text-xl leading-relaxed max-w-md">
                  Join us after dark for exclusive dishes that glow under UV light. Architectural flavors for the modern night owl.
                </p>
                <Button className="rounded-full px-10 h-14 text-sm uppercase tracking-widest font-mono shadow-xl shadow-primary/20">View Calendar</Button>
              </div>
              <div className="w-full md:w-1/2 aspect-square relative z-10 overflow-hidden rounded-3xl border border-border shadow-2xl">
                 <img src="/images/hero-fusion.webp" alt="Night mood" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              {/* Decorative Blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary to-transparent" />
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-serif italic max-w-5xl mx-auto leading-tight px-4"
        >
          "Bootsushi isn't just a kitchen, it's a particle accelerator for <span className="text-primary">street food</span>."
        </motion.p>
        <p className="mt-12 font-mono text-xs uppercase tracking-[0.5em] text-muted-foreground">— The Underground Gastro Collective</p>
      </section>
    </div>
  );
}

