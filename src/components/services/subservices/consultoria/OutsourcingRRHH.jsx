import { Banner, ImageLeftBg, ImageLeftWBg, MainText, TextWithoutImage } from "../../sections";

export const OutsourcingRRHH = ({ subservice }) => {
  return (
    <>
      <Banner content={subservice.banner} />
      <MainText content={subservice.mainText} />
      <ImageLeftWBg content={subservice.imageLeftWBg} />
      <TextWithoutImage content={subservice.textWithoutImage} />
      <TextWithoutImage content={subservice.textWithoutImage2} />
    </>
  );
};
