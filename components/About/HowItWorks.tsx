import Image from "next/image";
export const info = [
  {
    id: 1,
    image: "/assets/images/tour-guide.svg",
    title: "Small Holder Farmers",
    alt: "guide",
    content:
      "We equip smallholder farmers with high-quality inputs and additional resources to maximize yield, enhance profitability, reduce poverty, and secure the necessary food supply.",
  },
  {
    id: 2,
    image: "/assets/images/travelling.svg",
    title: "Food Processor & Manufacturer",
    alt: "flight",
    content: `We offer reliable financing solutions and transparency in smallholder farmer operations to work towards zero hunger, job creation, economic growth, and enhanced social and financial inclusion.`,
  },
  {
    id: 3,
    image: "/assets/images/hands.svg",
    title: "Financial Institutions",
    alt: "hand",
    content: `We are the trusted partner for delivering quality, healthy produce to meet growing consumer demands and ensure food security all across the country and continent.`,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#E5E5E54D] pb-10">
      <div className="mx-auto max-w-[80%] pb-">
        <div className="flex justify-between py-[4rem]">
          <div className="w-1/2">
            <h4 className="text-[var(--primary-color)] font-semibold">
              How We Help
            </h4>
            <h2 className="text-2xl text-black font-semibold">
              Simple Working Process
            </h2>
          </div>
          <div className="w-1/2">
            Our support extends beyond smallholder farmers to encompass the
            entire agricultural value chain.
          </div>
        </div>

        {/* The Hows */}
        <div className="flex flex-col md:flex-row gap-8">
          {info.map((item) => (
            <div
              key={item.id}
              className="bg-white max-w-[20rem] border-[1px] border-gray-200 rounded-md p-4 flex flex-col items-start"
            >
              <Image src={item.image} alt={item.alt} width={40} height={40} />
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="mt-2">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
