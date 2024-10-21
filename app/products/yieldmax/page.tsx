"use client";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <section>
      <header className="relative flex bg-[url('/assets/images/yieldmaxHero.svg')] bg-cover bg-center bg-no-repeat w-screen h-[20vh] lg:h-[50vh]">
        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center items-center space-y-6 px-6 sm:px-10 lg:px-16 w-full">
          <h1 className="text-2xl md:text-4xl font-semibold text-white">
            Yieldmax
          </h1>
          <p className="text-lg text-white">
            Home &gt; &gt; Our Products &gt; &gt; Yieldmax
          </p>
        </div>
      </header>
      <div className="flex justify-center">
        <div className="2xl:max-w-[1600px]">
          <section className="bg-[#E5E5E54D] py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative 2xl:rounded-[20px] mb-8 lg:mb-24 px-4 md:px-8 lg:px-0 ">
            <div className="w-full pr-4 md:pr-8 lg:pr-24 pl-4 md:pl-0">
              <h1 className="text-header font-semibold text-2xl md:text-3xl lg:text-4xl mt-12">
                The one-stop platform for getting your desired agricultural
                products.
              </h1>
              <p className="text-body pt-4 pb-5">
                YieldMax helps thousands of African smallholder farmers manage
                their farms better and increase their yield with ease by giving
                them data- backed agronomy advisory and operational insight.
              </p>

              <div className="flex items-center md:items-start justify-center md:justify-start">
                <Link
                  href="https://play.google.com/store/apps/details?id=kitovu.com.technology"
                  target="_blank"
                >
                  <img
                    src="/assets/images/googleplay.png"
                    className="w-[150px]"
                  />
                </Link>
              </div>
            </div>

            <div className="row-start-1 md:col-start-1 ml-0 md:ml-8 lg:ml-24 md:rounded-[20px] overflow-hidden">
              <Image
                src="/assets/images/products/yield1.png"
                alt="field image"
                width={500}
                height={500}
              />
            </div>
          </section>
          <section className=" py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative  2xl:rounded-[20px] px-4 md:px-8 lg:px-0 ">
            <div className="w-full pl-4 md:pl-8 lg:pl-24 pr-4 md:pr-0">
              <h1 className="text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-4xl mt-12">
                Your Farm in your pocket
              </h1>
              <p className="text-body pt-4 pb-5">
                &#8226; YieldMax allows farmers, monitor soil health, crop
                health, growth, weather etc. through an easy-to-use mobile app.{" "}
                <br />
                &#8226; YieldMax offers real-time monitoring of your crops, this
                feature allows you to track vital aspects of your farm's health,
                including soil moisture levels, crop growth stages, and overall
                crop health. By having access to this data at your fingertips,
                you can make informed decisions quickly, preventing potential
                issues before they escalate.
              </p>
            </div>

            <div className="row-start-1 md:col-start-2 mr-0 md:mr-8 lg:mr-24 md:rounded-[20px] overflow-hidden">
              <Image
                src="/assets/images/products/yield6.svg"
                alt="farmer image"
                width={500}
                height={500}
              />
            </div>
          </section>
          <section className="bg-[#E5E5E54D] py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative  2xl:rounded-[20px] px-4 md:px-8 lg:px-0 ">
            <div className="w-full pr-4 md:pr-8 lg:pr-24 pl-4 md:pl-0">
              <h1 className="text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-4xl  mt-10">
                Soil Composition Analysis
              </h1>
              <p className="text-body pt-4 pb-5">
                Leveraging advanced satellite technology, YieldMax provides
                detailed soil composition analysis. This feature delivers
                precise data on the nutrient content, pH levels, and overall
                health of your soil. YieldMax translates these insights into
                actionable recommendations
              </p>
            </div>

            <div className="row-start-1 md:col-start-1 ml-0 md:ml-8 lg:ml-24 md:rounded-[20px] overflow-hidden">
              <Image
                src="/assets/images/products/yield7.svg"
                alt="yield image"
                width={500}
                height={500}
              />
            </div>
          </section>
          <section className=" py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative px-4 md:px-8 lg:px-0">
            <div className="w-full pl-4 md:pl-8 lg:pl-24 pr-4 md:pr-0 ">
              <h1 className="text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-4xl mt-2">
                Fertilizer Optimization
              </h1>
              <p className="text-body pt-4 pb-5">
                YieldMax’s fertilizer optimization tool recommends the exact
                amount of fertilizer needed for your crops, based on real-time
                data and soil analysis. This feature helps you avoid over or
                under-application of fertilizers.
              </p>
            </div>

            <div className="row-start-1 md:col-start-2 mr-0 md:mr-8 lg:mr-24  relative">
              <div className="w-full md:rounded-[20px] overflow-hidden">
                <Image
                  src="/assets/images/products/yield4.png"
                  alt="comboTrader image"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </section>
          <section className="bg-[#E5E5E54D] py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative  2xl:rounded-[20px] px-4 md:px-8 lg:px-0 ">
            <div className="w-full pr-4 md:pr-8 lg:pr-24 pl-4 md:pl-0">
              <h1 className="text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-4xl  mt-10">
                Works Offline
              </h1>
              <p className="text-body pt-4 pb-5">
                YieldMax allows data to be captured offline, updating the data
                at locations with internet access.
              </p>
              <div className="flex items-center md:items-start justify-center md:justify-start">
                <Link
                  href="https://play.google.com/store/apps/details?id=kitovu.com.technology"
                  target="_blank"
                >
                  <img
                    src="/assets/images/googleplay.png"
                    className="w-[150px]"
                  />
                </Link>
              </div>
            </div>

            <div className="row-start-1 md:col-start-1 ml-0 md:ml-8 lg:ml-24 md:rounded-[20px] overflow-hidden">
              <Image
                src="/assets/images/products/yield5.png"
                alt="yield image"
                width={500}
                height={500}
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default page;
