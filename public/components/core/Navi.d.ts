import type { CSSProperties } from 'react';
/** Top navigation. 80px tall, glassy white with 10px blur, black label links.
 */
export interface NaviProps { items?: string[]; active?: string; logoSrc?: string; sticky?: boolean; style?: CSSProperties; }
export function Navi(props: NaviProps): JSX.Element;
export default Navi;
