import { Navbar, MobileNav, Typography, Button, IconButton } from "@material-tailwind/react";
import iconWNameBlue from "./../assets/img/logoiconombre-blue.jpg";
import iconWNameOrange from "./../assets/img/logoiconombre-orange.jpg";
import iconBlue from "./../assets/img/logo-blue.png";
import iconOrange from "./../assets/img/logo-orange.png";
import iconMenu from "./../assets/icons/menu.png";
import iconClose from "./../assets/icons/cerrar.png";
import { useHeaderOptions } from "../hooks";
// import "../helpers/navigation";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = ({ color, option }) => {
  const [
    showHideMenu,
    showSubOption,
    hideSubOption,
    showMobileMenu,
    subOption,
    rotateButton,
    showOrHideOption,
    showOrHide,
  ] = useHeaderOptions();

  let imgMenu = "";
  if (rotateButton) imgMenu = <img src={iconClose} alt="" className="w-8" />;
  else imgMenu = <img src={iconMenu} alt="" className="w-full" />;
  let icon, iconName;
  color === "blue"
    ? ((icon = iconBlue), (iconName = iconWNameBlue))
    : ((icon = iconOrange), (iconName = iconWNameOrange));

  return (
    <nav className="px-2 lg:px-5 py-0 rounded-none fixed top-0 flex justify-between items-center h-20 z-50 bg-white md:bg-white w-screen max-w-none shadow-md">
      <Link
        to="/"
        className={`button-home flex items-center ${
          screen.width < 1100 ? "w-20" : "w-60"
        } w-60 h-full bg-transparent shadow-none p-3 hover:bg-transparent hover:opacity-100 hover:shadow-none`}
        data-name="home"
      >
        <img src={screen.width < 1100 ? icon : iconName} alt="" className="w-full img-logo pointer-events-none" />
      </Link>

      <Button
        className={`w-6 p-0 bg-transparent shadow-none rounded-none h-full hover:bg-transparent hover:opacity-100 hover:shadow-none transition-all duration-300 md:hidden ${
          rotateButton ? "rotate-180" : ""
        }`}
        onClick={() => showHideMenu()}
      >
        {imgMenu}
      </Button>

      <ul
        className={`options-container h-max lg:h-full p-0 justify-end items-center absolute top-20 z-50 left-0 w-full bg-white md:bg-white md:static md:flex ${
          showMobileMenu ? "animate-showOption" : "hidden"
        }`}
      >
        <Typography as="li" className="text-black h-full flex items-center">
          <Link
            to="/about"
            className={`option-select h-full flex items-center px-3 py-3 md:px-3 md:py-5 lg:px-10 lg:py-5 text-15 font-400 w-full transition-all duration-150 hover:text-white hover:bg-${color} md:border-b-3 md:hover:text-black md:border-b-white md:hover:border-b-${color} md:hover:bg-gray-100 ${
              option === "about" ? `md:!border-b-blueWhite md:bg-blue-gray-50` : ""
            }`}
            data-name="about"
          >
            ¿Quiénes somos?
          </Link>
        </Typography>
        <Typography as="li" className="text-black h-max flex flex-col md:flex-row items-center relative">
          <button
            className={`option-select h-full flex items-center p-4 py-3 md:px-3 md:py-5 lg:px-10 lg:py-6 text-15 text-start mb-0 w-full font-400 transition-all duration-150 md:border-b-3 hover:text-white hover:bg-${color} md:hover:text-black md:border-b-white md:hover:border-b-${color} md:hover:bg-gray-100 ${
              subOption || showOrHide
                ? `bg-${color} text-white md:bg-white md:text-black md:hover:border-b-${color} md:hover:bg-blue-gray-50`
                : ""
            } ${option === "services" ? `md:!border-b-orangeWhite md:bg-blue-gray-50` : ""}`}
            data-name="services"
            onMouseOver={(e) => showSubOption(e)}
            onMouseOut={() => hideSubOption()}
            onTouchStart={() => showOrHideOption()}
          >
            Servicios
          </button>
          <ul
            className={`static z-50 p-0 md:p-2 flex-col w-full md:absolute md:top-18 md:w-56 md:bg-white md:rounded-md md:shadow-md ${
              subOption || showOrHide ? "flex" : "hidden"
            }`}
            onMouseOver={(e) => showSubOption(e)}
            onMouseOut={() => hideSubOption()}
          >
            <Typography as="li" className="p-0 w-full flex">
              <Link
                to="/services"
                className="services-header text-sm ps-5 py-5 md:py-2 md:px-3 w-full font-400 rounded-md transition-all duration-150 hover:bg-gray-200"
                data-name="services"
              >
                Consultoria Empresarial
              </Link>
            </Typography>
            <Typography as="li" className="p-0 w-full flex">
              <Link
                to="/services"
                className="services-header text-sm ps-5 py-5 md:py-2 md:px-3 w-full font-400 rounded-md transition-all duration-150 hover:bg-gray-200"
                data-name="services"
              >
                Abogados Expertos
              </Link>
            </Typography>
            <Typography as="li" className="p-0 w-full flex">
              <Link
                to="/services"
                className="services-header text-sm ps-5 py-5 md:py-2 md:px-3 w-full font-400 rounded-md transition-all duration-150 hover:bg-gray-200"
                data-name="services"
              >
                Asesoria Profesional
              </Link>
            </Typography>
          </ul>
        </Typography>
        {/* <Typography as="li" className="text-black h-full flex items-center">
          <Link
            to="/criterios"
            className={`option-select h-full flex items-center p-4 md:px-3 md:py-5 lg:px-10 lg:py-5 text-15 w-full font-400 transition-all duration-150 md:border-b-3 hover:text-white hover:bg-${color} md:hover:text-black md:border-b-white md:hover:border-b-${color} md:hover:bg-gray-100 ${
              option === "criterios" ? `md:!border-b-blueWhite md:bg-blue-gray-50` : ""
            }`}
            data-name="criteria"
          >
            Criterios
          </Link>
        </Typography>
        <Typography as="li" className="text-black h-full flex items-center">
          <Link
            to="/news"
            className={`option-select h-full flex items-center p-4 md:px-3 md:py-5 lg:px-10 lg:py-5 text-15 w-full font-400 transition-all duration-150 md:border-b-3 hover:text-white hover:bg-${color} md:hover:text-black md:border-b-white md:hover:border-b-${color} md:hover:bg-gray-100 ${
              option === "novedades" ? `md:!border-b-orangeWhite md:bg-blue-gray-50` : ""
            }`}
            data-name="news"
          >
            Novedades
          </Link>
        </Typography>
        <Typography as="li" className="text-black h-full flex items-center">
          <Link
            to="/join"
            className={`option-select h-full flex items-center p-4 md:px-3 md:py-5 lg:px-10 lg:py-5 text-15 w-full font-400 transition-all duration-150 md:border-b-3 hover:text-white hover:bg-${color} md:hover:text-black md:border-b-white md:hover:border-b-${color} md:hover:bg-gray-100 ${
              option === "unetenos" ? `md:!border-b-blueWhite md:bg-blue-gray-50` : ""
            }`}
            data-name="join"
          >
            Únetenos
          </Link>
        </Typography> */}
        <Typography as="li" className="text-black h-full flex items-center">
          <Link
            to="/contactUs"
            className={`option-select h-full flex items-center p-4 md:px-3 md:py-5 lg:px-10 lg:py-5 text-15 w-full font-400 transition-all duration-150 md:border-b-3 hover:text-white hover:bg-${color} md:hover:text-black md:border-b-white md:hover:border-b-${color} md:hover:bg-gray-100 ${
              option === "contactanos" ? `md:!border-b-orangeWhite md:bg-blue-gray-50` : ""
            }`}
            data-name="contact"
          >
            Contáctanos
          </Link>
        </Typography>
      </ul>
    </nav>
  );
};
