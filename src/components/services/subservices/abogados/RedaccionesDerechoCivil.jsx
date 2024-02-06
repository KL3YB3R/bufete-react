import { Banner, MainText } from "../../sections";
import { Microservices } from "../../sections/Microservices";
import { OnlyText } from "../../sections/OnlyText";

export const RedaccionesDerechoCivil = ({ subservice }) => {
  return (
    <>
      <Banner content={subservice.banner} />
      <MainText content={subservice.mainText} />
      <OnlyText content={subservice.onlyText} textAlign="left" xl="9/12" />
      <Microservices content={subservice.microservices} />
    </>
  );
};
