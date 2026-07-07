import { motion } from "motion/react";
import { Play, ArrowRight } from "lucide-react";

export const Impact = () => {
  return (
    <div className="h-full flex items-center justify-center p-8 lg:p-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl bg-black/30 backdrop-blur-xl border border-white/10 p-12 lg:p-20 rounded-[4rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-lora font-bold leading-tight mb-8 text-[#EFEAE2]">
              In a world of noise, <br />
              clarity is <span className="italic text-[#9C6B3E]">influence.</span>
            </h2>
            
            <div className="space-y-6 text-[#EFEAE2]/80 font-montserrat max-w-lg mb-10">
              <p className="text-base leading-relaxed">
                If you don't shape the conversation around your organisation, someone else will. Every missed opportunity to communicate leaves room for misunderstanding, weakens trust, and allows others to define your story.
              </p>
              
              <div className="py-4 border-l-2 border-[#9C6B3E] pl-6 my-8">
                <span className="block text-4xl font-lora font-bold text-[#9C6B3E] mb-1">81%</span>
                <p className="text-sm italic font-medium">
                  of consumers say they need to trust a brand before buying from it.
                </p>
              </div>

              <p className="text-base leading-relaxed font-bold">
                Trust isn't accidental. It's earned through consistent, intentional communication.
              </p>
            </div>

            <button className="flex items-center gap-4 bg-[#9C6B3E] border-[3px] border-[#2F4F3E] px-10 py-5 rounded-full text-[12px] font-bold tracking-widest uppercase text-white shadow-[0_15px_35px_-10px_rgba(47,79,62,0.6)] hover:shadow-[0_25px_50px_-10px_rgba(47,79,62,0.8)] hover:-translate-y-1 transition-all duration-300">
              Why It Matters Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Content - Floating Rounded Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              },
              opacity: { duration: 0.8 },
              x: { duration: 0.8 }
            }}
            className="relative group aspect-square overflow-hidden rounded-[3.5rem] shadow-2xl border border-white/5"
          >
            <img 
              src="/src/assets/images/lighthouse_cliff_1783358132203.jpg" 
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
