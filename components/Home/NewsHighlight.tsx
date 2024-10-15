import NewsCard from "@components/Cards/NewsCard";

export interface newsInterface {
  id: number;
  date: string;
  title: string;
  content: string;
  link: string;
}
const news: newsInterface[] = [
  {
    id: 1,
    date: "October 1,2024",
    title:
      "Innovations for a Greener Future and Sustainable Farming Environment",
    content:
      "Imagine a world where freshly harvested fruits and vegetables reach your table without spoiling. Sounds good, right? This dream becomes...",
    link: "#",
  },
  {
    id: 2,
    date: "October 1,2023",

    title:
      "Innovations for a Greener Future and Sustainable Farming Environment",
    content:
      "Imagine a world where freshly harvested fruits and vegetables reach your table without spoiling. Sounds good, right? This dream becomes...",
    link: "#",
  },
  {
    id: 3,
    date: "October 1,2025",

    title:
      "Innovations for a Greener Future and Sustainable Farming Environment",
    content:
      "Imagine a world where freshly harvested fruits and vegetables reach your table without spoiling. Sounds good, right? This dream becomes...",
    link: "#",
  },
];
const NewsHighlight = () => {
  return (
    <section className="bg-[#E5E5E54D] flex flex-col items-center pt-10 my-10 space-y-10 w-screen">
      <h2 className="text-2xl md:text-4xl">Keep up with the latest news</h2>

      <p className="text-center tracking-tighter md:tracking-wider max-w-3xl text-md">
        Explore our blog for the latest updates, insights, and success stories
        in sustainable agriculture. <br /> Stay informed about the cutting-edge
        technologies, trends, and practices that are shaping the future of
        farming.
      </p>

      <div className="w-full overflow-hidden">
        <div className="flex sm:hidden space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide p-4">
          {/* Horizontal Scroll for small screens */}
          {news.map((item) => (
            <div key={item.id} className="snap-center shrink-0 w-[300px]">
              <NewsCard
                key={item.id}
                id={item.id}
                date={item.date}
                title={item.title}
                content={item.content}
                link={item.link}
              />
            </div>
          ))}
        </div>

        {/* Grid layout for medium and large screens */}
        <div className="hidden mx-auto sm:grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full md:w-[90%]">
          {news.map((item) => (
            <NewsCard
              key={item.id}
              id={item.id}
              date={item.date}
              title={item.title}
              content={item.content}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsHighlight;
