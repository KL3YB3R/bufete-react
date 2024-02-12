import { Banner, ImageEngine, MainText, TextWithoutImage, Titles } from "../../sections";

export const ConstitucionConsorcios = ({ subservice }) => {
  return (
    <>
      <Banner content={subservice.banner} />
      <MainText content={subservice.mainText} />
      <Titles content={subservice.firstTitle} />
      <ImageEngine content={subservice.imageEngine} />
    </>
  );
};
