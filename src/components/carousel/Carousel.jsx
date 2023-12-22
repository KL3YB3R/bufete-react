import carousel1 from "./../../assets/img/carrusel1.jpg";
import carousel2 from "./../../assets/img/carrusel2.jpg";
import carousel3 from "./../../assets/img/carrusel3.jpg";
import carousel4 from "./../../assets/img/carrusel4.jpg";
import carousel5 from "./../../assets/img/carrusel5.jpg";
import { CarouselItems } from "./CarouselItems";

const slides = [carousel1, carousel2, carousel3, carousel4, carousel5];

export const Carousel = () => {
  return (
    <div className="max-w-max">
      <CarouselItems key="images" slides={slides} autoSlide={true} />
    </div>
  );
};
