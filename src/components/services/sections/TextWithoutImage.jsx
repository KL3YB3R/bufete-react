import { Lists } from "./Lists";
import { Typography } from "@material-tailwind/react";

export const TextWithoutImage = ({ content, mt = "14" }) => {
  return (
    <section className={`w-11/12 sm:w-10/12 2xl:w-10/12 mx-auto p-5 xl:pl-20 mt-${mt} flex flex-col`}>
      <Typography as="p" className="text-lg font-400 indent-5">
        {content.firstText} <b className="font-600">{content?.firstTextBlack}</b> {content?.secondText}{" "}
        <b className="font-600">{content?.secondTextBlack}</b>
      </Typography>
      {content.list ? <Lists content={content} /> : ""}
      {content.firstText2 ? (
        <Typography as="p" className="text-lg font-400 indent-5 mt-2">
          {content.firstText2} <b className="font-600">{content?.firstTextBlack2}</b> {content?.secondText2}{" "}
          <b className="font-600">{content?.secondTextBlack2}</b>
        </Typography>
      ) : (
        ""
      )}
    </section>
  );
};
