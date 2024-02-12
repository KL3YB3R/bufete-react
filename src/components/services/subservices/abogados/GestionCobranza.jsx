import { Banner, MainText, TextWithoutImage } from "../../sections";

export const GestionCobranza = ({ subservice }) => {
  return (
    <>
      <Banner content={subservice.banner} />
      <MainText content={subservice.mainText} />
      <TextWithoutImage content={subservice.textWithoutImage} />
    </>
  );
};
