import { Banner, Cols, MainText, Titles } from "../../sections";

export const ConstitucionEmpresa = ({ subservice }) => {
  return (
    <>
      {/* // ! BANNER */}
      <Banner content={subservice.banner} />
      {/* // ! MAIN TEXT */}
      <MainText content={subservice.mainText} />
      {/* // ! TITLE */}
      <Titles content={subservice.fisrtTitle} />
      {/* // ! ADVANTAGES */}
      <Cols content={subservice.advantages} />
    </>
  );
};
