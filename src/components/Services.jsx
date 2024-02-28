import { Typography } from "@material-tailwind/react";
import { Header } from "./Header";
import "./../helpers/serviceOption";
import { ServicesItems } from "./services/ServicesItems";
import { useArrayServices } from "../hooks";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export const Services = ({ color }) => {
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
    <>
      <Header color={color} option="services" />

      <Typography as="h1" className="font-400 text-center text-4xl pt-8 w-4/6 mx-auto mt-20">
        En <b>INFANTE, FERNANDEZ & ASOCIADOS</b> te ofrecemos la mejor calidad en nuestros servicios
      </Typography>

      {/* // TODO CONTENEDOR DE SERVICIOS */}
      <section className="w-11.5/12 mx-auto block md:flex mt-20 mb-20 md:h-104 rounded-lg ">
        {/* // * OPCIONES DE SERVICIOS */}
        <article className="w-12/12 md:w-4/12 xl:w-3/12 h-max md:h-full flex-wrap bg-gray-200 grid grid-cols-1 md:flex rounded-t-md md:rounded-l-lg">
          <ServicesItems />
        </article>
        {/* // * CONSULTORÍA EMPRESARIAL => SUBSERVICES */}
        <article
          className={`service-option bg-gray-100 h-full rounded-r-md hidden -ml-40 opacity-0 transition-all duration-300 grid overflow-y-auto overflow-x-hidden md:w-8/12 xl:w-9/12 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3`}
          id="consultoria"
        >
          {subservicesConsultoria.map((subservice, i) => (
            <Link
              to={`/services/${subservice.url}`}
              key={i}
              className="p-5 flex flex-col justify-center items-start h-max"
            >
              <Typography
                as="p"
                className="uppercase font-600 text-base pointer-events-none relative text-left after:content-[''] after:w-0 after:block after:absolute after:bottom-0 after:border-b-2 after:border-orange"
              >
                {subservice.title}
              </Typography>
              <Typography as="p" className="font-400 text-base text-md mt-3 pointer-events-none">
                {subservice.description}
              </Typography>
            </Link>
          ))}
        </article>
        <article
          className={`service-option bg-gray-100 h-full rounded-r-md hidden -ml-40 opacity-0 transition-all duration-300 grid overflow-y-auto overflow-x-hidden md:w-8/12 xl:w-9/12 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3`}
          id="abogados"
        >
          {subservicesAbogados.map((subservice, i) => (
            <Link
              to={`/services/${subservice.url}`}
              key={i}
              className="p-5 flex flex-col justify-center items-start h-max"
            >
              <Typography
                as="p"
                className="uppercase font-600 text-base pointer-events-none relative text-left after:content-[''] after:w-0 after:block after:absolute after:bottom-0 after:border-b-2 after:border-orange"
              >
                {subservice.title}
              </Typography>
              <Typography as="p" className="font-400 text-base text-md mt-3 pointer-events-none">
                {subservice.description}
              </Typography>
            </Link>
          ))}
        </article>
        <article
          className={`service-option bg-gray-100 h-full rounded-r-md hidden -ml-40 opacity-0 transition-all duration-300 grid overflow-y-auto overflow-x-hidden md:w-8/12 xl:w-9/12 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3`}
          id="asesoria"
        >
          {subservicesAseroria.map((subservice, i) => (
            <Link
              to={`/services/${subservice.url}`}
              key={i}
              className="p-5 flex flex-col justify-center items-start h-max"
            >
              <Typography
                as="p"
                className="uppercase font-600 text-base pointer-events-none relative text-left after:content-[''] after:w-0 after:block after:absolute after:bottom-0 after:border-b-2 after:border-orange"
              >
                {subservice.title}
              </Typography>
              <Typography as="p" className="font-400 text-base text-md mt-3 pointer-events-none">
                {subservice.description}
              </Typography>
            </Link>
          ))}
        </article>
      </section>

      <Footer color={color} />
    </>
  );
};
