import { D, W } from "./../utils/variables";

// ! FUNCTIONS
function showSubServices(serviceRequest) {
  D.querySelectorAll(".service-option").forEach((service) => {
    if (serviceRequest.dataset.container === service.id) {
      service.classList.remove("hidden");
      setTimeout(() => {
        service.classList.remove("opacity-0", "-ml-40");
        service.classList.add("opacity-100", "ml-0");
      }, 300);
    } else {
      service.classList.add("hidden");
      setTimeout(() => {
        service.classList.add("opacity-0", "-ml-40");
        service.classList.remove("opacity-100", "ml-0");
      }, 300);
    }
  });
}

// ! EVENTS
D.addEventListener("click", (e) => {
  if (e.target.matches(".main-service")) showSubServices(e.target);
});
