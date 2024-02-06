import { Typography } from "@material-tailwind/react";
import { Lists } from "./Lists";

export const ImageLeftWBg = ({ content }) => {
  return (
    <section className="relative lg:w-12/12 2xl:w-10/12 mx-auto p-5 mt-14 flex flex-col lg:flex-row">
      <figure className="relative w-80 sm:w-96 lg:w-4/12 h-80 sm:h-96 mx-auto p-1 bg-white rounded-full shadow-xl">
        <img src={content.image} alt="" className="w-full h-full rounded-full object-cover shadow-xl" />
      </figure>
      <article className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto mt-10 lg:mt-0 px-5 flex flex-col justify-center">
        <Typography as="p" className="font-400 text-lg leading-8">
          {content.firstText1} <b className="font-600">{content?.firstTextBlack1}</b> {content?.secondText1}{" "}
          <b className="font-600">{content?.secondTextBlack1}</b> {content?.thirdText1}{" "}
          <b className="font-600">{content?.thirdTextBlack1}</b>
        </Typography>
        {content.firstText2 ? (
          <Typography as="p" className="font-400 text-lg leading-8 mt-3">
            {content.firstText2} <b className="font-600">{content?.firstTextBlack2}</b> {content?.secondText2}{" "}
            <b className="font-600">{content?.secondTextBlack2}</b> {content?.thirdText2}{" "}
            <b className="font-600">{content?.thirdTextBlack2}</b>
          </Typography>
        ) : (
          ""
        )}
        {/* // ! LIST SECTION */}
        {content.list ? <Lists content={content} /> : ""}
      </article>
    </section>
  );
};
