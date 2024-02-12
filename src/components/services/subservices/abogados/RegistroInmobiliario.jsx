import { Banner, ImageLeftWBg, MainText } from "../../sections";

export const RegistroInmobiliario = ({ subservice }) => {
  return (
    <>
      <Banner content={subservice.banner} />
      <MainText content={subservice.mainText} />
      <ImageLeftWBg content={subservice.imageLeftWBg} />
    </>
  );
};
