import React from "react";

export default function Footer() {
  return (
    <footer className="flex  items-center p-5 md:px-14 w-full h-24 text-center bg-slate-900">
      <p className="text-slate-300 text-sm font-medium">
        &copy;2023 - Made With Love By{" "}
        <a
          href="https://www.instagram.com/jaguardeva_/"
          className="hover:text-blue-600 hover:underline"
          title="Instagram Jaguar Deva"
          target="_blank"
        >
          Jaguar Deva
        </a>
      </p>
    </footer>
  );
}
