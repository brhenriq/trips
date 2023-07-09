import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface IButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "normal" | "outlined";
}

function Button({ className, variant = "normal", ...props }: IButtonProps) {
  const variantClasses = {
    normal: "bg-primary text-white hover:bg-primaryDarker",
    outlined:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };
  return (
    <button
      className={twMerge(
        "appearance-none rounded-lg p-2 text-sm font-medium shadow transition-all",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
