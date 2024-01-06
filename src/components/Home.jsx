import { Typography } from "@material-tailwind/react";
import { Carousel } from "./carousel/Carousel";
import { Header } from "./header/Header";
import { cases, criteria, services, slides } from "../hooks/useArraysHome";

export const Home = () => {
  return (
    <main className="p-0 opacity-100 transition-all duration-300" id="home">
      {/* SECTIONS FROM HOME */}
      <Carousel slides={slides} />

      {/* ABOUT US */}
      <section className="flex flex-col py-20 px-14 md:p-20 lg:p-36 bg-gray-50">
        <Typography as="h1" className="uppercase font-700 text-3xl sm:text-4xl text-center">
          ¿Quiénes Somos?
        </Typography>
        <Typography
          as="p"
          className="lg:w-12/12 xl:w-5/6 mx-auto text-center mt-10 text-lg sm:text-xl font-400 sm:leading-9"
        >
          Somos un equipo multidisciplinario de profesionales, que en uso del ordenamiento jurídico y atención a casos
          particulares de la vida social, defiende y representa los derechos e intereses de nuestros clientes.
          Acompañamos al talento en el desarrollo de sus objetivos e implementación de ideas, enfrentando juntos los
          retos en la construcción de negocios exitosos como oportunidad de crecimiento personal y empresarial.
        </Typography>

        <button className="mt-10 capitalize w-fit mx-auto border-2 border-blue bg-white text-dark font-400 text-md rounded-lg py-2 px-8 transition-all duration-700 button-more-info">
          Más Información
        </button>
      </section>

      {/* OFFER YOU */}
      <section className="flex flex-col p-10 sm:p-20 sm:px-4 bg-white">
        <Typography as="h1" className="uppercase font-700 text-3xl sm:text-4xl text-center">
          Te Ofrecemos
        </Typography>

        <article className="grid w-12/12 sm:w-9/12 md:w-11/12 grid-cols-1 mx-auto md:grid-cols-2 xl:grid-cols-3 gap-5 items-center mt-10 md:p-5">
          {services.map((service, i) => (
            <a
              href="#"
              key={i}
              className="h-60 shadow-3xl rounded-xl hover:scale-105 transition-all relative home-services"
            >
              <img src={service.image} alt="" className="w-full h-full object-cover rounded-xl" />
              <div className="h-full w-full absolute top-0 z-50 text-services-container">
                <div className="h-full w-full flex flex-col justify-end rounded-xl bg-gradient-to-r from-blueWhite to-transparent p-4">
                  <Typography as="h4" className="uppercase font-bold text-white text-xl">
                    {service.name}
                  </Typography>
                  <p href="#" className="uppercase font-bold text-white text-sm mt-3 underline">
                    Conocer más
                  </p>
                </div>
              </div>
            </a>
          ))}
        </article>
      </section>

      {/* CRITERIA */}
      <section className="flex flex-col p-10 sm:p-20 sm:px-4 bg-gray-50">
        <Typography as="h1" className="uppercase font-700 text-3xl sm:text-4xl text-center">
          Criterios
        </Typography>

        <article className="grid sm:w-4/6 sm:mx-auto md:w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-0 sm:px-5 py-10 gap-3">
          {criteria.map((crit, i) => (
            <aside key={i} className="shadow-xl bg-white rounded-lg">
              <a href="#">
                <img
                  src={crit.image}
                  alt=""
                  className="w-full h-60 rounded-t-xl object-cover hover:opacity-60 transition-all duration-150"
                />
              </a>
              <Typography as="h5" className="font-600 text-lg py-5 px-6">
                {crit.name}
              </Typography>
              <Typography as="h5" className="font-600 text-lg pt-3 px-6">
                {crit.sentence}
              </Typography>
              <Typography as="p" className="font-400 text-justify text-md pt-4 pb-5 px-6">
                {crit.context}
              </Typography>
            </aside>
          ))}
        </article>

        <button className="w-fit capitalize font-400 text-md py-2 px-7 rounded-md mx-auto mt-5 border-2 transition-all duration-700 border-blueDark text-dark bg-white button-view-all-criteria">
          Ver todos
        </button>
      </section>

      <section className="flex flex-col p-10 sm:p-20 sm:px-4 bg-white">
        <Typography as="h1" className="uppercase font-700 text-3xl sm:text-4xl text-center">
          Casos Prácticos
        </Typography>

        <article className="grid sm:w-4/6 sm:mx-auto md:w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 px-4 mt-10">
          {cases.map((c, i) => (
            <a href="#" key={i} className="h-96 relative hover:opacity-90 transition-all practical-cases">
              <img src={c.image} alt="" className="h-full w-full object-cover" />
              <div className="shadow absolute top-0 w-full h-full px-8 flex flex-col justify-center">
                <Typography as="h2" className="uppercase text-white text-2xl font-500">
                  {c.name}
                </Typography>
                <Typography as="p" className="uppercase mt-4 font-500 text-white">
                  Ver Ahora
                </Typography>
              </div>
            </a>
          ))}
        </article>
      </section>
    </main>
  );
};
