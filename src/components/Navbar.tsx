import { useState, useEffect } from "react";
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

  // Initial setup based on current path to avoid layout shift
  const getInitialState = () => {
    const currentPath = location.pathname;
    const currentName = Object.keys(pageMap).find(key => pageMap[key] === currentPath) || "Home";
    
    const defaultSlots = ["About", "Our Approach", "Insights", "Contact Us"];
    let slots = [...defaultSlots];
    let active = "Home";

    if (currentName !== "Home") {
      const index = slots.indexOf(currentName);
      if (index !== -1) {
        slots[index] = "Home";
        active = currentName;
      }
    }
    return { slots, active };
  };

  const [slots, setSlots] = useState(() => getInitialState().slots);
  const [activePage, setActivePage] = useState(() => getInitialState().active);

  // Keep state in sync with URL changes from any source
  useEffect(() => {
    const currentName = Object.keys(pageMap).find(key => pageMap[key] === location.pathname) || "Home";
    
    if (currentName !== activePage) {
      const index = slots.indexOf(currentName);
      if (index !== -1) {
        const newSlots = [...slots];
        newSlots[index] = activePage;
        setSlots(newSlots);
        setActivePage(currentName);
      }
    }
  }, [location.pathname, slots, activePage]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-4 lg:top-6 left-1/2 -translate-x-1/2 w-[92%] lg:w-[95%] max-w-6xl z-50 flex justify-between items-center px-4 lg:px-8 py-1 lg:py-1 bg-brand-nav-bg border border-brand-brown-accent/20 rounded-full">
        {/* Logo - clickable */}
        
      <div className="flex items-center gap-2 lg:gap-4">
  <Link to="/" onClick={() => handleNavClick()}>
    <img
      src={logo}
      alt="The Oak Logo"
      className="w-10 h-10 lg:w-14 lg:h-14 object-contain"
    />
  </Link>

  <Link
    to="/"
    onClick={() => handleNavClick()}
    className="no-underline"
  >
    <div className="flex flex-col font-lora">
      <span className="text-brand-nav-text text-base lg:text-lg tracking-tight font-extrabold uppercase">
        The OAK
      </span>

      <span className="mt-1 text-brand-nav-text/80 text-[6px] lg:text-[8px] uppercase tracking-[0.2em] font-bold">
        Public Relations Agency
      </span>
    </div>
  </Link>
</div>
      
       

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8 text-[11px] font-extrabold tracking-[0.2em] uppercase text-brand-nav-text font-montserrat items-center">
            {slots.map((name, index) => {
              const isButton = index === 3;
              
              if (isButton) {
                return (
                  <button
  key={name}
  onClick={() => {
    handleNavClick();      // Updates the navbar slots
    navigate(pageMap[name]);   // Navigates to the page
  }}
  className="group inline-flex items-center gap-3 bg-brand-green-accent hover:bg-brand-brown-accent border-2 border-brand-brown-accent rounded-full px-6 py-2.5 lg:px-8 lg:py-3 text-[10px] lg:text-[11px] font-extrabold tracking-[0.2em] uppercase text-white transition-all duration-300 shadow-lg shadow-brand-brown-accent/20 font-montserrat ml-2"
>
  {name}
</button>
                );
              }

              return (
                <Link 
                  key={name} 
                  to={pageMap[name]} 
                  onClick={handleNavClick}
                  className="hover:text-brand-brown-accent transition-colors"
                >
                  {name}
                </Link>
              );
            })}
          </div>
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
              {slots.map((name, index) => {
                const isButton = index === 3;
                return (
                  <Link 
                    key={name} 
                    to={pageMap[name]} 
                    className={`text-2xl font-lora font-bold transition-colors ${
                      isButton ? "text-brand-brown-accent" : "text-brand-nav-text hover:text-brand-brown-accent"
                    }`}
                    onClick={handleNavClick}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
