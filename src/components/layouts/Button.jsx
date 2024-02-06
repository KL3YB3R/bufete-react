import { Typography } from "@material-tailwind/react";
import { useButtonsToMicroservices } from "../../hooks";

export const Button = ({ content }) => {
  const [onChangeEffect] = useButtonsToMicroservices();

  return (
    <button
      className={`flex flex-col justify-center items-center buttons-microservices`}
      data-name={content.key}
      onClick={(e) => {
        e.preventDefault();
        onChangeEffect(e.target);
      }}
    >
      {/* // * SPAN PARA MOSTRAR EL ICONO DEL MICROSERVICIO */}
      <span
        className={`rounded-full border-3 border-gray-100 p-3 md:p-5 shadow-md transition-all duration-150 mb-3 inactive ${content.color} pointer-events-none`}
      >
        <img src={content.image} alt="" className="w-8 sm:w-12 md:w-16 pointer-events-none" />
      </span>
      <Typography as="p" className="font-600 uppercase text-xs sm:text-sm md:text-md">
        {content.name}
      </Typography>
    </button>
  );
};
