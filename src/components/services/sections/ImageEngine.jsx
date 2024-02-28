import { Typography } from "@material-tailwind/react";
import engineImage from "./../../../assets/icons/orangeIcons/engranaje.png";
import arrowBlack from "./../../../assets/icons/arrow-black.png";
import { useShowContentCard } from "../../../hooks";
import { Lists } from "./Lists";
import { ImageAndTextGrid } from "./ImageAndTextGrid";

export const ImageEngine = ({ content, mt = "16" }) => {
  const [showRedactions] = useShowContentCard();

  return (
    <article className={`w-11/12 lg:w-9/12 mx-auto flex flex-col mt-${mt}`}>
      {content.engines.map((option, i) => (
        <aside key={i} className="flex flex-col mb-10">
          <button
            className="w-full flex items-center bg-bgOrange items-center p-2 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              showRedactions(e.target);
            }}
          >
            <span className="pointer-events-none">
              <img src={engineImage} alt="" className="w-12 p-1 bg-gray-50 rounded-full transition-all duration-300" />
            </span>
            <Typography as="p" className="uppercase font-600 ml-3 pointer-events-none">
              {option.title}
            </Typography>
            <span className="ml-auto mr-8 arrow-container">
              <img src={arrowBlack} alt="" className="w-6 p-1 transition-all duration-300" />
            </span>
          </button>
          <div className="list-container hidden shadow-lg w-11/12 mx-auto rounded-b-xl transition-all duration-300">
            {option.content ? (
              <Typography as="p" className="w-full font-400 py-4 px-3 text-justify">
                {option.content.firstText1} <b>{option.content?.firstTextBlack1}</b> {option.content?.secondText1}
              </Typography>
            ) : (
              ""
            )}
            {option.imageAndTextGrid ? <ImageAndTextGrid content={option.imageAndTextGrid} /> : ""}
            {option.list ? <Lists content={option} textSize="md" /> : ""}
          </div>
        </aside>
      ))}
    </article>
  );
};
