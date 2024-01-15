import { D, W } from "./../utils/variables";

import iconBlue from "./../assets/img/logo-blue.png";
import iconOrange from "./../assets/img/logo-orange.png";
import { split } from "postcss/lib/list";

// ! FUNCTIONS

function showActiveOption(optionClick) {
  D.querySelectorAll(".options-container .option-select").forEach((option) => {
    if (optionClick === option) {
      optionClick.classList.add("text-white", "bg-blue", "md:text-black", "md:bg-blue-gray-50");
      optionClick.classList.remove("md:border-b-white");
    } else {
      option.classList.remove(
        "text-white",
        "bg-blue",
        "md:text-black",
        "md:border-b-orange",
        "md:border-b-blue",
        "md:bg-blue-gray-50"
      );
      option.classList.add("md:border-b-white");
    }
  });
}

function changeColorOptions(optionClick) {
  const name = optionClick.dataset.name;
  if (
    (name === "services" && !optionClick.classList.contains("option-select")) ||
    name === "news" ||
    name === "contact"
  ) {
    D.querySelector(".img-logo").src = iconOrange;
    optionClick.classList.add(`md:border-b-orange`);
  } else if (name === "home" || name === "about" || name === "criteria" || name === "join") {
    D.querySelector(".img-logo").src = iconBlue;
    optionClick.classList.add(`md:border-b-blue`);
  }
}

// function getPath(path) {
//   const pathName = path.split("/");
//   D.querySelectorAll("#root main").forEach((page) => {
//     console.log(page);
//     if (pathName[1] === page.id) {
//       page.classList.remove("hidden");
//       setTimeout(() => {
//         page.classList.add("opacity-100");
//         page.classList.remove("opacity-0");
//       }, 150);
//     } else {
//       page.classList.add("hidden");
//       setTimeout(() => {
//         page.classList.add("opacity-0");
//         page.classList.remove("opacity-100");
//       }, 150);
//     }
//   });
// }

// function showOrHideMain(optionClick) {
//   D.querySelectorAll("#root main").forEach((page) => {
//     console.log(page);
//     if (optionClick === page.id) {
//       page.classList.remove("hidden");
//       setTimeout(() => {
//         page.classList.add("opacity-100");
//         page.classList.remove("opacity-0");
//       }, 150);
//     } else {
//       page.classList.add("hidden");
//       setTimeout(() => {
//         page.classList.add("opacity-0");
//         page.classList.remove("opacity-100");
//       }, 150);
//     }
//   });
// }

// ! EVENTS

D.addEventListener("DOMContentLoaded", () => {
  // getPath(W.location.pathname);
});

D.addEventListener("click", (e) => {
  if (e.target.matches(".option-select")) {
    e.preventDefault();
    showActiveOption(e.target);
    // history.pushState(null, "", e.target.dataset.name);
  }
  if (e.target.matches(".button-home") || e.target.matches(".option-select")) {
    e.preventDefault();
    // showOrHideMain(e.target.dataset.name);
    changeColorOptions(e.target);
  }
  if (e.target.matches(".services-header")) {
    e.preventDefault();
    // showOrHideMain(e.target.dataset.name);
    changeColorOptions(e.target);
    // history.pushState(null, "", e.target.dataset.name);
  }
});
