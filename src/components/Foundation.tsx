import { motion } from "motion/react";
import { ArrowRight, Sprout } from "lucide-react";
import rootsImg from "../assets/images/mossy_tree_roots_1783358118304.jpg";

export const Foundation = () => {
  return (
    <div className="h-full flex items-center justify-center p-8 lg:p-24">
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="grid lg:grid-cols-2 w-full max-w-6xl gap-0 overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] border border-white/5 bg-brand-dark/40 backdrop-blur-sm"
      >
        {/* Left: Image */}
        <div className="h-[400px] lg:h-auto relative overflow-hidden">
          <img 
            src={rootsImg} 
            alt="Roots" 
            className="w-full h-full object-cover grayscale-[0.2]"
          />
          {/* Blend Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#101B15] via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#101B15]/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#101B15_0%,#101B15_35%,#2A2E21_50%,#85745B_75%,#7D5532_100%)] opacity-40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-brand-dark/10" />
        </div>

        {/* Right: Content Card */}
        <div className="bg-brand-cream text-brand-dark p-12 lg:p-20 flex flex-col justify-center relative">
          <div className="mb-8">
            <div className="w-12 h-12 rounded-xl bg-brand-green-accent/10 flex items-center justify-center border border-brand-green-accent/20">
              <Sprout className="w-6 h-6 text-brand-green-accent" />
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-lora font-bold leading-tight mb-8">
            <span className="text-[#2F503F]">Growth</span> begins with <br /> <span className="text-[#9C6C3E]">perception</span>.
          </h2>
          
          <p className="text-[#1C1B17] font-montserrat text-base leading-relaxed tracking-tight mb-10 max-w-lg">
            Every message, interview, campaign, and conversation shapes how your organisation is remembered. We ensure each one reinforces your reputation, builds trust, and supports your long-term ambitions.
          </p>

          <button className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase group">
            Our Approach
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Abstract Leaf Decoration (Watermark) */}
          <div className="absolute bottom-0 right-0 p-8 opacity-[0.03] pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-64 h-64">
              <path d="M50 10 C30 30 30 60 50 90 C70 60 70 30 50 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
