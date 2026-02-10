import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Zap, Target, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-accent/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-6 rotate-[-1deg]">
              <Zap className="w-4 h-4 fill-current" />
              THE FUTURE OF STREET TALK
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-black leading-[0.9] mb-8">
              TOKYO <span className="text-primary italic">CHOP</span> MEX <span className="text-accent underline decoration-4 underline-offset-8">COOL</span>.
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              Experience the world's most vibrant chat platform. Bold typography, neon vibes, and the spicy precision of street culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/chat">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 group shadow-[0_10px_30px_-10px_theme(colors.primary.DEFAULT)]"
                >
                  Enter the Grid <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-card border-2 border-border px-8 py-4 rounded-xl font-bold text-lg hover:border-accent transition-colors"
              >
                View Menu
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[2rem] overflow-hidden border-8 border-card shadow-2xl rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1542332213-31f87348057f?w=800&q=80" 
                alt="Tokyo Neon Street" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Floating UI Element */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 right-8 bg-card p-6 rounded-2xl border-2 border-primary shadow-xl rotate-[-4deg] max-w-xs"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-accent" />
                  <div className="font-bold">Tokyo Ronin</div>
                </div>
                <p className="text-sm opacity-80 italic">"The neon hits different tonight. Meeting at the sushi stand at 11?"</p>
              </motion.div>
            </div>
            
            {/* Sticker Decorations */}
            <div className="absolute top-[-20px] left-[-20px] bg-secondary text-secondary-foreground font-black px-6 py-2 rounded-lg rotate-[-15deg] shadow-lg border-2 border-border">
              FRESH AF
            </div>
            <div className="absolute bottom-[-10px] left-[20%] bg-accent text-accent-foreground font-black px-4 py-2 rounded-full rotate-[5deg] shadow-lg border-2 border-border text-xs">
              UMAMI CHAT
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif font-black mb-12 text-center">WHY WE'RE <span className="text-secondary-foreground bg-secondary px-3 py-1">DIFFERENT</span></h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border-2 border-border p-8 rounded-3xl hover:border-primary transition-colors group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4 font-serif">Instant Fusion</h3>
            <p className="text-muted-foreground">Real-time messaging that feels like a quick chop. Low latency, high impact.</p>
          </div>
          <div className="bg-card border-2 border-border p-8 rounded-3xl hover:border-accent transition-colors group">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4 font-serif">Global Street</h3>
            <p className="text-muted-foreground">Connecting the alleyways of Shibuya to the plazas of Mexico City.</p>
          </div>
          <div className="bg-card border-2 border-border p-8 rounded-3xl hover:border-secondary-foreground transition-colors group">
            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary-foreground mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4 font-serif">Precision Built</h3>
            <p className="text-muted-foreground">Every interaction is meticulously crafted for speed and visual clarity.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

