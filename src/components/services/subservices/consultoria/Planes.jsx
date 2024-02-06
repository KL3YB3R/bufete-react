import { Banner, Cards, MainText } from "../../sections";

export const Planes = ({ subservice }) => {
  return (
    <>
      <Banner content={subservice.banner} />
      <MainText content={subservice.mainText} />
      <Cards content={subservice.cards} />
    </>
  );
};
