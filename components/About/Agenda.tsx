import React from "react";
export const aboutUs = [
  {
    id: 1,
    title: "Vision",
    content:
      "To become the most preferred and reliable name in climate-smart agriculture for African smallholder farmers.",
  },
  {
    id: 2,
    title: "Mission",
    content:
      " Eradicating extreme poverty among African smallholder farmers by building and deploying climate- smart farming and post- harvest infrastructure.",
  },
  {
    id: 3,
    title: "Why kitovu?",
    content: `We are a bunch of passionate young people who looked at the most wicked problems that make it impossible for Africa to feed itself and were crazy enough to think they can solve it. Smallholder farmers who typically grow 2-4 hectare farms realize low yields compared to global averages. Post-harvest, 40% of yields are lost due to poor storage and lack of access to markets. This impacts farm-level productivity and farmer incomes.\n\n  These problems arise because farmers rely on guesswork, instinct and traditional knowledge to make operational decisions, thereby planting at the wrong time, using the wrong inputs i.e. seedlings, fertilizers, and herbicides, and applying these at the wrong time. Limited incomes also lower purchasing power, making it impossible for these farmers to afford high-quality inputs or access effective storage solutions, and these are the problems that we solve.\n\nKitovu Technology Company solves these problems by building climate-smart farm and post-harvest infrastructure that enables smallholder farmers in distant pocket locations to access personalized agronomic advisory, storage and market access services. We provide African smallholder farmers with the data to make smart decisions about what to grow that would sell and how to grow optimally, so as to enable them to make more money off their farms through yield improvement and reduced post-harvest losses.\n\nKitovu Technology Company is helping to build a resilient food system for African agriculture that enables smallholders to improve their productivity and incomes, taking on the audacious goal of providing the infrastructure African smallholder farmers would require to produce the 60% more food required to feed 9.7 billion people by 2050. We are transforming African agriculture, one smallholder farmer at a time.`,
  },
];
const Agenda = () => {
  return (
    <div className="flex flex-col mx-auto max-w-[90%] md:max-w-[80%] items-center my-10 space-y-10  ">
      <div>
        {aboutUs.map((item) => (
          <div key={item.id}>
            <h1 className="text-4xl font-medium mb-4">{item.title}</h1>
            {item.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-md mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agenda;
