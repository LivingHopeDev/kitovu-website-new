"use client";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section>
      <header className="relative flex bg-[url('/assets/images/productHero.svg')] bg-cover bg-center bg-no-repeat w-screen h-[20vh] lg:h-[50vh]">
        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center items-center space-y-6 px-6 sm:px-10 lg:px-16 w-full">
          <h1 className="text-2xl md:text-4xl font-semibold text-white">
            Our Products
          </h1>
          <p className="text-lg text-white">Home &gt; &gt; Our Products</p>
        </div>
      </header>
      <div className="flex justify-center space-y-[4rem]">
        <div className="2xl:max-w-[1600px]">
          <section className="px-4 md:px-8 lg:px-24 pt-4 md:pt-16 ">
            <div className="text-">
              <h1 className="text-header font-semibold text-2xl md:text-4xl">
                Our Products
              </h1>
              <p className="text-md max-w-[700px] mt-4 mb-10 text-base md:text-lg">
                We offer different solutions and services tailored to solve the
                food problem in Africa. From pre-planting to post-harvest. our
                products ensure smallholder farmers have precise decision
                making, increased yield with minimal loss and maximal profits.
                Our product also cater to individuals, investors, financial and
                non-financial organizations.
              </p>
            </div>
          </section>
          {/* YieldMax */}
          <section className="bg-[#E5E5E54D] py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative 2xl:rounded-[20px] mb-8 lg:mb-22 px-4 md:px-8 lg:px-0 ">
            <div className="w-full pr-4 md:pr-8 lg:pr-24 pl-4 md:pl-0">
              <div className="text-[var(--orange-color)] font-semibold text-xl leading-3 py-2 px-3.5  rounded-md bg-[var(--light-orange-color)] my-5 md:my-0 md:mb-20 w-fit border-[var(--orange-color)] border relative md:absolute md:top-16 md:right-8 lg:right-24 md:text-2xl lg:text-3xl">
                YieldMax
              </div>
              <h1 className="text-header font-semibold text-2xl md:text-3xl lg:text-4xl mt-12 md:mt-[5rem]">
                Go digital and increase your yield by taking advantage of our
                data-based platform.
              </h1>
              <p className="text-body pt-4 pb-5">
                We have different packages for smallholder farmers that will
                help them optimize their production decisions, increase their
                yield and maximize their profits. Processors and Exporters can
                source their products swiftly and at ease. we also got
                individuals who wants to deal in agricultural products covered.
              </p>
              <Link href="/products/yieldmax">
                <button className="text-[var(--orange-color)] flex  items-center  gap-2 mt-5">
                  <h1 className="text-[var(--orange-color)] ">Read more</h1>
                  <FaArrowRightLong className="text-[var(--orange-color)] font-semibold " />
                </button>
              </Link>
            </div>

            <div className="row-start-1 md:col-start-1 ml-0 md:ml-8 lg:ml-24 md:rounded-[20px] overflow-hidden">
              <Image
                src="/assets/images/products/yield-laptop.png"
                alt="yieldMax image"
                width={500}
                height={500}
              />
            </div>
          </section>
          {/* StorageX */}
          <section className=" py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative  2xl:rounded-[20px] px-4 md:px-8 lg:px-0 ">
            <div className="w-full pl-4 md:pl-8 lg:pl-24 pr-4 md:pr-0">
              <div className="text-[var(--orange-color)] text-xl font-semibold leading-3 py-2 px-3.5 bg-white rounded-md bg-[var(--light-orange-color)] my-5 md:my-0 md:mb-0 w-fit border-[var(--orange-color)] border relative md:absolute md:top-16 md:text-2xl lg:text-3xl">
                StorageX
              </div>

              <h1 className="text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-4xl mt-12 md:mt-[5rem]">
                Avoid losses and cut costs on the storage of your agricultural
                products.
              </h1>
              <p className="text-body pt-4 pb-5">
                Take advantage of our high- tech storage facilities nationwide
                to extend the shelf life of your product and convert them to
                collateral assets to get loans ro expand your farming business.
              </p>
              <Link href="https://storagex.com.ng/" target="_blank">
                <button className="text-[var(--orange-color)] flex  items-center  gap-2 mt-5">
                  <h1 className="text-[var(--orange-color)] ">Read more</h1>
                  <FaArrowRightLong className="text-[var(--orange-color)] font-semibold " />
                </button>
              </Link>
            </div>

            <div className="row-start-1 md:col-start-2 mr-0 md:mr-8 lg:mr-24 md:rounded-[20px] overflow-hidden">
              <Image
                src="/assets/images/products/storageX.png"
                alt="storageX image"
                width={500}
                height={500}
              />
            </div>
          </section>
          {/* Eprocure */}
          <section className="bg-[#E5E5E54D] py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative  2xl:rounded-[20px] px-4 md:px-8 lg:px-0 ">
            <div className="w-full pr-4 md:pr-8 lg:pr-24 pl-4 md:pl-0">
              <div className="text-[var(--orange-color)] font-semibold text-xl leading-3 py-2 px-3.5 bg-white rounded-md bg-[var(--light-orange-color)] my-5 md:my-0 md:mb-20 w-fit border-[var(--orange-color)] border relative md:absolute md:top-16 md:right-8 lg:right-24 md:text-2xl lg:text-3xl">
                eProcure
              </div>

              <h1 className="text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-4xl mt-10 md:mt-[5rem]">
                You never have to worry about stressing to source for
                agricultural produce.
              </h1>
              <p className="text-body pt-4 pb-5">
                You never have to worry about stressing to source for
                agricultural produce, looking for reliable logistics, or getting
                disappointed by suppliers ever again. With our advanced product
                quality ranking algorithm, we help take the edge off. We will
                source the products for you, and deliver them to you wherever
                and whenever you want them.
              </p>

              <Link href="/products/eprocure">
                <button className="text-[var(--orange-color)] flex  items-center  gap-2 mt-5">
                  <h1 className="text-[var(--orange-color)] ">Read more</h1>
                  <FaArrowRightLong className="text-[var(--orange-color)] font-semibold " />
                </button>
              </Link>
            </div>

            <div className="row-start-1 md:col-start-1 ml-0 md:ml-8 lg:ml-24 md:rounded-[20px] overflow-hidden">
              <Image
                src="/assets/images/products/eprocure.png"
                alt="eprocure image"
                width={500}
                height={500}
              />
            </div>
          </section>
          {/* ComboTrader */}
          <section className=" py-4 md:py-16 grid grid-cols-1 items-center relative px-4 mt-10 md:grid-cols-2 md:gap-10  md:px-8 lg:px-0">
            <div className="w-full pl-4 md:pl-8 lg:pl-24 pr-4 md:pr-0 ">
              <div className="text-[var(--orange-color)] font-semibold text-xl leading-3 py-2 px-3.5 bg-white rounded-md bg-[var(--light-orange-color)] my-5 md:my-0 md:mb-20 w-fit border-[var(--orange-color)] border relative md:absolute md:top-8 md:text-2xl lg:text-3xl ">
                ComboTrader
              </div>

              <h1 className="text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-4xl mt-2 md:mt-[5rem]">
                Trade agricultural products on your own terms and conditions.
              </h1>
              <p className="text-body pt-4 pb-5">
                Connect with the right suppliers and earn an income by buying
                and selling farm produce. We will store your purchase properly
                for you if needed, and sell it whenever you choose.
              </p>
              <Link href="https://combotrader.com.ng/" target="_blank">
                <button className="text-[var(--orange-color)] flex  items-center  gap-2 mt-5">
                  <h1 className="text-[var(--orange-color)] ">Read more</h1>
                  <FaArrowRightLong className="text-[var(--orange-color)] font-semibold " />
                </button>
              </Link>
            </div>

            <div className="row-start-1 md:col-start-2 mr-0 md:mr-8 lg:mr-24  relative">
              <div className="w-full md:rounded-[20px] overflow-hidden">
                <Image
                  src="/assets/images/products/combo1.png"
                  alt="comboTrader image"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </section>

          {/* <section className="grid md:grid-cols-2 md:gap-10 items-center relative bg-[var(--orange-color)] text-white  ">
            <img src={farm5} className="w-full" />
            <div className="w-full py-14 md:py-auto flex flex-col gap-5 items-center md:items-start px-4 md:px-8 lg:px-24  ">
              <h1 className="text-2xl md:text-3xl lg:text-4xl text-left">
                Supported By
              </h1>
              <div className="flex flex-row flex-wrap gap-3 md:gap-6">
                <img src={support1} alt="make it in africa icon" />
                <img src={support2} alt="leap africa icon" />
                <img src={support3} alt="seedstars icon" />
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </section>
  );
};

export default page;
