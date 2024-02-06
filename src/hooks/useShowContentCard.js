import { D } from "../utils/variables";

export const useShowContentCard = () => {
  // ? FUNCTION TO CONTENT BUTTONS ON MICROSERVICES
  const showRedactions = (buttonList) => {
    const listContainer = buttonList.parentElement.querySelector(".list-container");
    if (listContainer.classList.contains("hidden")) {
      listContainer.classList.remove("hidden");
      setTimeout(() => {
        listContainer.classList.add("active");
        buttonList.querySelector("span").classList.add("rotate-180");
      }, 50);
      setTimeout(() => {
        D.querySelectorAll(".cards-container > aside").forEach((card, i) => {
          const cardList = card.querySelector(".list-container");
          if (cardList !== listContainer) {
            setTimeout(() => {
              cardList.classList.remove("active");
            }, 100);
            cardList.classList.add("hidden");
            cardList.parentElement.querySelector("span").classList.remove("rotate-180");
          }
        });
      }, 100);
    } else if (listContainer.classList.contains("active")) {
      listContainer.classList.remove("active");
      buttonList.querySelector("span").classList.remove("rotate-180");
      setTimeout(() => {
        listContainer.classList.add("hidden");
      }, 50);
    }
  };

  return [showRedactions];
};
