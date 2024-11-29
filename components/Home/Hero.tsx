const Hero = () => {
  return (
    <header className="relative flex bg-[url('/assets/images/hero.png')] bg-cover bg-center bg-no-repeat  w-screen h-screen md:h-[50vh]  lg:h-screen">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center space-y-6 px-6 sm:px-10  sm:w-1/2 lg:px-16 lg:w-[70%]">
        <h1 className="text-3xl md:text-4xl text-white font-semibold leading-10 lg:leading-[6rem] lg:text-7xl lg:w-[100%]">
          Empowering Farmers to Succeed.
        </h1>
        <p className="text-lg sm:text-md md:text-xl lg:text-2xl text-white">
          Building a sustainable pre and post harvest eco-system centered around
          small farmers in Africa...
        </p>
      </div>
    </header>
  );
};

export default Hero;
