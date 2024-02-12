import { Typography } from "@material-tailwind/react";
import iconArrowBlack from "./../../../assets/icons/arrow-black.png";
import { useShowContentCard } from "../../../hooks";
import { Lists } from "./Lists";

export const CardsHide = ({ content, lg, xl, cols = "1", mt = "0" }) => {
  const [showRedactions] = useShowContentCard();
  console.log(content);

  return (
    <section
      className={`w-10/12 md:w-7/12 xl:w-10/12 mx-auto grid ${
        cols === "3" ? "xl:grid-cols-3" : "grid-cols-1"
      } gap-5 mt-${mt}`}
    >
      {content.map((card, i) => (
        <article key={i} className="flex flex-col h-max bg-gray-100 border-2 border-gray-200 rounded-t-xl shadow-xl">
          <img src={card.imageCard} alt="" className="lg:h-68 lg:h-80 xl:h-56 rounded-t-xl mb-2" />
          <aside className="flex justify-between items-center mb-4">
            <div className="flex flex-col justify-start">
              <Typography as="h3" className="text-orangeText font-600 px-2">
                {card.firstTitle}
              </Typography>
              <Typography as="h2" className="text-orangeText text-2xl font-600 px-2">
                {card.secondTitle}
              </Typography>
            </div>
            <button
              className="border-2 border-gray-300 bg-gray-200 p-3 h-max rounded-full mr-3 hover:scale-105 hover:shadow-xl transition-all duration-200"
              onClick={(e) => {
                e.preventDefault();
                showRedactions(e.target, e.target.parentElement.parentElement);
              }}
            >
              <span className="pointer-events-none">
                <img src={iconArrowBlack} alt="" className="w-4 transition-all duration-300" />
              </span>
            </button>
          </aside>
          <aside className="w-full list-container hidden transition-all duration-300 mb-3">
            <Lists content={card} textSize="md" mt="2" pl="8" px="8" />
          </aside>
        </article>
      ))}
    </section>
  );
};
