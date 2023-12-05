"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu, IoClose } from "react-icons/io5";

const MENU = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Portofolio",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const currentPath = usePathname();
  return (
    <header className="w-full bg-white sticky top-0 text-slate-900 flex px-4 md:shadow-none shadow-lg z-50">
      <div className="md:flex md:flex-row flex-col w-full  py-[15px]  md:py-[20px] max-w-[1240px] mx-auto justify-between items-center ">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-bold">
            Siti<span className="text-purple-600">Maftuhah.</span>
          </Link>
          <button
            type="button"
            className="md:hidden flex justify-center items-center outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
          </button>
        </div>

        <nav
          className={`mt-[20px] md:mt-0 ${
            isOpen ? "block" : "hidden"
          }  md:block`}
        >
          <ul className="flex flex-col md:flex-row gap-1 md:gap-5 justify-center items-center">
            {MENU.map((item, index) => (
              <li
                key={index}
                className="flex justify-center items-center w-full"
              >
                <Link
                  href={item.path}
                  className={`flex justify-center items-center font-semibold text-md p-4 md:py-2 w-full md:w-[130px] hover:text-white md:rounded-full hover:bg-purple-600 transition-all ease-in duration-100 ${
                    currentPath === item.path
                      ? "bg-purple-600  text-white "
                      : ""
                  } `}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
