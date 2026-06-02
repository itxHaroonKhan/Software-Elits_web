import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollGallery from "@/components/ScrollGallery";
import Stats from "@/components/Stats";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ScrollGallery />
      <Stats />
      <Services />

      {/* Footer */}
      <footer id="contact" className="bg-black border-t border-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-zinc-500 uppercase tracking-widest text-xs font-semibold block mb-4">
                Ready to start?
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Let&apos;s build something{" "}
                <em className="font-serif font-normal italic text-cyan-400">great</em>{" "}
                together.
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-zinc-400 text-base leading-relaxed">
                We are a Shopify Agency who designs, develops, supports & grows Shopify & Shopify Plus stores.
              </p>
              <a
                href="mailto:hello@charle.co.uk"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white text-black font-semibold text-base hover:bg-zinc-200 transition-colors duration-300 w-fit group"
              >
                Get in touch
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                >
                  <path
                    d="M1.89 12.243L12.373.757m0 0H4.596m7.778 0v7.779"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-zinc-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-zinc-600 text-sm">
              © 2026 Charle Agency. All rights reserved.
            </span>
            <span className="text-zinc-600 text-sm">
              Leading Shopify Agency, London UK
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
