import { Banner, ImageLeftBg, ImageLeftWBg, MainText, Titles } from "../../sections";
import { OnlyText } from "../../sections/OnlyText";

export const ConstitucionPyme = ({ subservice }) => {
  return (
    <>
      <Banner content={subservice.banner} />
      <MainText content={subservice.mainText} />
      <ImageLeftWBg content={subservice.imageLeftWBg} />
      <Titles content={subservice.firstTitle} />
      <ImageLeftBg content={subservice.imageLeftBg} />
      <OnlyText content={subservice.onlyText} textAlign="center" xl="9/12" />
    </>
  );
};
