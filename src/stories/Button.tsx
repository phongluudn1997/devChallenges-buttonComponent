import React from "react";

import style from "./button.module.scss";
import classNames from "classnames";
import { FcAssistant, FcBullish } from "react-icons/fc";

export interface ButtonProps {
  varient?: "text" | "outline" | "filled";
  disableShadow?: boolean;
  disabled?: boolean;
  startIcon?: "FcBullish" | "FcAssistant";
  endIcon?: "FcBullish" | "FcAssistant";
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary" | "danger";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  varient = "filled",
  disableShadow = false,
  disabled = false,
  startIcon,
  endIcon,
  size = "md",
  color = "primary",
  onClick,
  children,
}) => {
  const icons = {
    FcBullish: <FcBullish className={style["button__content"]} />,
    FcAssistant: <FcAssistant className={style["button__content"]} />,
  };
  return (
    <button
      type="button"
      className={classNames(
        style["button"],
        style[`color-${color}-${varient}`],
        style[`size-${size}`],
        disableShadow && style["disableShadow"]
      )}
      disabled={disabled}
    >
      {startIcon && icons[startIcon]}
      <span className={style["button__content"]}>{children}</span>
      {endIcon && icons[endIcon]}
    </button>
  );
};
