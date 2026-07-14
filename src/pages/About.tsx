import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, HandHeart, Building2, Mic2, Sprout, ShieldCheck, MessageSquare, TrendingUp, Target, Sparkles, Shield } from "lucide-react";
import aboutHero from "../assets/images/about hero.png.jpeg";
import section2Img from "../assets/images/about section 2.png";
import section3Img from "../assets/images/about image 3.png";
import section4Img from "../assets/images/about image 4.jpg";
import section5Img from "../assets/images/about image 5.jpg";
import section6Img from "../assets/images/about image 6.jpg";
import teamImg from "../assets/images/team_building_collaboration_1783400524104.jpg";

export const About = () => {
  const pillars = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Businesses",
      description: "Growing organisations need communication that inspires confidence. We help businesses strengthen their reputation, build trust, and communicate with purpose."
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Non-profit Organisations",
      description: "Meaningful missions deserve meaningful communication. We help non-profits amplify their impact, engage communities, and earn lasting trust."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Institutions",
      description: "Public confidence begins with clarity. We support institutions with thoughtful communication that strengthens credibility and builds enduring relationships."
    },
    {
      icon: <Mic2 className="w-8 h-8" />,
      title: "Leaders & Executives",
      description: "Leadership is shaped by perception. We help executives communicate with authenticity, confidence, and purpose."
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Launching Something New",
      description: "Every new beginning deserves a clear voice. We help organisations launch brands, initiatives, and ideas with confidence from day one."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Protecting Reputation",
      description: "Reputation is one of your greatest assets. We provide strategic communication that protects trust when it matters most."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Engaging Your Audience",
      description: "Meaningful conversations create lasting influence. We help organisations connect with the people who matter most."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Supporting Growth",
      description: "As organisations grow, communication becomes increasingly important. We ensure your message evolves alongside your ambitions."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(pillars.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-24 lg:pt-32 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="px-6 lg:px-20 mb-24 lg:mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-lora font-bold leading-tight lg:leading-[1] mb-8 lg:mb-12 text-[#EFEAE2]">
                What <span className="text-[#2F4F3E]">shapes</span> a <br className="hidden md:block" />
                <span className="text-[#2F4F3E]">reputation</span> that <br className="hidden md:block" />
                <span className="italic text-[#9C6B3E]">endures?</span>
              </h1>
              <div className="space-y-6 lg:space-y-10">
                <div className="pl-6 md:pl-8 border-l-4 border-[#9C6B3E]">
                  <p className="text-xl md:text-2xl lg:text-4xl font-lora font-bold text-[#9C6B3E] leading-tight italic">
                    We believe trust is built through intentional communication.
                  </p>
                </div>
                <p className="text-base md:text-lg lg:text-xl text-[#EFEAE2]/90 leading-relaxed font-montserrat font-medium max-w-2xl">
                  Every message, relationship, and decision contributes to how an organisation is perceived. We help ensure each one reflects your purpose and strengthens your reputation.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border-[6px] border-[#9C6B3E] shadow-[0_0_80px_rgba(47,79,62,0.6)]"
            >
              <img 
                src={aboutHero} 
                alt="The OAK Studio" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
              />
              {/* Brand Hue Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#9C6B3E]/30 to-transparent mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="px-6 lg:px-20 py-12 mb-24 lg:mb-40">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#9C6B3E] font-lora font-bold text-2xl md:text-3xl lg:text-5xl uppercase tracking-[0.1em] mb-8 lg:mb-12"
          >
            Why We Exist
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center rounded-[2rem] md:rounded-[3rem] lg:rounded-[5rem] overflow-hidden border border-white/10 group"
          >
            <img 
              src={section2Img} 
              alt="Our Vision" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            
            {/* Elegant Overlay with Specific Diagonal Gradient - #1A1A1A for Readability */}
            <div 
              className="absolute inset-0 backdrop-blur-[2px] flex items-center justify-center p-12 lg:p-24 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(47, 79, 62, 0.6) 50%, rgba(156, 107, 62, 0.6) 100%)'
              }}
            >
              <div className="max-w-6xl w-full py-12">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-2xl lg:text-5xl font-montserrat font-bold text-[#EFEAE2] mb-12 lg:mb-16 leading-tight px-4"
                >
                  Perception shapes every <span className="text-[#9C6B3E]">opportunity</span>.
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="relative px-8 lg:px-24"
                >
                  {/* Large Quotation Marks with Flair and Brighter Color */}
                  <span className="absolute -top-12 lg:-top-16 -left-4 lg:left-0 text-7xl lg:text-[10rem] text-[#9C6B3E] font-lora italic leading-none select-none drop-shadow-[0_0_15px_rgba(156,107,62,0.3)]">“</span>
                  
                  <p className="text-[#EFEAE2] font-montserrat font-semibold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-wide">
                    Organisations are judged long before conversations begin. Every interaction, every message, and every decision contributes to how they are understood. We believe communication should never be left to chance—it should be guided with purpose, clarity, and intention.
                  </p>

                  <span className="absolute -bottom-12 lg:-bottom-16 -right-4 lg:right-0 text-7xl lg:text-[10rem] text-[#9C6B3E] font-lora italic leading-none select-none drop-shadow-[0_0_15px_rgba(156,107,62,0.3)]">”</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Oak Section */}
      <section className="px-6 lg:px-20 mb-24 lg:mb-40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 lg:mb-16"
          >
            <h2 className="text-[#9C6B3E] font-lora font-bold text-2xl md:text-3xl lg:text-5xl uppercase tracking-[0.1em]">
              Why Oak.
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-24"
          >
            {/* Heading and Sub-copy above the divide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12 lg:mb-24"
            >
              <h3 className="text-[#9C6B3E] font-montserrat font-bold text-3xl md:text-4xl lg:text-6xl leading-tight mb-4 lg:mb-6 uppercase tracking-tight">
                Our Purpose.
              </h3>
              <p className="text-[#EFEAE2]/80 font-montserrat text-base md:text-lg lg:text-xl leading-relaxed font-semibold max-w-3xl mx-auto">
                A philosophy that shapes every strategy, every message, and every relationship we build.
              </p>
            </motion.div>

            {/* Divided section below */}
            <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-start">
              <div className="flex flex-col gap-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="relative aspect-[4/5] rounded-[2rem] overflow-hidden"
                >
                  <img 
                    src={section3Img} 
                    alt="Our Purpose" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="max-w-xl"
                >
                  <div className="border-l-4 border-[#9C6B3E] pl-6 lg:pl-10 py-1 mb-8">
                    <p className="text-[#9C6B3E] font-montserrat text-xl lg:text-2xl leading-relaxed font-semibold">
                      Perception isn't the enemy. Misaligned perception is.
                    </p>
                  </div>
                  <p className="text-[#EFEAE2]/60 font-montserrat text-lg lg:text-xl leading-relaxed">
                    When identity and perception fall out of alignment, trust weakens, opportunities are lost, and organisations can be overshadowed by those who communicate more effectively. That is where we begin.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="relative aspect-[4/5] rounded-[2rem] overflow-hidden"
                >
                  <img 
                    src={section5Img} 
                    alt="Brand Perception" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className="border-l-4 border-[#9C6B3E] pl-6 lg:pl-10 py-1 mb-10">
                    <p className="text-[#9C6B3E] font-montserrat text-xl lg:text-3xl leading-relaxed font-semibold uppercase tracking-wider">
                      We Align Identity With Perception.
                    </p>
                  </div>
                  <p className="text-[#EFEAE2]/70 font-montserrat text-lg lg:text-xl leading-relaxed">
                    Through thoughtful strategy, clear communication, and clarity of purpose, we shape public perception with intention—building brands recognised for confidence, integrity, competence, and stability. Like the oak, they earn trust not through noise, but through consistency over time.
                  </p>
                </motion.div>
              </div>

              <div className="flex flex-col justify-center pt-8 gap-12">
                <div className="grid lg:grid-cols-1 gap-8 items-start">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    <div className="border-l-4 border-[#9C6B3E] pl-6 lg:pl-10 py-1 mb-10">
                      <p className="text-[#9C6B3E] font-montserrat text-xl lg:text-3xl leading-relaxed font-semibold">
                        Identity is what you stand for. Reputation is what others come to believe about you.
                      </p>
                    </div>
                    <p className="text-[#EFEAE2]/70 font-montserrat text-lg lg:text-xl leading-relaxed">
                      The two are not always the same. An organisation may be exceptional in its work, yet remain misunderstood. It may possess integrity, expertise, and vision, but if those qualities are not communicated with intention, perception begins to drift from reality.
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative aspect-[16/9] rounded-[2rem] overflow-hidden"
                >
                  <img 
                    src={section4Img} 
                    alt="Strategic Vision" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <div className="border-l-4 border-[#9C6B3E] pl-6 lg:pl-10 py-1 mb-10">
                    <p className="text-[#9C6B3E] font-montserrat text-xl lg:text-3xl leading-relaxed font-semibold">
                      That is where we begin.
                    </p>
                  </div>
                  <div className="flex flex-col gap-8">
                    <p className="text-[#EFEAE2]/70 font-montserrat text-lg lg:text-xl leading-relaxed">
                      Our role is not to manufacture reputations. It is to bring identity and perception into alignment, ensuring that what the world sees faithfully reflects who you are.
                    </p>
                    <p className="text-[#EFEAE2]/70 font-montserrat text-lg lg:text-xl leading-relaxed">
                      The oak is more than our name. It is the standard we measure ourselves against. A symbol of endurance, quiet confidence, stability, and lasting strength. These are the qualities that define an enduring reputation, and they guide every strategy we create, every message we shape, and every relationship we help our clients build.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="relative aspect-[4/5] rounded-[2rem] overflow-hidden"
                >
                  <img 
                    src={teamImg} 
                    alt="Our Team" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
              </div>
            </div>

            {/* Our Approach Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-20 flex justify-center"
            >
              <Link 
                to="/approach"
                className="group flex items-center gap-4 bg-[#2F4F3E] border border-[#9C6B3E] px-12 py-5 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-[#EFEAE2] hover:bg-transparent hover:text-[#9C6B3E] transition-all font-montserrat shadow-[0_20px_50px_rgba(47,79,62,0.5)]"
              >
                Our Approach
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Who We Work With Section */}
      <section className="px-6 lg:px-20 mb-24 lg:mb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-[#9C6B3E] font-lora font-bold text-3xl lg:text-5xl uppercase tracking-[0.1em]">
              Who We Work With
            </h2>
          </motion.div>

          <div className="relative">
            {/* Mobile Carousel */}
            <motion.div 
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
              className="flex lg:hidden"
            >
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="min-w-full p-12 rounded-[2.5rem] border border-white/5 bg-white/[0.02] transition-all"
                >
                  <div className="text-[#9C6B3E] mb-8">
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-[#EFEAE2] mb-6">{pillar.title}</h3>
                  <p className="text-[#EFEAE2]/50 font-montserrat leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Desktop Carousel - Individual movement with center focus */}
            <div className="hidden lg:block relative">
              <div className="overflow-hidden py-24">
                <motion.div 
                  animate={{ x: `-${currentIndex * (100 / 3)}%` }}
                  transition={{ duration: 1.5, ease: [0.32, 0.72, 0, 1] }}
                  className="flex"
                >
                  {Array.from({ length: 1000 }).map((_, globalIdx) => {
                    const pillar = pillars[globalIdx % pillars.length];
                    const isCenter = globalIdx === currentIndex + 1;
                    
                    return (
                      <div 
                        key={`${pillar.title}-${globalIdx}`}
                        className="min-w-[33.3333%] px-6"
                      >
                        <motion.div
                          animate={{ 
                            scale: isCenter ? 1.15 : 0.9,
                            opacity: isCenter ? 1 : 0.85,
                            y: isCenter ? -15 : 0
                          }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className={`h-full p-12 rounded-[3rem] border transition-all duration-1000 flex flex-col justify-between ${
                            isCenter 
                              ? "bg-white/[0.12] border-[#9C6B3E] shadow-[0_0_120px_-20px_rgba(156,107,62,0.8)] z-20" 
                              : "border-white/10 bg-white/[0.04] z-10"
                          }`}
                        >
                          <div>
                            <div className={`mb-10 transition-transform duration-500 ${isCenter ? "scale-125 text-[#9C6B3E]" : "text-[#9C6B3E]/80"}`}>
                              {pillar.icon}
                            </div>
                            <h3 className={`text-2xl lg:text-3xl font-montserrat font-bold mb-8 transition-colors duration-500 ${isCenter ? "text-[#EFEAE2]" : "text-[#EFEAE2]/80"}`}>
                              {pillar.title}
                            </h3>
                            <p className={`text-lg font-montserrat leading-relaxed transition-colors duration-500 ${isCenter ? "text-[#EFEAE2]/80" : "text-[#EFEAE2]/70"}`}>
                              {pillar.description}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center gap-3 mt-20">
                {pillars.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(Math.floor(currentIndex / pillars.length) * pillars.length + idx)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${
                      (currentIndex % pillars.length) === idx ? "w-12 bg-[#9C6B3E]" : "w-3 bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Difference Section - Redesigned Editorial Layout */}
      <section className="px-6 lg:px-20 mb-32 lg:mb-56">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 lg:mb-32"
          >
            <h2 className="text-[#9C6B3E] font-lora font-bold text-3xl lg:text-5xl uppercase tracking-[0.1em]">
              Our Difference.
            </h2>
          </motion.div>

          <div className="space-y-32 lg:space-y-48">
            {[
              {
                title: "Deep Intent",
                description: "We don't believe in surface-level solutions. Every strategy is rooted in a deep understanding of your purpose and the culture you operate within. We dig beneath the noise to find what truly matters.",
                icon: <Target className="w-12 h-12" />,
                tag: "01"
              },
              {
                title: "Radical Clarity",
                description: "Complexity is the enemy of trust. We strip away the noise to find the singular, powerful truth that defines your reputation. Our process is one of refinement, ensuring your voice is unmistakable.",
                icon: <Sparkles className="w-12 h-12" />,
                tag: "02"
              },
              {
                title: "Quiet Strength",
                description: "The loudest voice is rarely the most respected. We focus on building a reputation that speaks for itself through consistency and integrity. Like the oak, our impact is measured in depth and durability.",
                icon: <Shield className="w-12 h-12" />,
                tag: "03"
              }
            ].map((diff, idx) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: idx * 0.1 }}
                className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start"
              >
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-6 mb-8">
                    <span className="text-[#9C6B3E] font-lora text-2xl font-bold opacity-40">{diff.tag}</span>
                    <div className="h-px flex-grow bg-[#9C6B3E]/20" />
                  </div>
                  <div className="text-[#9C6B3E] mb-8">
                    {diff.icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-lora font-bold text-[#EFEAE2] tracking-tight">
                    {diff.title}
                  </h3>
                </div>
                <div className="lg:w-2/3 lg:pt-20">
                  <p className="text-xl lg:text-2xl font-montserrat text-[#EFEAE2]/70 leading-relaxed border-l-2 border-[#9C6B3E]/30 pl-8 lg:pl-16">
                    {diff.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-6 lg:px-20 py-48 lg:py-64 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={section6Img} 
            alt="Legacy" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A12] via-[#0A1A12]/80 to-[#0A1A12]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl lg:text-8xl font-lora font-bold text-[#EFEAE2] mb-16 leading-tight">
              Let's craft your <br />
              <span className="italic text-[#9C6B3E]">legacy together.</span>
            </h2>
            <button className="group flex items-center gap-6 bg-[#9C6B3E] px-16 py-8 rounded-full text-sm font-bold tracking-[0.2em] uppercase text-white hover:bg-[#2F4F3E] transition-all mx-auto font-montserrat shadow-[0_20px_50px_rgba(156,107,62,0.3)] hover:shadow-[0_20px_50px_rgba(47,79,62,0.3)]">
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

