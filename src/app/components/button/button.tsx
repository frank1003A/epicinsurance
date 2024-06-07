import clsx from "clsx";
import { ReactNode } from "react";

const Button = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <button
      className={clsx(
        "btn rounded-md px-6 border hover:bg-epic_secondary hover:text-white border-epic_secondary text-epic_secondary",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
