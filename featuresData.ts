export interface Feature {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export const featuresData: Feature[] = [
  {
    id: 'prompts',
    title: 'Complete Prompt Arsenal',
    description: 'Access our entire library of secret prompts that unlock AI\'s full potential. Not just one prompt - dozens of specialized prompts for business, productivity, creativity and more.',
    icon: "https://c.animaapp.com/mdxlcnv7lms827/assets/icon-12.svg"
  },
  {
    id: 'platforms',
    title: 'Multiple AI Platforms',
    description: 'Get prompts that work with INEA AI plus additional prompts for other popular AI platforms. Transform any AI into your personal assistant with unlimited knowledge.',
    icon: "https://c.animaapp.com/mdxlcnv7lms827/assets/icon-13.svg"
  },
  {
    id: 'updates',
    title: 'Lifetime Updates',
    description: 'New prompts added regularly based on latest AI developments and testing. Your investment grows more valuable over time with constant improvements.',
    icon: "https://c.animaapp.com/mdxlcnv7lms827/assets/icon-14.svg"
  }
] as const;

export const businessIdeasData = [
  'Crypto education platform with premium courses ($5K-15K/month)',
  'AI-powered e-commerce product research tool ($3K-12K/month)',
  'Social media automation agency for local businesses ($4K-20K/month)',
  'NFT marketplace for digital artists ($8K-50K/month)',
  'Drop-shipping optimization software ($6K-25K/month)',
  'Online trading signals and analysis service ($7K-35K/month)',
  'Digital marketing course with affiliate program ($10K-40K/month)',
  'Custom app development for small businesses ($15K-100K/project)'
] as const;
