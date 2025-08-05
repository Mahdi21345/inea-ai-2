import React from 'react';
import { portfolioData } from '../data/portfolioData';

export function PortfolioSection() {
  return (
    <section className="box-border px-8 py-20">
      <div className="box-border max-w-6xl mx-auto">
        <div className="box-border text-center mb-16">
          <h2 className="text-[32px] font-semibold box-border tracking-[-0.64px] leading-[35.2px] mb-6 md:text-5xl md:tracking-[-0.96px] md:leading-[52.8px]">
            Our <span className="text-green-500 text-[32px] box-border tracking-[-0.64px] leading-[35.2px] md:text-5xl md:tracking-[-0.96px] md:leading-[52.8px]">Portfolio</span>
          </h2>
          <p className="text-white/90 text-lg box-border leading-[27px] max-w-2xl mx-auto">
            Check out our exclusive LABUBU collection and other amazing products
          </p>
        </div>
        
        <div className="box-border gap-x-8 grid grid-cols-none gap-y-8 mb-12 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <div className="text-neutral-950 bg-black/50 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border border border-green-500/20 rounded-xl border-solid">
            <div className="box-border p-6">
              <div className="flex justify-center mb-6">
                <img 
                  src="https://c.animaapp.com/mdxlcnv7lms827/img/capture-decran-2025-08-04-a-23-04-40.png" 
                  alt="LABUBU Character" 
                  className="h-64 object-contain rounded-lg"
                />
              </div>
              <h3 className="text-white text-xl font-semibold box-border leading-7 mb-3 text-center">LABUBU Collection</h3>
              <p className="text-white/90 box-border leading-[22.4px] text-center">
                Our exclusive LABUBU character collection features adorable designs with unique personalities. 
                Each character comes with its own story and special features.
              </p>
              <div className="flex justify-center mt-6">
                <button className="text-white text-lg font-medium items-center bg-green-600 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] gap-x-3 inline-flex h-9 justify-center leading-[21.6px] px-5 py-2 rounded-lg">
                  View Collection
                </button>
              </div>
            </div>
          </div>
          
          <div className="box-border">
            <div className="grid grid-cols-2 gap-4">
              {portfolioData.map((item, index) => (
                <div key={index} className="text-neutral-950 bg-black/50 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border border border-green-500/20 rounded-xl border-solid p-4">
                  <h4 className="text-white text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-white/80 text-sm mb-3">{item.description}</p>
                  <div className="text-green-500 text-xs font-semibold inline-flex bg-green-600/20 px-2 py-1 rounded-md">
                    {item.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-green-900/20 box-border text-center border border-green-500/30 p-8 rounded-lg border-solid">
          <h3 className="text-2xl font-semibold box-border tracking-[-0.12px] leading-[28.8px] mb-4 md:text-[28px] md:tracking-[-0.14px] md:leading-[33.6px]">
            Limited Edition Items
          </h3>
          <p className="text-white/90 text-lg box-border leading-[27px] max-w-2xl mx-auto mb-6">
            Our products are available in limited quantities. Don't miss the chance to own these exclusive items before they're gone forever.
          </p>
          <button className="text-white text-lg font-medium items-center bg-green-600 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] gap-x-3 inline-flex h-9 justify-center leading-[21.6px] px-6 py-3 rounded-lg">
            Browse All Products
          </button>
        </div>
      </div>
    </section>
  );
}
