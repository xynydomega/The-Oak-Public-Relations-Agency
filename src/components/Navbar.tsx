import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const pageMap: Record<string, string> = {
    "Home": "/",
    "About": "/about",
    "Our Approach": "/approach",
    "Insights": "/insights",
    "Contact Us": "/contact"
  };

  // The 3 links shown in the main navigation list (excluding the active one)
  const [mainSlots, setMainSlots] = useState([
    "About",
    "Our Approach",
    "Insights"
  ]);

  // Tracks the current active main page (Home, About, Approach, Insights)
  const [lastMainActive, setLastMainActive] = useState("Home");

  const isContactPage = location.pathname === "/contact";

  const handleNavClick = (clickedName: string) => {
    setIsOpen(false);
    
    if (clickedName === "Contact Us") return;

    // If we're clicking the page we're already on (and it's not contact)
    if (!isContactPage && clickedName === lastMainActive) return;

    const clickedIndex = mainSlots.indexOf(clickedName);
    if (clickedIndex !== -1) {
      const newSlots = [...mainSlots];
      // Swap the clicked link with the page we're leaving (the last main active one)
      newSlots[clickedIndex] = lastMainActive;
      setMainSlots(newSlots);
      setLastMainActive(clickedName);
    }
  };

  // If we are on Contact, we show all 4 main links (3 from slots + 1 last active)
  // If we are on a Main page, we show the 3 main slots
  const visibleLinks = isContactPage 
    ? [...mainSlots, lastMainActive]
    : mainSlots;

  return (
    <>
      <nav className="fixed top-4 lg:top-6 left-1/2 -translate-x-1/2 w-[92%] lg:w-[95%] max-w-6xl z-50 flex justify-between items-center px-4 lg:px-8 py-1 lg:py-1 bg-brand-nav-bg border border-brand-brown-accent/20 rounded-full">
        {/* Logo - clickable */}
     <Link
  to="/"
  onClick={() => handleNavClick("Home")}
  className="flex items-center gap-2 lg:gap-4 no-underline"
>
  <img
    src={logo}
    alt="The Oak Logo"
    className="w-10 h-10 lg:w-14 lg:h-14 object-contain"
  />

 <div className="flex flex-col font-lora">
  <span className="text-brand-nav-text text-base lg:text-lg tracking-tight font-extrabold uppercase">
    The OAK
  </span>

  <span className="mt-1 text-brand-nav-text/80 text-[6px] lg:text-[8px] uppercase tracking-[0.2em] font-bold">
    Public Relations Agency
  </span>
</div>
</Link>
        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex gap-10 text-[11px] font-extrabold tracking-[0.2em] uppercase text-brand-nav-text font-montserrat">
            {visibleLinks.map((name) => (
              <Link 
                key={name} 
                to={pageMap[name]} 
                onClick={() => handleNavClick(name)}
                className="hover:text-brand-brown-accent transition-colors"
              >
                {name}
              </Link>
            ))}
          </div>
          
          {/* Contact Us button logic */}
          {!isContactPage && (
            <button 
              onClick={() => {
                handleNavClick("Contact Us");
                navigate("/contact");
              }}
              className="group inline-flex items-center gap-3 bg-brand-green-accent hover:bg-brand-brown-accent border-2 border-brand-brown-accent rounded-full px-6 py-2.5 lg:px-8 lg:py-3 text-[10px] lg:text-[11px] font-extrabold tracking-[0.2em] uppercase text-white transition-all duration-300 shadow-lg shadow-brand-brown-accent/20 font-montserrat"
            >
              Contact Us
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-brand-nav-text hover:text-brand-brown-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden bg-brand-nav-bg/95 backdrop-blur-md pt-24 px-8"
          >
            <div className="flex flex-col gap-8">
              {visibleLinks.map((name) => (
                <Link 
                  key={name} 
                  to={pageMap[name]} 
                  className="text-2xl font-lora font-bold text-brand-nav-text hover:text-brand-brown-accent transition-colors"
                  onClick={() => handleNavClick(name)}
                >
                  {name}
                </Link>
              ))}
              <hr className="border-brand-brown-accent/20" />
              {!isContactPage && (
                <button 
                  onClick={() => {
                    handleNavClick("Contact Us");
                    navigate("/contact");
                  }}
                  className="w-full bg-brand-green-accent border-2 border-brand-brown-accent px-8 py-5 text-sm font-extrabold tracking-[0.2em] uppercase text-white hover:bg-brand-brown-accent transition-all rounded-full font-montserrat text-center shadow-lg shadow-brand-brown-accent/20"
                >
                  Contact Us
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
