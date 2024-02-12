import { Banner, MainText } from "../../sections";

export const AuditoriaCuentas = ({ subservice }) => {
  return (
    <>
      <Banner content={subservice.banner} />
      <MainText content={subservice.mainText} />
    </>
  );
};
