import React from 'react';
import { accessData, accessFeatures } from '../data/accessData';

export function AccessSection() {
  return (
    <section className="bg-gray-900 box-border px-8 py-20">
      <div className="box-border max-w-6xl mx-auto">
        <div className="box-border text-center mb-16">
          <h2 className="text-[32px] font-semibold box-border tracking-[-0.64px] leading-[35.2px] mb-6 md:text-5xl md:tracking-[-0.96px] md:leading-[52.8px]">
            What You Get <span className="text-red-500 text-[32px] box-border tracking-[-0.64px] leading-[35.2px] md:text-5xl md:tracking-[-0.96px] md:leading-[52.8px]">Instant Access</span> To
          </h2>
          <p className="text-white/90 text-lg box-border leading-[27px] max-w-2xl mx-auto">
            After your purchase, get immediate access to our exclusive platform with all prompts and tools.
          </p>
        </div>
        <div className="box-border gap-x-8 grid grid-cols-none gap-y-8 mb-12 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          {accessData.map((item, index) => (
            <div key={item.id} className={index === 1 ? "text-neutral-950 bg-black/50 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border border border-green-500/20 rounded-xl border-solid" : "text-neutral-950 bg-black/50 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border border border-red-500/20 rounded-xl border-solid"}>
              <div className="box-border p-6">
                <img src={item.icon} alt="Icon" className={index === 1 ? "text-green-500 box-border h-10 w-10 mb-4" : "text-red-500 box-border h-10 w-10 mb-4"} />
                <h3 className="text-white text-xl font-semibold box-border leading-7 mb-3">{item.title}</h3>
                <p className="text-white/90 box-border leading-[22.4px] mb-4">{item.description}</p>
                <div className={index === 1 ? "text-green-400 text-xs font-semibold items-center bg-green-600/20 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border inline-flex leading-4 border px-2.5 py-0.5 rounded-md border-solid border-transparent" : "text-red-400 text-xs font-semibold items-center bg-red-600/20 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border inline-flex leading-4 border px-2.5 py-0.5 rounded-md border-solid border-transparent"}>{item.badge}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-black box-border text-center p-8 rounded-lg">
          <img src="https://c.animaapp.com/mdxlcnv7lms827/assets/icon-18.svg" alt="Icon" className="text-green-500 box-border h-16 w-16 mb-6 mx-auto" />
          <h3 className="text-2xl font-semibold box-border tracking-[-0.12px] leading-[28.8px] mb-4 md:text-[28px] md:tracking-[-0.14px] md:leading-[33.6px]">Instant Access</h3>
          <p className="text-white/90 text-lg box-border leading-[27px] max-w-2xl mb-6 mx-auto">
            Once your payment is validated, you'll receive an email with your access details and start using our exclusive prompt system immediately.
          </p>
          <div className="box-border gap-x-4 flex flex-wrap justify-center gap-y-4">
            {accessFeatures.map((feature, index) => (
              <div key={index} className={index % 2 === 0 ? "text-xs font-semibold items-center bg-red-600 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border flex leading-4 border px-2.5 py-0.5 rounded-md border-solid border-transparent" : "text-xs font-semibold items-center bg-green-600 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border flex leading-4 border px-2.5 py-0.5 rounded-md border-solid border-transparent"}>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
