import React from "react";

const Testimonies = () => {
  return (
    <section className="flex flex-col items-center my-10 space-y-10 max-w-4xl">
      <h2 className="text-2xl md:text-4xl">Farmer's Testimonies</h2>

      <p className="text-center tracking-tighter md:tracking-wider text-md">
        As we often say: by uplifting one farmer at a time, we move closer to
        our vision of building an Africa that feeds herself and the world. We
        recognize the immense effort smallholder farmers put into feeding
        everyone else, yet they remain among the poorest on the continent. This
        is why we are passionately dedicated to supporting smallholder farmers!
      </p>

      <div className="w-full max-w-lg aspect-square">
        <iframe
          className="w-full h-full"
          src="https://youtube.com/embed/Yu40JarwBSE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Testimonies;
