import { Header } from "./Header";
import bannerAbout from "./../assets/img/about-banner.jpg";
import imageAbout from "./../assets/img/about-first.jpg";
import { Typography } from "@material-tailwind/react";

export const AboutUs = ({ color }) => {
  return (
    <>
      <Header color={color} option="about" />

      <section className="mt-20">
        {/* // ! BANNER */}
        <img src={bannerAbout} alt="" className="w-screen h-96 bg-black mb-20" />
        <article className="grid grid-cols-2 gap-14 justify-center items-center p-10">
          <aside className="pl-16">
            {/* <Typography as="h1" className="text-5xl font-700">
              Estamos preparados para asesorarte.
            </Typography> */}
            <br />
            <Typography as="p" className="text-lg font-400 mb-10">
              <b>Infante, Fernández & Asociados</b> es una Firma Legal, compuesta por un equipo multidisciplinario de
              profesionales que en atención a casos particulares de la vida social, asesora y representa a personas
              naturales y jurídicas, cualquiera sea su modalidad o denominación en la esfera publica o privada en
              defensa de sus derechos e intereses.
            </Typography>
            <button className="bg-blueWhite rounded-xl py-3 px-5 font-600 text-white shadow-md hover:scale-105 hover:shadow-xl transition-all duration-150">
              Explora nuestros servicios
            </button>
          </aside>
          <img src={imageAbout} alt="" className="w-128 shadow-3xl rounded-3xl" />
        </article>
        <article className="grid grid-cols-2 gap-14 justify-center items-center p-10">
          <aside className="pl-16">
            <Typography as="h1" className="text-5xl font-700">
              Estamos preparados para asesorarte.
            </Typography>
            <br />
            <Typography as="p" className="text-lg font-400 mb-10">
              <b>Infante, Fernández & Asociados</b> es una Firma Legal, compuesta por un equipo multidisciplinario de
              profesionales que en atención a casos particulares de la vida social, asesora y representa a personas
              naturales y jurídicas, cualquiera sea su modalidad o denominación en la esfera publica o privada en
              defensa de sus derechos e intereses.
            </Typography>
            <button className="bg-blueWhite rounded-xl py-3 px-5 font-600 text-white shadow-md hover:scale-105 hover:shadow-xl transition-all duration-150">
              Explora nuestros servicios
            </button>
          </aside>
        </article>
      </section>
    </>
  );
};
