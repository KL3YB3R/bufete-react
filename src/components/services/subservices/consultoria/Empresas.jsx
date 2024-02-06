import { Banner, MainText, Types } from "../../sections";

export const Empresas = ({ subservice }) => {
  return (
    <>
      <Banner content={subservice.banner} />
      <MainText content={subservice.mainText} />
      <Types content={subservice.types} />
    </>
  );
};
