import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Section from "../Section";

const Hero = () => {
  return (
    <Section className=" lg:bg-custom-gradient bg-hero-pattern bg-no-repeat bg-cover bg-blend-overlay  h-screen relative items-center justify-between">
      <div className="absolute inset-0 bg-epic_primary/90 lg:hidden"></div>
      <span className="absolute right-0 top-0 w-20 h-20 blur-3xl bg-epic_secondary"></span>
      <span className="absolute left-0 bottom-0 w-20 h-20 blur-3xl bg-epic_secondary"></span>
      <span className="absolute inset-0 mx-auto my-auto w-40 h-40 blur-3xl opacity-25 bg-epic_secondary"></span>

      <Image
        className="absolute right-96 top-20"
        src={"/hero_ab_1.png"}
        alt="abstract_1"
        height={40}
        width={40}
      />

      {/** Main Content */}
      <div className="relative z-20 flex flex-col mt-32 lg:mt-0 w-full lg:w-1/2 gap-8">
        <h1 className="text-white lg:text-epic_primary text-[2rem] bg-clip-text lg:text-5xl font-bold ">
          Secure your future with confidence
        </h1>
        <p className="text-sm text-white lg:text-epic_primary bg-gradient-to-r from-[60%] from-epic_primary to-epic_secondary lg:to-epic_primary to-[30%] text-transparent bg-clip-text">
          At Epic Insurance Brokers, we provide peace of mind through tailored
          insurance solutions. Our expert team ensures your future is secure and
          your assets are protected. Trust us to safeguard what matters most.
        </p>
        <span className="text-base text-white lg:text-epic_primary font-bold">
          Epic supports teams across all life stages
        </span>

        <div className="flex gap-4">
          <button className="btn px-8 bg-epic_secondary border-none text-white rounded-md">
            get started
          </button>
          <button className="btn btn-outline px-4 border text-white lg:text-epic_primary border-white  lg:border-epic_primary rounded-md">
            learn more
            <ArrowDown />
          </button>
        </div>
        <div className="relative lg:absolute lg:-bottom-[30%] text-[12px] text-white lg:text-inherit">
          <span className=" capitalize">
            &quot;Your Trusted Partner in Comprehensive Insurance
            Solutions&quot;
          </span>
          <hr className="relative w-full my-2 border-t border-t-epic_secondary/30 border-dashed after:content-['*'] after:absolute after:-right-10 after:z-50  after:w-8 after:h-8 after:text-epic_secondary"></hr>
          <div className="flex items-center justify-start gap-2">
            <div className="avatar">
              <Image
                className="rounded-full"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="avatar"
                width={30}
                height={30}
              />
            </div>
            <span className="font-bold">
              Kramer Feld,{" "}
              <span
                className="font-normal
          "
              >
                Designer at DesigTale
              </span>
            </span>
          </div>
        </div>
      </div>

      <Image
        className="rounded-md border-2 border-epic_secondary hidden lg:block"
        src={"/hero.jpg"}
        alt="hero image"
        height={600}
        width={400}
      />
    </Section>
  );
};

export default Hero;
