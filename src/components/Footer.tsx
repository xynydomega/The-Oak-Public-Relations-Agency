import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import logo from "../assets/images/logo.png.png";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-20 pb-10 px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3"
        >
          <img 
            src={logo} 
            alt="The OAK Logo" 
            className="w-12 h-12 object-contain" 
          />
          <div className="flex flex-col leading-none font-lora">
            <span className="text-sm font-extrabold tracking-widest uppercase text-[#EFEAE2]">The OAK</span>
            <span className="text-[7px] tracking-[0.3em] uppercase text-white/40 font-montserrat font-bold">Public Relations Agency</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-8 text-[10px] font-extrabold tracking-[0.2em] uppercase text-white/60 font-montserrat">
          <Link to="/about" className="hover:text-[#9C6B3E] transition-colors">About</Link>
          <Link to="/approach" className="hover:text-[#9C6B3E] transition-colors">Our Approach</Link>
          <Link to="/insights" className="hover:text-[#9C6B3E] transition-colors">Insights</Link>
          <Link to="/contact" className="hover:text-[#9C6B3E] transition-colors">Contact</Link>
        </nav>

        {/* Copyright & Top */}
        <div className="flex items-center gap-10">
          <p className="text-[10px] text-white/30 tracking-wider font-montserrat">
            © {new Date().getFullYear()} The OAK Public Relations Agency. <br className="md:hidden" /> All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group"
          >
            <ArrowUp className="w-4 h-4 text-white/60 group-hover:text-[#9C6B3E] transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
};
