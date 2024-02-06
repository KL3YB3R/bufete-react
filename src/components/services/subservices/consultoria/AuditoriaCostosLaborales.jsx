import { Banner, ImageLeftBg, MainText } from "../../sections";

export const AuditoriaCostosLaborales = ({ subservice }) => {
  return (
    <>
      <Banner content={subservice.banner} />
      <MainText content={subservice.mainText} />
      <ImageLeftBg content={subservice.imageLeftBg} />
    </>
  );
};
