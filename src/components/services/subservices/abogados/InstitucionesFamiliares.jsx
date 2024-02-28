import { Banner, ImageEngine, MainText } from "../../sections";

export const InstitucionesFamiliares = ({ subservice }) => {
  return (
    <>
      <Banner content={subservice.banner} />
      <MainText content={subservice.mainText} />
      <ImageEngine content={subservice.imageEngine} />
    </>
  );
};
