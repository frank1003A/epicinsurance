"use client";
import { Section } from "@/app/page";
import Image from "next/image";
import Nav from "../nav/Nav";

const LandingPage = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav />
      {/** Hero */}
      <Section className="relative items-center justify-between bg-custom-gradient-to-b lg:bg-custom-gradient">
        <span className="absolute right-0 top-0 w-20 h-20 blur-3xl bg-epic_btn"></span>
        <span className="absolute left-0 bottom-0 w-20 h-20 blur-3xl bg-epic_btn"></span>
        <span className="absolute inset-0 mx-auto my-auto w-40 h-40 blur-3xl opacity-25 bg-epic_btn"></span>
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
          <h1 className="text-[2rem] lg:text-5xl font-semibold text-epic_primary">
            build personal finance from work life
          </h1>
          <p className="text-sm text-epic_primary ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            quas! Nihil dignissimos consequatur id voluptas nam, itaque odio
            molestias sed doloremque! Vero ducimus dicta a ab, amet placeat iste
            aperiam?
          </p>
          <span className="text-base text-epic_primary font-bold">
            cruncy supports teams across all life stages
          </span>

          <div className="flex gap-4">
            <button className="btn bg-epic_btn text-white rounded-md">
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
            <hr className="w-[80%] my-2 border-t border-t-epic_btn/30 border-dashed after:content-['*'] after:ml-0.5 after:text-red-500"></hr>
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
          className="rounded-md border-2 border-epic_btn hidden lg:block"
          src={"/hero.jpg"}
          alt="hero image"
          height={600}
          width={400}
        />
      </Section>
      {/** */}
      <Section className="h-fit py-20 justify-center gap-4">
        <div className="flex flex-col gap-10 items-center">
          <h1 className="capitalize font-bold">
            Our experience with top companies
          </h1>
          <div className="flex flex-col lg:flex-row gap-5">
            {["adidas", "BuzzFeed", "Walmart", "chase", "Allianz"].map(
              (brand) => {
                return (
                  <div
                    key={brand}
                    className="w-full text-lg font-bold text-stone-600/25 transition-all rounded-md shadow-2xl p-4 px-10 hover:scale-110 hover:border hover:border-epic_btn"
                  >
                    {brand}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </Section>
    </main>
  );
};

export default LandingPage;
