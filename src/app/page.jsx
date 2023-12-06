/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="w-full  text-slate-900 py-5 md:py-10">
      <section className="w-full h-screen md:h-[calc(100vh-85px)]  max-w-[1240px]  mx-auto grid md:grid-cols-2 px-4 ">
        <div className="w-full  flex flex-col gap-3 md:gap-5">
          <p className="font-bold text-md md:text-xl md:mt-[100px]">
            <span className="text-purple-600">Hello,</span> everyone! 👋.
          </p>
          <h1 className="font-bold text-5xl md:text-6xl">
            I'am <span className="text-purple-600">Siti Maftuhah</span>
          </h1>
          <p className="font-medium text-slate-500 text-sm md:text-lg">
            "Welcome to my personal website! Excited to share stories and
            experiences with you."
          </p>

          <div className="flex gap-5">
            <a
              href="https://www.instagram.com/sitimaftuhah654/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
              className="cursor-pointer"
              target="_blank"
            >
              <FaInstagramSquare
                className="text-3xl text-slate-900 md:text-4xl  hover:text-purple-600 transition-all ease-in-out duration-100"
                title="Instagram"
              />
            </a>
            <a href="" className="cursor-pointer">
              <FaFacebookSquare
                className="text-3xl text-slate-900 md:text-4xl  hover:text-purple-600 transition-all ease-in-out duration-100"
                title="Facebook"
              />
            </a>
            <a href="" className="cursor-pointer">
              <FaTwitterSquare
                className="text-3xl text-slate-900 md:text-4xl  hover:text-purple-600 transition-all ease-in-out duration-100"
                title="Twitter"
              />
            </a>
            <a href="" className="cursor-pointer">
              <FaLinkedin
                className="text-3xl text-slate-900 md:text-4xl  hover:text-purple-600 transition-all ease-in-out duration-100"
                title="Linkedin"
              />
            </a>
          </div>
          <div className="flex gap-5">
            <Link
              href="/about"
              className="mt-6 flex justify-center items-center w-[40%]  md:w-[30%] py-3 px-5 text-sm md:text-xl font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-all ease-in-out duration-150"
            >
              About Me
            </Link>
            <a
              href="https://drive.google.com/file/d/12VPnFwR2b5ro8onVOPQ4KehYd9WlmFCt/view?usp=drivesdk"
              className="mt-6 flex justify-center items-center w-[40%]  md:w-[30%] py-3 px-5 text-sm md:text-xl font-semibold rounded-lg bg-transparent border-2 border-purple-600   hover:bg-gray-200 text-purple-600 transition-all ease-in-out duration-150"
              target="_blank"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="flex justify-center items-start relative">
          <Image
            src="/my-photo.png"
            alt="profile"
            width={400}
            height={400}
            className="z-10 md:bottom-[7rem]  absolute w-[300px] h-auto md:w-[400px] rounded-full"
            priority
          ></Image>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              fill="#9333EA"
              d="M41.1,-48C55.6,-36.8,71.3,-26.1,78.4,-10.2C85.6,5.7,84.3,26.8,73.2,38.6C62,50.5,41.1,53,22.3,58.9C3.4,64.7,-13.4,73.9,-28.8,71.6C-44.3,69.3,-58.4,55.6,-64.5,39.8C-70.5,24,-68.5,6.1,-62.8,-8.5C-57.1,-23.1,-47.7,-34.4,-36.7,-46.2C-25.6,-58,-12.8,-70.3,0.3,-70.6C13.3,-70.9,26.6,-59.2,41.1,-48Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </section>
    </main>
  );
}
