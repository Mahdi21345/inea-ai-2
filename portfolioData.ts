export interface PortfolioItem {
  readonly title: string;
  readonly description: string;
  readonly category: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    title: "LABUBU Farmer",
    description: "Limited edition LABUBU character with farmer outfit and accessories.",
    category: "Collectible"
  },
  {
    title: "LABUBU Winter",
    description: "Special winter edition with snow accessories and warm outfit.",
    category: "Seasonal"
  },
  {
    title: "LABUBU Mini",
    description: "Smaller version of the classic LABUBU character, perfect for your desk.",
    category: "Miniature"
  },
  {
    title: "LABUBU Glow",
    description: "Glow-in-the-dark version with special luminescent features.",
    category: "Special Edition"
  }
] as const;
