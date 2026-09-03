import type { CSSProperties } from 'react';
export interface ContextMenuProps { items?: (string | { label: string; shortcut?: string })[]; mode?: 'light' | 'dark'; style?: CSSProperties; }
export function ContextMenu(props: ContextMenuProps): JSX.Element;
export default ContextMenu;
