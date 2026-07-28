import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles = "btn rounded-box transition-all duration-300";

  const variants = {
    primary:
      "bg-[#7A3B1E] border-[#7A3B1E] text-white hover:bg-[#5F2D16] hover:border-[#5F2D16]",

    outline:
      "btn-outline border-[#7A3B1E] text-[#7A3B1E] hover:bg-[#7A3B1E] hover:border-[#7A3B1E] hover:text-white",

    ghost: "btn-ghost text-[#7A3B1E] hover:bg-[#7A3B1E]/10",
  };

  const sizes = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
