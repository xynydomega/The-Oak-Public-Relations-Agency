import { motion } from "motion/react";
import { ArrowRight, MessageSquare, Shield, Users, Trees } from "lucide-react";

const disciplines = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Strategic Communication",
    tagline: "Every strong reputation begins with a clear voice.",
    description: "Without clarity, even the best ideas struggle to gain support. We ensure every message reflects your purpose and inspires confidence.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Reputation Management",
    tagline: "Reputation is earned every day.",
    description: "We help organisations safeguard their credibility through consistent communication and thoughtful strategy.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Public Engagement",
    tagline: "Trust grows through meaningful connections.",
    description: "We foster conversations that build understanding, strengthen relationships, and create lasting influence.",
  },
];

export const Disciplines = () => {
  return (
    <div className="h-full flex flex-col justify-center px-6 lg:px-20 py-16 lg:py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex justify-center mb-8 lg:mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border border-brand-gold/20 flex items-center justify-center bg-brand-gold/5 backdrop-blur-sm">
              <Trees className="w-10 h-10 lg:w-12 lg:h-12 text-brand-gold opacity-80" strokeWidth={1.2} />
            </div>
            {/* Decorative outer ring */}
            <div className="absolute inset-0 -m-3 border border-brand-gold/10 rounded-full animate-pulse" />
          </motion.div>
        </div>
        <h2 className="text-3xl lg:text-4xl font-lora font-bold text-center mb-12 lg:mb-20 text-balance text-[#EFEAE2]">
          We shape how you are <span className="italic text-[#9C6C3E]">understood.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-8">
          {disciplines.map((item, idx) => {
            const descWords = item.description.split(' ');
            const lastWord = descWords.pop();
            const mainDesc = descWords.join(' ');

            const titleWords = item.title.split(' ');
            const firstTitleWord = titleWords[0];
            const secondTitleWord = titleWords.slice(1).join(' '); // Join the rest in case of more than 2 words

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ 
                  y: -15,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="bg-[#2F4F3E] border-[3px] border-[#9C6B3E] p-8 lg:p-10 flex flex-col items-center text-center group hover:bg-[#2F4F3E]/90 transition-all duration-500 rounded-3xl lg:rounded-[2.5rem] shadow-[0_0_40px_rgba(156,107,62,0.25)] hover:shadow-[0_0_60px_rgba(156,107,62,0.45)]"
              >
                <div className="w-16 h-16 rounded-2xl border border-brand-gold/30 flex items-center justify-center mb-8 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-500 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-lora font-bold mb-6 text-[#EFEAE2]">
                  {firstTitleWord} <span className="text-[#9C6B3E]">{secondTitleWord}</span>
                </h3>
                
                <div className="text-sm leading-relaxed mb-8 font-montserrat">
                  <p className="font-bold text-[#EFEAE2] mb-3">{item.tagline}</p>
                  <p className="text-white/70">
                    {mainDesc}{' '}
                    <span className="text-[#9C6B3E] font-bold">{lastWord}</span>
                  </p>
                </div>

                <button className="mt-auto flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold/60 hover:text-brand-gold transition-colors">
                  Insights
                  <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
