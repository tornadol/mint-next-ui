import type { CSSProperties, ReactNode } from 'react';
export interface BadgeProps { children?: ReactNode; tone?: 'new' | 'sale' | 'gift' | 'outline'; style?: CSSProperties; }
export function Badge(props: BadgeProps): JSX.Element;
export default Badge;
