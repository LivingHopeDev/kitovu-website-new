import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: 1,
    question: "What is Kitovu Technology Company?",
    answer:
      "Kitovu is a technology-driven company that provides climate-smart farming and post-harvest infrastructure to help African smallholder farmers improve productivity, reduce post-harvest losses and guaranteed markets",
  },
  {
    id: 2,
    question: "Where does Kitovu operate?",
    answer:
      "Headquarter in Oyo State, Nigeria. Kitovu currently operates in several African countries, focusing on regions with significant agricultural potential and underserved smallholder farmers.",
  },
  {
    id: 3,
    question: "How can I join Kitovu as a farmer?",
    answer:
      "Farmers can visit their nearest Farmer Service Center (FSC) or sign up online to connect with our village-based agents for guidance and onboarding.",
  },
  {
    id: 4,
    question: "What is the role of technology in Kitovu?",
    answer:
      "Kitovu leverages tools like Electronic Warehouse Receipts Technology to provide effective storage solutions, financing, and data-driven insights for decision-making.",
  },
  {
    id: 5,
    question: "How do i Sign up for Kitovu's services?",
    answer:
      "Visit any of our facilities or call +234 810 503 6403. For farmers, you can also reach out to our village-based agents at Farmer Service Centers.",
  },
  {
    id: 6,
    question: "How can i partner with Kitovu?",
    answer:
      "We welcome collaborations with NGOs, investors, and other organizations passionate about transforming African agriculture.",
  },
];
const FAQ = () => {
  return (
    <section className=" max-w-[40rem] my-10">
      <div className="flex flex-col gap-6 items-center w-full">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
          Frequently Asked Qustions
        </h2>
        <p className="text-center tracking-tighter md:tracking-normal max-w-3xl text-md mb-10">
          Dive into our Frequently Asked Questions to understand Semihuman
          better, discover our guarantee, and see how we can elevate your
          content endeavors.
        </p>
      </div>
      {/* THE FAQs */}
      <div>
        {faqs.map((faq) => (
          <>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl md:text-2xl text-black">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-md md:text-lg text-[var(--nav-color)]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
