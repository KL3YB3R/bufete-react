import { Typography } from "@material-tailwind/react";

export const Titles = ({ content }) => {
  return (
    <Typography as="h3" className={`text-3xl md:text-4xl font-700 mt-24 text-center`}>
      {content}
    </Typography>
  );
};
