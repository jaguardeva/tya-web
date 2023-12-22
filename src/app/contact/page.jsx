import React from "react";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


export const metadata = {
  title: "Siti Maftuhah | Contact",
  description: "Contact me for any query",
};
export default function ContactPage() {
  return (
    <div className="w-full h-screen p-5 md:px-14  text-gray-600">
      <section className="w-full  max-w-[1240px]  mx-auto  px-5 md:px-14 py-10  md:py-14 bg-white rounded-lg shadow-md">
        <h1 className="font-semibold text-2xl md:text-3xl text-center md:text-left">
          Contact Me
        </h1>
        <div className="mt-10 grid grid-cols-2 gap-10 place-items-center md:place-items-start">
          <a
            href="mailto:sitimaftuhah654@gmail.com"
            className="flex items-center hover:text-purple-600 transition ease-in-out focus:text-purple-600"
          >
            <MdOutlineEmail size={110} />
          </a>
          <a
            href="https://www.instagram.com/sitimaftuhah654/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            className="flex items-center hover:text-purple-600 transition ease-in-out focus:text-purple-600"
          >
            <FaInstagramSquare size={100} />
          </a>
          <a
            href="https://wa.me/6285731847554"
            className="flex items-center hover:text-purple-600 transition ease-in-out focus:text-purple-600"
          >
            <FaWhatsappSquare size={100} />
          </a>
        </div>
      </section>
    </div>
  );
}
