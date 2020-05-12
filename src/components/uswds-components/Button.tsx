import React from "react";
import cx from "classnames";

interface ButtonProps {
  size?: "large" | null;
  buttonType?: "unstyled" | null;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ size, buttonType, children, ...otherProps }) => (
  <button
    className={cx("usa-button", {
      "usa-button--big": size === "large",
      "usa-button--unstyled": buttonType === "unstyled",
    })}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
