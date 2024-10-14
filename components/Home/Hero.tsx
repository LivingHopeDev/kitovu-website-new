import React from "react";

const Hero = () => {
  return (
    <header className="flex bg-[url('/assets/images/hero.png')] bg-cover bg-center bg-no-repeat w-screen h-screen">
      <div className="w-1/2 px-10">
        <h1 className="text-lg md:text-4xl text-whit">
          Empowering Farmers to Succeed.
        </h1>
        <p>
          We utilize technology to deliver profitable support to smallholder
          farmers throughout Africa, enhancing the agricultural value chain and
          boosting food production. Our focus is agriculture, with the farmer at
          the forefront.
        </p>
      </div>
    </header>
  );
};

export default Hero;
