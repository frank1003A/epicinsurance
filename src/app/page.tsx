"use client";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import ScrollToTop from "react-scroll-to-top";
import Section from "./components/Section";
import Button from "./components/button/button";
import Nav from "./components/nav/Nav";
import About from "./components/pages_ui/About";
import Hero from "./components/pages_ui/Hero";
import ServiceContent from "./components/services/content";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav />
      {/** Hero */}
      <Hero />

      <About />

      <ServiceContent />

      {/** */}
      <Section id="clientele" className="h-fit py-20 justify-center gap-4">
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
                  <li
                    className="flex items-center gap-3 text-sm"
                    key={solutions}
                  >
                    <CheckCircle2 className="fill-yellow-200 text-epic_primary" />{" "}
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
          <h1 className="text-[1.6rem] lg:text-4xl font-semibold leading-10">
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
          <div className="p-3 flex items-center justify-center border bg-gray-100 rounded-md">
            <Image
              height={340}
              width={350}
              className=" rounded-xl mr-10 max-h-96"
              src="https://avatar.iran.liara.run/public/57"
              alt="co-founder and MD of Roze"
            />
          </div>
          <div className="lg:absolute lg:-right-80 w-full lg:max-w-[400px] self-center  px-8 py-10 bg-white shadow-xl flex flex-col gap-3 rounded-md">
            <h3 className="font-medium text-epic_primary">
              Founder of Epic Insurance
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
          <h2 className="text-[2rem] lg:text-4xl font-bold text-epic_primary mb-9 w-[80%] text-center">
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
        color="#ffffff"
        style={{
          backgroundColor: "#582849",
        }}
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
