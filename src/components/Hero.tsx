import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import heroImg from "../assets/images/hero.png";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-[70vh] md:h-[80vh] lg:h-screen flex flex-col justify-center pt-24 pb-8 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Majestic Oak" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-8xl font-lora font-bold leading-[1.1] tracking-tight mb-6 lg:mb-8 text-white"
        >
          Reputation is built with <span className="italic font-medium text-brand-brown-accent">intention.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-sm md:text-lg lg:text-xl text-white/80 max-w-2xl font-montserrat font-medium leading-relaxed mb-8 lg:mb-12"
        >
          Strategic communication that helps organisations earn trust, shape perception, and create lasting impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
           <button
        onClick={() => navigate("/approach")}
        className="group inline-flex items-center gap-3 bg-brand-brown-accent hover:bg-brand-green-accent border-2 border-brand-green-accent rounded-full px-6 py-3 md:px-8 md:py-4 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white transition-all duration-300 shadow-lg shadow-brand-green-accent/30"
      >
        Discover Our Approach
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-6 md:right-10 flex items-center gap-4">
        <p className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/30">Scroll to explore</p>
        <div className="w-8 md:w-12 h-[1px] bg-white/20" />
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
