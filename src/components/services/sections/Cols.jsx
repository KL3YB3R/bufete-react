import { Typography } from "@material-tailwind/react";
import prueba from "./../../../assets/img/services/accion_reivindicatoria/1.jpg";

export const Cols = ({ content }) => {
  console.log(content);

  return (
    // ! SUBSERVICES DESCRIPTION */ }
    <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16 w-10/12 mx-auto gap-6 mb-20">
      {content.map((advantage, i) => (
        <article key={i} className="bg-bgOrange rounded-xl flex flex-col px-5 py-5 shadow-md">
          <figure className="w-full flex justify-center items-center">
            <img src={prueba} alt="" className="w-28 h-28 bg-white rounded-full p-0.5 shadow-md" />
          </figure>
          <Typography as="h3" className="w-full font-600 text-center mt-6 px-2">
            {advantage.titleAdvantage}
          </Typography>
          <Typography as="p" className="w-full font-400 mt-4 text-justify">
            {advantage.advantage}
          </Typography>
        </article>
      ))}
    </section>
  );
};
