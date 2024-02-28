import { Footer } from "./Footer";
import { Header } from "./Header";
import callIcon from "./../assets/icons/orangeIcons/telefono.png";
import emailIcon from "./../assets/icons/orangeIcons/correo.png";
import { Input, Typography } from "@material-tailwind/react";

import FacebookOrangeIcon from "./../assets/icons/orangeIcons/facebook-orange.png";
import InstagramOrangeIcon from "./../assets/icons/orangeIcons/instagram-orange.png";
import TwitterOrangeIcon from "./../assets/icons/orangeIcons/twitter-orange.png";
import { useSendEmail } from "../hooks";

export const ContacUs = ({ color }) => {
  const [onSendEmail] = useSendEmail();

  return (
    <>
      <Header color={color} option="contactanos" />

      <section className="mt-20 flex justify-center items-center h-screen">
        {/* // ! CONTACT CARD */}
        <article className="flex w-full h-4/6 relative lg:bg-otherOrangeWhite lg:shadow-lg">
          <aside className="w-10/12 absolute -top-32 md:-top-24 lg:-top-0 left-0 right-0 lg:relative mx-auto py-5 grid md:grid-cols-3 gap-0 md:gap-4 w-12/12 lg:flex lg:flex-col justify-center px-2 ">
            <figure className="flex flex-col lg:flex-row items-center justify-center lg:justify-start mb-3 md:mb-10 bg-otherOrangeWhite lg:bg-transparent rounded-md lg:rounded-none shadow-lg lg:shadow-none p-2 lg:p-0">
              <img
                src={callIcon}
                alt=""
                className="w-10 lg:w-14 bg-white p-2 rounded-full ml-2 mr-3 lg:mr-5 lg:ml-0 mb-2 lg:mb-0 hidden md:inline"
              />
              <div className="flex flex-col justify-start">
                <Typography as="p" className="uppercase text-center lg:text-start text-white font-600 mb-2 lg:mb-0">
                  Llámanos
                </Typography>
                <Typography as="p" className="uppercase text-white font-600 text-md">
                  (xxxx) xxx xx xx / (xxxx) xxx xx xx
                </Typography>
              </div>
            </figure>
            <figure className="flex flex-col lg:flex-row items-center justify-center lg:justify-start mb-3 md:mb-10 bg-otherOrangeWhite lg:bg-transparent rounded-md lg:rounded-none shadow-lg lg:shadow-none p-2 lg:p-0">
              <img
                src={emailIcon}
                alt=""
                className="w-10 lg:w-14 bg-white p-2 rounded-full ml-2 mr-3 lg:mr-5 lg:ml-0 mb-2 lg:mb-0 hidden md:inline"
              />
              <div className="flex flex-col justify-start">
                <Typography as="p" className="uppercase text-white font-600">
                  Nuestro Correo es:
                </Typography>
                <Typography as="p" className="text-white font-600 text-md">
                  xxxxxxxxx@gmail.com
                </Typography>
              </div>
            </figure>
            <figure className=" flex-col items-center lg:items-start justify-center lg:justify-start mb-3 md:mb-10 bg-otherOrangeWhite lg:bg-transparent rounded-md lg:rounded-none shadow-lg lg:shadow-none p-2 lg:p-0 hidden md:flex">
              <Typography as="p" className="uppercase text-white font-700 text-xl lg:text-3xl pl-2 lg:mb-2">
                Síguenos
              </Typography>
              <div className="flex justify-start items-center mt-5">
                <img src={FacebookOrangeIcon} alt="" className="w-8 lg:w-14 bg-white p-1 rounded-full mr-3 lg:mr-5" />
                <img src={InstagramOrangeIcon} alt="" className="w-8 lg:w-14 bg-white p-1 rounded-full mr-3 lg:mr-5" />
                <img src={TwitterOrangeIcon} alt="" className="w-8 lg:w-14 bg-white p-1 rounded-full mr-3 lg:mr-5" />
              </div>
            </figure>
          </aside>
          <form
            action="#"
            method="POST"
            className="flex flex-col justify-center mx-auto lg:absolute mt-0 md:mt-0 lg:-top-10 lg:right-10 2xl:right-20 border-1 border-gray-200 bg-white w-5/6 lg:w-3/6 2xl:w-2/6 lg:h-128 h-max shadow-2xl rounded-lg px-5 pb-10 lg:pb-0"
          >
            <Typography
              as="h3"
              className="text-center font-800 text-orangeText text-xl uppercase mt-20 md:mt-24 lg:mt-0 mb-10"
            >
              Contáctanos
            </Typography>
            <figure className="w-full grid sm:grid-cols-2 gap-5">
              <Input label="Nombre" className="focus:border-orange focus:ring-0"></Input>
              <Input label="Apellido" className=""></Input>
            </figure>
            <br />
            <Input label="Correo" className=""></Input>
            <br />
            <label htmlFor="description-contact" className="font-600 mb-2 pl-1">
              ¿Por qué nos estás contactanto?
            </label>
            <textarea
              id="description-contact"
              className="border-gray-300 rounded-lg outline-none mb-2 text-sm"
              rows="5"
              placeholder="Escribe resumidamente tu inquietud o problema en esta casilla."
            ></textarea>
            <Typography as="p" className="font-400 indent-3 text-md mb-7">
              No te preocupes! La información que has ingresado será enviada directamente a uno de nuestros abogados. Te
              responderemos en la brevedad posible.
            </Typography>

            <button
              onClick={(e) => onSendEmail(e)}
              className="bg-bgOrange rounded-lg py-2 w-max mx-auto px-4 shadow-xl font-500 hover:bg-orangeWhite hover:text-white transition-all duration-150"
            >
              Enviar
            </button>
          </form>
        </article>
      </section>

      <Footer color={color} />
    </>
  );
};
