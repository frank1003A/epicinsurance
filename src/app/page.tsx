"use client";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import ScrollToTop from "react-scroll-to-top";
import Section from "./components/Section";
import Button from "./components/button/button";
import Nav from "./components/nav/Nav";
import ServiceContent from "./components/services/content";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav />
      {/** Hero */}
      <Section className="h-screen relative items-center justify-between bg-custom-gradient-to-b lg:bg-custom-gradient">
        <span className="absolute right-0 top-0 w-20 h-20 blur-3xl bg-epic_secondary"></span>
        <span className="absolute left-0 bottom-0 w-20 h-20 blur-3xl bg-epic_secondary"></span>
        <span className="absolute inset-0 mx-auto my-auto w-40 h-40 blur-3xl opacity-25 bg-epic_secondary"></span>
        <div className="absolute rounded-full shadow-2xl h-20 w-20 flex items-center justify-center z-50 p-4 -bottom-10 left-[70%]">
          <Image src={"/logo.png"} alt="company_logo" width={40} height={40} />
        </div>
        <Image
          className="absolute right-96 top-20"
          src={"/hero_ab_1.png"}
          alt="abstract_1"
          height={40}
          width={40}
        />

        {/** Main Content */}
        <div className="relative flex flex-col mt-32 lg:mt-0 w-full lg:w-1/2 gap-8">
          <h1 className="text-epic_primary text-[2rem] bg-clip-text lg:text-5xl font-bold ">
            Secure your future with confidence
          </h1>
          <p className="text-sm bg-gradient-to-r from-[60%] from-epic_primary to-epic_secondary lg:to-epic_primary to-[30%] text-transparent bg-clip-text">
            At Epic Insurance Brokers, we provide peace of mind through tailored
            insurance solutions. Our expert team ensures your future is secure
            and your assets are protected. Trust us to safeguard what matters
            most.
          </p>
          <span className="text-base text-epic_primary font-bold">
            Epic supports teams across all life stages
          </span>

          <div className="flex gap-4">
            <button className="btn bg-epic_secondary text-white rounded-md">
              get started
            </button>
            <button className="btn btn-outline  outline-epic_primary rounded-md">
              learn more
            </button>
          </div>
          <div className="relative lg:absolute lg:-bottom-[30%] text-[12px]">
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

      <Section className="py-20 relative">
        <span className="absolute inset-0 mx-auto my-auto w-40 h-40 blur-3xl opacity-25 bg-epic_secondary"></span>
        <Image
          className="absolute right-96 top-20"
          src={"/hero_ab_1.png"}
          alt="abstract_1"
          height={40}
          width={40}
        />
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <Image
            src={"/abs.png"}
            alt="about us image"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-8 w-full mt-8 lg:mt-0 lg:w-1/2 px-4">
          <h1 className="text-[2rem] text-epic_primary lg:text-4xl capitalize font-semibold ">
            About <span className="text-epic_secondary">epic</span>
          </h1>

          <p className="text-sm ">
            At Epic Insurance Brokers Limited, we are committed to bridging the
            gap between your earnings and financial security. Based in the
            bustling financial hubs of Nigeria—Abuja, Lagos, Port Harcourt, and
            other key locations—we operate amidst the greatest concentration of
            insurance expertise in Africa. Our clients rely on our profound
            knowledge to secure the most comprehensive and imaginative insurance
            protection available.
          </p>

          <p className="text-sm ">
            We cater to a diverse clientele, including industrialists,
            merchants, entrepreneurs, and government parastatals, ensuring their
            financial assets are well-protected. Our dedicated team excels in
            finding the best ways for our clients to achieve their goals,
            providing robust protection against financial risks. With a
            reputation built on absolute integrity, high standards of business
            conduct, and skilled professional service, we are driven by
            innovation and a deep commitment to our clients peace of mind.
          </p>

          <span className="text-base text-epic_primary font-bold">
            Discover the epic difference with us—where your financial security
            meets unmatched expertise.
          </span>
        </div>
      </Section>

      <ServiceContent />

      {/** */}
      <Section className="h-fit py-20 justify-center gap-4">
        <div className="flex flex-col gap-10 items-center">
          <h1 className="capitalize font-bold text-[2rem] text-center lg:text-4xl  text-epic_primary">
            Our clientele includes
          </h1>
          <div className="grid grid-cols-1 lg:flex lg:flex-row gap-5">
            {[
              {
                n: "Diverse Industries",
                p: `We proudly serve industrialists, merchants, and entrepreneurs across various economic sectors.`,
              },
              {
                n: "Government Parastatals",
                p: `Our expertise extends to providing specialized insurance solutions for government agencies and parastatals.`,
              },
              {
                n: "Business Experts",
                p: `Our clients are leaders in their fields who rely on our insurance expertise to secure their assets and achieve their financial objectives.`,
              },
            ].map((type, index) => {
              return (
                <div
                  key={type.n}
                  className="relative w-full flex flex-col gap-5 text-center items-center justify-center transition-all bg-none p-4 px-10 "
                >
                  <span className="w-8 h-8 top-0 right-0 flex items-center text-white bg-epic_secondary justify-center rounded-md">
                    {index + 1}
                  </span>
                  <h1 className=" text-epic_primary font-bold">{type.n}</h1>
                  <p className="text-sm text-epic_primary">{type.p}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
      {/** */}
      <Section className="relative items-center py-20 bg-stone-50">
        <span className="absolute inset-0 mx-auto my-auto w-40 h-40 blur-3xl opacity-25 bg-epic_secondary"></span>
        <div className="text-epic_primary flex flex-col gap-8 w-full lg:w-1/2 px-0 lg:px-10">
          <h1 className="text-[2rem] lg:text-4xl font-semibold ">
            <span className="text-epic_secondary font-bold">Epic</span> gives
            you a satisfied financial wellness
          </h1>
          <p className="text-sm">
            EPIC is based at the centre of financial activity in modern Nigeria
            Abuja, Lagos, Port Harcourt and other parts of Nigeria in the midst
            of the greatest concentration of Insurance expertise in Africa.
          </p>

          <div className="flex flex-col text-epic_primary">
            <span className="font-bold text-base mb-4">
              But Epic is a one step Solution to all
            </span>
            <ul className="grid grid-cols-2 gap-y-3 ">
              {[
                "Onboarding",
                "Update letter",
                "Equity Grants",
                "Enrollment",
                "Offboarding",
                "Secured deposit",
              ].map((solutions) => {
                return (
                  <li className="flex items-center gap-3" key={solutions}>
                    <CheckCircle2 className="fill-yellow-200 text-epic_secondary" />{" "}
                    {solutions}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex mt-10 lg:mt-0 items-center justify-start lg:justify-center w-full lg:w-1/2">
          <div className="relative h-[400px] w-[200px] rounded-xl bg-epic_primary/70">
            <div className="absolute left-8 top-8 w-[300px] shadow-2xl bg-white rounded-md h-[150px]"></div>

            <div className="absolute left-8 bottom-8 w-[300px] shadow-2xl bg-white rounded-md h-[150px]"></div>
          </div>
        </div>
      </Section>
      <Section className="h-fit lg:h-[500px] py-8 items-center">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          {/**<div className="relative">
            <div className="absolute bottom-0 h-60 border-l-2 border-l-epic_primary border-dashed "></div>
            <div className="absolute top-0 h-60 border-l-2 border-l-epic_primary border-dashed "></div>
            <div className="absolute right-0 h-0 w-60 border-t-2 border-t-epic_primary border-dashed "></div>
            <div className="absolute left-0 h-0 w-60 border-t-2 border-t-epic_primary border-dashed "></div>
            <div className="absolute inset-0 mx-auto my-auto bg-white h-24 w-24 shadow-2xl rounded-full p-5">
              <DollarSign />
            </div>
          </div> */}
          <Image src={"/sm.png"} alt="image" width={400} height={400} />
        </div>
        <div className="w-full lg:w-1/2 px-0 lg:px-10 flex flex-col gap-8 items-start justify-start">
          <h1 className="text-[2rem] lg:text-4xl font-semibold leading-10">
            We make the connection between your total earning and financial
            assets
          </h1>
          <p className="text-sm  text-epic_primary ">
            At Epic Insurance Brokers, we bridge the gap between your earnings
            and financial security with tailored, comprehensive insurance
            solutions. Our expertise ensures that your assets are protected,
            allowing you to achieve your objectives with confidence. Trust us to
            deliver absolute integrity and skilled professional service.
          </p>
          <span className="text-base text-epic_primary font-bold">
            So why wait let&apos;s talk now about your wellness
          </span>

          <Button className="btn-outline">Contact us</Button>
        </div>
      </Section>
      <Section className="p-8">
        <div className="w-full h-full flex flex-col  items-start p-8 lg:p-20 bg-epic_primary rounded-lg">
          <div className="relative w-full h-full flex flex-col items-start gap-8 ">
            <h1 className="font-bold text-3xl lg:text-[2rem] text-epic_variant w-full lg:w-96">
              Expertise and Approach
            </h1>
            <button className="border-none rounded-md btn bg-epic_secondary text-white">
              learn why - Epic
            </button>
            <ul className="w-full flex flex-col lg:flex-row gap-5 mt-8">
              <li>
                <div>
                  <h1 className="text-lg font-bold text-epic_variant">
                    Tailored Solutions
                  </h1>
                  <div className="h-1 w-1/3 my-4 bg-epic_secondary  "></div>
                  <p className="text-epic_variant font-normal  text-base">
                    We customize insurance plans to meet the unique needs of
                    each client, ensuring optimal protection and satisfaction.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h1 className="text-lg font-bold text-epic_variant">
                    Industry Knowledge
                  </h1>
                  <div className="h-1 w-1/3 my-4 bg-epic_secondary  "></div>
                  <p className="text-epic_variant font-normal  text-base">
                    Our team leverages extensive experience and deep industry
                    insights to provide innovative and effective insurance
                    solutions.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h1 className="text-lg font-bold text-epic_variant">
                    Client-Centric Focus
                  </h1>
                  <div className="h-1 w-1/3 my-4 bg-epic_secondary  "></div>
                  <p className="text-epic_variant font-normal  text-base">
                    We prioritize our clients&apos; goals, delivering
                    exceptional service and fostering long-term relationships
                    built on trust and integrity.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      {/* ---From here--- */}
      <section className="py-16 px-epic_page_mob lg:px-epic_page_desk flex flex-col items-center">
        <h2 className="mx-auto text-4xl font-semibold mb-10">
          Word from our CEO
        </h2>

        <div className=" grid w-fit h-fit items-center relative mx-auto">
          <div className="w-fit h-fit">
            <Image
              height={340}
              width={450}
              className=" bg-gray-100 rounded-xl mr-10 max-h-96"
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              alt="co-founder and MD of Roze"
            />
          </div>
          <div className="lg:absolute lg:-right-64 w-full lg:max-w-[400px] self-center  px-8 py-10 bg-white shadow-xl flex flex-col gap-3 rounded-md">
            <h3 className="font-medium text-epic_primary">
              Co founder and MD of Roze
            </h3>

            <p>
              &quot;Cruncy is a piece of the wellness puzzle that was missing
              and we are so happy to provide to our structure.&quot;
            </p>

            <a className="text-epic_secondary">Read their full story</a>
          </div>
        </div>

        {/**<div className="flex pt-16 w-full gap-4 justify-between">
          <button
            type="button"
            className="px-4 py-2 mr-auto rounded-full bg-epic_secondary w-fit text-white font-bold"
          >
            &larr;
          </button>

          <div className="flex gap-5 grid-cols-5">
            <a href="#item1" className="h-12 w-12 bg-gray-200 rounded-full"></a>
            <a href="#item2" className="h-12 w-12 bg-gray-200 rounded-full"></a>
            <a href="#item3" className="h-12 w-12 bg-gray-200 rounded-full"></a>
          </div>

          <button
            type="button"
            className="px-4 py-2 ml-auto rounded-full bg-epic_secondary w-fit text-white font-bold"
          >
            &rarr;
          </button>
        </div> */}
      </section>

      <Section className="bg-slate-50 py-8">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-4xl font-semibold text-epic_primary mb-9 w-[80%] text-center">
            So why wait for a better future, start your future planning from now
          </h2>

          <Image
            className="absolute right-96 top-20"
            src={"/hero_ab_1.png"}
            alt="abstract_1"
            height={40}
            width={40}
          />

          <button
            type="button"
            className="px-4 py-2 rounded-md bg-epic_secondary w-fit text-white"
          >
            Contact Us
          </button>
        </div>
      </Section>
      <ScrollToTop
        smooth
        color="#a4a4a4"
        className="flex items-center justify-center text-white bg-epic_secondary"
      />
    </main>
  );
}

/**{[
              "Diverse Industries",
              "Government Parastatals",
              "Business Experts",
            ].map((brand) => {
              return (
                <div
                  key={brand}
                  className="w-full text-lg font-bold  transition-all rounded-md shadow-2xl p-4 px-10 text-stone-500"
                >
                  {brand}
                </div>
              );
            })} */

/** {[
              "Integrity",
              "Excellence",
              "Empathy",
              "Humility",
              "Discipline",
            ].map((brand) => {
              return (
                <div
                  key={brand}
                  className="w-full text-lg font-bold  transition-all rounded-md shadow-md p-4 px-10 text-epic_secondary border border-epic_secondary"
                >
                  {brand}
                </div>
              );
            })} */
