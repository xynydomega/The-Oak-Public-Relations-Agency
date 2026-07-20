import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { client, urlFor } from "../lib/sanity";
import { allArticlesQuery } from "../lib/queries";
import { useNavigate } from "react-router-dom";

export const Insights = ({ isInsightsPage = false }: { isInsightsPage?: boolean }) => {
  const navigate = useNavigate();

  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    client.fetch(allArticlesQuery).then((data) => {
      setArticles(data);
    });
  }, []);

    

  const [startIndex, setStartIndex] = useState(0);

  const visibleArticles =
  articles.length <= 3
    ? articles
    : [
        ...articles.slice(startIndex, startIndex + 3),
        ...articles.slice(0, Math.max(0, startIndex + 3 - articles.length)),
      ];
      useEffect(() => {
  if (articles.length <= 3) return;

  const timer = setInterval(() => {
    setStartIndex((prev) => (prev + 1) % articles.length);
  }, 5000);

  return () => clearInterval(timer);
}, [articles]);

  return (
    <div className="h-full flex items-center justify-center p-4 lg:p-20">
      <div className="bg-[#1C1B17] text-[#EFEAE2] w-full max-w-7xl rounded-3xl lg:rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col lg:flex-row backdrop-blur-xl bg-black/40">
        {/* Left Side Title */}
        <div className="lg:w-1/3 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-lora font-bold leading-tight">
              Insights that inform. <br />
              <span className="italic text-[#9C6B3E]">Perspectives that shape.</span>
            </h2>
          </div>
          
          <button
           onClick={() => navigate("/insights")} className="mt-8 lg:mt-12 flex items-center gap-3 text-xs font-bold tracking-widest uppercase group font-montserrat relative z-10">
            Explore Insights
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Decorative blur */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#9C6B3E]/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Right Side Articles Grid */}
        {/* Right Side Articles */}
<div className="lg:w-2/3 p-6 lg:p-12">

  {/* Mobile */}
<div className="md:hidden">
  {articles.length > 0 && (
    <div className="group cursor-pointer">

      <div className="aspect-[4/5] overflow-hidden mb-6 bg-white/5 rounded-2xl border border-white/5">
        <img
          src={urlFor(articles[startIndex].featuredImage).url()}
          alt={articles[startIndex].title}
          className="w-full h-full object-cover transition-transform duration-1000"
        />
      </div>

      <p className="text-[10px] font-bold tracking-widest uppercase text-[#9C6B3E] mb-3 font-montserrat">
        {articles[startIndex].category}
      </p>

      <h3 className="text-xl font-lora font-bold leading-snug mb-6">
        {articles[startIndex].title}
      </h3>

      <button
  onClick={() => navigate("/insights")}
  className="mt-8 lg:mt-12 flex items-center gap-3 text-xs font-bold tracking-widest uppercase"
>
  Explore Insights
  <ArrowRight className="w-4 h-4" />
</button>
    </div>
  )}
</div>

  {/* Desktop */}
  <div className="hidden md:grid md:grid-cols-3 gap-8">

    {visibleArticles.map((article, idx) => (
      <div key={idx} className="group cursor-pointer">

        {/* Image */}
        <div className="aspect-[4/5] overflow-hidden mb-6 bg-white/5 rounded-2xl border border-white/5">
          <img
            src={urlFor(article.featuredImage).url()}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2]"
          />
        </div>

        

        {/* Category */}
        <p className="text-[10px] font-bold tracking-widest uppercase text-[#9C6B3E] mb-3 font-montserrat">
          {article.category}
        </p>

        {/* Title */}
        <h3 className="text-xl font-lora font-bold leading-snug mb-6 group-hover:text-[#9C6B3E] transition-colors">
          {article.title}
        </h3>

        {/* Read More */}
        <button
          onClick={() => navigate(`/insights/${article.slug.current}`)}
          className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase border-b border-white/10 pb-1 font-montserrat group-hover:border-[#9C6B3E] transition-colors"
        >
          Read more
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    ))}

  </div>

  {/* Navigation INSIDE the right panel */}
  <div className="flex justify-center mt-8">
    <div className="flex gap-3">
      <button
        onClick={() =>
          setStartIndex(prev =>
            prev === 0 ? articles.length - 1 : prev - 1
          )
        }
        className="w-10 h-10 rounded-full border border-white/10 hover:border-[#9C6B3E]"
      >
        ←
      </button>

      <button
        onClick={() =>
          setStartIndex(prev => (prev + 1) % articles.length)
        }
        className="w-10 h-10 rounded-full border border-white/10 hover:border-[#9C6B3E]"
      >
        →
      </button>
    </div>
  </div>

</div>

      </div>
    </div>
  );
};
