import React from 'react';
import { navigationData } from '../data/navigationData';

export function Header() {
  return (
    <header className="fixed items-center backdrop-blur-[10px] bg-black/100 border-l-neutral-200 border-r-neutral-200 border-t-neutral-200 box-border flex h-[70px] justify-between w-full z-50 px-5 py-4 border-b-green-500/30 border-b border-solid top-0 md:h-20 md:px-[7.6923%]">
      <div className="items-center box-border gap-x-3 flex gap-y-3">
        <div className="relative items-center bg-black box-border flex h-12 justify-center w-12 border-green-500 overflow-hidden rounded-full border-2 border-solid">
          <img src="https://c.animaapp.com/mdxlcnv7lms827/assets/icon-1.svg" alt="Icon" className="text-green-500 box-border h-8 w-8" />
        </div>
        <h1 className="text-xl font-bold box-border leading-7">LABUBU</h1>
      </div>
      <nav className="items-center box-border gap-x-8 hidden min-h-0 min-w-0 gap-y-8 md:flex md:min-h-[auto] md:min-w-[auto]">
        {navigationData.map((item) => (
          <a key={item.id} href={item.href} className="text-neutral-600 text-lg box-border inline leading-[27px] min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
