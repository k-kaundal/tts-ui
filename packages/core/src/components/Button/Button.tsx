import React, { CSSProperties, useState } from 'react';
import styles from './Button.module.css';

export interface ButtonAnimationProps {
  transitionDuration?: string;
  hoverTransform?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  activeTransform?: string;
}
// Export the interface
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
const defaultAnimation: ButtonAnimationProps = {
  transitionDuration: "0.2s",
  hoverTransform: "scale(1.05)",
  hoverBackgroundColor: "#0056b3",
  hoverTextColor: "#0056b3",
  activeTransform: "scale(0.95)"
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  variant = 'contained',
  size = 'medium',
  className = '',
  startIcon,
  endIcon,
  disabled = false,
  sx = {},
  children,
  animations = defaultAnimation,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsActive(false);  // reset active state on mouse leave
  }

  const handleMouseDown = () => {
    setIsActive(true);
  }

  const handleMouseUp = () => {
    setIsActive(false);
  }

  const baseStyles = `${styles.button} ${styles[variant]} ${styles[size]} ${styles.animatable} ${disabled ? styles.disabled : ''} ${className}`;
  const hoverStyles = isHovered ? styles.hoverEffect : '';
  const activeStyles = isActive ? styles.activeEffect : '';

  return (
    <button
      className={`${baseStyles} ${hoverStyles} ${activeStyles}`}
      onClick={onClick}
      style={sx}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {startIcon}
      {children || "Button"}
      {endIcon}
    </button>
  );
};

export default Button;