import React from 'react';
import { footerData } from '../data/footerData';

export function Footer() {
  return (
    <footer className="bg-black box-border px-8 py-12">
      <div className="box-border max-w-6xl mx-auto">
        <div className="box-border gap-x-8 grid grid-cols-none gap-y-8 mb-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          <div className="box-border">
            <div className="items-center box-border gap-x-3 flex gap-y-3 mb-4">
              <div className="items-center bg-black box-border flex h-8 justify-center w-8 border-red-500 rounded-full border-2 border-solid">
                <img src="https://c.animaapp.com/mdxlcnv7lms827/assets/icon-24.svg" alt="Icon" className="text-red-500 box-border h-6 w-6" />
              </div>
              <span className="font-bold box-border block">INEA AI</span>
            </div>
            <p className="text-gray-400 text-sm box-border leading-5">
              The only source to access a secret AI and generate profitable business ideas.
            </p>
          </div>
          <div className="box-border">
            <h4 className="font-semibold box-border mb-4">Quick Links</h4>
            <ul className="text-gray-400 text-sm box-border leading-5 list-none pl-0">
              {footerData.quickLinks.map((link, index) => (
                <li key={link.id} className={index === 0 ? "box-border text-left" : "box-border text-left mt-2"}>
                  <a href={link.href} className="box-border">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="box-border">
            <h4 className="font-semibold box-border mb-4">Support</h4>
            <ul className="text-gray-400 text-sm box-border leading-5 list-none pl-0">
              {footerData.support.map((item, index) => (
                <li key={index} className={index === 0 ? "box-border text-left" : "box-border text-left mt-2"}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div role="none" className="bg-gray-800 box-border shrink-0 h-px w-full mb-6"></div>
        <div className="text-gray-400 text-sm box-border leading-5 text-center">
          <p className="box-border">
            © 2024 INEA AI. All rights reserved. | Terms of Service | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
