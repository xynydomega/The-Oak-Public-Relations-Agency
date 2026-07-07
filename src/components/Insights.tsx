import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    image: "/src/assets/images/insight_desk_book_1783358144019.jpg",
    title: "Why reputation is your strongest asset",
    category: "Strategy",
  },
  {
    image: "/src/assets/images/insight_oak_leaves_1783358154623.jpg",
    title: "Building trust in complex times",
    category: "Communication",
  },
  {
    image: "/src/assets/images/insight_misty_forest_1783358165144.jpg",
    title: "The value of consistent communication",
    category: "Impact",
  },
];

export const Insights = () => {
  return (
    <div className="h-full flex items-center justify-center p-4 lg:p-20">
      <div className="bg-[#1C1B17] text-[#EFEAE2] w-full max-w-7xl rounded-3xl lg:rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col lg:flex-row backdrop-blur-xl bg-black/40">
        {/* Left Side Title */}
        <div className="lg:w-1/3 p-8 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-lora font-bold leading-tight">
              Insights that inform. <br />
              <span className="italic text-[#9C6B3E]">Perspectives that shape.</span>
            </h2>
          </div>
          
          <button className="mt-8 lg:mt-12 flex items-center gap-3 text-xs font-bold tracking-widest uppercase group font-montserrat relative z-10">
            Explore Insights
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Decorative blur */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#9C6B3E]/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Right Side Articles Grid */}
        <div className="lg:w-2/3 p-6 lg:p-12 grid md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-6 bg-white/5 rounded-2xl border border-white/5">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2]"
                />
              </div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-[#9C6B3E] mb-3 font-montserrat">{article.category}</p>
              <h3 className="text-xl font-lora font-bold leading-snug mb-6 group-hover:text-[#9C6B3E] transition-colors">{article.title}</h3>
              <button className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase border-b border-white/10 pb-1 font-montserrat group-hover:border-[#9C6B3E] transition-colors">
                Read more
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
