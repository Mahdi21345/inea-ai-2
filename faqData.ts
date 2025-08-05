export interface FAQItem {
  readonly id: string;
  readonly question: string;
  readonly answer?: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'what-get',
    question: 'What exactly do I get for $34.99?',
    answer: 'You get lifetime access to our complete collection of secret prompts that unlock AI\'s full potential, private platform access, regular updates, referral system, and support. This is not just one prompt - it\'s an entire arsenal of specialized prompts.'
  },
  {
    id: 'different',
    question: 'How is this different from regular AI prompts?'
  },
  {
    id: 'make-money',
    question: 'Can I really make $10K/month with this?'
  },
  {
    id: 'legal-safe',
    question: 'Is this legal and safe to use?'
  },
  {
    id: 'satisfaction',
    question: 'What if I\'m not satisfied?'
  },
  {
    id: 'access-speed',
    question: 'How quickly will I receive access?'
  }
] as const;
