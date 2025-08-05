import React from 'react';
import { pricingFeatures } from '../data/pricingData';

export function PricingSection() {
  return (
    <section className="bg-gray-900 box-border px-8 py-20">
      <div className="box-border max-w-4xl text-center mx-auto">
        <h2 className="text-[32px] font-semibold box-border tracking-[-0.64px] leading-[35.2px] mb-6 md:text-5xl md:tracking-[-0.96px] md:leading-[52.8px]">
          One Price, <span className="text-red-500 text-[32px] box-border tracking-[-0.64px] leading-[35.2px] md:text-5xl md:tracking-[-0.96px] md:leading-[52.8px]">Everything Included</span>
        </h2>
        <p className="text-white/90 text-lg box-border leading-[27px] max-w-2xl mb-12 mx-auto">
          For only $34.99 one-time payment, get lifetime access to INEA AI + platform access + referral system
        </p>
        <div className="text-neutral-950 bg-[linear-gradient(rgba(127,29,29,0.2),rgb(0,0,0))] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border max-w-md border border-red-500 mx-auto rounded-xl border-solid">
          <div className="box-border p-8">
            <div className="text-white text-xs font-semibold items-center bg-red-600 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border inline-flex leading-4 border mb-4 px-2.5 py-0.5 rounded-md border-solid border-transparent">EXCLUSIVE OFFER</div>
            <h3 className="text-white text-2xl font-semibold box-border tracking-[-0.12px] leading-[28.8px] mb-2 md:text-[28px] md:tracking-[-0.14px] md:leading-[33.6px]">Lifetime Access</h3>
            <div className="box-border mb-6">
              <div className="items-center box-border gap-x-3 flex justify-center gap-y-3 mb-2">
                <span className="text-gray-400 text-2xl box-border block leading-8 line-through">$59.99</span>
                <div className="text-white text-xs font-semibold items-center bg-green-600 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border flex leading-4 border px-2.5 py-0.5 rounded-md border-solid border-transparent">Save $25</div>
              </div>
              <span className="text-white text-5xl font-bold box-border leading-[48px]">$34.99</span>
              <span className="text-gray-400 box-border"> one-time</span>
            </div>
            <div role="none" className="bg-gray-700 box-border shrink-0 h-px w-full mb-6"></div>
            <ul className="box-border list-none text-left mb-8 pl-0">
              {pricingFeatures.map((feature, index) => (
                <li key={index} className={index === 0 ? "items-start box-border gap-x-3 flex gap-y-3" : "items-start box-border gap-x-3 flex gap-y-3 mt-3"}>
                  <img 
                    src={index % 2 === 0 ? "https://c.animaapp.com/mdxlcnv7lms827/assets/icon-21.svg" : "https://c.animaapp.com/mdxlcnv7lms827/assets/icon-22.svg"} 
                    alt="Icon" 
                    className={index % 2 === 0 ? "text-red-500 box-border shrink-0 h-5 w-5 mt-0.5" : "text-green-500 box-border shrink-0 h-5 w-5 mt-0.5"} 
                  />
                  <span className="text-gray-300 box-border block">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="box-border">
              <button className="text-white text-lg font-medium items-center bg-red-500 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] gap-x-3 inline-flex h-9 justify-center leading-[21.6px] min-h-14 gap-y-3 text-nowrap w-full px-5 py-4 rounded-lg md:px-6 md:py-3.5">
                <img src="https://c.animaapp.com/mdxlcnv7lms827/assets/icon-3.svg" alt="Icon" className="box-border shrink-0 h-4 text-nowrap w-4" />
                Start Now
                <img src="https://c.animaapp.com/mdxlcnv7lms827/assets/icon-4.svg" alt="Icon" className="box-border shrink-0 h-4 text-nowrap w-4" />
              </button>
            </div>
            <p className="text-gray-400 text-xs box-border leading-4 mt-4">Secure payment • Instant email delivery • One-time payment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
