import { D, W } from "../utils/variables";

// ! HOOK TO PUT ALL FUNCTIONS FOR THE SUBSERVICES
export const useButtonsToMicroservices = () => {
  // ? FUNCTIONS TO BUTTONS ON MICROSERVICES
  const onChangeEffect = (e) => {
    const allButtons = e.parentElement.querySelectorAll("button");

    allButtons.forEach((button) => {
      if (button.dataset.name === e.dataset.name) {
        button.querySelector("span").classList.replace("inactive", "active");
        showContent(button);
        button.querySelector("span").classList.remove("opacity");
      } else {
        button.querySelector("span").classList.replace("active", "inactive");
        button.querySelector("span").classList.add("opacity");
      }
    });
  };

  const showContent = (button) => {
    D.querySelectorAll(".container-buttons-content").forEach((container) => {
      if (button.dataset.name === container.id) {
        container.classList.remove("hidden");
        setTimeout(() => {
          container.classList.remove("opacity-0");
          container.classList.add("animation-appear-top");
        }, 150);
      } else container.classList.add("hidden");
    });
  };
  // ? ---------------------------------------------------------------------------

  return [onChangeEffect];
};
