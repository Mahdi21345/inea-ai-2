import React, { useState } from 'react';
import { faqData } from '../data/faqData';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="box-border px-8 py-20">
      <div className="box-border max-w-4xl mx-auto">
        <div className="box-border text-center mb-16">
          <h2 className="text-[32px] font-semibold box-border tracking-[-0.64px] leading-[35.2px] mb-6 md:text-5xl md:tracking-[-0.96px] md:leading-[52.8px]">
            Frequently Asked <span className="text-green-500 text-[32px] box-border tracking-[-0.64px] leading-[35.2px] md:text-5xl md:tracking-[-0.96px] md:leading-[52.8px]">Questions</span>
          </h2>
          <p className="text-white/90 text-lg box-border leading-[27px]">Everything you need to know about INEA AI</p>
        </div>
        <div className="box-border">
          {faqData.map((faq, index) => (
            <div key={faq.id} className={index === 0 ? "box-border border border-gray-700 rounded-lg border-solid" : "box-border border border-gray-700 mt-4 rounded-lg border-solid"}>
              <button 
                className="items-center bg-transparent flex justify-between text-left w-full px-6 py-4"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold box-border block">{faq.question}</span>
                <img 
                  src={openIndex === index ? "https://c.animaapp.com/mdxlcnv7lms827/assets/icon-19.svg" : "https://c.animaapp.com/mdxlcnv7lms827/assets/icon-20.svg"} 
                  alt="Icon" 
                  className="text-red-500 box-border shrink-0 h-5 w-5" 
                />
              </button>
              {openIndex === index && faq.answer && (
                <div className="box-border pb-4 px-6">
                  <p className="text-gray-300 box-border leading-[26px]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
