// ! FUNCTIONS

import { useState } from "react";

export const useArrayServices = () => {
  // ! ACTIVAR / DESACTIVAR LA OPCIÓN SI HACES CLICK
  const [consultoria, setConsultoria] = useState(false);
  const [abogados, setAbogados] = useState(false);
  const [asesoria, setAsesoria] = useState(false);
  const onActiveConsultoria = () => {
    setTimeout(() => {
      setAbogados(false);
      setAsesoria(false);
      setConsultoria(true);
    }, 150);
  };
  const onActiveAbogados = () => {
    setTimeout(() => {
      setConsultoria(false);
      setAsesoria(false);
      setAbogados(true);
    }, 150);
  };
  const onActiveAsesoria = () => {
    setTimeout(() => {
      setConsultoria(false);
      setAbogados(false);
      setAsesoria(true);
    }, 150);
  };

  // ! SUBSERVICES
  const subservicesConsultoria = [
    {
      title: "Constitución de Empresas",
      description:
        "Si eres comerciante, prestador de servicio o emprendedor, es necesario que tengas constituida una sociedad mercantil (empresa).",
    },
    {
      title: "CONSTITUCIÓN DE PYMES",
      description:
        "Te acompañaremos desde la creación de tu propio negocio hasta el asesoramiento de cada uno de sus procesos administrativos, etc.",
    },
    {
      title: "TIPOS DE EMPRESAS",
      description:
        "Somos pioneros en la constitución de todo tipo de empresas, por el origen del capital, por su tamaño, por su actividad, etc.",
    },
    {
      title: "PLANES CONSTITUTIVOS",
      description:
        "Según tu talento, ideas y objetivos te ofrecemos los mejores PLANES para constituir tu propia empresa.",
    },
    {
      title: "ESTATUTOS",
      description:
        "Actualizar o modificar los estatutos de una empresa, comprende la realización de un Acta de Asamblea, donde se plasmarán las decisiones.",
    },
    {
      title: "Cambio de Domicilio",
      description:
        "El domicilio de la empresa es el lugar donde lleva a cabo sus procesos administrativos, así como su actividad comercial y mercantil.",
    },
    {
      title: "Aumento de Capital",
      description:
        "El aumento del capital social ha de acordarse en asamblea general o de socios, con los requisitos previstos para la modificación de los estatutos.",
    },
    {
      title: "Venta de Acciones",
      description:
        "Las acciones se constituyen como las partes en las que se divide el capital de una empresa. Cada inversor de la empresa posee un número determinado de acciones.",
    },
    {
      title: "Fusión de Empresas",
      description:
        "Ocurre cuando dos o más organizaciones independientes deciden unir sus activos y pasivos para formar una nueva entidad.",
    },
    {
      title: "Apertura en Sucursal extranjera",
      description:
        "Es una organización que pertenece a una sociedad registrada en un país foráneo, es decir, que no constituye una persona jurídica distinta a la sociedad de origen.",
    },
    {
      title: "Outsourcing RRHH",
      description:
        "Contamos con experiencia y conocimiento en áreas como cálculo de nómina, formación y otros procesos relacionados al Departamento de Recursos Humanos.",
    },
    {
      title: "Auditoría de Costos Laborales",
      description:
        "Comprende la validación de los pagos laborales hacia el personal para que estén debidamente direccionados a los asientos contables correspondientes.",
    },
  ];

  const subservicesAbogados = [
    {
      title: "Redacciones de Derecho Civil",
      description:
        "En el devenir y vertiginoso desarrollo del Derecho en sus diferentes especialidades, es necesaria la actualización permanente de las herramientas encargadas de su aplicación.",
    },
    {
      title: "Contratos",
      description:
        "Establecer una relación contractual, donde se comprometan derechos y obligaciones, requiere de habilidades y destrezas, por esto te asesoraremos en todo momento con tus contratos.",
    },
    {
      title: "Constitución de Consorcio",
      description:
        "En nuestro país, los consorcios son uniones o agrupaciones de empresas, que se realizan entre quienes ejecutan un proceso productivo atendiendo a un fin económico común.",
    },
    {
      title: "Título Supletorio",
      description:
        "Este título cubre solo las llamadas bienhechurías, que son las construcciones que se hagan sobre el terreno, dicho título será otorgado por el Tribunal competente donde está ubicada la bienhechuría.",
    },
    {
      title: "Interdicto de Amparo Restitutorio de la posesión",
      description:
        "La finalidad de nuestro acompañamiento, es evitar que como poseedor del inmueble seas molestado en el ejercicio de tu derecho.",
    },
    {
      title: "Acción reivindicatoria de la propiedad",
      description:
        "Esta acción judicial se intenta por el Procedimiento Civil Ordinario, con fundamento en el artículo 548 del Código Civil venezolano vigente.",
    },
    {
      title: "Prescripción Adquisitiva",
      description:
        "Es el modo de adquirir el dominio y otros derechos reales por la posesión a título de dueño durante el tiempo regido por la Ley, regulada en el artículo 1.952 del Código Civil venezolano.",
    },
    {
      title: "Registro Inmobiliario",
      description:
        "Nos encargamos de todos los trámites para registrar tu inmueble, ya que si no realizas este proceso no eres propietario del mismo, aunque hayas pagado la totalidad del precio y tengas la posesión.",
    },
    {
      title: "Contrato Compraventa",
      description:
        "Cuando el vendedor se obliga a transferir la propiedad de una cosa y el comprador a pagar el precio, estamos ante un contrato de compraventa.",
    },
    {
      title: "Contrato Compraventa",
      description:
        "Cuando el vendedor se obliga a transferir la propiedad de una cosa y el comprador a pagar el precio, estamos ante un contrato de compraventa.",
    },
    {
      title: "Poder especial y general",
      description:
        "Tramitamos el Poder Especial o General, entendiendo por “Poder” aquello que indica el artículo 1.684 del Código Civil venezolano vigente.",
    },
    {
      title: "Gestión de Cobranza",
      description:
        "Contamos con especialistas en el área de crédito y cobranza, tanto judiciales como extrajudiciales, de manera de documentar de la mejor forma a tu empresa o emprendimiento sobre esa acreencia.",
    },
  ];

  const subservicesAseroria = [
    {
      title: "Auditoría de Cuentas",
      description:
        "Aportamos a las empresas una información financiera útil y fiable, más allá de los requerimientos legales a través de la revisión y verificación de las cuentas anuales, así como de otros estados financieros o documentos contables.",
    },
    {
      title: "Asesoría Laboral",
      description:
        "Brindamos asesoría en derecho laboral, seguridad social y gestiones laborales administrativas, tanto a empresas como a trabajadores.",
    },
    {
      title: "Asesoría Financiera y Contable",
      description:
        "Nos ocupamos de todos los actos financieros y contables relacionados a las sociedades, desde lo relativo a su constitución hasta las tareas de liquidación de las mismas, haciendo referencia a su parte económica y financiera.",
    },
  ];

  return [
    consultoria,
    abogados,
    asesoria,
    onActiveConsultoria,
    onActiveAbogados,
    onActiveAsesoria,
    subservicesAbogados,
    subservicesAseroria,
    subservicesConsultoria,
  ];
};
