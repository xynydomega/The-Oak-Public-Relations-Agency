export function Newsletter() {
  return (
    <section className="px-6 lg:px-20 mt-32">
      <div className="max-w-4xl mx-auto bg-[#9C6B3E]/10 rounded-[3rem] p-12 lg:p-20 text-center border border-[#9C6B3E]/20 backdrop-blur-sm">
        <h2 className="text-3xl lg:text-5xl font-lora font-bold text-[#EFEAE2] mb-8">
          Stay <span className="italic">informed.</span>
        </h2>

        <p className="text-[#EFEAE2]/70 font-montserrat mb-12 text-lg">
          Receive our latest perspectives on reputation and communication
          directly in your inbox.
        </p>

        <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white font-montserrat focus:outline-none focus:border-[#9C6B3E] transition-colors"
          />

          <button
            type="button"
            className="bg-[#9C6B3E] text-white px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#2F4F3E] transition-all font-montserrat"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}