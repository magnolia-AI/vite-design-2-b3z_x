import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, MessageCircle, Home, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function RootLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen grid-pattern flex flex-col">
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border" : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-lg shadow-primary/20">
              <Coffee className="text-primary-foreground w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-glow">
              BOOT<span className="text-primary">SUSHI</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest">
            <Link to="/" className={`transition-colors hover:text-primary ${location.pathname === "/" ? "text-primary font-bold" : "text-muted-foreground"}`}>
              Home
            </Link>
            <Link to="/chat" className={`transition-colors hover:text-primary ${location.pathname === "/chat" ? "text-primary font-bold" : "text-muted-foreground"}`}>
              Interface
            </Link>
            <Button variant="outline" className="rounded-full px-6 border-primary/20 hover:bg-primary/5 transition-all">
              Connect
            </Button>
          </nav>

          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-2xl font-serif">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Home</Link>
              <Link to="/chat" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Interface</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-border mt-24 py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              © 2024 BOOTSUSHI1 / TOKYO × MEXICO CITY
            </p>
            <div className="flex gap-12">
              <a href="#" className="font-mono text-xs hover:text-primary transition-colors uppercase tracking-widest">Terms</a>
              <a href="#" className="font-mono text-xs hover:text-primary transition-colors uppercase tracking-widest">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

