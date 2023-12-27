import carousel1 from "./../assets/img/carrusel1.jpg";
import carousel2 from "./../assets/img/carrusel2.jpg";
import carousel3 from "./../assets/img/carrusel3.jpg";
import carousel4 from "./../assets/img/carrusel4.jpg";
import carousel5 from "./../assets/img/carrusel5.jpg";

import ponna from "./../assets/img/criterios-ponna.jpg";
import penal from "./../assets/img/criterios-penal.jpg";
import contractual from "./../assets/img/criterios-contractual.jpg";
import laboral from "./../assets/img/criterios-laboral.jpg";

export const slides = [carousel1, carousel2, carousel3, carousel4, carousel5];
export const services = [
  { name: "Consultoría Empresarial", image: carousel1 },
  { name: "Abogados Expertos", image: carousel2 },
  { name: "Asesoría Profesional", image: carousel3 },
];
export const criteria = [
  {
    name: "Protección de niños, niñas y adolescentes",
    image: ponna,
    sentence: "Sentencia N°44",
    context:
      "Si el menor de edad no es parte activa o pasiva en el proceso, no opera el fuero atrayente de los Tribunales de Protección de Niños, Niñas y Adolescentes.",
  },
  {
    name: "Derecho Penal",
    image: penal,
    sentence: "Sentencia N° 425",
    context:
      "Para solicitarse la Suspensión Condicional del Proceso, debe existir ya una acusación. La Suspensión Condicional del Proceso podrá solicitarse en cualquier momento, luego de admitida la acusación presentada por el Ministerio Público y hasta antes de acordarse la apertura del juicio oral y público.",
  },
  {
    name: "Derecho Contractual",
    image: contractual,
    sentence: "Sentencia N° 313",
    context:
      "Uno de los requisitos de procedencia de las acciones por cumplimiento o resolución de contrato, es el incumplimiento de las obligaciones, que debe ser probado en un juicio judicial.",
  },
  {
    name: "Derecho Laboral",
    image: laboral,
    sentence: "Sentencia N°44",
    context:
      "Si el menor de edad no es parte activa o pasiva en el proceso, no opera el fuero atrayente de los Tribunales de Protección de Niños, Niñas y Adolescentes.",
  },
];
