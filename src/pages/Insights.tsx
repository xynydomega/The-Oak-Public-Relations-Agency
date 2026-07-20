import { motion } from "motion/react";
import { ArrowRight, BookOpen, MessageSquare, TrendingUp, Sparkles, Share2 } from "lucide-react";
import { Insights as InsightsSection } from "../components/Insights";
import insightHeroImg from "../assets/images/Insight hero.png";
import { useEffect, useState } from "react";
import { client } from "../lib/sanity";
import { allArticlesQuery } from "../lib/queries";
import { urlFor } from "../lib/sanity";
import { Link } from "react-router-dom";
import { useRef } from "react";
export const Insights = () => {
  const categories = [
    { name: "All", count: 24 },
    { name: "Strategy", count: 8 },
    { name: "Communication", count: 6 },
    { name: "Impact", count: 5 },
    { name: "Reputation", count: 5 },
  ];

  const [articles, setArticles] = useState([]);



useEffect(() => {
  client.fetch(allArticlesQuery).then((data) => {
    console.log(data);
    setArticles(data);
    console.log("All:", articles);
console.log("Featured:", featuredArticles);


  });
}, []);
useEffect(() => {
  const section = document.getElementById("explore");

  if (window.location.hash === "#explore" && section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}, []);
const featuredArticles = articles.filter(
  (article: any) => article.featured
);

const normalArticles = articles.filter(
  (article: any) => !article.featured
);

const exploreRef = useRef<HTMLDivElement>(null);

  return (
    <div className="pb-20">
      {/* Hero Section with Background Image */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden mb-24">
        <div className="absolute inset-0 z-0">
          <img 
            src={insightHeroImg} 
            alt="Insights & Perspectives" 
            className="w-full h-full object-cover grayscale-[0.2] brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0A1A10]" />
        </div>

        <div className="relative z-10 px-6 md:px-12 lg:px-20 text-center max-w-7xl mx-auto pt-24 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-9xl font-lora font-bold text-[#EFEAE2] mb-6 md:mb-8 leading-tight">
              Insights & <span className="italic text-[#9C6B3E]">Perspectives.</span>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-[#EFEAE2]/90 font-montserrat max-w-3xl mx-auto leading-relaxed font-light">
              Thought leadership at the intersection of strategy, communication, and enduring reputation.
            </p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#EFEAE2]/40 font-montserrat">Explore Perspectives</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#9C6B3E] to-transparent" />
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto">
        {/* Featured Article */}
        {featuredArticles.map((article: any) => (
          <Link
    key={article._id}
    to={`/insights/${article.slug.current}`}
  >
  <section
    className="px-6 lg:px-20 mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[60vh] lg:h-[70vh] rounded-[3rem] overflow-hidden group cursor-pointer border border-white/10"
          >
            <img 
              src={urlFor(article.featuredImage).url()}
              alt={article.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-[#9C6B3E] text-white text-[10px] font-bold tracking-widest uppercase">Featured</span>
                  <span className="text-[#EFEAE2]/60 text-xs font-montserrat uppercase tracking-widest">{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
                <h2 className="text-3xl lg:text-6xl font-lora font-bold text-[#EFEAE2] mb-8 group-hover:text-[#9C6B3E] transition-colors leading-tight">
                  {article.title}
                </h2>
                <button className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-[#EFEAE2] group/btn font-montserrat">
                  Read the full perspective
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>
         </Link>
        ))}

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

      
  {/* Re-use the existing Insights section component as a footer/cta area */}
      <InsightsSection />
      <button
  onClick={() =>
    exploreRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }
>
  Explore Insights
</button>

      {/* Main Grid */}
      <div ref={exploreRef} className="max-w-7xl mx-auto mb-12 text-center">
  <h2 className="text-4xl lg:text-5xl font-lora font-bold text-[#EFEAE2] mb-4">
    Explore <span className="italic text-[#9C6B3E]">Insights.</span>
  </h2>

  <p className="text-[#EFEAE2]/60 max-w-2xl  mx-auto text-lg font-montserrat mb-8">
    Discover our latest thinking on reputation, communication, leadership, and organizational impact.
  </p>

  <div className="flex flex-wrap justify-center gap-4">
    {categories.map((cat) => (
      <button
        key={cat.name}
        className="px-6 py-3 rounded-full border border-white/10 text-xs font-bold tracking-widest uppercase text-[#EFEAE2]/70 hover:border-[#9C6B3E] hover:text-[#9C6B3E] transition-all"
      >
        {cat.name}
      </button>
    ))}
  </div>
</div>
      <section className="px-6 lg:px-20 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {normalArticles.map((article: any, idx) => (
  <Link to={`/insights/${article.slug.current}`}>
  <motion.div
    key={article._id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: idx * 0.1 }}
    viewport={{ once: true }}
    className="group cursor-pointer"
  >
    <div className="aspect-[16/10] rounde-2xl overflow-hidden mb-8 border border-white/5 bg-white/[0.02]">
      <img
        src={urlFor(article.featuredImage).url()}
        alt={article.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
      />
    </div>

    <div className="flex items-center gap-3 text-[#9C6B3E] mb-4">
      <BookOpen className="w-5 h-5" />
      <span className="text-[10px] font-bold tracking-widest uppercase font-montserrat">
        {article.category}
      </span>
    </div>

    <h3 className="text-2xl font-lora font-bold text-[#EFEAE2] mb-4 group-hover:text-[#9C6B3E] transition-colors leading-snug">
      {article.title}
    </h3>

    <p className="text-[#EFEAE2]/60 mb-6">
      {article.excerpt}
    </p>

    <div className="flex items-center justify-between pt-6 border-t border-white/10">
      <span className="text-[10px] font-bold tracking-widest uppercase text-[#EFEAE2]/40 font-montserrat">
        {new Date(article.publishedAt).toLocaleDateString()}
      </span>

      <button className="text-[#9C6B3E] opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  </motion.div>
  </Link>
))}
              
          </div>
        </div>
      </section>

    
      
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
  </div>
);
};
