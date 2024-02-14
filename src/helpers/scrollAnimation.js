import { D, W } from "./../utils/variables";

export default function showAnimation(elements, animation) {
  let screenSize = window.innerHeight;

  for (var i = 0; i < elements.length; i++) {
    let element = elements[i];
    if (element.getBoundingClientRect().top < screenSize) {
      element.classList.add(animation);
    }
  }
}

W.addEventListener("scroll", function () {
  // ? ELEMENTOS DE ANIMACION
  const titleSection = D.querySelectorAll(".title-section");
  const textAbout = D.querySelectorAll(".text-about");
  const buttonSection = D.querySelectorAll(".button-section");
  const homeServices = D.querySelectorAll(".home-services");
  const homeCriterios = D.querySelectorAll(".home-criterios");
  const homeCasosPracticos = D.querySelectorAll(".practical-cases");

  const ArrayAnimation = [textAbout, buttonSection, homeServices, homeCriterios, homeCasosPracticos];

  showAnimation(titleSection, "animate__fadeInDown");
  ArrayAnimation.forEach((tag) => {
    showAnimation(tag, "animate__fadeInLeft");
  });
});
