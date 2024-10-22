"use client";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <section>
      <header className="relative flex bg-[url('/assets/images/eprocureHero.svg')] bg-cover bg-center bg-no-repeat w-screen h-[20vh] lg:h-[50vh]">
        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center items-center space-y-6 px-6 sm:px-10 lg:px-16 w-full">
          <h1 className="text-2xl md:text-4xl font-semibold text-white">
            eProcure
          </h1>
          <p className="text-lg text-white">
            Home &gt; &gt; Our Products &gt; &gt; eProcure
          </p>
        </div>
      </header>
      <div className="flex justify-center">
        <div className="2xl:max-w-[1600px]">
          <section className=" py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative  2xl:rounded-[20px] px-4 md:px-8 lg:px-0 ">
            <div className="w-full pl-4 md:pl-8 lg:pl-24 pr-4 md:pr-0">
              <h1 className="text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-4xl mt-12">
                The one-stop platform for getting all your desired agricultural
                products
              </h1>
              <p className="text-body pt-4 pb-5">
                eProcure enables the sourcing of superior quality agro-products
                and delivering them to thousands of processors, companies and
                exporters of agricultural products without any hassle. It is
                hitting the “best product purchase” jackpot without any stress
                at all.
              </p>
              <div className="flex items-center md:items-start justify-center md:justify-start">
                <Link href="/products/eprocure/form">
                  <button className="px-6 py-2.5 hover:bg-[#F58A07] text-[#F58A07] hover:text-white border border-[#F58A07] rounded-md font-medium md:font-semibold">
                    Purchase Commodities
                  </button>
                </Link>
              </div>
            </div>

            <div className="row-start-1 md:col-start-2 mr-0 md:mr-8 lg:mr-24 md:rounded-[20px] overflow-hidden">
              <Image
                src="/assets/images/products/eprocure1.png"
                alt="farmer image"
                width={500}
                height={500}
              />
            </div>
          </section>
          <section className="grid md:grid-rows-2 items-center relative justify-center  mb-8 lg:mb-24">
            <h3 className="text-center text-2xl font-semibold">
              WHY CHOOSE US?
            </h3>
          </section>

          <section className="bg-[#E5E5E54D] py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative  2xl:rounded-[20px] px-4 md:px-8 lg:px-0 ">
            <div className="w-full pr-4 md:pr-8 lg:pr-24 pl-4 md:pl-0">
              <h1 className="text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-4xl  mt-10">
                Commodities at best prices
              </h1>
              <p className="text-body pt-4 pb-5">
                Get the best agricultural products. Our data-first approach
                interprets your desired product specifications and helps you
                purchase your quality of choice from tge best farms around
                Nigeria. We save you time and stress.
              </p>
            </div>

            <div className="row-start-1 md:col-start-1 ml-0 md:ml-8 lg:ml-24 md:rounded-[20px] overflow-hidden">
              <div className="w-[95px] h-[95px] rounded-[20px] bg-[#F58A07] absolute top-[9rem] left-[3rem] mix-blend-multiply"></div>

              <Image
                src="/assets/images/products/eprocure3.png"
                alt="eprocure image"
                width={500}
                height={500}
              />
            </div>
          </section>
          <section className=" py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative px-4 md:px-8 lg:px-0">
            <div className="w-full pl-4 md:pl-8 lg:pl-24 pr-4 md:pr-0 ">
              <h1 className="text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-4xl mt-2">
                Timely Delivery
              </h1>
              <p className="text-body pt-4 pb-5">
                We use technology to determine the best vehicle for transporting
                your agricultural products anf we ensure it is delivered to you
                wherever and whenever you choose. It’s our way to ensure
                smarter, faster and more reliable delivery of your farm produce.
              </p>
            </div>

            <div className="row-start-1 md:col-start-2 mr-0 md:mr-8 lg:mr-24  relative">
              <div className="w-[95px] h-[95px] rounded-[20px] bg-[#F58A07] absolute top-[-2.5rem] right-[8rem] mix-blend-multiply"></div>

              <div className="w-full md:rounded-[20px] overflow-hidden">
                <Image
                  src="/assets/images/products/eprocure4.png"
                  alt="eprocure image"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </section>
          <section className="flex md:gap-10 items-stretch relative bg-[#F58A07] text-white max-h-[20rem]">
            <div className="w-1/2 h-auto">
              <Image
                src="/assets/images/products/yield5.png"
                alt="field image"
                width={800}
                height={500}
                className="w-full max-h-[20rem] object-cover"
              />
            </div>

            <div className="w-1/2 py-14 flex flex-col gap-5 items-center md:items-start justify-center">
              <h1 className="text-white text-2xl md:text-3xl lg:text-4xl text-left">
                Sourcing and delivery of agricultural products made easy with
                data-driven technology.
              </h1>
              <div className="flex items-center md:items-start justify-center md:justify-start">
                <Link href="/products/eprocure/form">
                  <button className="px-6 py-2.5 bg-transparent hover:bg-white hover:text-[#F58A07] text-white border border-white rounded-md font-medium md:font-semibold">
                    Purchase Commodities
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default page;
