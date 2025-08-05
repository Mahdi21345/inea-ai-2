import React from 'react';
import { testimonialsData } from '../data/testimonialsData';

export function TestimonialsSection() {
  return (
    <section className="box-border px-8 py-20">
      <div className="box-border max-w-6xl mx-auto">
        <div className="box-border text-center mb-16">
          <h2 className="text-[32px] font-semibold box-border tracking-[-0.64px] leading-[35.2px] mb-6 md:text-5xl md:tracking-[-0.96px] md:leading-[52.8px]">
            What Our <span className="text-green-500 text-[32px] box-border tracking-[-0.64px] leading-[35.2px] md:text-5xl md:tracking-[-0.96px] md:leading-[52.8px]">Users</span> Say
          </h2>
          <p className="text-white/90 text-lg box-border leading-[27px] max-w-2xl mx-auto">Real feedback from real people who got access to INEA AI</p>
        </div>
        <div className="box-border gap-x-8 grid grid-cols-none gap-y-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          {testimonialsData.map((testimonial, index) => (
            <div key={testimonial.id} className={index === 1 ? "text-neutral-950 bg-black/50 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border border border-green-500/20 rounded-xl border-solid" : "text-neutral-950 bg-black/50 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border border border-red-500/20 rounded-xl border-solid"}>
              <div className="box-border p-6">
                <div className="items-center box-border gap-x-1 flex gap-y-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src="https://c.animaapp.com/mdxlcnv7lms827/assets/icon-23.svg" alt="Icon" className="text-yellow-500 box-border h-5 w-5" />
                  ))}
                </div>
                <p className="text-gray-300 italic box-border mb-4">"{testimonial.quote}"</p>
                <div className="box-border border-gray-700 pt-4 border-t border-solid">
                  <div className="text-white font-semibold box-border">{testimonial.name}</div>
                  <div className={index === 0 || index === 2 ? "text-red-400 text-sm font-medium box-border leading-5 mt-2" : "text-green-400 text-sm font-medium box-border leading-5 mt-2"}>
                    {testimonial.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
