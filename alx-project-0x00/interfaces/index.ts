export interface ButtonProps {
  title: string;
  styles: string; // full TailwindCSS string for size/shape/colors
  onClick?: () => void;
}

export interface ButtonProps {
  title: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
}

