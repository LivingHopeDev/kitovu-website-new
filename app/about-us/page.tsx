import React from "react";
import Agenda from "@components/About/Agenda";
import HowItWorks from "@components/About/HowItWorks";
import Team from "@components/About/Team";

const Page = () => {
  return (
    <section>
      <header className="relative flex bg-[url('/assets/images/aboutUs.svg')] bg-cover bg-center bg-no-repeat w-screen h-[20vh] lg:h-[50vh]">
        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center items-center space-y-6 px-6 sm:px-10 lg:px-16 w-full">
          <h1 className="text-2xl md:text-4xl font-semibold text-white">
            About Us
          </h1>
          <p className="text-lg text-white">Home &gt; &gt; About Us</p>
        </div>
      </header>
      <div className="">
        <Agenda />
        <HowItWorks />
        <Team />
      </div>
    </section>
  );
};

export default Page;
