import React from "react";
import { useArrayServices } from "../../hooks/useArraysServices";
import { Typography } from "@material-tailwind/react";

// ! IMAGES SERVICES
import iconConsultoria from "./../../assets/icons/consultoria.png";
import iconAbogado from "./../../assets/icons/abogado.png";
import iconAsesoria from "./../../assets/icons/asesoria.png";

export const ServicesItems = () => {
  const [consultoria, abogados, asesoria, onActiveConsultoria, onActiveAbogados, onActiveAsesoria] = useArrayServices();

  return (
    <>
      {/* CONSULTORIA EMPRESARIAL */}
      <aside
        className={`main-service w-full h-2/6 p-5 flex justify-between border-e-4 border-bg-gray-200 transition-all duration-150 hover:bg-gray-300 hover:rounded-tl-lg hover:border-gray-300 hover:cursor-pointer ${
          consultoria ? "bg-gray-300 rounded-tl-lg border-orangeWhite hover:border-orangeWhite" : ""
        }`}
        onClick={() => onActiveConsultoria()}
        data-container="consultoria"
      >
        <figure className="w-2/12 pointer-events-none">
          <img src={iconConsultoria} alt="" className="w-4/6 pointer-events-none" />
        </figure>
        <div className="w-10/12 pointer-events-none">
          <Typography as="p" className="uppercase font-600 text-base pointer-events-none">
            Consultoría Empresarial
          </Typography>
          <Typography as="p" className="font-400 text-base text-md mt-3 pointer-events-none">
            Consultas eficientes y la medida para resolver tus necesidades
          </Typography>
        </div>
      </aside>
      {/* ABOGADOS EXPERTOS */}
      <aside
        className={`main-service w-full h-2/6 p-5 flex justify-between border-e-4 border-bg-gray-200 transition-all duration-150 hover:bg-gray-300 hover:border-gray-300 hover:cursor-pointer ${
          abogados ? "bg-gray-300 border-orangeWhite hover:border-orangeWhite" : ""
        }`}
        onClick={() => onActiveAbogados()}
        data-container="abogados"
      >
        <figure className="w-2/12 pointer-events-none">
          <img src={iconAbogado} alt="" className="w-4/6 pointer-events-none" />
        </figure>
        <div className="w-10/12 pointer-events-none">
          <Typography as="p" className="uppercase font-600 text-base pointer-events-none">
            Abogados Expertos
          </Typography>
          <Typography as="p" className="font-400 text-base text-md mt-3 pointer-events-none">
            Contamos con un equipo especializado con amplia formación y experiencia.
          </Typography>
        </div>
      </aside>
      {/* ASESORIA PROFESIONAL */}
      <aside
        className={`main-service w-full h-2/6 p-5 flex justify-between border-e-4 border-bg-gray-200 transition-all duration-150 hover:bg-gray-300 hover:rounded-bl-lg hover:border-gray-300 hover:cursor-pointer ${
          asesoria ? "bg-gray-300 rounded-bl-lg border-orangeWhite hover:border-orangeWhite" : ""
        }`}
        onClick={() => onActiveAsesoria()}
        data-container="asesoria"
      >
        <figure className="w-2/12 pointer-events-none">
          <img src={iconAsesoria} alt="" className="w-4/6 pointer-events-none" />
        </figure>
        <div className="w-10/12 pointer-events-none">
          <Typography as="p" className="uppercase font-600 text-base pointer-events-none">
            Asesoría Profesional
          </Typography>
          <Typography as="p" className="font-400 text-base text-md mt-3 pointer-events-none">
            La mejor evaluación jurídica y financiera objetiva para
          </Typography>
        </div>
      </aside>
    </>
  );
};
