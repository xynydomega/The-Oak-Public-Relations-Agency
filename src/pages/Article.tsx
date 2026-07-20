import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { client, urlFor } from "../lib/sanity";
import { articleQuery } from "../lib/queries";
import { ArrowLeft } from "lucide-react";

export const Article = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!slug) return;

    client.fetch(articleQuery, { slug }).then((data) => {
      setArticle(data);
    });
  }, [slug]);
  if (!article) {
    return (
      <div className="pt-40 text-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <article className="max-w-5xl mx-auto pt-40 px-6 pb-24">

  {/* Floating Content Card */}

  <div className="p-6 pb-0">
  <button
    onClick={() => navigate("/insights")}
    className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/70 hover:text-[#9C6B3E] transition-colors"
  >
    <ArrowLeft className="w-4 h-4" />
    Back to Insights
  </button>
</div>
  <div className="bg-[#1C1B17]/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-2xl">
  <img
    src={urlFor(article.featuredImage).url()}
    alt={article.title}
    className="w-full rounded-3xl mb-12"
  />


    <p className="text-brand-accent uppercase tracking-[0.25em] text-xs font-bold mb-5">
      {article.category}
    </p>

    <h1 className="text-4xl md:text-5xl lg:text-6xl font-lora font-bold text-white leading-tight mb-8">
      {article.title}
    </h1>

    <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm uppercase tracking-widest mb-12 border-b border-white/10 pb-6">
      <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
      <span>•</span>
      <span>{article.author}</span>
    </div>

    <div className="space-y-8 text-white/80 text-lg leading-9">
      {article.body?.map((block: any, index: number) => (
        <p key={index}>
          {block.children?.map((child: any) => child.text).join("")}
        </p>
      ))}
      <div className="p-6 pb-0">
  <button
    onClick={() => navigate("/insights")}
    className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/70 hover:text-[#9C6B3E] transition-colors"
  >
    <ArrowLeft className="w-4 h-4" />
    Back to Insights
  </button>
</div>
    </div>

  </div>

</article>
  );
};