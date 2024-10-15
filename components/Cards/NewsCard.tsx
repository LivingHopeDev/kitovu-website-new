import React from "react";
import Image from "next/image";
import Link from "next/link";
import { newsInterface } from "@components/Home/NewsHighlight";

const NewsCard: React.FC<newsInterface> = ({ title, date, content, link }) => {
  return (
    <div className=" mx-auto max-w-[25rem] border rounded-lg shadow-lg overflow-hidden">
      {/* Image Section */}
      <Image
        src="/assets/images/spray-water.png"
        alt="News Image"
        width={250}
        height={200}
        className="w-full h-[20rem] object-cover rounded-lg"
      />

      {/* Content Section */}
      <div className="p-4 space-y-4">
        {/* Metadata Section */}
        <div className="text-[var(--nav-color)] text-xs font-medium">
          <span>
            Admin &#9679; <span>{date}</span>
          </span>
        </div>

        {/* Title Section */}
        <h3 className="text-lg font-semibold">{title}</h3>

        {/* Description Section */}
        <p className="leading-relaxed">{content}</p>

        {/* Read More Section */}
        <div>
          <Link
            href={link}
            className="text-[var(--primary-color)] font-semibold hover:underline"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
