import { CarouselItems } from "./CarouselItems";

export const Carousel = ({ slides }) => {
  return (
    <div className="max-w-max z-30">
      <CarouselItems key="images" slides={slides} autoSlide={false} />
    </div>
  );
};
