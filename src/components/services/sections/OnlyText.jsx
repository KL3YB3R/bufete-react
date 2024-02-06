import { Typography } from "@material-tailwind/react";

export const OnlyText = ({ content, textAlign, xl }) => {
  return (
    <Typography
      as="p"
      className={`w-10/12 xl:w-${xl} font-400 mx-auto mt-20 text-lg text-${textAlign} leading-1 mb-20`}
    >
      {content}
    </Typography>
  );
};
