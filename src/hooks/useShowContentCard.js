import { button } from "@material-tailwind/react";
import { D } from "../utils/variables";

export const useShowContentCard = () => {
  // ? FUNCTION TO CONTENT BUTTONS ON MICROSERVICES
  const showRedactions = (buttonList, parentListContainer = buttonList.parentElement) => {
    const listContainer = parentListContainer.querySelector(".list-container");
    if (listContainer.classList.contains("hidden")) {
      listContainer.classList.remove("hidden");
      setTimeout(() => {
        listContainer.classList.add("active");
        buttonList.querySelector("span > img").classList.add("rotate-180");
        if (buttonList.querySelector(".arrow-container"))
          buttonList.querySelector(".arrow-container > img").classList.add("rotate-180");
      }, 50);
      setTimeout(() => {
        D.querySelectorAll(".cards-container > aside").forEach((card, i) => {
          const cardList = card.querySelector(".list-container");
          if (cardList !== listContainer) {
            setTimeout(() => {
              cardList.classList.remove("active");
            }, 100);
            cardList.classList.add("hidden");
            cardList.parentElement.querySelector("span > img").classList.remove("rotate-180");
            if (cardList.parentElement.querySelector(".arrow-container"))
              cardList.parentElement.querySelector(".arrow-container > img").classList.remove("rotate-180");
          }
        });
      }, 100);
    } else if (listContainer.classList.contains("active")) {
      listContainer.classList.remove("active");
      buttonList.querySelector("span > img").classList.remove("rotate-180");
      if (buttonList.querySelector(".arrow-container"))
        buttonList.querySelector(".arrow-container > img").classList.remove("rotate-180");
      setTimeout(() => {
        listContainer.classList.add("hidden");
      }, 50);
    }
  };

  return [showRedactions];
};
