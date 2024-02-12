import { Banner, ImageLeftWBg, MainText, TextWithoutImage, Titles } from "../../sections";

export const AccionReivindicatoria = ({ subservice }) => {
  return (
    <>
      <Banner content={subservice.banner} />
      <MainText content={subservice.mainText} />
      <ImageLeftWBg content={subservice.imageLeftWBg} />
      <Titles content={subservice.firstTitle} />
      <TextWithoutImage content={subservice.textWithoutImage} />
    </>
  );
};
