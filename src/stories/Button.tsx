import React from "react";

import style from "./button.module.scss";

export interface ButtonProps {
  varient?: "text" | "outline";
  disableShadow?: boolean;
  disabled?: boolean;
  startIcon?: string;
  endIcon?: string;
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary" | "danger";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  varient,
  disableShadow = false,
  disabled = true,
  startIcon,
  endIcon,
  size = "md",
  color = "primary",
  onClick,
  children,
}) => {
  return (
    <button
      type="button"
      className={
        style["button"] +
        " " +
        style[`color-${color}`] +
        " " +
        style[`size-${size}`]
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
};
