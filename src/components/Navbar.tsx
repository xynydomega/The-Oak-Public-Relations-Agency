export const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 flex justify-between items-center px-6 lg:px-8 py-1 bg-brand-nav-bg border border-brand-brown-accent/20 rounded-full shadow-lg">
      {/* Logo - clickable */}
      <div className="flex items-center gap-4 cursor-pointer">
        <img 
          src="/src/assets/images/logo.png.png" 
          alt="The Oak Logo" 
          className="w-14 h-14 object-contain" 
        />
        <div className="flex flex-col leading-none font-lora">
          <span className="text-brand-nav-text text-lg tracking-tight font-extrabold uppercase">The OAK</span>
          <span className="text-brand-nav-text/80 text-[7px] sm:text-[8px] uppercase tracking-[0.2em] font-bold">Public Relations Agency</span>
        </div>
      </div>

      {/* Nav Links - clickable */}
      <div className="hidden lg:flex items-center gap-12">
        <div className="flex gap-10 text-[11px] font-extrabold tracking-[0.2em] uppercase text-brand-nav-text font-montserrat">
          <a href="#" className="hover:text-brand-brown-accent transition-colors">About</a>
          <a href="#" className="hover:text-brand-brown-accent transition-colors">Our Approach</a>
          <a href="#" className="hover:text-brand-brown-accent transition-colors">Insights</a>
        </div>
        <button className="bg-brand-green-accent border-2 border-brand-brown-accent px-8 py-3 text-[11px] font-extrabold tracking-widest uppercase text-white hover:bg-brand-brown-accent transition-all rounded-full shadow-sm font-montserrat">
          Contact Us
        </button>
      </div>
    </nav>
  );
};
