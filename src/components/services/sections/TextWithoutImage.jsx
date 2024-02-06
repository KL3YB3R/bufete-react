import { Lists } from "./Lists";
import { Typography } from "@material-tailwind/react";

export const TextWithoutImage = ({ content }) => {
  return (
    <section className="w-11/12 sm:w-10/12 2xl:w-10/12 mx-auto p-5 xl:pl-20 mt-14 flex flex-col">
      <Typography as="p" className="text-lg font-400">
        {content.firstText} <b className="font-600">{content?.firstTextBlack}</b> {content?.secondText}{" "}
        <b className="font-600">{content?.secondTextBlack}</b>
      </Typography>
      {content.list ? <Lists content={content} /> : ""}
    </section>
  );
};
