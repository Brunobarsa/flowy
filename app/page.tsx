"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, GitBranch, Map, Zap, 
  Layers, Search, HardDrive, 
  Terminal, History, MessageSquare,
  ShieldAlert, Users, RefreshCw, Eye, X
} from "lucide-react";




type FeatureItem = { title: string; desc: string; icon: React.ReactNode };
type FeatureCategory = {
  id: string;
  title: string;
  icon: React.ReactNode;
  bg: string;
  iconColor: string;
  items: FeatureItem[];
};

const FEATURES_DATA: FeatureCategory[] = [
  {
    id: "management",
    title: "1. Management Module",
    icon: <HardDrive className="w-5 h-5" />,
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    items: [
      { title: "Integrated Dashboard", desc: "Visual panel of all scanned projects. Find them quickly and visually.", icon: <Layers className="w-4 h-4" /> },
      { title: "Global Search", desc: "Search for a specific file or function across all your saved maps instantly.", icon: <Search className="w-4 h-4" /> },
      { title: "Git Sync", desc: "Traffic light indicator if your map is out of date with the branch's last commit.", icon: <GitBranch className="w-4 h-4" /> },
      { title: "Tags & Folders", desc: "Group your maps freely into folders: Personal Projects, Open Source, or Work.", icon: <Eye className="w-4 h-4" /> },
    ]
  },
  {
    id: "visualizer",
    title: "2. The Pro Visualizer",
    icon: <Globe className="w-5 h-5" />,
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    items: [
      { title: "Infinite Canvas", desc: "Zoom, drag, and organize nodes freely in a limitless space.", icon: <Zap className="w-4 h-4" /> },
      { title: "Layer Filters", desc: "Sort and hide nodes by file type, folder, or Git status.", icon: <Layers className="w-4 h-4" /> },
      { title: "Focus Mode", desc: "Click a file and the map hides everything except its direct connections.", icon: <Search className="w-4 h-4" /> },
      { title: "Node Search", desc: "Locate any component instantly with the search by node name.", icon: <RefreshCw className="w-4 h-4" /> },
    ]
  },
  {
    id: "ai",
    title: "3. Integrated AI",
    icon: <X className="w-5 h-5" />,
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
    items: [
      { title: "Explain with AI", desc: "Select a node and get a clear explanation of its responsibility with AI.", icon: <Zap className="w-4 h-4" /> },
      { title: "Anomaly Detection", desc: "AI flags modules with high inverse cohesion or too many incoming dependencies.", icon: <ShieldAlert className="w-4 h-4" /> },
      { title: "Refactor Suggestions", desc: "The model proposes how to extract and decouple modules that violate SRP.", icon: <Users className="w-4 h-4" /> },
    ]
  },
  {
    id: "integrations",
    title: "4. Pro Integrations",
    icon: <GitBranch className="w-5 h-5" />,
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    items: [
      { title: "Alias Support (@/)", desc: "The interpreter automatically reads tsconfig.json to resolve framework dependencies.", icon: <Terminal className="w-4 h-4" /> },
      { title: "Time Machine", desc: "Select an old commit or PR and visually compare if complexity has increased.", icon: <History className="w-4 h-4" /> },
      { title: "Private Repos via OAuth", desc: "Support for enterprise codebases securely without leaving the browser.", icon: <GitBranch className="w-4 h-4" /> },
      { title: "Auto-Push Webhooks", desc: "Link your project and the map will regenerate itself with each merge to master.", icon: <RefreshCw className="w-4 h-4" /> },
    ]
  },
  {
    id: "social",
    title: "5. Social Features",
    icon: <Users className="w-5 h-5" />,
    bg: "bg-pink-50",
    iconColor: "text-pink-600",
    items: [
      { title: "Shareable Maps (URLs)", desc: "Public link for anyone to explore the architecture remotely.", icon: <Globe className="w-4 h-4" /> },
      { title: "In-App Sticky Notes", desc: "Leave virtual notes on nodes to explain technical debt to the team.", icon: <MessageSquare className="w-4 h-4" /> },
      { title: "Auto-Push Webhooks", desc: "Link your project and the map will regenerate itself with each merge to master.", icon: <RefreshCw className="w-4 h-4" /> },
    ]
  }
];


function UseCaseIllustration({ type, isHovered, mode = 'corner' }: { type: string; isHovered: boolean; mode?: 'icon' | 'corner' }) {
  const size = mode === 'icon' ? 20 : 120;
  const viewbox = mode === 'icon' ? "0 0 44 44" : "0 0 180 180";
  const className = mode === 'icon' ? "" : `absolute bottom-0 right-0 pointer-events-none overflow-visible transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-20"}`;

  const variants = {
    initial: { pathLength: 0, opacity: 0, scale: 0.9 },
    animate: { pathLength: 1, opacity: 1, scale: 1 }
  };

  if (type === 'onboarding') {
    if (mode === 'icon') return <Users className={`w-5 h-5 ${isHovered ? "text-blue-600" : "text-zinc-400"}`} />;
    return (
      <svg width={size} height={size} viewBox={viewbox} fill="none" className={className}>
        <motion.circle cx="90" cy="40" r="8" stroke={isHovered ? "#3b82f6" : "#e4e4e7"} strokeWidth="2" variants={variants} animate={isHovered ? { scale: 1.2, fill: "#3b82f620" } : "initial"} />
        <motion.circle cx="40" cy="120" r="6" stroke={isHovered ? "#3b82f6" : "#e4e4e7"} strokeWidth="2" variants={variants} animate={isHovered ? { scale: 1.3 } : "initial"} />
        <motion.circle cx="140" cy="120" r="6" stroke={isHovered ? "#3b82f6" : "#e4e4e7"} strokeWidth="2" variants={variants} animate={isHovered ? { scale: 1.3 } : "initial"} />
        <motion.circle cx="90" cy="140" r="12" stroke={isHovered ? "#3b82f6" : "#e4e4e7"} strokeWidth="2" variants={variants} animate={isHovered ? { scale: 1.1 } : "initial"} />
        <motion.path d="M90 48L90 128M46 118L84 46M134 118L96 46M50 126L80 136M130 126L100 136" stroke={isHovered ? "#3b82f6" : "#f4f4f5"} strokeWidth="2" strokeDasharray="6 6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
        <AnimatePresence>
          {isHovered && (
            <motion.path d="M90 48V128 M46 118L84 46 M134 118L96 46" stroke="#3b82f6" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} />
          )}
        </AnimatePresence>
      </svg>
    );
  }
  if (type === 'audit') {
    if (mode === 'icon') return <History className={`w-5 h-5 ${isHovered ? "text-amber-600" : "text-zinc-400"}`} />;
    return (
      <svg width={size} height={size} viewBox={viewbox} fill="none" className={className}>
        <motion.rect x="40" y="40" width="100" height="100" rx="12" stroke={isHovered ? "#f59e0b" : "#e4e4e7"} strokeWidth="2" />
        <motion.path d="M55 60H125M55 80H125M55 100H90" stroke={isHovered ? "#f59e0b" : "#f4f4f5"} strokeWidth="2" strokeLinecap="round" />
        <motion.g animate={{ x: isHovered ? [0, 40, -40, 0] : 0, y: isHovered ? [0, -40, 40, 0] : 0 }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <circle cx="110" cy="110" r="25" stroke={isHovered ? "#f59e0b" : "#e4e4e7"} strokeWidth="2" fill="white" />
          <path d="M110 100V120M100 110H120" stroke={isHovered ? "#f59e0b" : "#e4e4e7"} strokeWidth="2" />
        </motion.g>
      </svg>
    );
  }
  if (type === 'refactor') {
    if (mode === 'icon') return <Layers className={`w-5 h-5 ${isHovered ? "text-purple-600" : "text-zinc-400"}`} />;
    return (
      <svg width={size} height={size} viewBox={viewbox} fill="none" className={className}>
        <motion.path d="M40 40L120 40L120 120L40 120Z" stroke={isHovered ? "#a855f7" : "#e4e4e7"} strokeWidth="2" animate={{ rotate: isHovered ? 90 : 0, borderRadius: isHovered ? "50%" : "0%" }} transition={{ duration: 1 }} />
        <motion.path d="M80 20V140M20 80H140" stroke={isHovered ? "#a855f7" : "#f4f4f5"} strokeWidth="1" strokeDasharray="8 8" />
        <motion.circle cx="80" cy="80" r="30" stroke={isHovered ? "#a855f7" : "transparent"} strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: isHovered ? 1 : 0 }} />
      </svg>
    );
  }
  if (type === 'reviews') {
    if (mode === 'icon') return <GitBranch className={`w-5 h-5 ${isHovered ? "text-emerald-600" : "text-zinc-400"}`} />;
    return (
      <svg width={size} height={size} viewBox={viewbox} fill="none" className={className}>
        <motion.rect x="30" y="30" width="100" height="100" rx="20" stroke={isHovered ? "#10b981" : "#e4e4e7"} strokeWidth="2" strokeDasharray="10 5" animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
        <motion.path d="M60 85L75 100L105 70" stroke={isHovered ? "#10b981" : "#e4e4e7"} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: isHovered ? 1 : 0 }} />
      </svg>
    );
  }
  if (mode === 'icon') return <MessageSquare className={`w-5 h-5 ${isHovered ? "text-pink-600" : "text-zinc-400"}`} />;
  return (
    <svg width={size} height={size} viewBox={viewbox} fill="none" className={className}>
      <motion.rect x="40" y="30" width="80" height="100" rx="8" stroke={isHovered ? "#ec4899" : "#e4e4e7"} strokeWidth="2" />
      <motion.path d="M55 50H105M55 70H105M55 90H80" stroke={isHovered ? "#ec4899" : "#f4f4f5"} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function UseCaseCard({ type, title, desc, className, accent, isLastInRow = false, isLastInCol = false }: { type: string; title: string; desc: string; className: string; accent: string; isLastInRow?: boolean; isLastInCol?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${className} bg-white group relative overflow-hidden flex flex-col min-h-[300px] transition-all duration-300 hover:bg-zinc-50/50 ${!isLastInRow ? "md:border-r border-zinc-100" : ""} ${!isLastInCol ? "border-b border-zinc-100" : ""}`}
    >
      <div className="relative z-20 flex flex-col h-full p-8">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 border border-zinc-100 transition-all duration-300 ${isHovered ? accent.replace('/50', '') : 'bg-zinc-50'}`}>
          <UseCaseIllustration type={type} isHovered={isHovered} mode="icon" />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold text-zinc-900 tracking-tight">{title}</h3>
          <p className="text-zinc-500 text-[15px] leading-relaxed max-w-[220px]">{desc}</p>
        </div>
      </div>
      
      {/* Large Corner Illustration Decoration */}
      <div className="absolute inset-0 z-10">
        <UseCaseIllustration type={type} isHovered={isHovered} mode="corner" />
      </div>
    </div>
  );
}

function MagnetButton({ children, href, className }: { children: React.ReactNode; href: string; className: string }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    // Snappier calculation for a more "functional" feel as requested
    setPosition({ x: x * 0.45, y: y * 0.45 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      animate={{ x: position.x, y: position.y }}
      transition={{ 
        type: "spring", 
        stiffness: 350, 
        damping: 20, 
        mass: 0.5,
        restDelta: 0.001
      }}
      className={className}
    >
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [activeFeature, setActiveFeature] = useState("management");

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xgopkadl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email })
      });
      
      if (response.ok) {
        setIsJoined(true);
        setEmail("");
      } else {
        throw new Error("Formspree error");
      }
    } catch {
      alert("There was an error sending your email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col items-center overflow-x-hidden">
      
      {/* Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-50/60 blur-[100px] rounded-full" />
        <div className="absolute top-[30%] right-[-10%] w-[40%] h-[40%] bg-zinc-50/80 blur-[80px] rounded-full" />
      </div>

      {/* Header */}
      <header className="w-full p-6 flex justify-between items-center max-w-7xl mx-auto relative z-10 font-medium">
        <a href="#inicio" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-md">
            <Map className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-zinc-900">Flowy</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-500">
          <a href="#porque" className="hover:text-zinc-900 transition-colors">Benefits</a>
          <a href="#casos" className="hover:text-zinc-900 transition-colors">Use Cases</a>
          <a href="#features" className="hover:text-zinc-900 transition-colors">Features</a>
        </nav>
        <MagnetButton href="#unirse" className="px-5 py-2.5 text-sm bg-zinc-900 text-white rounded-full hover:bg-zinc-800 shadow-sm transition-all font-bold">
          Join the Waitlist
        </MagnetButton>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto flex flex-col items-center justify-start pt-20 pb-24 relative z-10 px-4">
        
        {/* HERO SECTION */}
        <motion.div
          id="inicio"
          key="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center w-full flex flex-col items-center scroll-mt-40"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[13px] font-semibold text-amber-700 mb-8">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
            <span>Platform launch: June 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-[72px] font-bold tracking-tight mb-6 leading-[1.05] text-zinc-900 max-w-3xl">
            Visualize any<br className="hidden md:block" /> repository instantly.
          </h1>
          
          <p className="text-zinc-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Paste any GitHub URL. Flowy automatically analyzes its architecture and delivers a clean, interactive mind map in seconds.
          </p>

          <form className="relative w-full max-w-xl mx-auto group z-20">
            <div className="absolute inset-0 bg-blue-50/50 blur-3xl rounded-3xl transition-opacity opacity-0 group-hover:opacity-100" />
            <div className="relative flex items-center shadow-[0_0_30px_-2px_rgba(59,130,246,0.22),0_8px_40px_rgba(0,0,0,0.06)] rounded-2xl bg-white border-2 border-blue-100/60 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/20 focus-within:shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] transition-all duration-300">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-zinc-400" />
              </div>
              <input
                disabled
                placeholder="Repository visualizer coming soon..."
                className="w-full bg-transparent py-4 pl-12 pr-[160px] text-zinc-400 placeholder-zinc-400 focus:outline-none rounded-2xl text-[15px] font-medium cursor-not-allowed"
              />
              <button
                type="button"
                disabled
                className="absolute inset-y-1.5 right-1.5 px-6 bg-zinc-100 text-zinc-400 font-medium rounded-xl transition-all flex items-center gap-2 cursor-not-allowed border border-zinc-200"
              >
                <span className="text-sm font-bold">Developing...</span>
              </button>
            </div>
          </form>
        </motion.div>
        
        {/* PROBLEMA VS SOLUCION */}
        <section id="porque" className="w-full max-w-5xl mx-auto mt-32 px-4 scroll-mt-20">
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-5 tracking-tight">Legacy code is a labyrinth</h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Understanding a massive codebase takes weeks. Flowy turns it into a navigable map in seconds.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-100 rounded-3xl p-10">
              <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center mb-6">
                <ShieldAlert className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Without Flowy</h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 text-zinc-600 font-medium">
                  <span className="w-5 h-5 rounded-full bg-red-200 text-red-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                  Endless onboarding for new developers.
                </li>
                <li className="flex items-start gap-3 text-zinc-600 font-medium">
                  <span className="w-5 h-5 rounded-full bg-red-200 text-red-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                  Outdated documentation that lies from day 1.
                </li>
                <li className="flex items-start gap-3 text-zinc-600 font-medium">
                  <span className="w-5 h-5 rounded-full bg-red-200 text-red-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                  Fear of refactoring due to hidden dependencies.
                </li>
                <li className="flex items-start gap-3 text-zinc-600 font-medium">
                  <span className="w-5 h-5 rounded-full bg-red-200 text-red-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                  Hours lost searching for who imports what.
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500 rounded-full opacity-10 blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-emerald-500 rounded-full opacity-10 blur-3xl pointer-events-none"></div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 relative z-10">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">With Flowy</h3>
              <ul className="flex flex-col gap-4 relative z-10">
                <li className="flex items-start gap-3 text-zinc-300 font-medium">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  Visual map generated automatically from GitHub.
                </li>
                <li className="flex items-start gap-3 text-zinc-300 font-medium">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  Always synced with your branch&apos;s latest commit.
                </li>
                <li className="flex items-start gap-3 text-zinc-300 font-medium">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  Isolate dependencies with a single click in Focus Mode.
                </li>
                <li className="flex items-start gap-3 text-zinc-300 font-medium">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  From hours to seconds. Navigate, don&apos;t read.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CASOS DE USO SECTION */}
        <section id="casos" className="w-full max-w-6xl mx-auto mt-40 px-4 scroll-mt-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">Key Use Cases</h2>
            <p className="text-zinc-500 text-[17px] mt-2 font-medium">Workflows optimized for technical precision.</p>
          </div>

          <div className="border border-zinc-100 rounded-3xl overflow-hidden bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-6">
                <UseCaseCard 
                  type="onboarding" 
                  title="Onboarding" 
                  desc="Understand data flow in minutes."
                  className="md:col-span-3"
                  accent="bg-blue-50/50"
               />
               <UseCaseCard 
                  type="audit" 
                  title="Audit" 
                  desc="Detect technical debt and dead files."
                  className="md:col-span-3"
                  accent="bg-amber-50/50"
                  isLastInRow={true}
               />
               <UseCaseCard 
                  type="refactor" 
                  title="Refactors" 
                  desc="Isolate components and predict impact."
                  className="md:col-span-2"
                  accent="bg-purple-50/50"
                  isLastInCol={true}
               />
               <UseCaseCard 
                  type="reviews" 
                  title="Visual Reviews" 
                  desc="Detect side effects before merging."
                  className="md:col-span-2"
                  accent="bg-emerald-50/50"
                  isLastInCol={true}
               />
               <UseCaseCard 
                  type="docs" 
                  title="Living Docs" 
                  desc="Visual truth automatically synchronized."
                  className="md:col-span-2"
                  accent="bg-pink-50/50"
                  isLastInRow={true}
                  isLastInCol={true}
               />
            </div>
          </div>
        </section>

        <div id="features" className="w-full max-w-6xl mx-auto mt-40 pt-24 border-t border-zinc-100 relative scroll-mt-20">
           <div className="mb-20 px-4 relative z-10">
              <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">Everything you need</h2>
              <p className="text-[17px] text-zinc-500 max-w-2xl leading-relaxed font-medium">
                An arsenal 100% focused on understanding and interacting with software.
              </p>
           </div>

           <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-4 w-full relative z-10">
            
             {/* Sticky Tabs Sidebar */}
             <div className="lg:w-[35%] flex flex-col gap-3 relative">
               {FEATURES_DATA.map((category: FeatureCategory) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFeature(category.id)}
                    className={`group relative flex items-center gap-4 py-4 px-5 rounded-3xl transition-all text-left outline-none ${
                        activeFeature === category.id 
                          ? "" 
                          : "hover:bg-zinc-50 border border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    {activeFeature === category.id && (
                       <motion.div 
                         layoutId="active-tab" 
                         className="absolute inset-0 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-zinc-200/80 rounded-3xl z-0" 
                         transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                       />
                    )}
                    <div className="relative z-10 flex items-center gap-4 w-full">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 border ${
                          activeFeature === category.id 
                            ? category.bg + " " + category.iconColor + " shadow-sm border-white/50"
                            : 'bg-zinc-100 text-zinc-500 border-zinc-200 hover:bg-zinc-50'
                      }`}>
                         {category.icon}
                      </div>
                      <span className={`font-bold text-[16px] tracking-tight select-none transition-colors duration-300 ${
                          activeFeature === category.id ? "text-zinc-900" : "text-zinc-600 group-hover:text-zinc-800"
                      }`}>
                         {category.title}
                      </span>
                    </div>
                  </button>
               ))}
             </div>

             {/* Animated Features Grid Container */}
             <div className="lg:w-[65%] min-h-[520px] relative">
               <AnimatePresence mode="wait">
                 {FEATURES_DATA.map((category: FeatureCategory) => category.id === activeFeature && (
                   <motion.div
                     key={category.id}
                     initial={{ opacity: 0, filter: "blur(8px)" }}
                     animate={{ opacity: 1, filter: "blur(0px)" }}
                     exit={{ opacity: 0, filter: "blur(8px)" }}
                     transition={{ duration: 0.4, ease: "easeOut" }}
                     className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
                   >
                     {category.items.map((item: FeatureItem, idx: number) => (
                        <motion.div
                           key={item.title}
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1,  }}
                           transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                           className="bg-white/80 backdrop-blur-xl border border-zinc-200/60 rounded-[28px] p-7 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-zinc-300/80 transition-all duration-500 group flex flex-col gap-4 relative overflow-hidden"
                        >
                           <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-zinc-100 to-transparent opacity-50 rounded-bl-full -z-10 duration-700"></div>
                           
                           <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${category.bg} ${category.iconColor} duration-500 shadow-sm border border-white/80 relative z-10`}>
                             {item.icon}
                           </div>
                           <div className="flex flex-col gap-2 mt-2 relative z-10">
                             <h4 className="font-bold text-zinc-900 text-[17px] tracking-tight">{item.title}</h4>
                             <p className="text-[15px] text-zinc-500 leading-relaxed font-medium">{item.desc}</p>
                           </div>
                        </motion.div>
                     ))}
                   </motion.div>
                 ))}
               </AnimatePresence>
             </div>

           </div>
        </div>

        {/* FINAL CTA (WAITLIST) SECTION */}
        <section id="unirse" className="w-full max-w-7xl mx-auto mt-40 mb-20 px-4 scroll-mt-20">
          <div className="bg-zinc-900 rounded-[48px] py-16 md:py-20 px-8 md:px-12 relative overflow-hidden text-center flex flex-col items-center">
            {/* Background Data Grid Effect */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-b from-blue-500/10 to-transparent pointer-events-none"></div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 max-w-4xl px-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[13px] font-semibold text-blue-200 mb-8 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-blue-500/80 animate-pulse"></div>
                Early Access
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                Stop reading code. <br /> Start navigating it.
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-12 font-medium">
                Join over 600 engineers already visualizing the future of software architecture.
              </p>
              
              {isJoined ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl py-6 px-8 text-emerald-400 font-bold text-lg"
                >
                  You&apos;re on the list! You&apos;ll be hearing from Flowy very soon.
                </motion.div>
              ) : (
                <form onSubmit={handleJoin} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto relative z-10">
                  <input 
                    type="email" 
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address" 
                    className="flex-1 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-500 outline-none focus:border-blue-400/50 focus:ring-4 focus:ring-blue-400/10 transition-all font-medium"
                  />
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="px-8 py-4 rounded-2xl bg-white text-zinc-900 font-bold hover:bg-zinc-100 transition-all shadow-lg active:scale-95 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-zinc-200 border-t-zinc-800 rounded-full animate-spin" />
                    ) : (
                      "Join now"
                    )}
                  </button>
                </form>
              )}
              
              <p className="mt-6 text-zinc-600 text-sm font-medium">
                No spam.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-zinc-50/50 pt-24 pb-12 relative z-10 border-t border-zinc-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="flex flex-col gap-6 max-w-xs">
              <a href="#inicio" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-9 h-9 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg">
                  <Map className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-[20px] tracking-tight text-zinc-900">Flowy</span>
              </a>
            </div>
           
           <div className="flex flex-col md:flex-row gap-12 md:gap-24 w-full md:w-auto">
              <div className="flex flex-col gap-4">
                <span className="font-bold text-[13px] text-zinc-900 uppercase tracking-widest mb-2">Explore</span>
                <a href="#inicio" className="text-[15px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Home</a>
                <a href="#porque" className="text-[15px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Benefits</a>
                <a href="#casos" className="text-[15px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Use Cases</a>
                <a href="#features" className="text-[15px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Features</a>
                <a href="#unirse" className="text-[15px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Early Access</a>
              </div>
           </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full mt-24 pt-8 border-t border-zinc-200/80 flex flex-col md:flex-row justify-between items-center gap-4">
           <span className="text-[14px] font-medium text-zinc-400">© 2026 Flowy Inc. All rights reserved.</span>
           <span className="text-[13px] font-medium text-zinc-400 flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Systems online</span>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
