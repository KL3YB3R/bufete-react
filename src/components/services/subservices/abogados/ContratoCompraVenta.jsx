import { Banner, ImageEngine, Lists, MainText, TextWithoutImage } from "../../sections";

export const ContratoCompraVenta = ({ subservice }) => {
  return (
    <>
      <Banner content={subservice.banner} />
      <MainText content={subservice.mainText} />
      <TextWithoutImage content={subservice.textWithoutImage} />
      <ImageEngine content={subservice.imageEngine} mt="4" />
      <TextWithoutImage content={subservice.textWithoutImage2} mt="0" />
    </>
  );
};
