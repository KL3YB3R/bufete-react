import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import ArrowWhite from "./../../../assets/icons/arrow-white.png";

export const Banner = ({ content }) => {
  return (
    <section className="flex flex-col-reverse mt-10 sm:mt-24 md:mt-32 lg:mt-0 lg:flex-row justify-between items-start h-102">
      {/* // ? BANNER SECTION LEFT */}
      <article className="w-full lg:w-4/12 pl-0 lg:pl-12 pt-10">
        <Typography
          as="h1"
          className="w-full text-4xl text-center lg:text-left xl:text-5xl font-600 title-subservice mb-6"
        >
          {content.title}
        </Typography>
        <Typography as="h4" className="w-full font-400 px-8 lg:px-0">
          {content.subtitle}
        </Typography>

        <Link
          to="/services"
          className="mt-10 ml-8 lg:ml-0 lg:mt-20 w-max text-white rounded-md px-8 py-2 relative flex items-center normal-case text-md font-400 bg-otherOrangeWhite hover:shadow-none hover:bg-orangeWhite button-back-menu"
        >
          <img src={ArrowWhite} alt="" className="rotate-90 w-3 transition-all duration-300" />
          Volver al Menu
        </Link>
      </article>
      {/* // ? BANNER SECTION RIGHT */}
      <img src={content.imageBanner} className="w-full lg:w-8/12 h-full lg:rounded-bl-800 object-cover"></img>
    </section>
  );
};
