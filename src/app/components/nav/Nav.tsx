"use client";
import clsx from "clsx";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../Logo";

const navItems = [
  { n: "Home", p: "/" },
  { n: "About Us", p: "about" },
  { n: "Services", p: "services" },
  { n: "Clientele", p: "clientele" },
  { n: "Core Values", p: "corevalues" },
  { n: "Contact", p: "contact" },
];

const Nav = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const [scrollValue, setScrollValue] = useState(0);
  const [scroll, setScroll] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollValue(latest);
    latest > 30 ? setScroll(true) : setScroll(false);
  });

  useEffect(() => {
    const targetDiv = document.getElementById("targetdiv");
    if (targetDiv) {
      targetDiv.addEventListener("click", () => setOpen(false));
      isOpen
        ? targetDiv.classList.remove("hidden")
        : targetDiv.classList.add("hidden");
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={clsx(
          "transition-all will-change-auto w-full flex items-center justify-between p-3 lg:p-4 fixed top-0 z-50 px-epic_page_mob lg:px-epic_page_desk",
          scroll ? "backdrop-blur-3xl" : "bg-transparent"
        )}
      >
        <Logo sv={scroll} />
        {/**overlay */}

        <ul
          className={clsx(
            "md:inline-flex gap-2 m-auto overflow-auto  text-base text-epic_primary",
            isOpen ? "absolute inset-0 mx-auto z-50 mt-24 bg-white " : "hidden",
            isOpen && "flex flex-col rounded-md w-[300px] h-fit shadow-2xl p-4"
          )}
        >
          {navItems.map((item) => {
            return (
              <Link
                onClick={() => setOpen(false)}
                className={clsx(
                  "hover:bg-epic_primary hover:text-white",
                  "px-3 py-1 rounded-md transition-all",
                  isOpen && "py-2",
                  pathname === item.p && "bg-epic_primary text-white"
                )}
                key={item.n}
                href={"#" + item.p}
              >
                {item.n}
              </Link>
            );
          })}
        </ul>
        <button className="btn ml-auto rounded-md hidden lg:block bg-epic_secondary border-none shadow-none text-white h-8">
          Get a quote
        </button>
        <div
          className={clsx(
            "ml-auto lg:hidden ",
            isOpen && "absolute right-5 top-4 z-40",
            scrollValue > 10 ? "text-epic_primary" : "text-white"
          )}
        >
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
      <div
        id="targetdiv"
        className="bg-black/50 fixed inset-0 z-40 hidden"
      ></div>
    </>
  );
};

export default Nav;
