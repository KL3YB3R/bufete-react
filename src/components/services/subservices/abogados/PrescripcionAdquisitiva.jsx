import { Banner, ImageLeftWBg, MainText, TextWithoutImage, Titles } from "../../sections";

export const PrescripcionAdquisitiva = ({ subservice }) => {
  return (
    <>
      <Banner content={subservice.banner} />
      <MainText content={subservice.mainText} />
      <TextWithoutImage content={subservice.textWithoutImage} />
      <Titles content={subservice.firstTitle} />
      <TextWithoutImage content={subservice.textWithoutImage2} />
      <ImageLeftWBg content={subservice.imageLeftWBg} />
    </>
  );
};
