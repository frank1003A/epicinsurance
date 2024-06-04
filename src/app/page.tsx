import clsx from "clsx";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import Nav from "./components/nav/Nav";

export const Section = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "w-full flex flex-col lg:flex-row bg-white px-epic_page_mob lg:px-epic_page_desk",
        className
      )}
    >
      {children}
    </div>
  );
};

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
        <div className="relative flex flex-col capitalize mt-32 lg:mt-0 w-full lg:w-1/2 gap-8">
          <h1 className="bg-gradient-to-r from-[60%] from-epic_primary to-epic_secondary lg:to-epic_primary to-[30%] text-[2rem] bg-clip-text lg:text-5xl font-semibold text-transparent">
            build personal finance from work life
          </h1>
          <p className="text-sm bg-gradient-to-r from-[60%] from-epic_primary to-epic_secondary lg:to-epic_primary to-[30%] text-transparent bg-clip-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            quas! Nihil dignissimos consequatur id voluptas nam, itaque odio
            molestias sed doloremque! Vero ducimus dicta a ab, amet placeat iste
            aperiam?
          </p>
          <span className="text-base text-epic_primary font-bold">
            cruncy supports teams across all life stages
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
      {/** */}
      <Section className="h-fit py-20 justify-center gap-4">
        <div className="flex flex-col gap-10 items-center">
          <h1 className="capitalize font-bold text-epic_primary">
            Our experience with top companies
          </h1>
          <div className="grid grid-cols-2 lg:flex lg:flex-row gap-5">
            {["adidas", "BuzzFeed", "Walmart", "chase", "Allianz"].map(
              (brand) => {
                return (
                  <div
                    key={brand}
                    className="w-full text-lg font-bold text-stone-600/25 transition-all rounded-md shadow-2xl p-4 px-10 hover:scale-110 hover:border hover:border-epic_secondary"
                  >
                    {brand}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </Section>
      {/** */}
      <Section className="relative items-center py-8">
        <span className="absolute inset-0 mx-auto my-auto w-40 h-40 blur-3xl opacity-25 bg-epic_secondary"></span>
        <div className="text-epic_primary flex flex-col gap-8 w-full lg:w-1/2 px-0 lg:px-10">
          <h1 className="text-[2rem] lg:text-4xl font-semibold ">
            Epic gives you a satisfied financial wellness
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            pariatur suscipit perferendis numquam reprehenderit voluptates
            soluta, eveniet repellendus libero, accusamus magnam rem voluptatum
            assumenda laborum quam quibusdam in unde eligendi?
          </p>

          <div className="flex flex-col text-epic_primary">
            <span className="font-bold text-base mb-4">
              But Epic is a one step Solution to all
            </span>
            <ul className="grid grid-cols-2 gap-y-3 ">
              {[1, 2, 3, 4, 5, 6].map((test) => {
                return (
                  <li className="flex items-center gap-3" key={test}>
                    <CheckCircle2 className="fill-yellow-200 text-epic_secondary" />{" "}
                    Onboarding
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
      <Section className="h-[500px] py-8 items-center">
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
        </div>
        <div className="w-full lg:w-1/2 px-0 lg:px-10 flex flex-col gap-8 items-start justify-start">
          <h1 className="text-[2rem] lg:text-4xl font-semibold ">
            Epic gives you a satisfied financial wellness
          </h1>
          <p className="text-sm  text-epic_primary ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            quas! Nihil dignissimos consequatur id voluptas nam, itaque odio
            molestias sed doloremque! Vero ducimus dicta a ab, amet placeat iste
            aperiam?
          </p>
          <span className="text-base text-epic_primary font-bold">
            cruncy supports teams across all life stages
          </span>

          <button className="btn btn-outline rounded-md border border-epic_secondary text-epic_secondary">
            Contact us
          </button>
        </div>
      </Section>
      <Section className="p-8">
        <div className="w-full h-full flex flex-col  items-start p-8 lg:p-20 bg-epic_primary rounded-lg">
          <div className="relative h-full flex flex-col items-start gap-8 ">
            <h1 className="font-bold text-[2rem] text-epic_variant w-96">
              Financial assets built tomorow, not yesterday
            </h1>
            <button className="border-none rounded-md btn bg-epic_secondary text-white">
              learn why - Epic
            </button>
            <ul className="w-full flex flex-col lg:flex-row gap-5 mt-12">
              <li>
                <div>
                  <h1 className="text-lg font-bold text-epic_variant">
                    Full-time financial advisors
                  </h1>
                  <div className="h-1 w-1/3 my-4 bg-epic_secondary  "></div>
                  <p className="text-epic_variant font-normal  text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure voluptatem fuga a deleniti placeat porro, eos facilis
                    aliquam odit, ad dolore ipsum nulla temporibus optio
                    molestias. Esse itaque obcaecati unde!
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h1 className="text-lg font-bold text-epic_variant">
                    Full-time financial advisors
                  </h1>
                  <div className="h-1 w-1/3 my-4 bg-epic_secondary  "></div>
                  <p className="text-epic_variant font-normal  text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure voluptatem fuga a deleniti placeat porro, eos facilis
                    aliquam odit, ad dolore ipsum nulla temporibus optio
                    molestias. Esse itaque obcaecati unde!
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h1 className="text-lg font-bold text-epic_variant">
                    Full-time financial advisors
                  </h1>
                  <div className="h-1 w-1/3 my-4 bg-epic_secondary  "></div>
                  <p className="text-epic_variant font-normal  text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure voluptatem fuga a deleniti placeat porro, eos facilis
                    aliquam odit, ad dolore ipsum nulla temporibus optio
                    molestias. Esse itaque obcaecati unde!
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}
