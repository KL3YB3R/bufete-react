import { Typography } from "@material-tailwind/react";
import { Lists } from "./Lists";

export const ImageLeftBg = ({ content }) => {
  return (
    <section className="relative lg:w-12/12 2xl:w-10/12 mx-auto mt-32 xl:mt-10 p-2 flex">
      <figure className="w-72 h-72 md:w-80 md:h-80 xl:w-96 xl:h-96 absolute right-2/4 translate-x-2/4 xl:left-4 xl:right-0 xl:translate-x-0 -top-12 xl:top-26 rounded-full shadow-lg">
        <img src={content.image} alt="" className="w-full h-full object-cover rounded-full shadow-lg" />
      </figure>
      <article className="w-11/12 xl:w-10/12 mx-auto xl:ml-auto xl:mr-0 h-max xl:h-96 mt-24 bg-bgOrange p-3 rounded-xl xl:rounded-r-full flex flex-col justify-center shadow-xl">
        <Typography
          as="p"
          className="xl:ml-auto w-6/6 xl:w-5/6 leading-9 mt-36 md:mt-48 xl:mt-0 pl-4 pr-4 xl:pr-24 text-lg font-400"
        >
          {content?.firstText1} <b>{content?.firstTextBlack1}</b> {content?.secondText1}
          <b>{content?.secondTextBlack1}</b>
        </Typography>
        <div className="xl:ml-auto w-6/6 xl:w-5/6 pl-4 pr-4 xl:pr-24 mb-4 xl:mb-0 text-lg font-400">
          <Lists content={content} />
        </div>
      </article>
    </section>
  );
};
