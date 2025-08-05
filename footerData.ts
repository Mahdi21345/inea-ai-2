export interface FooterLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export const footerData = {
  quickLinks: [
    { id: 'benefits', label: 'Benefits', href: '#benefits' },
    { id: 'access', label: 'Access', href: '#community' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
    { id: 'reviews', label: 'Reviews', href: '#reviews' }
  ] as FooterLink[],
  support: [
    'Email: ineaaipro@gmail.com',
    'Access: After purchase',
    'FAQ: See above section'
  ]
} as const;
