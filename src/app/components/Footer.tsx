import { Facebook, Github, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-t-[#eee] items-center justify-center gap-3 flex flex-col lg:flex-row py-8 px-epic_page_mob lg:px-epic_page_desk text-sm text-[#a4a4a4]">
      <Link href={"/"} className="flex items-center justify-center gap-1">
        <div>
          <Image src={"/logo.png"} alt="company_logo" width={40} height={40} />
        </div>
        <div className="flex flex-col ">
          <span
            className={
              "text-epic_primary font-bold leading-3 text-xl lg:text-2xl"
            }
          >
            Epic Insurance
          </span>
        </div>
      </Link>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:ml-auto gap-3  capitalize">
        <span>publishers terms</span>
        <span>terms and services</span>
        <span>privacy policy</span>
      </div>
      <div className="mt-5 lg:mt-0 lg:ml-auto flex items-center justify-center gap-2">
        <Link href={"/"}>
          <Facebook />
        </Link>
        <Link href={"/"}>
          <Instagram />
        </Link>{" "}
        <Link href={"/"}>
          <Github />{" "}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
