import React from 'react';
import { featuresData, businessIdeasData } from '../data/featuresData';

export function FeaturesSection() {
  return (
    <section className="box-border px-8 py-20">
      <div className="box-border max-w-6xl mx-auto">
        <div className="box-border text-center mb-16">
          <h2 className="text-[32px] font-semibold box-border tracking-[-0.64px] leading-[35.2px] mb-6 md:text-5xl md:tracking-[-0.96px] md:leading-[52.8px]">
            More Than Just <span className="text-green-500 text-[32px] box-border tracking-[-0.64px] leading-[35.2px] md:text-5xl md:tracking-[-0.96px] md:leading-[52.8px]">Prompts</span>
          </h2>
          <p className="text-white/90 text-lg box-border leading-[27px] max-w-2xl mx-auto">
            You're not buying a single prompt - you're getting a complete AI transformation system
          </p>
        </div>
        <div className="box-border gap-x-8 grid grid-cols-none gap-y-8 mb-12 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          {featuresData.map((feature, index) => (
            <div key={feature.id} className="text-neutral-950 bg-gray-900/50 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border border border-gray-700 rounded-xl border-solid">
              <div className="box-border text-center p-6">
                <div className={index === 1 ? "text-green-500 items-center bg-green-600/20 box-border flex h-16 justify-center w-16 mb-4 mx-auto rounded-full" : "text-red-500 items-center bg-red-600/20 box-border flex h-16 justify-center w-16 mb-4 mx-auto rounded-full"}>
                  <img src={feature.icon} alt="Icon" className="box-border h-8 w-8" />
                </div>
                <h3 className="text-white text-xl font-semibold box-border leading-7 mb-3">{feature.title}</h3>
                <p className="text-white/90 box-border leading-[22.4px]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[linear-gradient(to_right,rgba(20,83,45,0.2),rgb(0,0,0))] box-border border border-green-500/20 p-8 rounded-lg border-solid">
          <div className="items-center box-border gap-x-8 grid grid-cols-none gap-y-8 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
            <div className="box-border">
              <h3 className="text-2xl font-semibold box-border tracking-[-0.12px] leading-[28.8px] mb-6 md:text-[28px] md:tracking-[-0.14px] md:leading-[33.6px]">Real Money-Making Ideas You Can Generate</h3>
              <div className="box-border">
                {businessIdeasData.map((idea, index) => (
                  <div key={index} className={index % 2 === 0 ? "items-start bg-black/30 box-border gap-x-3 flex gap-y-3 border-green-500 p-3 rounded-lg border-l-4 border-solid" : "items-start bg-black/30 box-border gap-x-3 flex gap-y-3 border-red-500 mt-4 p-3 rounded-lg border-l-4 border-solid"}>
                    <div className={index % 2 === 0 ? "bg-green-500 box-border shrink-0 h-2 w-2 mt-2 rounded-full" : "bg-red-500 box-border shrink-0 h-2 w-2 mt-2 rounded-full"}></div>
                    <span className="text-gray-300 text-sm box-border block leading-[22.75px]">{idea}</span>
                  </div>
                ))}
              </div>
              <div className="bg-green-900/20 box-border border border-green-500/30 mt-6 p-4 rounded-lg border-solid">
                <p className="text-gray-300 text-sm box-border leading-5 text-center">
                  💡 <strong className="text-green-400 font-bold box-border">These are potential business ideas</strong>
                  that our prompt system can help you generate and explore.
                </p>
              </div>
            </div>
            <div className="box-border text-center">
              <div className="text-green-500 text-6xl font-bold box-border leading-[60px] mb-4">∞</div>
              <p className="text-gray-300 box-border mb-4">
                Unlimited profitable ideas<br className="box-border" />
                in any niche you want
              </p>
              <div className="text-gray-400 text-sm box-border leading-5">
                <div className="items-center box-border gap-x-2 flex justify-center gap-y-2">
                  <div className="bg-green-500 box-border h-2 w-2 rounded-full"></div>
                  <span className="box-border block">Crypto & DeFi opportunities</span>
                </div>
                <div className="items-center box-border gap-x-2 flex justify-center gap-y-2 mt-2">
                  <div className="bg-red-500 box-border h-2 w-2 rounded-full"></div>
                  <span className="box-border block">E-commerce & dropshipping</span>
                </div>
                <div className="items-center box-border gap-x-2 flex justify-center gap-y-2 mt-2">
                  <div className="bg-green-500 box-border h-2 w-2 rounded-full"></div>
                  <span className="box-border block">SaaS & digital services</span>
                </div>
                <div className="items-center box-border gap-x-2 flex justify-center gap-y-2 mt-2">
                  <div className="bg-red-500 box-border h-2 w-2 rounded-full"></div>
                  <span className="box-border block">Content creation & courses</span>
                </div>
                <div className="items-center box-border gap-x-2 flex justify-center gap-y-2 mt-2">
                  <div className="bg-green-500 box-border h-2 w-2 rounded-full"></div>
                  <span className="box-border block">Productivity & personal development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
