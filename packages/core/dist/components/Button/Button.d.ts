import React, { CSSProperties } from 'react';
export interface ButtonAnimationProps {
    transitionDuration?: string;
    hoverTransform?: string;
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
    activeTransform?: string;
}
export interface ButtonProps {
    onClick?: () => void;
    variant?: 'contained' | 'outlined' | 'text';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    startIcon?: React.ReactElement;
    endIcon?: React.ReactElement;
    disabled?: boolean;
    sx?: CSSProperties;
    children?: React.ReactNode;
    animations?: ButtonAnimationProps;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
