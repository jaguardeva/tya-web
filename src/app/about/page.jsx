/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Education from "@/components/Education";

export default function AboutPage() {
  return (
    <div className="w-full  text-gray-600 p-5 flex flex-col gap-5">
      <section className="w-full  max-w-[1240px]  mx-auto  px-5 md:px-14 py-10  md:py-14 bg-white rounded-lg shadow-md">
        <h1 className="font-semibold text-2xl md:text-3xl text-center md:text-left">
          About Me
        </h1>
        <p className="mt-10  text-sm md:text-lg">
          I'am{" "}
          <span className="text-purple-600 font-semibold">Siti Maftuhah, </span>
          a student in the English education study program at the Islamic State
          University of Sunan Ampel, Surabaya.
        </p>
      </section>
      <section className="w-full  max-w-[1240px]  mx-auto  px-5 md:px-14 py-14 bg-white rounded-lg shadow-md">
        <h1 className="font-semibold text-2xl md:text-3xl text-center md:text-left">
          Education
        </h1>

        <div className="mt-10 flex flex-col gap-5 w-full">
          <Education
            name="Khazanah Ilmu Elementary school"
            start="2010"
            end="2016"
          />

          <Education
            name="YPM 4 Bohar Taman Junior High School"
            start="2017"
            end="2019"
          />

          <Education
            name="Wachid Hasyim YPM 2 Taman Senior High School"
            program="IPA"
            start="2019"
            end="2022"
          />

          <Education
            name="Islamic State University of Sunan Ampel Surabaya"
            program="English education"
            start="2022"
            end="Now"
          />
        </div>
      </section>
      <section className="w-full  max-w-[1240px]  mx-auto  px-5 md:px-14 py-10  md:py-14 bg-white rounded-lg shadow-md">
        <h1 className="font-semibold text-2xl md:text-3xl text-center md:text-left">
          My Skills
        </h1>
        <div className="grid md:grid-cols-2 gap-5 mt-10">
          <div>
            <h2 className="text-md md:text-lg font-semibold">Soft Skills:</h2>
            <div className="mt-5 flex flex-col gap-1 text-sm md:text-md lg:text-lg">
              <p>&bull; Teamwork</p>
              <p>&bull; Leadership</p>
              <p>&bull; Public Speaking</p>
            </div>
          </div>
          <div>
            <h2 className="text-md md:text-lg font-semibold">Hard Skills:</h2>
            <div className="mt-5 flex flex-col gap-1 text-sm md:text-md lg:text-lg">
              <p>&bull; Microsoft Office</p>
              <p>&bull; Master of Ceremonies</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
