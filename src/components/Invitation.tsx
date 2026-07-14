import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "./Button";
import inviteImg from "../assets/images/team_building_collaboration_1783400524104.jpg";

export const Invitation = () => {
  return (
    <div className="relative min-h-[80vh] md:min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 lg:py-0 overflow-hidden bg-[#1a1915]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={inviteImg} 
          alt="Collaboration" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1915] via-[#1a1915]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1915] via-transparent to-transparent" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl"
      >
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-lora font-bold leading-tight mb-6 lg:mb-10 text-[#EFEAE2]">
          Let's build something <br className="hidden md:block" />
          <span className="italic text-[#9C6B3E]">that lasts.</span>
        </h2>

        <p className="text-base md:text-xl lg:text-2xl text-[#EFEAE2]/70 max-w-xl leading-relaxed mb-10 lg:mb-12 font-montserrat font-light">
          We're here to help you communicate with purpose and lead with confidence.
        </p>

        <Button 
          variant="primary" 
          size="lg" 
          className="w-full md:w-auto border-[#2F4F3E] shadow-[0_20px_40px_-10px_rgba(47,79,62,0.6)] hover:shadow-[0_30px_60px_-10px_rgba(47,79,62,0.8)] hover:-translate-y-2 font-montserrat"
        >
          Start a Conversation
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#9C6B3E]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#2F4F3E]/20 rounded-full blur-[150px] pointer-events-none" />
    </div>
  );
};
