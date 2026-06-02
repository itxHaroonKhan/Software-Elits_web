"use client";

import { useState } from "react";
import Link from "next/link";

interface Service {
  title: string;
  desc: string;
  image: string;
}

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const servicesList: Service[] = [
    {
      title: "Shopify Custom Store Projects",
      desc: "Bespoke web design & technical development for ambitious brands looking for unique online storefronts.",
      image: "https://www.charle.co.uk/assets/images/navigation/nav-services-cta.webp",
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      desc: "Driving higher sales & conversions on existing Shopify stores through A/B testing & analytics.",
      image: "https://www.charle.co.uk/articles/guide-to-ab-split-testing/images/thumb.jpg",
    },
    {
      title: "SEO & Generative Engine Visibility",
      desc: "Optimizing content search performance across standard search engines and AI-driven platforms.",
      image: "https://www.charle.co.uk/assets/images/home/grid/grid8.webp",
    },
    {
      title: "Email & Retention Marketing",
      desc: "Maximizing customer lifetime value and recurring sales with targeted Klaviyo flows & SMS campaigns.",
      image: "https://www.charle.co.uk/assets/images/home/grid/grid6.webp",
    },
  ];

  return (
    <section id="services" className="relative bg-[#f6f6f6] text-black py-24 md:py-36 z-20 overflow-hidden border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-300 pb-10 mb-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black">
            Our Expertise.
          </h2>
          <p className="text-zinc-500 text-sm md:text-base font-medium uppercase tracking-wider mt-4 md:mt-0">
            Design, Build, Support & Grow
          </p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="relative p-8 md:p-12 bg-white rounded-3xl overflow-hidden border border-zinc-200 group flex flex-col justify-between min-h-[300px] cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-500"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              
              {/* Text Content */}
              <div className="z-10 relative">
                <span className="text-zinc-400 text-sm font-semibold tracking-wider block mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed mt-4 max-w-sm group-hover:text-zinc-300 transition-colors duration-500">
                  {service.desc}
                </p>
              </div>

              {/* Action Button */}
              <div className="z-10 relative mt-8">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-zinc-300 bg-white text-black group-hover:bg-white group-hover:text-black transition-colors duration-500 transform group-hover:translate-x-2"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7h12m0 0L8 2.5M13 7L8 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              {/* Hover Image Overlay */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-all duration-700 pointer-events-none ${
                  hoveredIdx === idx ? "opacity-100 scale-100" : "opacity-0 scale-110"
                }`}
                style={{ backgroundImage: `url(${service.image})` }}
              >
                {/* Darken overlay */}
                <div className="absolute inset-0 bg-black/60" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
