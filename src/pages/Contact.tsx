import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight, Facebook, Linkedin, Instagram, MessageSquare } from "lucide-react";
import contactHeroImg from "../assets/images/contatct hero.jpg";

export const Contact = () => {
  return (
    <div className="pb-24 min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden mb-24 lg:mb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={contactHeroImg} 
            alt="Contact Us" 
            className="w-full h-full object-cover grayscale-[0.3] brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0A1A10]" />
        </div>

        <div className="relative z-10 px-6 lg:px-20 text-center max-w-7xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl lg:text-7xl font-lora font-bold text-[#EFEAE2] mb-8 leading-tight">
              Let's start the <span className="italic text-[#9C6B3E]">conversation.</span>
            </h1>
            <p className="text-[#EFEAE2]/90 text-xl lg:text-2xl font-montserrat max-w-3xl mx-auto leading-relaxed font-light">
              Whether you're building a reputation, navigating change, or planning your next chapter, we're here to help. Tell us about your organisation, and we'll be in touch.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 lg:p-16 backdrop-blur-sm shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <MessageSquare className="w-32 h-32 text-[#9C6B3E]" />
            </div>

            <form className="relative z-10 space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-widest uppercase text-[#EFEAE2]/40 font-montserrat">Full Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[#EFEAE2] font-montserrat focus:outline-none focus:border-[#9C6B3E] transition-all placeholder:text-white/10"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-widest uppercase text-[#EFEAE2]/40 font-montserrat">Organisation</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[#EFEAE2] font-montserrat focus:outline-none focus:border-[#9C6B3E] transition-all placeholder:text-white/10"
                  placeholder="Company Name"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-widest uppercase text-[#EFEAE2]/40 font-montserrat">Email Address *</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[#EFEAE2] font-montserrat focus:outline-none focus:border-[#9C6B3E] transition-all placeholder:text-white/10"
                  placeholder="john@organization.com"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-widest uppercase text-[#EFEAE2]/40 font-montserrat">Phone Number (preferably Whatsapp) *</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[#EFEAE2] font-montserrat focus:outline-none focus:border-[#9C6B3E] transition-all placeholder:text-white/10"
                  placeholder="+1 (234) 567-890"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-widest uppercase text-[#EFEAE2]/40 font-montserrat">What would you like to discuss?</label>
                <select 
                  defaultValue=""
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[#EFEAE2] font-montserrat focus:outline-none focus:border-[#9C6B3E] transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-[#0A1A10]">Select a topic</option>
                  <option value="strategic-communication" className="bg-[#0A1A10]">Strategic Communication</option>
                  <option value="public-relations" className="bg-[#0A1A10]">Public Relations</option>
                  <option value="reputation-management" className="bg-[#0A1A10]">Reputation Management</option>
                  <option value="media-relations" className="bg-[#0A1A10]">Media Relations</option>
                  <option value="crisis-communication" className="bg-[#0A1A10]">Crisis Communication</option>
                  <option value="partnership" className="bg-[#0A1A10]">Partnership</option>
                  <option value="general-inquiry" className="bg-[#0A1A10]">General Inquiry</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-widest uppercase text-[#EFEAE2]/40 font-montserrat">Tell us about your brand or organisation.</label>
                <textarea 
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-5 text-[#EFEAE2] font-montserrat focus:outline-none focus:border-[#9C6B3E] transition-all resize-none placeholder:text-white/30"
                  placeholder="Tell us about your organisation, your goals, or the challenge you're facing."
                ></textarea>
              </div>

              <button className="w-full group bg-[#9C6B3E] hover:bg-[#2F4F3E] text-white py-6 rounded-2xl font-montserrat font-bold text-xs tracking-[0.3em] uppercase transition-all flex items-center justify-center gap-4">
                Send Inquiry
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>

              <div className="text-center pt-4">
                <p className="text-[#EFEAE2] font-lora italic text-2xl lg:text-3xl opacity-80">
                  Let's build something <span className="text-[#9C6B3E] font-bold">that lasts.</span>
                </p>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-16">
              <div>
                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#9C6B3E] mb-8 font-montserrat">Direct Contact</h3>
                <div className="space-y-6">
                  <a href="mailto:inquiry@brand.com" className="group flex items-center gap-6 text-2xl lg:text-3xl font-lora text-[#EFEAE2] hover:text-[#9C6B3E] transition-colors">
                    <Mail className="w-6 h-6 text-[#9C6B3E]" />
                    inquiry@brand.com
                  </a>
                  <a href="tel:+1234567890" className="group flex items-center gap-6 text-2xl lg:text-3xl font-lora text-[#EFEAE2] hover:text-[#9C6B3E] transition-colors">
                    <Phone className="w-6 h-6 text-[#9C6B3E]" />
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#9C6B3E] mb-8 font-montserrat">Our Office</h3>
                <div className="flex gap-6">
                  <MapPin className="w-6 h-6 text-[#9C6B3E] shrink-0" />
                  <p className="text-xl font-lora text-[#EFEAE2]/80 leading-relaxed">
                    123 Strategic Plaza, 4th Floor<br />
                    Mayfair, London<br />
                    W1J 7JZ, United Kingdom
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#9C6B3E] mb-8 font-montserrat">Follow our Socials</h3>
                <div className="flex gap-8">
                  {[
                    { icon: <Facebook className="w-6 h-6" />, label: "Facebook" },
                    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn" },
                    { icon: <Instagram className="w-6 h-6" />, label: "Instagram" }
                  ].map((social, idx) => (
                    <a key={idx} href="#" className="text-[#EFEAE2]/40 hover:text-[#9C6B3E] transition-all transform hover:scale-110">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
