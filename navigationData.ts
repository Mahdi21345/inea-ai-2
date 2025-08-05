export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export const navigationData: NavigationItem[] = [
  { id: 'benefits', label: 'Benefits', href: '#benefits' },
  { id: 'community', label: 'Access', href: '#community' },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
  { id: 'reviews', label: 'Reviews', href: '#reviews' }
] as const;
