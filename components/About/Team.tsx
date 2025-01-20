import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Nwachinemere Emeka ",
    image: "/assets/images/Emeka-Nwachinemere.svg",
    title: "(C.E.O)",
    description:
      "Emeka leads Kitovu with a vision to transform African agriculture. His expertise in technology and business drives innovation and growth across the company",
  },
  {
    id: 2,
    name: "Raheem Adedolapo",
    image: "/assets/images/Raheem-adedolapo.png",
    title: "(Head of Operation)",
    description:
      "Raheen Adedolapo is an accomploshed operations strategist dedicated to optimizing processes and enhancing agricultural value chains across Africa,",
  },
  {
    id: 3,
    name: "Adegbola Adedotun",
    image: "/assets/images/Adegbola-adedotun.png",
    title: "(Head, Agronomy and GIS)",
    description:
      "Adedotun ensures farmers get precise solutions for better productivity through his expertise in agronomy, GIS and crop management.",
  },
  {
    id: 4,
    name: "Nduka Miracle",
    image: "/assets/images/Nduka-miracle.png",
    title: "(Director, Rest of Africa)",
    description:
      "Nduka spearheads Kitovu’s expansion across Africa, bringing impactful solutions to underserved farming communities.",
  },
];

const Team = () => {
  return (
    <section className="flex flex-col mx-auto max-w-[90%] md:max-w-[80%] items-center my-10 space-y-8">
      <h1 className="text-2xl md:text-4xl font-semibold">Meet Our Team</h1>

      {/* Paragraph and Team Cards in the same width */}
      <p className="text-center w-full max-w-[80%] pb-4">
        Our team consists of agricultural experts, technologists, and innovators
        dedicated to driving positive change in agriculture. With a deep
        understanding of both farming and technology, we are uniquely positioned
        to deliver impactful solutions that address the evolving needs of
        farmers.
      </p>

      {/* Team Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-4 w-full ">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white border-[1px] border-gray-200 rounded-md p-4 max-w flex flex-col items-center"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={100}
              height={100}
              className="rounded-full"
            />
            <h3 className="text-xl font-semibold mt-4 ">{member.name}</h3>
            <p className="text-sm font-medium text-gray-600">{member.title}</p>
            <p className="text-sm text-center mt-2">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
