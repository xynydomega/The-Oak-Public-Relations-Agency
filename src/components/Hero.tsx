import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import heroImg from "../assets/images/hero.png";

export const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center pt-20 px-8 lg:px-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Majestic Oak" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-7xl font-lora font-bold leading-[1.1] tracking-tight mb-6 lg:mb-8"
        >
          Reputation is built with <span className="italic font-medium text-brand-brown-accent">intention.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl font-montserrat font-medium leading-relaxed mb-8 lg:mb-10"
        >
          Strategic communication that helps organisations earn trust, shape perception, and create lasting impact.
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="group flex items-center gap-4 bg-brand-brown-accent hover:bg-brand-green-accent border-2 border-brand-green-accent px-8 py-4 text-sm font-medium tracking-widest uppercase transition-all rounded-full text-white shadow-xl shadow-brand-green-accent/40"
        >
          Discover Our Approach
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-10 flex items-center gap-4">
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/30">Scroll to explore</p>
        <div className="w-12 h-[1px] bg-white/20" />
      </div>

      {/* Abstract Leaf Decoration */}
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full flex items-center justify-center opacity-20">
        <div className="w-64 h-64 border border-white/10 rounded-full" />
        <svg viewBox="0 0 100 100" className="absolute w-32 h-32 text-brand-gold/40">
           <path d="M50 10 C30 30 30 60 50 90 C70 60 70 30 50 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
           <path d="M50 30 C40 40 40 55 50 70 C60 55 60 40 50 30" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  );
};
