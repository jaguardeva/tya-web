/* eslint-disable react/no-unescaped-entities */
import React from "react";

export const metadata = {
  title: "Siti Maftuhah | Projects",
  description: "My Projects",
};

export default function ProjectPage() {
  return (
    <div className="w-full h-screen text-gray-600 p-5 flex flex-col gap-5">
      <section className="w-full  max-w-[1240px]  mx-auto  px-5 md:px-14 py-10  md:py-14 bg-white rounded-lg shadow-md">
        <h1 className="font-semibold text-2xl md:text-3xl text-center md:text-left">
          Jurnal
        </h1>
        <p className="mt-10 text-center text-sm md:text-lg">
          I'am{" "}
          <span className="text-purple-600 font-semibold">Siti Maftuhah, </span>
          a student in the English education study program at the Sunan Ampel
          State Islamic University, Surabaya.
        </p>
      </section>
      <section className="w-full  max-w-[1240px]  mx-auto  px-5 md:px-14 py-10  md:py-14 bg-white rounded-lg shadow-md">
        <h1 className="font-semibold text-2xl md:text-3xl text-center md:text-left">
          Jurnal
        </h1>
        <p className="mt-10 text-center text-sm md:text-lg">
          I'am{" "}
          <span className="text-purple-600 font-semibold">Siti Maftuhah, </span>
          a student in the English education study program at the Sunan Ampel
          State Islamic University, Surabaya.
        </p>
      </section>
    </div>
  );
}
