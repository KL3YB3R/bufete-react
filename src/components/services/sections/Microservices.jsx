import { Button } from "../../layouts/Button";
import { Section } from "../../layouts/Section";

export const Microservices = ({ content, mt = "0", cols = "6", widthLg = "w-10/12" }) => {
  return (
    <section className={`w-11/12 lg:${widthLg} mx-auto mt-${mt} animate__animated title-section`}>
      <article
        className={`w-full grid grid-cols-3 gap-y-8 ${
          cols === "5" ? "xl:grid-cols-5" : cols === "7" ? "xl:grid-cols-7" : "xl:grid-cols-6"
        } justify-center items-start buttons-container`}
      >
        {/* // ? BOTTONES PARA SELECCIONAR EL MICROSERVICIO */}
        {content.buttons.map((button, i) => (
          <Button key={i} content={button} />
        ))}
      </article>
      {content.sections ? content.sections.map((section, i) => <Section key={i} content={section} />) : ""}
    </section>
  );
};
