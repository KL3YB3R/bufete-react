import { Banner, ImageLeftWBg, MainText } from "../../sections";

export const AperturaSucursalExtranjera = ({ subservice }) => {
  return (
    <>
      <Banner content={subservice.banner} />
      <MainText content={subservice.mainText} />
      <ImageLeftWBg content={subservice.imageLeftWBg} />
    </>
  );
};
