import { CarouselItems } from "./CarouselItems";

export const Carousel = ({ slides }) => {
  return (
    <div className="max-w-max z-30 mt-20">
      <CarouselItems key="images" slides={slides} autoSlide={true} />
    </div>
  );
};
