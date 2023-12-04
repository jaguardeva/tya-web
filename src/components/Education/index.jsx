"use client";

import React from "react";

export default function index(props) {
  const { name, program, start, end } = props;
  return (
    <div className="flex items-center gap-10">
      <div className=" p-1 h-[0.5rem] w-[0.5rem] rounded-full bg-gray-600 "></div>
      <div className="flex flex-col md:flex-row justify-between w-full gap-1">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-sm md:text-md lg:text-lg">
            {name}
          </h1>
          <p className="text-sm md:text-lg">{program}</p>
        </div>
        <p className="text-slate-500">
          {start} - {end}
        </p>
      </div>
    </div>
  );
}
