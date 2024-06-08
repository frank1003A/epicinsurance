"use client";
import React from "react";

export interface ServiceCardProps {
  icon: React.JSX.Element;
  header: string;
  paragraph: string;
}
const ServiceCard = ({ icon, header, paragraph }: ServiceCardProps) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="500"
      className="transition-all bg-white group lg:hover:bg-epic_primary text-center p-4 rounded-md shadow-md flex flex-col gap-3 items-center"
    >
      <div className="font-bold lg:group-hover:text-white lg:group-hover:bg-epic_secondary text-epic_secondary rounded-full w-12 h-12  bg-epic_primary flex items-center justify-center">
        {icon}
      </div>
      <h1 className="text-lg font-bold text-center lg:group-hover:text-white">
        {header}
      </h1>

      <p className="text-sm text-center lg:group-hover:text-white">
        {paragraph}
      </p>
    </div>
  );
};

export default ServiceCard;
