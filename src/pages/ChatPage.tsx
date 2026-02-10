import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Bot, Sparkles, Hash, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Welcome to the BOOTSUSHI flavor interface. I am your culinary architect. How can I help you construct your next experience?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `Analyzing flavor profiles for "${input}"... Applying Japanese precision and Mexican soul. We suggest the Neon Habanero Roll.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-6 max-w-5xl h-[calc(100vh-180px)]">
      <div className="flex flex-col h-full gap-6">
        {/* Chat Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tighter flex items-center gap-3 uppercase">
              <Command className="text-primary w-6 h-6" /> Architecture Terminal
            </h2>
            <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" /> Uplink Active
            </p>
          </div>
          <div className="flex gap-2">
             <Button variant="outline" size="sm" className="rounded-full font-mono text-xs uppercase tracking-widest border-primary/20">
              Clear Logs
             </Button>
          </div>
        </div>

        {/* Message Area */}
        <Card className="flex-1 bg-background/50 backdrop-blur-md border border-border rounded-[2rem] overflow-hidden flex flex-col shadow-2xl shadow-primary/5">
          <ScrollArea ref={scrollRef} className="flex-1 p-8">
            <div className="space-y-8 max-w-3xl mx-auto">
              <AnimatePresence initial={false}>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex items-start gap-4 ${
                      message.role === "user" ? "flex-reverse" : ""
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg ${
                      message.role === "assistant" 
                        ? "bg-primary text-primary-foreground rotate-3" 
                        : "bg-secondary text-secondary-foreground -rotate-3"
                    }`}>
                      {message.role === "assistant" ? <Bot size={20} /> : <User size={20} />}
                    </div>
                    <div className={`space-y-2 ${message.role === "user" ? "text-right" : ""}`}>
                      <div className={`inline-block p-6 rounded-[1.5rem] ${
                        message.role === "assistant"
                          ? "bg-muted/50 border border-border"
                          : "bg-primary text-primary-foreground font-medium"
                      } max-w-[85%]`}>
                        <p className={message.role === "assistant" ? "font-serif text-lg leading-relaxed italic" : "text-lg"}>
                          {message.content}
                        </p>
                      </div>
                      <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest px-2">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-8 bg-muted/30 border-t border-border">
            <div className="relative max-w-3xl mx-auto group">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="PROMPT THE CULINARY ARCHITECT..."
                className="h-16 pl-8 pr-20 rounded-full border-primary/20 bg-background/80 backdrop-blur focus-visible:ring-primary focus-visible:border-primary font-mono text-sm uppercase tracking-widest transition-all"
              />
              <Button
                size="icon"
                onClick={handleSend}
                className="absolute right-2 top-2 w-12 h-12 rounded-full shadow-lg shadow-primary/20 hover:scale-110 transition-transform active:scale-95"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
            <div className="flex justify-center gap-6 mt-6">
               <span className="flex items-center gap-2 font-mono text-[8px] text-muted-foreground uppercase tracking-[0.3em]">
                 <Hash className="w-3 h-3" /> Fusion.Engine_v4.2
               </span>
               <span className="flex items-center gap-2 font-mono text-[8px] text-muted-foreground uppercase tracking-[0.3em]">
                 <Hash className="w-3 h-3" /> Tokyo_Precision
               </span>
               <span className="flex items-center gap-2 font-mono text-[8px] text-muted-foreground uppercase tracking-[0.3em]">
                 <Hash className="w-3 h-3" /> Mexico_Soul
               </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

