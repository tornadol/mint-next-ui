import type { CSSProperties, ReactNode } from 'react';
/** A top-nav link, Open Sans 700 uppercase, 12px padding. */
export interface MenuItemProps { children?: ReactNode; active?: boolean; href?: string; style?: CSSProperties; onClick?: (e: any) => void; }
export function MenuItem(props: MenuItemProps): JSX.Element;
export default MenuItem;
