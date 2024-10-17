import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    image: "/assets/images/member-1.svg",
    title: "Agriculture Expert",
    description: "John has 10+ years of experience in sustainable farming.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "/assets/images/member-2.svg",
    title: "Lead Technologist",
    description: "Jane is an expert in agri-tech innovations and automation.",
  },
  {
    id: 3,
    name: "Samuel Lee",
    image: "/assets/images/member-3.svg",
    title: "Marketing Specialist",
    description:
      "Samuel helps farmers connect with global markets effectively.",
  },
];

const Team = () => {
  return (
    <section className="flex flex-col mx-auto max-w-[90%] md:max-w-[80%] items-center my-10 space-y-8">
      <h1 className="text-2xl md:text-4xl font-semibold">Meet Our Team</h1>
      <p className="text-justify">
        Our team consists of agricultural experts, technologists, and innovators
        dedicated to driving positive change in agriculture. With a deep
        understanding of both farming and technology, we are uniquely positioned
        to deliver impactful solutions that address the evolving needs of
        farmers.
      </p>

      {/* Team Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white border-[1px] border-gray-200 rounded-md p-4 max-w-[18rem] flex flex-col items-center"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={100}
              height={100}
              className="rounded-full"
            />
            <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
            <p className="text-sm font-medium text-gray-600">{member.title}</p>
            <p className="text-sm text-center mt-2">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
