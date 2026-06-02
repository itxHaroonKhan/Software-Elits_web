import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 bg-black text-white flex flex-col items-center justify-center min-h-[90vh]">
      {/* Background ambient gradient glow */}
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[60%] aspect-square rounded-full bg-gradient-to-b from-cyan-400/10 to-purple-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        {/* Subtitle */}
        <span className="text-zinc-400 uppercase tracking-widest text-xs font-semibold mb-6 block">
          Leading Shopify Agency, UK
        </span>

        {/* Big styled SVG text representation */}
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-8 max-w-3xl leading-tight">
          Delivering ecommerce <span className="font-serif italic font-normal text-cyan-400">growth</span> by design.
        </h1>

        {/* Description */}
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
          We craft outstanding online buying experiences powered by behavioral experimentation, performance optimization, and search-first strategies.
        </p>

        {/* Pillars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 w-full max-w-4xl rounded-2xl overflow-hidden border border-white/10 mb-12">
          <Link
            href="#projects"
            className="flex flex-col items-center justify-center p-6 bg-zinc-950/80 hover:bg-zinc-900/60 transition-colors duration-300 group"
          >
            <span className="text-white font-medium text-sm md:text-base group-hover:text-cyan-400 transition-colors duration-300">
              New Projects
            </span>
            <span className="text-zinc-500 text-xs mt-1 text-center">
              Design & build stores
            </span>
          </Link>
          <Link
            href="#growth"
            className="flex flex-col items-center justify-center p-6 bg-zinc-950/80 hover:bg-zinc-900/60 transition-colors duration-300 group"
          >
            <span className="text-white font-medium text-sm md:text-base group-hover:text-cyan-400 transition-colors duration-300">
              Growth & Support
            </span>
            <span className="text-zinc-500 text-xs mt-1 text-center">
              CRO & maintenance
            </span>
          </Link>
          <Link
            href="#seo"
            className="flex flex-col items-center justify-center p-6 bg-zinc-950/80 hover:bg-zinc-900/60 transition-colors duration-300 group"
          >
            <span className="text-white font-medium text-sm md:text-base group-hover:text-cyan-400 transition-colors duration-300">
              SEO & GEO
            </span>
            <span className="text-zinc-500 text-xs mt-1 text-center">
              Organic search visibility
            </span>
          </Link>
          <Link
            href="#email"
            className="flex flex-col items-center justify-center p-6 bg-zinc-950/80 hover:bg-zinc-900/60 transition-colors duration-300 group"
          >
            <span className="text-white font-medium text-sm md:text-base group-hover:text-cyan-400 transition-colors duration-300">
              Email & SMS
            </span>
            <span className="text-zinc-500 text-xs mt-1 text-center">
              Retain & grow customers
            </span>
          </Link>
        </div>

        {/* Scroll indicator */}
        <Link
          href="#gallery-section"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide uppercase group mt-4"
        >
          See our work
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform group-hover:translate-y-1 transition-transform duration-300"
          >
            <path
              d="M7 1v12m0 0l5-5m-5 5L2 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
