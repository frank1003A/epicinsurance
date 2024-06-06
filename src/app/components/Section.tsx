"use client";

import clsx from "clsx";
import { ReactNode } from "react";

export const Section = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={clsx(
        "w-full flex flex-col lg:flex-row bg-white px-epic_page_mob lg:px-epic_page_desk",
        className
      )}
    >
      {children}
    </section>
  );
};
