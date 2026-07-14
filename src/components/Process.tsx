import { motion } from "motion/react";
import { Footprints } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "We start with understanding.",
    description: "Before strategy comes perspective. We take time to understand your organisation, your ambitions, your challenges, and the people you want to reach. Every recommendation begins here.",
  },
  {
    id: "02",
    title: "We build with purpose.",
    description: "Every recommendation is intentional. We develop communication strategies that support your goals, strengthen your reputation, and create measurable impact.",
  },
  {
    id: "03",
    title: "We communicate with clarity.",
    description: "From media engagement to stakeholder communication, every message is crafted to be clear, consistent, and authentic.",
  },
  {
    id: "04",
    title: "We grow with you.",
    description: "Reputation isn't built in a single campaign. We continue to refine, protect, and strengthen your communications as your organisation evolves.",
  },
];

export const Process = () => {
  return (
    <div className="h-full flex flex-col justify-center px-6 lg:px-20 pt-8 pb-16 lg:pt-12 lg:pb-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{ y: [0, -12, 0] }}
          transition={{ 
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.8 },
            y_initial: { duration: 0.8 }
          }}
          className="flex justify-center mb-8 lg:mb-12"
        >
          <div className="relative group">
            {/* Animated glow rings */}
            <div className="absolute inset-0 rounded-full bg-[#9C6B3E]/20 blur-xl group-hover:bg-[#9C6B3E]/30 transition-colors duration-700" />
            <div className="absolute -inset-4 rounded-full border border-[#9C6B3E]/10 animate-[spin_10s_linear_infinite]" />
            
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-[#2F4F3E] flex items-center justify-center border border-[#9C6B3E]/30 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative z-10">
              <Footprints className="w-10 h-10 lg:w-12 lg:h-12 text-[#9C6B3E]" strokeWidth={1} />
            </div>
          </div>
        </motion.div>

        <h2 className="text-3xl lg:text-5xl font-lora font-bold text-center mb-16 lg:mb-32 text-[#EFEAE2] lowercase first-letter:uppercase">
          Our approach is rooted in <span className="italic text-[#9C6B3E]">purpose</span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-8 left-0 w-full h-[1px] bg-white/10 hidden md:block" />
          
          <div className="grid md:grid-cols-4 gap-12 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full border border-white/20 bg-[#2F4F3E] flex items-center justify-center mb-8 relative z-10 group-hover:border-[#9C6B3E] transition-colors duration-500">
                   <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-[10px] font-bold text-white/40 group-hover:text-[#9C6B3E]">
                      {step.id}
                   </div>
                </div>
                <h3 className="text-xl font-lora font-bold mb-4 text-[#EFEAE2] leading-snug">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-[240px] font-montserrat">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-[600px] h-[600px] text-brand-gold">
          <path d="M50 10 C30 30 30 60 50 90 C70 60 70 30 50 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  );
};
