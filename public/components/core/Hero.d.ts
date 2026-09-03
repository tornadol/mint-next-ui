import type { CSSProperties } from 'react';
/** Hero band with sky/coin backdrop and a red CTA.
 */
export interface HeroProps { eyebrow?: string; title?: string; body?: string; cta?: string; bg?: string; art?: string; style?: CSSProperties; }
export function Hero(props: HeroProps): JSX.Element;
export default Hero;
