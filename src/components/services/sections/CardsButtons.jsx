import { Typography } from "@material-tailwind/react";
import arrowWhite from "./../../../assets/icons/arrow-white.png";
import { useShowContentCard } from "../../../hooks/useShowContentCard";

export const CardsButtons = ({ content }) => {
  const [showRedactions] = useShowContentCard();

  let marginList;
  if (content.list.length <= 1) marginList = "my-0";
  else if (content.list.length >= 2 && content.list.length < 5) marginList = "my-1";
  else if (content.list.length >= 5 && content.list.length < 7) marginList = "my-2";
  else marginList = "my-3";

  return (
    <aside
      className={`h-max flex flex-col justify-between shadow-md bg-bgOrange rounded-t-md transition-all duration-200 hover:scale-105`}
    >
      <button
        className={`w-full h-max flex justify-between items-center p-2 px-3 bg-orange text-white rounded-t-md`}
        onClick={(e) => {
          e.preventDefault();
          showRedactions(e.target);
        }}
      >
        <Typography as="h5" className="w-11/12 font-600 text-left uppercase pointer-events-none">
          {content.mainText}
        </Typography>
        <span className="w-4 text-xl text-center items-center transition-all duration-200">
          <img src={arrowWhite} alt="" className="w-full" />
        </span>
      </button>
      <ul className={`w-full h-max list-container transition-all hidden duration-300 ${marginList}`}>
        {content.list.map((item, i) => (
          <li key={i} className="w-full font-500 text-md border-t-2 border-white m-0 p-2">
            - {item.content}
          </li>
        ))}
      </ul>
    </aside>
  );
};
