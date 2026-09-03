import type { CSSProperties } from 'react';
/** A product tile for a coin/medallion. 332×468, 1px hairline border, 200px round product photo, optional red badge (e.g. "NEW", "SALE").
 */
export interface CoinCardProps { image?: string; meta?: string; name?: string; price?: string; badge?: string; style?: CSSProperties; }
export function CoinCard(props: CoinCardProps): JSX.Element;
export default CoinCard;
