import React from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  icon = "icon",
  iconWithText = "iconWithText",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "emptyGray",
  error = "error",
  emptyError = "emptyError",
  white = "white",
}

type ButtonProps = {
  label?: string;
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
  iconSrc?: string;
  trailingIconSrc?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button({
  label,
  size,
  color,
  iconSrc,
  trailingIconSrc,
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(styles.button, size, color)}
    >
      {iconSrc && <img src={iconSrc} alt="icon" />}
      {label && label}
      {trailingIconSrc && <img src={trailingIconSrc} alt="icon" />}
    </button>
  );
}
