import React from 'react';
import { comparisonData } from '../data/comparisonData';

export function WhyDarkGPTSection() {
  return (
    <section className="bg-gray-900 box-border px-8 py-20">
      <div className="box-border max-w-6xl mx-auto">
        <div className="box-border text-center mb-16">
          <h2 className="text-[32px] font-semibold box-border tracking-[-0.64px] leading-[35.2px] mb-6 md:text-5xl md:tracking-[-0.96px] md:leading-[52.8px]">
            Why <span className="text-green-500 text-[32px] box-border tracking-[-0.64px] leading-[35.2px] md:text-5xl md:tracking-[-0.96px] md:leading-[52.8px]">LABUBU</span> is Special?
          </h2>
          <p className="text-white/90 text-lg box-border leading-[27px] max-w-screen-md mx-auto">
            What makes our collectibles stand out: each LABUBU character has its own unique{' '}
            <strong className="font-bold box-border">personality</strong> and story.
          </p>
        </div>
        <div className="box-border gap-x-8 grid grid-cols-none gap-y-8 mb-12 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <div className="text-neutral-950 bg-green-900/20 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border border border-green-500/20 rounded-xl border-solid">
            <div className="box-border p-6">
              <div className="items-center box-border gap-x-3 flex gap-y-3 mb-4">
                <img src="https://c.animaapp.com/mdxlcnv7lms827/assets/icon-6.svg" alt="Icon" className="text-green-500 box-border h-6 w-6" />
                <h3 className="text-white text-2xl font-semibold box-border tracking-[-0.48px] leading-[31.2px]">Ordinary Toys</h3>
              </div>
              <ul className="box-border list-none pl-0">
                {comparisonData.falsePromises.map((item, index) => (
                  <li key={index} className={index === 0 ? "text-gray-300 items-start box-border gap-x-2 flex gap-y-2 text-left" : "text-gray-300 items-start box-border gap-x-2 flex gap-y-2 text-left mt-3"}>
                    <img src="https://c.animaapp.com/mdxlcnv7lms827/assets/icon-7.svg" alt="Icon" className="text-red-500 box-border shrink-0 h-4 w-4 mt-1" />
                    <span className="box-border block">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-neutral-950 bg-green-900/20 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border border border-green-500/20 rounded-xl border-solid">
            <div className="box-border p-6">
              <div className="items-center box-border gap-x-3 flex gap-y-3 mb-4">
                <img src="https://c.animaapp.com/mdxlcnv7lms827/assets/icon-8.svg" alt="Icon" className="text-green-500 box-border h-6 w-6" />
                <h3 className="text-white text-2xl font-semibold box-border tracking-[-0.48px] leading-[31.2px]">Our Real Solution</h3>
              </div>
              <ul className="box-border list-none pl-0">
                {comparisonData.realSolution.map((item, index) => (
                  <li key={index} className={index === 0 ? "text-gray-300 items-start box-border gap-x-2 flex gap-y-2 text-left" : "text-gray-300 items-start box-border gap-x-2 flex gap-y-2 text-left mt-3"}>
                    <img src="https://c.animaapp.com/mdxlcnv7lms827/assets/icon-9.svg" alt="Icon" className="text-green-500 box-border shrink-0 h-4 w-4 mt-1" />
                    <span className="box-border block">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-black/50 box-border text-center mb-12 p-8 rounded-lg">
          <img src="https://c.animaapp.com/mdxlcnv7lms827/assets/icon-10.svg" alt="Icon" className="text-green-500 box-border h-12 w-12 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold box-border tracking-[-0.12px] leading-[28.8px] mb-4 md:text-[28px] md:tracking-[-0.14px] md:leading-[33.6px]">The Complete System Revealed</h3>
          <p className="text-white/90 text-lg box-border leading-[27px] max-w-2xl mx-auto">
            We don't sell just one prompt. You get a{' '}
            <strong className="text-green-500 font-bold box-border">complete arsenal of scientifically designed prompts</strong>
            that transform the secret AI into your personal business advisor, productivity coach, research assistant, and creative partner - essentially{' '}
            <strong className="text-white font-bold box-border">the best friend with all the world's knowledge</strong>
            that everyone dreams of having.
          </p>
        </div>
        <div className="bg-green-900/20 box-border max-w-2xl border border-green-500/30 mx-auto p-8 rounded-lg border-solid">
          <div className="items-center box-border gap-x-3 flex justify-center gap-y-3 mb-3">
            <img src="https://c.animaapp.com/mdxlcnv7lms827/assets/icon-11.svg" alt="Icon" className="text-green-500 box-border h-6 w-6" />
            <h3 className="text-xl font-bold box-border leading-7">Limited Edition Warning</h3>
          </div>
          <p className="text-gray-300 box-border text-center">
            We're only producing <strong className="text-green-500 font-bold box-border">500 pieces</strong>
            of each LABUBU character. After that, they will be discontinued, making them valuable collector's items.
          </p>
        </div>
      </div>
    </section>
  );
}
