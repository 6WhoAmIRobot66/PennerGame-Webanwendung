import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type = "button",
  onClick,
  buttonStyle,
  buttonSize,
  path,
}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  // Navigation mit Link
  if (path) {
    return (
      <Link
        to={path}
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      >
        {children}
      </Link>
    );
  }

  // Normaler Button
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

// Für Kompatibilität (falls irgendwo default import verwendet wird)
export default Button;