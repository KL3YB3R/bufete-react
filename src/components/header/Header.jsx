import { Navbar, MobileNav, Typography, Button, IconButton } from "@material-tailwind/react";
import iconBlue from "./../../assets/img/logo-blue.png";
import iconMenu from "./../../assets/icons/menu.png";
import iconClose from "./../../assets/icons/cerrar.png";
import { useHeaderOptions } from "../../hooks/useHeaderOptions";

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
    <Navbar className="px-5 py-0 rounded-none flex justify-between h-16 relative z-30 bg-white">
      <Button className="w-20 h-full bg-transparent shadow-none p-3 hover:bg-transparent hover:opacity-100 hover:shadow-none">
        <img src={iconBlue} alt="" className="w-full" />
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
        className={`h-full p-0 justify-end items-center absolute top-14 left-0 w-full bg-white md:bg-transparent md:static md:flex ${
          showMobileMenu ? "animate-showOption" : "hidden"
        }`}
      >
        <Typography as="li" className="text-black h-full flex items-center">
          <a
            href="#"
            className="px-4 py-3 md:px-3 md:py-5 lg:p-5 text-sm w-full font-light transition-all duration-150 md:border-b-3 hover:text-white hover:bg-blue md:hover:text-black md:border-b-white md:hover:border-b-blue md:hover:bg-blue-gray-50"
          >
            ¿Quiénes somos?
          </a>
        </Typography>
        <Typography as="li" className="text-black h-max flex flex-col md:flex-row items-center relative">
          <a
            href="#"
            className={`p-4 py-3 md:px-3 md:py-5 lg:p-5 text-sm w-full font-light transition-all duration-150 md:border-b-3 hover:text-white hover:bg-blue md:hover:text-black md:border-b-white md:hover:border-b-blue md:hover:bg-blue-gray-50 ${
              subOption || showOrHide
                ? "bg-blue text-white md:bg-white md:text-black md:hover:border-b-blue md:hover:bg-blue-gray-50"
                : ""
            }`}
            onMouseOver={(e) => showSubOption(e)}
            onMouseOut={() => hideSubOption()}
            onTouchStart={() => showOrHideOption()}
          >
            Servicios
          </a>
          <ul
            className={`static z-10 p-0 md:p-2 flex-col w-full md:absolute md:top-14 md:w-52 md:bg-white md:rounded-md md:shadow-md ${
              subOption || showOrHide ? "flex" : "hidden"
            }`}
            onMouseOver={(e) => showSubOption(e)}
            onMouseOut={() => hideSubOption()}
          >
            <Typography as="li" className="p-0 w-full flex">
              <a
                href="#"
                className="text-sm ps-5 py-2 md:py-1 md:px-2 w-full rounded-md transition-all duration-150 hover:bg-gray-200"
              >
                Consultoria Empresarial
              </a>
            </Typography>
            <Typography as="li" className="p-0 w-full flex">
              <a
                href="#"
                className="text-sm ps-5 py-2 md:py-1 md:px-2 w-full rounded-md transition-all duration-150 hover:bg-gray-200"
              >
                Abogados Expertos
              </a>
            </Typography>
            <Typography as="li" className="p-0 w-full flex">
              <a
                href="#"
                className="text-sm ps-5 py-2 md:py-1 md:px-2 w-full rounded-md transition-all duration-150 hover:bg-gray-200"
              >
                Asesoria Profesional
              </a>
            </Typography>
          </ul>
        </Typography>
        <Typography as="li" className="text-black h-full flex items-center">
          <a
            href="#"
            className="p-4 md:px-3 md:py-5 lg:p-5 text-sm w-full font-light transition-all duration-150 md:border-b-3 hover:text-white hover:bg-blue md:hover:text-black md:border-b-white md:hover:border-b-blue md:hover:bg-blue-gray-50"
          >
            Criterios
          </a>
        </Typography>
        <Typography as="li" className="text-black h-full flex items-center">
          <a
            href="#"
            className="p-4 md:px-3 md:py-5 lg:p-5 text-sm w-full font-light transition-all duration-150 md:border-b-3 hover:text-white hover:bg-blue md:hover:text-black md:border-b-white md:hover:border-b-blue md:hover:bg-blue-gray-50"
          >
            Novedades
          </a>
        </Typography>
        <Typography as="li" className="text-black h-full flex items-center">
          <a
            href="#"
            className="p-4 md:px-3 md:py-5 lg:p-5 text-sm w-full font-light transition-all duration-150 md:border-b-3 hover:text-white hover:bg-blue md:hover:text-black md:border-b-white md:hover:border-b-blue md:hover:bg-blue-gray-50"
          >
            Únetenos
          </a>
        </Typography>
        <Typography as="li" className="text-black h-full flex items-center">
          <a
            href="#"
            className="p-4 md:px-3 md:py-5 lg:p-5 text-sm w-full font-light transition-all duration-150 md:border-b-3 hover:text-white hover:bg-blue md:hover:text-black md:border-b-white md:hover:border-b-blue md:hover:bg-blue-gray-50"
          >
            Contáctanos
          </a>
        </Typography>
      </ul>
    </Navbar>
  );
};
