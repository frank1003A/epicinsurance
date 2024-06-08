"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ sv }: { sv?: boolean }) => {
  return (
    <Link href={"/"} className="flex items-center justify-center gap-1">
      <div>
        <Image src={"/logo.png"} alt="company_logo" width={40} height={40} />
      </div>
      <div className="flex flex-col ">
        <span
          className={clsx(
            "text-epic_primary font-bold leading-3 text-xl lg:text-2xl",
            sv ? "text-epic_primary" : "text-white"
          )}
        >
          Epic Insurance
        </span>
      </div>
    </Link>
  );
};

export default Logo;
