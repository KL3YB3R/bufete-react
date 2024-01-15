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
        className={`main-service w-full h-max md:h-2/6 p-5 flex justify-between items-center md:items-start border-b-4 md:border-e-4 md:border-b-0 border-bg-gray-200 transition-all duration-150 hover:bg-gray-300 hover:rounded-t-lg hover:md:rounded-tl-lg hover:md:rounded-tr-none hover:border-gray-300 hover:cursor-pointer ${
          consultoria
            ? "bg-gray-300 rounded-t-lg md:rounded-tl-lg md:rounded-tr-none border-orangeWhite hover:border-orangeWhite"
            : ""
        }`}
        onClick={() => onActiveConsultoria()}
        data-container="consultoria"
      >
        <figure className="w-1/12 md:w-2/12 pointer-events-none">
          <img src={iconConsultoria} alt="" className="w-4/6 pointer-events-none" />
        </figure>
        <div className="w-11/12 md:w-10/12 pointer-events-none">
          <Typography as="p" className="uppercase font-600 text-base pointer-events-none">
            Consultoría Empresarial
          </Typography>
          <Typography as="p" className="font-400 text-base text-md mt-5 md:mt-8 hidden md:inline pointer-events-none">
            Consultas eficientes y la medida para resolver tus necesidades
          </Typography>
        </div>
      </aside>
      {/* ABOGADOS EXPERTOS */}
      <aside
        className={`main-service w-full h-max md:h-2/6 p-5 flex justify-between items-center md:items-start border-b-4 md:border-e-4 md:border-b-0 border-bg-gray-200 transition-all duration-150 hover:bg-gray-300 hover:border-gray-300 hover:cursor-pointer ${
          abogados ? "bg-gray-300 border-orangeWhite hover:border-orangeWhite" : ""
        }`}
        onClick={() => onActiveAbogados()}
        data-container="abogados"
      >
        <figure className="w-1/12 md:w-2/12 pointer-events-none">
          <img src={iconAbogado} alt="" className="w-4/6 pointer-events-none" />
        </figure>
        <div className="w-11/12 md:w-10/12 pointer-events-none">
          <Typography as="p" className="uppercase font-600 text-base pointer-events-none">
            Abogados Expertos
          </Typography>
          <Typography as="p" className="font-400 text-base text-md mt-5 md:mt-8 hidden md:inline pointer-events-none">
            Contamos con un equipo especializado con amplia formación y experiencia.
          </Typography>
        </div>
      </aside>
      {/* ASESORIA PROFESIONAL */}
      <aside
        className={`main-service w-full h-max md:h-2/6 p-5 flex justify-between items-center md:items-start border-b-4 md:border-e-4 md:border-b-0 border-bg-gray-200 transition-all duration-150 hover:bg-gray-300 hover:rounded-bl-none hover:rounded-tr-none hover:md:rounded-bl-lg hover:md:rounded-tr-none hover:border-gray-300 hover:cursor-pointer ${
          asesoria ? "bg-gray-300 rounded-bl-none md:rounded-bl-lg border-orangeWhite hover:border-orangeWhite" : ""
        }`}
        onClick={() => onActiveAsesoria()}
        data-container="asesoria"
      >
        <figure className="w-1/12 md:w-2/12 pointer-events-none">
          <img src={iconAsesoria} alt="" className="w-4/6 pointer-events-none" />
        </figure>
        <div className="w-11/12 md:w-10/12 pointer-events-none">
          <Typography as="p" className="uppercase font-600 text-base pointer-events-none">
            Asesoría Profesional
          </Typography>
          <Typography as="p" className="font-400 text-base text-md mt-5 md:mt-8 hidden md:inline pointer-events-none">
            La mejor evaluación jurídica y financiera objetiva para
          </Typography>
        </div>
      </aside>
    </>
  );
};
