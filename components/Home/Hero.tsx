const Hero = () => {
  return (
    <header className="relative flex bg-[url('/assets/images/hero.png')] bg-cover bg-center bg-no-repeat w-screen h-screen">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center space-y-6 px-6 sm:px-10 lg:px-16 w-full sm:w-1/2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Empowering Farmers to Succeed.
        </h1>
        <p className="text-lg sm:text-md md:text-xl lg:text-2xl text-white">
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
