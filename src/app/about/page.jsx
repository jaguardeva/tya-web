import Card from "@/components/Card";
import React from "react";

export default function AboutPage() {
  return (
    <div className="w-full  text-gray-600 p-5 flex flex-col gap-10">
      <section className="w-full  max-w-[1240px]  mx-auto  px-5  py-14 bg-white rounded-lg shadow-md">
        <h1 className="font-semibold text-5xl md:text-3xl text-center text-slate-900">
          About Me
        </h1>
        <p className="mt-5 text-center max-w-3xl mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          dolor odio ad rem eum consequatur voluptates laborum iure dolorum
          inventore. Temporibus incidunt, praesentium minus earum nam fugit illo
          porro id!
        </p>
      </section>
      <section className="w-full  max-w-[1240px]  mx-auto  px-5  py-14 bg-purple-600 rounded-lg shadow-md">
        <h1 className="font-semibold text-5xl md:text-3xl text-center text-white ">
          My Published Jurnal
        </h1>
        <p className="mt-5 mx-auto text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          corporis voluptas nihil, pariatur repellendus expedita dolores
          explicabo reiciendis facere ad, eveniet consequatur odit sit, nesciunt
          ratione provident culpa! Veniam ut impedit earum aut doloribus officia
          ipsum minus architecto dolorem totam!
        </p>
        <div className="w-full grid  md:grid-cols-3 mt-10 gap-5">
          <Card
            title="Jurnal 1"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus rem aperiam minima assumenda harum deserunt labore
                itaque eum culpa sit."
          />

          <Card title="Jurnal 2" description="Lorem ipsum dolor sit amet." />
          <Card
            title="Jurnal 3"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio perferendis nesciunt asperiores sequi deleniti provident consequuntur quisquam ex doloremque recusandae, quia esse aspernatur minima voluptas expedita illum commodi quam pariatur, quos est ipsam optio? Autem eum, placeat, asperiores saepe error dicta fuga illum eaque earum itaque amet ullam corrupti consequuntur!"
          />
        </div>
      </section>
    </div>
  );
}
