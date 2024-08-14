export interface ButtonProps {
  children: React.ReactNode;
  variant: 'confirm' | 'close';
  onClick?: () => void;
  type: 'button' | 'submit';
}
