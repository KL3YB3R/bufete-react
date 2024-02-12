import { Typography } from "@material-tailwind/react";

export const OnlyText = ({ content, textAlign = "left", xl, mb = "20", mt = "20" }) => {
  return (
    <Typography
      as="p"
      className={`w-10/12 xl:w-${xl} font-400 mx-auto mt-${mt} text-lg text-${textAlign} leading-1 mb-${mb} indent-4`}
    >
      <b>{content.initialTextBlack}</b>
      {content.firstText} <b>{content.firstTextBlack}</b> {content.secondText} <b>{content.secondTextBlack}</b>{" "}
      {content.thirdText} <b>{content.thirdTextBlack}</b> {content.fourthText} <b>{content.fourthTextBlack}</b>
    </Typography>
  );
};
