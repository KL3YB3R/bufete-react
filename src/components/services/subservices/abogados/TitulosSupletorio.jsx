import { Banner, MainText, TextWithoutImage } from "../../sections";

export const TitulosSupletorio = ({ subservice }) => {
  return (
    <>
      <Banner content={subservice.banner} />
      <MainText content={subservice.mainText} />
      <TextWithoutImage content={subservice.textWithoutImage} />
    </>
  );
};
