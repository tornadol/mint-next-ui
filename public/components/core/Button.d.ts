import type { CSSProperties, ReactNode, ButtonHTMLAttributes } from 'react';

/**
 * The Singapore Mint / UI-kit button.
 * Hero call-to-action ("GET COLLECTING") uses variant="primary" size="lg" uppercase iconTrailing="ArrowLongRight".
 *
 */
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  icon?: string;         // leading Icon name
  iconTrailing?: string; // trailing Icon name
  uppercase?: boolean;   // wraps label in Open Sans 700 uppercase (label style)
  disabled?: boolean;
  style?: CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
export default Button;
