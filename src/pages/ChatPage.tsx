import { motion } from "framer-motion";
import { MessageSquare, Users, Settings, Search, Send, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const CONTACTS = [
  { id: 1, name: "Tokyo Ronin", lastMsg: "The sushi taco was fire!", status: "online", avatar: "TR" },
  { id: 2, name: "Maria Neon", lastMsg: "Meet at the night market?", status: "offline", avatar: "MN" },
  { id: 3, name: "Street Samurai", lastMsg: "Did you try the spicy mayo?", status: "online", avatar: "SS" },
  { id: 4, name: "Chef Kaito", lastMsg: "New fusion roll tonight.", status: "online", avatar: "CK" },
];

const MESSAGES = [
  { id: 1, text: "Yo! We hitting the neon district tonight?", sender: "Tokyo Ronin", time: "10:30 PM", me: false },
  { id: 2, text: "For sure, picking up some sushi burritos first.", sender: "Me", time: "10:32 PM", me: true },
  { id: 3, text: "Make sure they have that extra lime zest.", sender: "Tokyo Ronin", time: "10:33 PM", me: false },
  { id: 4, text: "Always. See you in 20. 🍣🔥", sender: "Me", time: "10:35 PM", me: true },
];

export default function ChatPage() {
  const [activeContact, setActiveContact] = useState(CONTACTS[0]);
  const [input, setInput] = useState("");

  return (
    <div className="flex h-screen bg-background font-sans overflow-hidden">
      {/* Navigation Sidebar (Sticker Style) */}
      <nav className="w-20 bg-card border-r border-border flex flex-col items-center py-8 gap-8">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-serif text-2xl font-bold rotate-3 hover:rotate-0 transition-transform cursor-pointer">
          BS
        </div>
        <div className="flex flex-col gap-6 text-muted-foreground">
          <MessageSquare className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
          <Users className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
          <Settings className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
        </div>
        <div className="mt-auto">
          <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" alt="avatar" />
          </div>
        </div>
      </nav>

      {/* Contacts Column */}
      <div className="w-80 bg-background border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <h2 className="text-2xl font-bold font-serif mb-4 flex items-center gap-2">
            Discussions <span className="bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full">12</span>
          </h2>
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search Tokyo..." 
              className="w-full bg-muted border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary transition-all outline-none"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {CONTACTS.map((contact) => (
            <motion.div
              key={contact.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveContact(contact)}
              className={cn(
                "p-4 rounded-xl cursor-pointer flex items-center gap-4 transition-colors",
                activeContact.id === contact.id ? "bg-secondary text-secondary-foreground" : "hover:bg-muted"
              )}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center font-bold text-accent-foreground border-2 border-border shadow-sm">
                  {contact.avatar}
                </div>
                {contact.status === "online" && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-background" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-0.5">
                  <h3 className="font-bold truncate">{contact.name}</h3>
                  <span className="text-[10px] opacity-60">10:30 PM</span>
                </div>
                <p className="text-sm opacity-70 truncate">{contact.lastMsg}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="p-4 border-t border-border">
          <button className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" /> New Chat
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col relative">
        {/* Header */}
        <header className="h-20 border-b border-border flex items-center justify-between px-8 bg-background/80 backdrop-blur-md z-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center font-bold text-accent-foreground border-2 border-border">
              {activeContact.avatar}
            </div>
            <div>
              <h1 className="font-bold font-serif text-xl">{activeContact.name}</h1>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-success inline-block" /> Active now
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Search className="w-5 h-5 text-muted-foreground cursor-pointer" />
            <Settings className="w-5 h-5 text-muted-foreground cursor-pointer" />
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-[radial-gradient(circle_at_top_right,var(--accent)_0%,transparent_15%)]">
          {MESSAGES.map((msg) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={msg.id}
              className={cn(
                "flex flex-col max-w-[70%]",
                msg.me ? "ml-auto items-end" : "items-start"
              )}
            >
              <div className={cn(
                "px-5 py-3 rounded-2xl text-sm leading-relaxed shadow-sm",
                msg.me 
                  ? "bg-primary text-primary-foreground rounded-br-none" 
                  : "bg-card text-card-foreground border border-border rounded-bl-none"
              )}>
                {msg.text}
              </div>
              <span className="text-[10px] mt-1 text-muted-foreground px-1">{msg.time}</span>
            </motion.div>
          ))}
        </div>

        {/* Big Input Area */}
        <div className="p-6 bg-background">
          <div className="max-w-4xl mx-auto relative flex items-center gap-4">
            <div className="flex-1 relative">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Message ${activeContact.name}...`}
                className="w-full bg-card border-2 border-border rounded-xl py-4 px-6 focus:border-primary outline-none text-base placeholder:text-muted-foreground/50 pr-12 transition-all shadow-sm"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground hidden sm:block">⌘K</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground p-4 rounded-xl shadow-[0_4px_14px_0_theme(colors.primary.DEFAULT/.39)]"
            >
              <Send className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </main>
    </div>
  );
}

