import { motion } from "motion/react";

export const OurApproach = () => {
  return (
    <div className="pt-32 px-6 lg:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-8xl font-lora font-bold text-[#EFEAE2] mb-8"
        >
          Our <span className="italic text-[#9C6B3E]">Approach.</span>
        </motion.h1>
        <p className="text-[#EFEAE2]/70 text-xl font-montserrat max-w-2xl">
          A methodology rooted in strategic clarity and institutional integrity.
        </p>
      </div>
    </div>
  );
};
