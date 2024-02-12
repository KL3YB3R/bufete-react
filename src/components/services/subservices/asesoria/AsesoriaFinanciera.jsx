import { Banner, MainText } from "../../sections";
import { Microservices } from "../../sections/Microservices";

export const AsesoriaFinanciera = ({ subservice }) => {
  return (
    <>
      <Banner content={subservice.banner} />
      <MainText content={subservice.mainText} />
      <Microservices content={subservice.microservices} widthLg="w-11/12" mt="16" cols="7" />
    </>
  );
};
