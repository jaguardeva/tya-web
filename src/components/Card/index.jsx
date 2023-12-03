"use client";

import React from "react";
import Styles from "./index.module.css";

export default function Card(props) {
  const { title, description } = props;

  return (
    <div className="w-full p-5 bg-white rounded-lg ">
      <div>
        <h1 className="font-semibold text-3xl">{title}</h1>
        <p className={Styles.description}>{description}</p>
      </div>
      <button
        type="button"
        className="p-2 px-5 bg-yellow-400 hover:shadow-lg hover:shadow-yellow-600 font-semibold rounded-lg mt-10 text-slate-900 transition ease-in-out"
      >
        View Jurnal
      </button>
    </div>
  );
}
