"use client";
import clsx from "clsx";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Logo = () => {
  const { scrollY } = useScroll();
  const [scrollValue, setScrollValue] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollValue(latest);
  });
  return (
    <Link href={"/"} className="flex items-center justify-center gap-1">
      <div>
        <Image src={"/logo.png"} alt="company_logo" width={40} height={40} />
      </div>
      <div className="flex flex-col ">
        <span
          className={clsx(
            "text-white lg:text-epic_primary font-bold leading-3 text-2xl",
            scrollValue > 20 ? "text-epic_primary" : "text-white"
          )}
        >
          Epic Insurance
        </span>
      </div>
    </Link>
  );
};

export default Logo;
