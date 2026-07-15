import { motion } from "motion/react";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "./Button";
import impactImg from "../assets/images/lighthouse_cliff_1783358132203.jpg";
import { Link, useNavigate } from "react-router-dom";

export const Impact = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full flex items-center justify-center px-4 md:px-8 lg:p-20 pt-16 pb-8 md:pt-24 md:pb-12">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl bg-black/30 backdrop-blur-xl border border-white/10 p-6 md:p-12 lg:p-20 rounded-[2rem] md:rounded-3xl lg:rounded-[4rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] relative"
      >
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center relative z-10">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-lora font-bold leading-tight mb-6 lg:mb-8 text-[#EFEAE2]">
              In a world of noise, <br className="hidden md:block" />
              clarity is <span className="italic text-[#9C6B3E]">influence.</span>
            </h2>
            
            <div className="space-y-4 lg:space-y-6 text-[#EFEAE2]/80 font-montserrat max-w-lg mb-8 lg:mb-10">
              <p className="text-sm lg:text-base leading-relaxed">
                If you don't shape the conversation around your organisation, someone else will. Every missed opportunity to communicate leaves room for misunderstanding, weakens trust, and allows others to define your story.
              </p>
              
              <div className="py-2 lg:py-4 border-l-2 border-[#9C6B3E] pl-6 my-6 lg:my-8">
                <span className="block text-2xl md:text-3xl lg:text-4xl font-lora font-bold text-[#9C6B3E] mb-1">81%</span>
                <p className="text-[10px] md:text-xs lg:text-sm italic font-medium">
                  of consumers say they need to trust a brand before buying from it.
                </p>
              </div>

              <p className="text-sm lg:text-base leading-relaxed font-bold">
                Trust isn't accidental. It's earned through consistent, intentional communication.
              </p>
            </div>

            <Button 
            onClick={() => navigate("/about")}
             variant="primary" size="md" className="w-full md:w-auto border-[#2F4F3E] shadow-[0_15px_35px_-10px_rgba(47,79,62,0.6)] hover:shadow-[0_25px_50px_-10px_rgba(47,79,62,0.8)] hover:-translate-y-1">
              Why It Matters Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Right Content - Floating Rounded Image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group aspect-square overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem] shadow-2xl border border-white/5"
          >
            <img 
              src={impactImg} 
              alt="Impact" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Gradient fade to the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#9C6B3E]/40" />
            
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
              <div className="w-20 h-20 rounded-full bg-[#9C6B3E]/80 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Subtle decorative background gradient inside card */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#9C6B3E]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#2F4F3E]/20 rounded-full blur-[100px] pointer-events-none" />
      </motion.div>
    </div>
  );
};
