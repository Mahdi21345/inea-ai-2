import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhyDarkGPTSection } from './components/WhyDarkGPTSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AccessSection } from './components/AccessSection';
import { PortfolioSection } from './components/PortfolioSection';
import { FAQSection } from './components/FAQSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { EmergentLink } from './components/EmergentLink';
import './index.css';

function App() {
  return (
    <div className="text-white text-base not-italic normal-nums font-normal accent-auto bg-black box-border block tracking-[normal] leading-6 list-outside list-disc overflow-x-hidden overflow-y-auto text-start indent-[0px] normal-case visible border-separate font-inter">
      <div className="box-border">
        <div className="box-border min-h-[1000px]">
          <div className="relative bg-black box-border min-h-[1000px]">
            <Header />
            <div className="box-border pt-20">
              <HeroSection />
              <WhyDarkGPTSection />
              <FeaturesSection />
              <AccessSection />
              <PortfolioSection />
              <FAQSection />
              <PricingSection />
              <TestimonialsSection />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <EmergentLink />
    </div>
  );
}

export default App;
