export interface AccessItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly badge: string;
  readonly icon: string;
}

export const accessData: AccessItem[] = [
  {
    id: 'private',
    title: 'Private Access',
    description: 'Get exclusive access to our private platform where you can connect with other users.',
    badge: 'Exclusive access',
    icon: "https://c.animaapp.com/mdxlcnv7lms827/assets/icon-15.svg"
  },
  {
    id: 'collection',
    title: 'Prompt Collection',
    description: 'Access our complete collection of optimized prompts for different business sectors and AI platforms.',
    badge: 'Regular updates',
    icon: "https://c.animaapp.com/mdxlcnv7lms827/assets/icon-16.svg"
  },
  {
    id: 'referral',
    title: 'Referral System',
    description: 'Earn $10 for each person you refer plus progressive bonuses based on performance.',
    badge: 'Passive income opportunity',
    icon: "https://c.animaapp.com/mdxlcnv7lms827/assets/icon-17.svg"
  }
] as const;

export const accessFeatures = [
  '24/7 access',
  'Expert support',
  'Regular updates',
  '$10 per referral',
  'Premium prompts',
  'Priority access'
] as const;
