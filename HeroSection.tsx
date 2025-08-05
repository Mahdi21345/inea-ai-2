import React from 'react';
import { heroData } from '../data/heroData';

export function HeroSection() {
  return (
    <section className="relative bg-[linear-gradient(135deg,rgb(0,0,0),rgb(10,10,10)_50%,rgb(0,0,0))] box-border text-center overflow-hidden px-8 py-20 before:accent-auto before:bg-[radial-gradient(circle_at_20%_30%,rgba(239,68,68,0.08)_0px,rgba(0,0,0,0)_50%),radial-gradient(circle_at_80%_70%,rgba(239,68,68,0.08)_0px,rgba(0,0,0,0)_50%),radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.04)_0px,rgba(0,0,0,0)_50%)] before:bg-[position:0%_0%,0%_0%,0%_0%] before:bg-size-[auto,auto,auto] before:box-border before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:inset-0 before:font-inter">
      <div className="absolute box-border opacity-20 inset-0">
        <img src="https://c.animaapp.com/mdxlcnv7lms827/assets/icon-2.svg" alt="Icon" className="box-border h-full w-full" />
      </div>
      <div className="relative box-border max-w-4xl z-10 mx-auto">
        <div className="box-border mb-8">
          <div className="text-xs font-semibold items-center bg-red-600 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border inline-flex leading-4 border mb-4 px-2.5 py-0.5 rounded-md border-solid border-transparent">{heroData.badge}</div>
        </div>
        <h1 className="text-4xl font-semibold box-border tracking-[-0.62px] leading-[39.6px] mb-6 md:text-[66px] md:leading-[72.6px]">
          Go From <span className="text-red-500 text-4xl box-border leading-[39.6px] md:text-[66px] md:leading-[72.6px]">$0 to $10K/Month</span>
          <br className="text-4xl box-border leading-[39.6px] md:text-[66px] md:leading-[72.6px]" />
          With <span className="text-red-500 text-4xl box-border leading-[39.6px] md:text-[66px] md:leading-[72.6px]">INEA AI</span>
          That Generates<br className="text-4xl box-border leading-[39.6px] md:text-[66px] md:leading-[72.6px]" />
          The Best Secret Business Ideas
        </h1>
        <p className="text-lg font-medium box-border leading-[27px] max-w-2xl mb-8 mx-auto md:text-xl md:leading-[30px]">
          Forget the fake promises of "Dark GPT". We sell the real secret:
          <strong className="text-lg font-bold box-border leading-[27px] md:text-xl md:leading-[30px]"> a complete arsenal of revolutionary prompts</strong>
          that unlocks a secret AI to generate <strong className="text-red-400 text-lg font-bold box-border leading-[27px] md:text-xl md:leading-[30px]">real money-making opportunities</strong>
          and become your<strong className="text-lg font-bold box-border leading-[27px] md:text-xl md:leading-[30px]"> ultimate AI assistant</strong>
          for business, productivity, and everything else.
        </p>
        <div className="items-center box-border gap-x-4 flex flex-col justify-center gap-y-4 mb-12 md:flex-row">
          <button className="text-lg font-medium items-center bg-red-500 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] gap-x-3 flex h-9 justify-center leading-[21.6px] min-h-14 gap-y-3 text-nowrap w-full px-5 py-4 rounded-lg md:w-auto md:px-6 md:py-3.5">
            <img src="https://c.animaapp.com/mdxlcnv7lms827/assets/icon-3.svg" alt="Icon" className="box-border shrink-0 h-4 text-nowrap w-4" />
            Get Access Now - $34.99 Lifetime
            <img src="https://c.animaapp.com/mdxlcnv7lms827/assets/icon-4.svg" alt="Icon" className="box-border shrink-0 h-4 text-nowrap w-4" />
          </button>
          <button className="text-lg font-medium items-center bg-white/10 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] gap-x-3 flex h-9 justify-center leading-[21.6px] min-h-14 gap-y-3 text-nowrap w-full px-5 py-4 rounded-lg md:w-auto md:px-6 md:py-3.5">
            View Pricing
            <img src="https://c.animaapp.com/mdxlcnv7lms827/assets/icon-4.svg" alt="Icon" className="box-border shrink-0 h-4 text-nowrap w-4" />
          </button>
        </div>
        <div className="text-gray-400 items-center box-border gap-x-2 flex justify-center gap-y-2 mb-8">
          <img src="https://c.animaapp.com/mdxlcnv7lms827/assets/icon-5.svg" alt="Icon" className="box-border h-4 w-4" />
          <span className="box-border block">Details sent via email after purchase</span>
        </div>
        <div className="box-border gap-x-6 grid grid-cols-[repeat(2,minmax(0px,1fr))] max-w-lg gap-y-6 mx-auto">
          <div className="box-border">
            <div className="text-red-500 text-2xl font-bold box-border leading-8">Growing</div>
            <div className="text-gray-400 text-sm box-border leading-5">Interest</div>
          </div>
          <div className="box-border">
            <div className="text-red-500 text-2xl font-bold box-border leading-8">Limited</div>
            <div className="text-gray-400 text-sm box-border leading-5">Access</div>
          </div>
        </div>
      </div>
    </section>
  );
}
