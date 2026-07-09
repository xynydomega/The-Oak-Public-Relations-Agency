import { motion } from "motion/react";
import { ArrowRight, BookOpen, MessageSquare, TrendingUp, Sparkles, Share2 } from "lucide-react";
import { Insights as InsightsSection } from "../components/Insights";
import deskImg from "../assets/images/insight_desk_book_1783358144019.jpg";
import leavesImg from "../assets/images/insight_oak_leaves_1783358154623.jpg";
import forestImg from "../assets/images/insight_misty_forest_1783358165144.jpg";

export const Insights = () => {
  const categories = [
    { name: "All", count: 24 },
    { name: "Strategy", count: 8 },
    { name: "Communication", count: 6 },
    { name: "Impact", count: 5 },
    { name: "Reputation", count: 5 },
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-6 lg:px-20 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl lg:text-8xl font-lora font-bold text-[#EFEAE2] mb-8 leading-tight">
              Insights & <span className="italic text-[#9C6B3E]">Perspectives.</span>
            </h1>
            <p className="text-lg lg:text-xl text-[#EFEAE2]/70 font-montserrat max-w-2xl mx-auto leading-relaxed">
              Thought leadership at the intersection of strategy, communication, and enduring reputation.
            </p>
          </motion.div>

          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[60vh] lg:h-[70vh] rounded-[3rem] overflow-hidden group cursor-pointer border border-white/10"
          >
            <img 
              src={forestImg} 
              alt="Featured Insight" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-[#9C6B3E] text-white text-[10px] font-bold tracking-widest uppercase">Featured</span>
                  <span className="text-[#EFEAE2]/60 text-xs font-montserrat uppercase tracking-widest">10 Min Read</span>
                </div>
                <h2 className="text-3xl lg:text-6xl font-lora font-bold text-[#EFEAE2] mb-8 group-hover:text-[#9C6B3E] transition-colors leading-tight">
                  The future of institutional trust in a fragmented world.
                </h2>
                <button className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-[#EFEAE2] group/btn font-montserrat">
                  Read the full perspective
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories & Filter */}
      <section className="px-6 lg:px-20 mb-20">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          {categories.map((cat) => (
            <button 
              key={cat.name}
              className="px-8 py-3 rounded-full border border-white/10 text-[#EFEAE2]/60 text-xs font-bold tracking-widest uppercase hover:border-[#9C6B3E] hover:text-[#9C6B3E] transition-all font-montserrat"
            >
              {cat.name} <span className="ml-2 opacity-30">({cat.count})</span>
            </button>
          ))}
        </div>
      </section>

      {/* Main Grid */}
      <section className="px-6 lg:px-20 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Why reputation is your strongest asset",
                category: "Strategy",
                img: deskImg,
                icon: <TrendingUp className="w-5 h-5" />
              },
              {
                title: "Building trust in complex times",
                category: "Communication",
                img: leavesImg,
                icon: <MessageSquare className="w-5 h-5" />
              },
              {
                title: "The value of consistent communication",
                category: "Impact",
                img: forestImg,
                icon: <Sparkles className="w-5 h-5" />
              },
              {
                title: "Leading through uncertainty",
                category: "Leadership",
                img: deskImg,
                icon: <BookOpen className="w-5 h-5" />
              },
              {
                title: "The impact of digital narratives",
                category: "Digital",
                img: leavesImg,
                icon: <Share2 className="w-5 h-5" />
              }
            ].map((article, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-8 border border-white/5 bg-white/[0.02]">
                  <img 
                    src={article.img} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                  />
                </div>
                <div className="flex items-center gap-3 text-[#9C6B3E] mb-4">
                  {article.icon}
                  <span className="text-[10px] font-bold tracking-widest uppercase font-montserrat">{article.category}</span>
                </div>
                <h3 className="text-2xl font-lora font-bold text-[#EFEAE2] mb-6 group-hover:text-[#9C6B3E] transition-colors leading-snug">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#EFEAE2]/40 font-montserrat">Oct 24, 2023</span>
                  <button className="text-[#9C6B3E] opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Re-use the existing Insights section component as a footer/cta area */}
      <InsightsSection />
      
      {/* Newsletter Section */}
      <section className="px-6 lg:px-20 mt-32">
        <div className="max-w-4xl mx-auto bg-[#9C6B3E]/10 rounded-[3rem] p-12 lg:p-20 text-center border border-[#9C6B3E]/20 backdrop-blur-sm">
          <h2 className="text-3xl lg:text-5xl font-lora font-bold text-[#EFEAE2] mb-8">
            Stay <span className="italic">informed.</span>
          </h2>
          <p className="text-[#EFEAE2]/70 font-montserrat mb-12 text-lg">
            Receive our latest perspectives on reputation and communication directly in your inbox.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Email Address"
              className="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white font-montserrat focus:outline-none focus:border-[#9C6B3E] transition-colors"
            />
            <button className="bg-[#9C6B3E] text-white px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#2F4F3E] transition-all font-montserrat">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
