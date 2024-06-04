"use client";
import clsx from "clsx";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Logo from "../Logo";

const Nav = () => {
  const { scrollY } = useScroll();

  const [scrollValue, setScrollValue] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollValue(latest);
  });

  return (
    <nav
      className={clsx(
        "transition-all will-change-auto w-full flex items-center justify-center p-4 fixed top-0 z-50 px-epic_page_mob lg:px-epic_page_desk",
        scrollValue > 20
          ? "bg-white border-b border-b-[#eee]"
          : "bg-transparent"
      )}
    >
      <Logo />
      <ul className="hidden md:inline-flex gap-4 m-auto  text-base text-epic_primary">
        <li>Home</li>
        <li>Why choose us</li>
        <li>Services</li>
        <li>Testiimonials</li>
      </ul>
      <button className="btn ml-auto rounded-md bg-epic_secondary border-none shadow-none text-white h-8">
        Get a quote
      </button>
    </nav>
  );
};

export default Nav;
