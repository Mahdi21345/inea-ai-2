export interface Testimonial {
  readonly id: string;
  readonly name: string;
  readonly quote: string;
  readonly result: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'mahdi',
    name: 'Mahdi',
    quote: 'I was skeptical at first, but INEA AI completely changed my approach to business. The prompts are incredibly detailed and unlock possibilities I never thought of. Started working on my crypto education ideas and seeing real potential.',
    result: '✓ Found 3 profitable business concepts to explore'
  },
  {
    id: 'naoufel',
    name: 'Naoufel',
    quote: 'This isn\'t just prompts - it\'s like having access to unlimited knowledge. The AI gives me insights for productivity, market analysis, even personal development. The variety of prompts is impressive.',
    result: '✓ Significantly improved my productivity and focus'
  },
  {
    id: 'bilal',
    name: 'Bilal',
    quote: 'Finally found something that actually delivers value. The prompt collection is comprehensive and the different AI access methods work great. I\'m exploring dropshipping ideas with much better clarity now.',
    result: '✓ Developed solid business plan in record time'
  }
] as const;
