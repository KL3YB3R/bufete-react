import { Typography } from "@material-tailwind/react";
import LogoFooter from "./../assets/img/logonombre.png";
import FacebookBlueIcon from "./../assets/icons/blueIcons/facebook-blue.png";
import FacebookOrangeIcon from "./../assets/icons/orangeIcons/facebook-orange.png";
import InstagramBlueIcon from "./../assets/icons/blueIcons/instagram-blue.png";
import InstagramOrangeIcon from "./../assets/icons/orangeIcons/instagram-orange.png";
import TwitterBlueIcon from "./../assets/icons/blueIcons/twitter-blue.png";
import TwitterOrangeIcon from "./../assets/icons/orangeIcons/twitter-orange.png";

export const Footer = ({ color }) => {
  return (
    <footer className="sm:flex justify-center items-center shadow-footer p-2 mt-10 h-44 sm:h-16 w-full">
      <article className="w-12/12 sm:w-4/12 flex justify-center mt-3 mb-3 sm:mt-0 sm:mb-0">
        <img src={LogoFooter} alt="" className="w-40 h-full" />
      </article>
      <Typography as="p" className="w-12/12 sm:w-4/12 text-center mb-3 sm:mb-0 font-400">
        (C) Copyright 2024. Todos los derechos reservados
      </Typography>
      <article className="w-12/12 sm:w-4/12 flex justify-center">
        <img src={color === "blue" ? FacebookBlueIcon : FacebookOrangeIcon} alt="" className="h-full w-6 mr-2" />
        <img src={color === "blue" ? InstagramBlueIcon : InstagramOrangeIcon} alt="" className="h-full w-6 mr-3" />
        <img src={color === "blue" ? TwitterBlueIcon : TwitterOrangeIcon} alt="" className="h-full w-6" />
      </article>
    </footer>
  );
};
