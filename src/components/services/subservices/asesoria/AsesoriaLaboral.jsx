import { Banner, MainText } from "../../sections";
import { Microservices } from "../../sections/Microservices";

export const AsesoriaLaboral = ({ subservice }) => {
  return (
    <>
      <Banner content={subservice.banner} />
      <MainText content={subservice.mainText} />
      <Microservices content={subservice.microservices} mt="16" cols="5" />
    </>
  );
};
