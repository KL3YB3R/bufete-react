import { Typography } from "@material-tailwind/react";
import { Header } from "./header/Header";
import { useState } from "react";
import { D, W } from "./../utils/variables";
import { useArrayServices } from "./../hooks/useArraysServices";
import "./../helpers/serviceOption";

// ! IMAGES
import iconConsultoria from "./../assets/icons/consultoria.png";
import iconAbogado from "./../assets/icons/abogado.png";
import iconAsesoria from "./../assets/icons/asesoria.png";
import { ServicesItems } from "./services/ServicesItems";

D.querySelectorAll(".service-option").forEach((service) => {
  service.classList.add("hidden");
});

export const Services = () => {
  const [
    consultoria,
    abogados,
    asesoria,
    onActiveConsultoria,
    onActiveAbogados,
    onActiveAsesoria,
    subservicesAbogados,
    subservicesAseroria,
    subservicesConsultoria,
  ] = useArrayServices();

  return (
    <main className="p-0 opacity-0 hidden transition-all duration-300 px-7" id="services">
      <Typography as="h1" className="font-400 text-center text-4xl pt-8 w-4/6 mx-auto">
        En <b>INFANTE, FERNANDEZ & ASOCIADOS</b> te ofrecemos la mejor calidad en nuestros servicios
      </Typography>

      {/* // TODO CONTENEDOR DE SERVICIOS */}
      <section className="w-full flex mt-20 mb-20 h-104 rounded-lg ">
        {/* // * OPCIONES DE SERVICIOS */}
        <article className="w-3/12 h-full flex flex-wrap bg-gray-200 rounded-l-lg">
          <ServicesItems />
        </article>
        {/* // * CONSULTORÍA EMPRESARIAL => SUBSERVICES */}
        <article
          className={`service-option bg-gray-100 w-9/12 h-full rounded-r-md hidden -ml-40 opacity-0 transition-all duration-300 grid grid-cols-3 overflow-y-auto overflow-x-hidden`}
          id="consultoria"
        >
          {subservicesConsultoria.map((subservice, i) => (
            <aside key={i} className="p-5 flex flex-col justify-center items-start h-max">
              <Typography
                as="p"
                className="uppercase font-600 text-base pointer-events-none relative text-left after:content-[''] after:w-0 after:block after:absolute after:bottom-0 after:border-b-2 after:border-orange"
              >
                {subservice.title}
              </Typography>
              <Typography as="p" className="font-400 text-base text-md mt-3 pointer-events-none">
                {subservice.description}
              </Typography>
            </aside>
          ))}
        </article>
        <article
          className={`service-option bg-gray-100 w-9/12 h-full rounded-r-md hidden -ml-40 opacity-0 transition-all duration-300 grid grid-cols-3 overflow-y-auto overflow-x-hidden`}
          id="abogados"
        >
          {subservicesAbogados.map((subservice, i) => (
            <aside key={i} className="p-5 flex flex-col justify-center items-start h-max">
              <Typography
                as="p"
                className="uppercase font-600 text-base pointer-events-none relative text-left after:content-[''] after:w-0 after:block after:absolute after:bottom-0 after:border-b-2 after:border-orange"
              >
                {subservice.title}
              </Typography>
              <Typography as="p" className="font-400 text-base text-md mt-3 pointer-events-none">
                {subservice.description}
              </Typography>
            </aside>
          ))}
        </article>
        <article
          className={`service-option bg-gray-100 w-9/12 h-full rounded-r-md hidden -ml-40 opacity-0 transition-all duration-300 grid grid-cols-3 overflow-y-auto overflow-x-hidden`}
          id="asesoria"
        >
          {subservicesAseroria.map((subservice, i) => (
            <aside key={i} className="p-5 flex flex-col justify-center items-start h-max">
              <Typography
                as="p"
                className="uppercase font-600 text-base pointer-events-none relative text-left after:content-[''] after:w-0 after:block after:absolute after:bottom-0 after:border-b-2 after:border-orange"
              >
                {subservice.title}
              </Typography>
              <Typography as="p" className="font-400 text-base text-md mt-3 pointer-events-none">
                {subservice.description}
              </Typography>
            </aside>
          ))}
        </article>
      </section>
    </main>
  );
};
