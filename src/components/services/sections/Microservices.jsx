import { Button } from "../../layouts/Button";
import { Section } from "../../layouts/Section";

export const Microservices = ({ content }) => {
  return (
    <section className="w-11/12 lg:w-10/12 mx-auto">
      <article className="w-full grid grid-cols-3 gap-y-8 xl:grid-cols-6 justify-center items-start buttons-container">
        {/* // ? BOTTONES PARA SELECCIONAR EL MICROSERVICIO */}
        {content.buttons.map((button, i) => (
          <Button key={i} content={button} />
        ))}
      </article>
      {content.sections.map((section, i) => (
        <Section key={i} content={section} />
      ))}
    </section>
  );
};
