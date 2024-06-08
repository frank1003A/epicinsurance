import Image from "next/image";
import Section from "../Section";

const About = () => {
  return (
    <Section id="about" className="py-24 relative">
      <span className="absolute inset-0 mx-auto my-auto w-40 h-40 blur-3xl opacity-25 bg-epic_secondary"></span>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <Image src={"/abs.png"} alt="about us image" width={400} height={400} />
      </div>
      <div className="flex flex-col items-start justify-start gap-8 mt-8 lg:mt-0 w-full lg:w-[40%]">
        <h1 className="text-[2rem] text-epic_primary lg:text-4xl capitalize font-semibold ">
          About <span className="text-epic_secondary">epic</span>
        </h1>
        <Image
          className="absolute left-52 lg:left-[55rem] lg:top-20"
          src={"/hero_ab_1.png"}
          alt="abstract_1"
          height={40}
          width={40}
        />

        <p className="text-sm ">
          At Epic Insurance Brokers Limited, we are committed to bridging the
          gap between your earnings and financial security. Based in the
          bustling financial hubs of Nigeria—Abuja, Lagos, Port Harcourt, and
          other key locations—we operate amidst the greatest concentration of
          insurance expertise in Africa. Our clients rely on our profound
          knowledge to secure the most comprehensive and imaginative insurance
          protection available.
        </p>

        <span className="text-base text-epic_primary font-bold">
          Discover the epic difference with us—where your financial security
          meets unmatched expertise.
        </span>
      </div>
    </Section>
  );
};

export default About;
