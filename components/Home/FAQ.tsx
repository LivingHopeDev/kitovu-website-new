import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: 1,
    question: "What does the word Kitovu means?",
    answer: "Kitovu is a swahili word that means Hub",
  },
  {
    id: 2,
    question: "Is it accessible?",
    answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,provident nihil eaque blanditiis magni reiciendis vel doloribusmolestiae, ea facere incidunt beatae, at obcaecati voluptates atque.Sapiente voluptatibus perferendis eligendi",
  },
  {
    id: 2,
    question: "Where is the Head Office?",
    answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,provident nihil eaque blanditiis magni reiciendis vel doloribusmolestiae, ea facere incidunt beatae, at obcaecati voluptates atque.Sapiente voluptatibus perferendis eligendi",
  },
];
const FAQ = () => {
  return (
    <section className=" max-w-[40rem] my-10">
      <div className="flex flex-col gap-6 items-center w-full">
        <h2 className="text-2xl md:text-4xl">Frequently Asked Qustions</h2>
        <p className="text-center tracking-tighter md:tracking-wider max-w-3xl text-md mb-10">
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
                <AccordionTrigger className="text-2xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-[var(--nav-color)]">
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
