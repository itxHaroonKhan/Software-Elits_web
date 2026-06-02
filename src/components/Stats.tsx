export default function Stats() {
  return (
    <section id="about" className="relative bg-white text-black py-24 md:py-36 z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
          
          {/* Left Block */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-zinc-500 uppercase tracking-widest text-xs font-semibold">
              Trusted Ecommerce and Shopify Agency
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight">
              Charle is an award-winning Shopify agency & ecommerce team with offices based in London, UK.
            </h2>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-200 mt-6">
              <div>
                <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-black block">44%</span>
                <span className="text-zinc-500 text-xs md:text-sm font-medium mt-2 block">Avg. conversion uplift</span>
              </div>
              <div>
                <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-black block">£300m+</span>
                <span className="text-zinc-500 text-xs md:text-sm font-medium mt-2 block">Revenue through stores</span>
              </div>
              <div>
                <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-black block">31%</span>
                <span className="text-zinc-500 text-xs md:text-sm font-medium mt-2 block">Avg. organic traffic increase</span>
              </div>
              <div>
                <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-black block">29%</span>
                <span className="text-zinc-500 text-xs md:text-sm font-medium mt-2 block">Avg. increase in customer LTV</span>
              </div>
            </div>
          </div>

          {/* Right Block */}
          <div className="lg:col-span-5 flex flex-col items-start gap-8">
            {/* SVG Line Pattern Decoration */}
            <svg viewBox="0 0 100 10" className="w-full text-zinc-200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5h100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
            <p className="text-zinc-700 text-base md:text-lg leading-relaxed">
              We partner with ambitious brands worldwide to design, build, migrate, and grow high-performance Shopify and Shopify Plus stores. Our work combines considered design, robust development, SEO, and email marketing to drive measurable, long-term growth.
            </p>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-medium text-sm hover:bg-zinc-800 transition-colors duration-300 group"
            >
              Explore Our Work
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <path d="M.89 9.243L9.373.757m0 0H1.596m7.778 0v7.779" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
