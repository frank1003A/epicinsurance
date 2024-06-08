import clsx from "clsx";
import { ReactNode } from "react";

interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  children: ReactNode;
  className?: string;
}

const Section = ({ children, className, ...rest }: SectionProps) => {
  return (
    <section
      {...rest}
      className={clsx(
        "w-full flex flex-col lg:flex-row px-epic_page_mob lg:px-epic_page_desk",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
