import { Navbar, MobileNav, Typography, Button, IconButton } from "@material-tailwind/react";
import iconBlue from "./../../assets/img/logo-blue.png";
import iconMenu from "./../../assets/icons/menu.png";
import iconClose from "./../../assets/icons/cerrar.png";
import { useHeaderOptions } from "../../hooks/useHeaderOptions";
import "./../../helpers/navigation";

export const Header = ({ color }) => {
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

  return (
    <Navbar className="px-5 py-0 rounded-none flex justify-between h-16 relative z-50 bg-white w-screen max-w-none">
      <Button
        className="button-home w-20 h-full bg-transparent shadow-none p-3 hover:bg-transparent hover:opacity-100 hover:shadow-none"
        data-name="home"
      >
        <img src={iconBlue} alt="" className="w-full img-logo pointer-events-none" />
      </Button>

      <Button
        className={`w-6 p-0 bg-transparent shadow-none rounded-none h-full hover:bg-transparent hover:opacity-100 hover:shadow-none transition-all duration-300 md:hidden ${
          rotateButton ? "rotate-180" : ""
        }`}
        onClick={() => showHideMenu()}
      >
        {imgMenu}
      </Button>

      <ul
        className={`options-container h-max lg:h-full p-0 justify-end items-center absolute top-14 z-50 left-0 w-full bg-white md:bg-transparent md:static md:flex ${
          showMobileMenu ? "animate-showOption" : "hidden"
        }`}
      >
        <Typography as="li" className="text-black h-full flex items-center">
          <a
            href="services"
            className="option-select px-4 py-3 md:px-3 md:py-5 lg:p-5 text-sm font-400 w-full transition-all duration-150 md:border-b-3 hover:text-white hover:bg-blue md:hover:text-black md:border-b-white md:hover:border-b-blue md:hover:bg-blue-gray-50"
            data-name="about"
          >
            ¿Quiénes somos?
          </a>
        </Typography>
        <Typography as="li" className="text-black h-max flex flex-col md:flex-row items-center relative">
          <button
            className={`option-select p-4 py-3 md:px-3 md:py-5 lg:p-5 text-sm text-start w-full font-400 transition-all duration-150 md:border-b-3 hover:text-white hover:bg-blue md:hover:text-black md:border-b-white md:hover:border-b-orange md:hover:bg-blue-gray-50 ${
              subOption || showOrHide
                ? "bg-blue text-white md:bg-white md:text-black md:hover:border-b-blue md:hover:bg-blue-gray-50"
                : ""
            }`}
            data-name="services"
            onMouseOver={(e) => showSubOption(e)}
            onMouseOut={() => hideSubOption()}
            onTouchStart={() => showOrHideOption()}
          >
            Servicios
          </button>
          <ul
            className={`static z-50 p-0 md:p-2 flex-col w-full md:absolute md:top-14 md:w-52 md:bg-white md:rounded-md md:shadow-md ${
              subOption || showOrHide ? "flex" : "hidden"
            }`}
            onMouseOver={(e) => showSubOption(e)}
            onMouseOut={() => hideSubOption()}
          >
            <Typography as="li" className="p-0 w-full flex">
              <a
                href="services"
                className="services-header text-sm ps-5 py-2 md:py-1 md:px-2 w-full font-400 rounded-md transition-all duration-150 hover:bg-gray-200"
                data-name="services"
              >
                Consultoria Empresarial
              </a>
            </Typography>
            <Typography as="li" className="p-0 w-full flex">
              <a
                href="service"
                className="services-header text-sm ps-5 py-2 md:py-1 md:px-2 w-full font-400 rounded-md transition-all duration-150 hover:bg-gray-200"
                data-name="services"
              >
                Abogados Expertos
              </a>
            </Typography>
            <Typography as="li" className="p-0 w-full flex">
              <a
                href="service"
                className="services-header text-sm ps-5 py-2 md:py-1 md:px-2 w-full font-400 rounded-md transition-all duration-150 hover:bg-gray-200"
                data-name="services"
              >
                Asesoria Profesional
              </a>
            </Typography>
          </ul>
        </Typography>
        <Typography as="li" className="text-black h-full flex items-center">
          <a
            href="#"
            className="option-select p-4 md:px-3 md:py-5 lg:p-5 text-sm w-full font-400 transition-all duration-150 md:border-b-3 hover:text-white hover:bg-blue md:hover:text-black md:border-b-white md:hover:border-b-blue md:hover:bg-blue-gray-50"
            data-name="criteria"
          >
            Criterios
          </a>
        </Typography>
        <Typography as="li" className="text-black h-full flex items-center">
          <a
            href="#"
            className="option-select p-4 md:px-3 md:py-5 lg:p-5 text-sm w-full font-400 transition-all duration-150 md:border-b-3 hover:text-white hover:bg-blue md:hover:text-black md:border-b-white md:hover:border-b-orange md:hover:bg-blue-gray-50"
            data-name="news"
          >
            Novedades
          </a>
        </Typography>
        <Typography as="li" className="text-black h-full flex items-center">
          <a
            href="#"
            className="option-select p-4 md:px-3 md:py-5 lg:p-5 text-sm w-full font-400 transition-all duration-150 md:border-b-3 hover:text-white hover:bg-blue md:hover:text-black md:border-b-white md:hover:border-b-blue md:hover:bg-blue-gray-50"
            data-name="join"
          >
            Únetenos
          </a>
        </Typography>
        <Typography as="li" className="text-black h-full flex items-center">
          <a
            href="#"
            className="option-select p-4 md:px-3 md:py-5 lg:p-5 text-sm w-full font-400 transition-all duration-150 md:border-b-3 hover:text-white hover:bg-blue md:hover:text-black md:border-b-white md:hover:border-b-orange md:hover:bg-blue-gray-50"
            data-name="contact"
          >
            Contáctanos
          </a>
        </Typography>
      </ul>
    </Navbar>
  );
};
