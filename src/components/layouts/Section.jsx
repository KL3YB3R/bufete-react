import { CardsButtons } from "../services/sections";

export const Section = ({ content }) => {
  return (
    <article id={content.key} className="hidden w-12/12 mx-auto p-2 mt-10 container-buttons-content opacity-0">
      {/* <Typography as="h4" className="font-600 text-lg text-center">
        {content.title}
      </Typography> */}

      {content.submains ? (
        <div className="cards-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-start items-start gap-8 w-full px-2 mt-12 mb-3">
          {content.submains.map((submain, i) => (
            <CardsButtons key={i} content={submain} />
          ))}
        </div>
      ) : (
        ""
      )}
    </article>
  );
};
