import { Typography } from "@material-tailwind/react";

export const Cards = ({ content }) => {
  return (
    <section className="w-11/12 sm:w-9/12 md:w-11/12 mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 justify-center items-start mb-10">
      {/* // ! CARDS */}
      {content.map((card) => (
        <article className="rounded-xl shadow-xl border-3 border-bgOrange">
          {/* // ! IMAGE CARD */}
          <img src={card.image} alt="" className="object-cover rounded-t-xl mx-auto" />
          {/* // ! TITLE CARD (IF CONTENT EXIST) */}
          {card.title ? (
            <Typography as="h4" className="font-700 text-orange text-center text-xl p-3 pt-5">
              {card.title}
            </Typography>
          ) : (
            ""
          )}
          {/* // ! LIST CARD CARD (IF CONTENT EXIST) */}
          <ul className="px-5 pb-5">
            {card.list.map((item) => (
              <li className="font-500 py-2">
                <b className="mr-4 text-md font-800">+</b>
                {item.content}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
};
