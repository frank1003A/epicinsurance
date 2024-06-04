import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center justify-center gap-1">
      <div>
        <Image src={"/logo.png"} alt="company_logo" width={40} height={40} />
      </div>
      <div className="flex flex-col ">
        <span className="text-gray-700 font-bold leading-3">
          Epic Insurance
        </span>
      </div>
    </Link>
  );
};

export default Logo;
