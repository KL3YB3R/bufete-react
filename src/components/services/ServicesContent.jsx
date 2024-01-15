import { useParams } from "react-router-dom";
import { useShowSubservice } from "../../hooks/useShowSubservice";

import ArrowWhite from "./../../assets/icons/arrow-white.png";
import { Header } from "../header/Header";
import { Button, Typography } from "@material-tailwind/react";

export const ServicesContent = ({ color }) => {
  const params = useParams();
  const subservice = useShowSubservice(params.id);

  return (
    <>
      <Header color={color} />

      {/* // ! BANNER SECTION */}
      <section className="flex justify-between items-start h-104">
        <article className="w-4/12 pl-12 pt-10">
          <Typography as="h1" className="text-5xl font-600 title-subservice mb-6">
            {subservice.title}
          </Typography>
          <Typography as="h4" className="font-400">
            {subservice.subtitle}
          </Typography>

          <Button className="mt-20 px-8 py-2 relative flex items-center normal-case text-md font-400 bg-orange hover:shadow-none hover:bg-orangeWhite button-back-menu">
            <img src={ArrowWhite} alt="" className="rotate-90 w-3 transition-all duration-300" />
            Volver al Menu
          </Button>
        </article>
        <img src={subservice.imageBanner} className="w-8/12 h-full rounded-bl-800"></img>
      </section>

      {/* // ! MAIN DESCRIPTION */}
      <Typography as="h5" className="mt-24 w-4/6 mx-auto text-xl text-center leading-9 font-400">
        Si eres comerciante, prestador de servicio o emprendedor propiamente dicho, es necesario que tengas constituida
        una sociedad mercantil (empresa), cuyo propósito, más que explotar y dar a conocer tu experiencia, talento y
        conocimiento, es cumplir con deberes y obligaciones comerciales, proyectando éxito, eficiencia y buena
        reputación. En <b>Infante, Fernández & Asociados</b> trazamos el panorama adecuado en la gestación de tu propio
        negocio, desde lo que tienes; las ganas, la idea y la estrategia hasta lo más tangible; la planificación,
        constitución, presupuesto, gestión, administración, etc.
      </Typography>

      {/* // !  */}
      <Typography as="h3" className="text-4xl font-700">
        ¿Por qué Nosotros?
      </Typography>
    </>
  );
};
