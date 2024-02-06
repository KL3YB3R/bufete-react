import { Typography } from "@material-tailwind/react";

export const MainText = ({ content }) => {
  return (
    <Typography as="h5" className="mt-24 w-5/6 lg:w-4/6 mx-auto text-xl text-center leading-1 font-400">
      {content.firstText} <b className="text-orange">{content?.textBlack1}</b> {content?.secondText}{" "}
      <b className="text-orange">{content?.textBlack2}</b> {content?.thirdText3}{" "}
      <b className="text-orange">{content?.textBlack3}</b>
    </Typography>
  );
};
