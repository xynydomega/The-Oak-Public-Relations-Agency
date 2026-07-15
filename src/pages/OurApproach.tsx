import { motion } from "motion/react";
import { ArrowRight, Compass, Search, Target, Megaphone, TrendingUp, Trees, Check, Shield, Newspaper, AlertCircle, Mic, Users, Zap, BarChart3, RefreshCw } from "lucide-react";
import majesticOak from "../assets/images/majestic_oak_hero_1783358103672.jpg";
import strategicImg from "../assets/images/lighthouse_cliff_1783358132203.jpg";
import { Link, useNavigate } from "react-router-dom";



import section6Img from "../assets/images/about image 6.jpg";

export const OurApproach = () => {
  const navigate = useNavigate();
  const serviceCategories = [
    {
      icon: <Compass className="w-10 h-10 stroke-[2.5]" />,
      title: "Strategic Communication",
      description: "Helping organisations communicate with clarity, confidence, and purpose."
    },
    {
      icon: <Newspaper className="w-10 h-10 stroke-[2.5]" />,
      title: "Public Relations",
      description: "Building meaningful relationships with media, stakeholders, and communities."
    },
    {
      icon: <Shield className="w-10 h-10 stroke-[2.5]" />,
      title: "Reputation Management",
      description: "Protecting and strengthening public confidence through proactive communication."
    },
    {
      icon: <AlertCircle className="w-10 h-10 stroke-[2.5]" />,
      title: "Crisis Communication",
      description: "Providing clear, measured guidance when organisations face uncertainty."
    },
    {
      icon: <Mic className="w-10 h-10 stroke-[2.5]" />,
      title: "Leadership Communication",
      description: "Helping leaders communicate vision, inspire confidence, and engage stakeholders."
    },
    {
      icon: <Users className="w-10 h-10 stroke-[2.5]" />,
      title: "Community & Public Engagement",
      description: "Building lasting relationships through meaningful dialogue."
    }
  ];

  const steps = [
    {
      id: "01",
      title: "Discover",
      description: "Every successful partnership begins with understanding. We learn about your organisation, your values, your audience, and the challenges you're facing.",
      icon: <Compass className="w-8 h-8 stroke-[2.5]" />,
      deliverables: ["Discovery meetings", "Stakeholder conversations", "Communication audit", "Goal definition"]
    },
    {
      id: "02",
      title: "Analyse",
      description: "We examine your current position, identify opportunities, and understand how your organisation is perceived.",
      icon: <Search className="w-8 h-8 stroke-[2.5]" />,
      deliverables: ["Reputation assessment", "Audience research", "Competitor review", "Risk identification"]
    },
    {
      id: "03",
      title: "Strategise",
      description: "Using our findings, we develop a communication strategy tailored to your objectives and built for long-term success.",
      icon: <Target className="w-8 h-8 stroke-[2.5]" />,
      deliverables: ["Communication strategy", "Messaging framework", "Media planning", "Success metrics"]
    },
    {
      id: "04",
      title: "Execute",
      description: "Strategy becomes action through coordinated communication across the channels that matter most.",
      icon: <Megaphone className="w-8 h-8 stroke-[2.5]" />,
      deliverables: ["Public relations", "Media engagement", "Campaign management", "Stakeholder communication"]
    },
    {
      id: "05",
      title: "Measure",
      description: "Communication should be measurable. We monitor outcomes, evaluate performance, and identify opportunities for improvement.",
      icon: <TrendingUp className="w-8 h-8 stroke-[2.5]" />,
      deliverables: ["Performance reporting", "Media monitoring", "Audience feedback", "Campaign evaluation"]
    },
    {
      id: "06",
      title: "Evolve",
      description: "Reputations are never static. As your organisation grows, your communication strategy grows with it.",
      icon: <Trees className="w-8 h-8 stroke-[2.5]" />,
      deliverables: ["Ongoing advisory", "Strategy refinement", "Reputation management", "Long-term partnership"]
    }
  ];

  const pillars = [
    {
      title: "Strategic Advisory",
      description: "High-level guidance for organizations navigating pivotal moments, leadership transitions, or complex market shifts.",
      icon: <Shield className="w-10 h-10" />,
      features: ["Crisis Management", "Executive Positioning", "Policy Communication"]
    },
    {
      title: "Brand Integrity",
      description: "Ensuring every touchpoint reflects your core purpose and strengthens your reputation through consistency.",
      icon: <Zap className="w-10 h-10" />,
      features: ["Narrative Development", "Visual Identity", "Cultural Alignment"]
    },
    {
      title: "Market Resilience",
      description: "Building the foundations of trust that allow organizations to weather challenges and emerge stronger.",
      icon: <BarChart3 className="w-10 h-10" />,
      features: ["Stakeholder Engagement", "Media Relations", "Impact Measurement"]
    }
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-12 md:pb-20">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-20 mb-20 lg:mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="order-2 lg:order-1"
            >
              <h1 className="text-4xl md:text-6xl lg:text-9xl font-lora font-bold leading-tight lg:leading-[0.9] mb-8 lg:mb-12 text-[#EFEAE2]">
                Purpose before <span className="italic text-[#9C6B3E]">process.</span>
              </h1>
              <p className="text-base md:text-xl lg:text-2xl text-[#EFEAE2]/80 leading-relaxed font-montserrat font-medium max-w-2xl mb-8 lg:mb-12">
                We don't begin with campaigns or press releases. We begin by understanding your organisation, your audience, and the outcomes you hope to achieve. From there, every recommendation is intentional, measured, and aligned with your vision.
              </p>
              <div className="flex flex-wrap gap-3 lg:gap-4">
                {["Strategic", "Intentional", "Enduring"].map((tag) => (
                  <span key={tag} className="px-6 py-2 rounded-full border border-[#9C6B3E]/30 text-[#9C6B3E] text-xs font-bold tracking-widest uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/5] rounded-[2rem] lg:rounded-[5rem] overflow-hidden border border-[#9C6B3E]/20 order-1 lg:order-2"
            >
              <img 
                src={majesticOak} 
                alt="Our Approach" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A12] via-transparent to-transparent opacity-60" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section (Roadmap) */}
      <section className="px-6 lg:px-20 mb-32 lg:mb-56 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#9C6B3E] font-lora font-bold text-2xl md:text-3xl lg:text-5xl uppercase tracking-[0.1em] mb-4 lg:mb-6"
            >
              The Roadmap.
            </motion.h2>
            <p className="text-[#EFEAE2]/60 text-base lg:text-lg max-w-2xl mx-auto font-montserrat px-4">
              A strategic, phase-based progression designed to build and protect institutional influence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="h-full flex flex-col px-4 md:px-0">
                  {/* Top Divider */}
                  <div className="h-px w-full bg-[#9C6B3E]/30 mb-6 lg:mb-8" />
                  
                  {/* Step ID and Title */}
                  <div className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-8">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[#9C6B3E] flex items-center justify-center text-[#9C6B3E] font-lora font-bold text-lg lg:text-xl">
                      {step.id}
                    </div>
                    <div className="text-[#9C6B3E] opacity-80 group-hover:opacity-100 transition-opacity">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-lora font-bold text-[#EFEAE2] mb-4 lg:mb-6 tracking-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-[#EFEAE2]/60 text-sm lg:text-base leading-relaxed font-montserrat mb-6 lg:mb-8 flex-grow">
                    {step.description}
                  </p>

                  {/* Middle Divider */}
                  <div className="h-px w-full bg-white/10 mb-6 lg:mb-8" />

                  {/* Deliverables with checkmarks */}
                  <div className="mb-6 lg:mb-8">
                    <ul className="space-y-3 lg:space-y-4">
                      {step.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-xs lg:text-sm text-[#EFEAE2]/50 font-montserrat leading-tight group-hover:text-[#EFEAE2]/70 transition-colors">
                          <Check className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#9C6B3E] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Divider */}
                  <div className="h-px w-full bg-white/5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="px-6 lg:px-20 mb-32 lg:mb-56">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#9C6B3E] font-lora font-bold text-2xl md:text-3xl lg:text-5xl uppercase tracking-[0.1em] mb-6"
            >
              Service Categories.
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {serviceCategories.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 lg:p-14 rounded-[2rem] lg:rounded-[3rem] bg-white/[0.02] border border-white/10 hover:border-[#9C6B3E]/40 transition-all duration-500"
              >
                <div className="flex flex-col h-full">
                  <div className="text-[#9C6B3E] mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl lg:text-4xl font-lora font-bold text-[#EFEAE2] mb-4 lg:mb-6 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[#EFEAE2]/60 text-base lg:text-lg leading-relaxed font-montserrat mb-8 lg:mb-10 flex-grow">
                    {service.description}
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 text-[#9C6B3E] font-bold text-[10px] lg:text-xs tracking-widest uppercase hover:gap-4 transition-all group/link"
                  >
                    Learn More 
                    <ArrowRight className="w-4 h-4 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 lg:px-20 mb-32 lg:mb-56">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#9C6B3E] font-lora font-bold text-2xl md:text-3xl lg:text-5xl uppercase tracking-[0.1em] mb-4 lg:mb-6"
            >
              How It Works.
            </motion.h2>
            <p className="text-[#EFEAE2]/60 text-base lg:text-lg max-w-2xl mx-auto font-montserrat px-4">
              Instead of listing promises, we tell you what you'll experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 lg:p-12 rounded-[2rem] lg:rounded-[3rem] bg-white/[0.02] border-2 border-[#9C6B3E]/20 hover:border-[#9C6B3E]/50 transition-colors duration-500"
            >
              <h3 className="text-xl lg:text-2xl font-lora font-bold text-[#EFEAE2] mb-4 lg:mb-6">Collaborative</h3>
              <p className="text-[#EFEAE2]/50 text-xs lg:text-sm leading-relaxed font-montserrat">
                We work alongside your team, ensuring every strategy reflects your organisation's values and objectives.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-8 lg:p-12 rounded-[2rem] lg:rounded-[3rem] bg-white/[0.02] border-2 border-[#9C6B3E]/20 hover:border-[#9C6B3E]/50 transition-colors duration-500"
            >
              <h3 className="text-xl lg:text-2xl font-lora font-bold text-[#EFEAE2] mb-4 lg:mb-6">Tailored</h3>
              <p className="text-[#EFEAE2]/50 text-xs lg:text-sm leading-relaxed font-montserrat">
                Every recommendation is shaped around your unique challenges rather than a one-size-fits-all formula.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 lg:p-12 rounded-[2rem] lg:rounded-[3rem] bg-white/[0.02] border-2 border-[#9C6B3E]/20 hover:border-[#9C6B3E]/50 transition-colors duration-500"
            >
              <h3 className="text-xl lg:text-2xl font-lora font-bold text-[#EFEAE2] mb-4 lg:mb-6">Measured</h3>
              <p className="text-[#EFEAE2]/50 text-xs lg:text-sm leading-relaxed font-montserrat">
                We define success from the beginning and continuously evaluate the effectiveness of every initiative.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="relative px-6 lg:px-20 py-32 md:py-48 lg:py-64 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={section6Img} 
            alt="Legacy" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A12] via-[#0A1A12]/80 to-[#0A1A12]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-lora font-bold text-[#EFEAE2] mb-8 lg:mb-12 leading-tight">
              Every enduring reputation starts <br />
              <span className="italic text-[#9C6B3E]">with a single conversation.</span>
            </h2>
            <button
        onClick={() => navigate("/contact")}
        className="group inline-flex items-center gap-3 bg-brand-brown-accent hover:bg-brand-green-accent border-2 border-brand-green-accent rounded-full px-6 py-3 md:px-8 md:py-4 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white transition-all duration-300 shadow-lg shadow-brand-green-accent/30"
      >
        Start A Conversation
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
