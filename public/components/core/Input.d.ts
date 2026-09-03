import type { CSSProperties } from 'react';
export interface InputProps { label?: string; placeholder?: string; error?: string; value?: string; onChange?: (e: any) => void; style?: CSSProperties; type?: string; }
export function Input(props: InputProps): JSX.Element;
export default Input;
