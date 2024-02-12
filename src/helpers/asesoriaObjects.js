// ! => IMPORTS => ASESORIA PROFESIONAL
import asesoriaProfesionalBanner from "./../assets/img/fusion18.jpg";
// ? REDACCIONES DE DERECHO CIVIL
import ObligacionesIconOrange from "./../assets/icons/orangeIcons/pacto.png";
import ContratosIconOrange from "./../assets/icons/orangeIcons/politica.png";
import AccidenteIconOrange from "./../assets/icons/orangeIcons/accidente.png";
import DiscapacitadoIconOrange from "./../assets/icons/orangeIcons/discapacitado.png";
import ExtranjeroIconOrange from "./../assets/icons/orangeIcons/extranjero.png";
// ? ASESORIA FINANCIERA
import OutsourcingPackI from "./../assets/img/outspurcing_pack1_9.jpg";
import OutsourcingPackII from "./../assets/img/outsourcing_pack2_10.jpg";
import OutsourcingPackIII from "./../assets/img/outsourcing_pack_nomina11.jpg";
import OutsourcingIconOrange from "./../assets/icons/orangeIcons/outsourcing.png";
import AsesoriaIconOrange from "./../assets/icons/orangeIcons/tributaria.png";
import ISLRIconOrange from "./../assets/icons/orangeIcons/impuestos.png";
import InventarioconOrange from "./../assets/icons/orangeIcons/inventario.png";
import CartaAceptacionIconOrange from "./../assets/icons/orangeIcons/aceptacion.png";
import LibrosContablesIconOrange from "./../assets/icons/orangeIcons/librosContables.png";
import SelladoIconOrange from "./../assets/icons/orangeIcons/sellado.png";

export const URLauditoriaCuentas = {
  banner: {
    title: "Auditoría de Cuentas",
    subtitle: "En Infante, Fernández & Asociados ofrecemos este servicio a todo tipo de empresa.",
    imageBanner: asesoriaProfesionalBanner,
  },
  mainText: {
    firstText:
      "Aportamos a las empresas una información financiera útil y fiable, más allá de los requerimientos legales a través de la revisión y verificación de las cuentas anuales, así como de otros estados financieros o documentos contables, para luego emitir un informe que dictamine si dichas cuentas expresan la imagen fiel del patrimonio, de su situación financiera y de sus resultados. Esto ayuda a que los diferentes grupos de interés confíen en las cuentas auditadas. Se trata de una herramienta de control financiero y administrativo que permite mejorar el rendimiento de la empresa.",
  },
};

export const URLasesoriaLaboral = {
  banner: {
    title: "Asesoría Laboral",
    subtitle: "En Infante, Fernández & Asociados ofrecemos este servicio a todo tipo de empresa.",
    imageBanner: asesoriaProfesionalBanner,
  },
  mainText: {
    firstText:
      "Brindamos asesoría en derecho laboral, seguridad social y gestiones laborales administrativas, tanto a empresas como a trabajadores, con la finalidad que la organización cumpla con la normativa laboral vigente. En otras palabras, asumimos todas las tareas administrativas relacionadas con la normativa aplicable y con los trabajadores de la empresa. En este sentido, ofrecemos una combinación de servicios online y presenciales, caracterizados por la inmediatez y comodidad que aporta la digitalización. Haz clic en estas secciones para saber más de estos servicios:",
  },
  microservices: {
    buttons: [
      {
        name: "OBLIGACIONES FORMALES DE LA EMPRESA",
        image: ObligacionesIconOrange,
        color: "orange",
        key: "obligaciones",
      },
      {
        name: "CONTRATOS DE TRABAJO",
        image: ContratosIconOrange,
        color: "orange",
        key: "contratos",
      },
      {
        name: "ACCIÓN POR ENFERMEDAD O ACCIDENTE LABORAL",
        image: AccidenteIconOrange,
        color: "orange",
        key: "accidenteLaboral",
      },
      {
        name: "CONTRATACION ESPECIAL PARA PERSONAL DISCAPACITADO",
        image: DiscapacitadoIconOrange,
        color: "orange",
        key: "contratosDiscapacitados",
      },
      {
        name: "CONTRATACION ESPECIAL PARA PERSONAL EXTRANJERO.",
        image: ExtranjeroIconOrange,
        color: "orange",
        key: "contratosExtranjeros",
      },
    ],
    sections: [
      {
        key: "obligaciones",
        title: "Obligaciones Formales de la Empresa",
        onlyText: {
          firstTextBlack: "Infante, Fernández & Asociados",
          firstText:
            "¿Tu empresa cuenta con asesoría legal personalizada? ¿esta actualizada en materia laboral y preparada ante una eventual fiscalización? Existe la posibilidad de que se encuentre en riesgo de ser sancionada por incumplimiento de deberes legales. En ",
          secondText:
            "estamos listos para mantener tu documentación legal actualizada, ahorrándote tiempo y dinero. De esta manera tu empresa se mantendrá segura y por encima de la competencia. Al respecto, te presentamos algunas obligaciones formales que te ayudamos a cumplir:",
        },
        listType: {
          style: "decimal",
          font: "600",
        },
        list: [
          {
            content: "Publicar en un lugar visible el horario de trabajo.",
          },
          {
            content: "Libro de vacaciones.",
          },
          {
            content: "Último aporte al (INCES).",
          },
          {
            content: "Contratación de aprendices (INCES).",
          },
          {
            content: "Cancelar los intereses sobre Prestaciones Sociales.",
          },
          {
            content: "Entregar Beneficio de Alimentación.",
          },
          {
            content: "Aportar al (FAOV).",
          },
          {
            content: "Inscribir a la empresa ante el (MPPPST).",
            list: [
              {
                content: "Inscripción ante el Registro Nacional de entidades de Trabajo (RNET).",
              },
              {
                content: "Obtención del Numero de Información Laboral (NIL).",
              },
              {
                content:
                  "Declaración Trimestral ante el Ministerio del Poder Popular para el Proceso Social del Trabajo.",
              },
              {
                content: "Declarar la cantidad de empleados.",
              },
              {
                content: "Declarar las horas extras y registrar libro de las mismas (si las hubiera).",
              },
            ],
          },
          {
            content: "Último aporte al Instituto Venezolano de los Seguros Sociales (IVSS).",
          },
          {
            content: "Advertir a los trabajadores sobre los posibles riesgos.",
          },
          {
            content: "Elaborar e implementar programas de seguridad laboral.",
          },
        ],
      },
      {
        key: "contratos",
        title: "Contratos de Trabajo",
        onlyText: {
          firstText:
            "Al momento de contratar un trabajador, la empresa generalmente se preocupa más por el tipo de contrato de trabajo que por el contenido del mismo, por lo que al principio se establece una buena relación que desearíamos durase indefinidamente, para lo que hay que tener en cuenta que nos encontramos en presencia de un acuerdo de voluntades en el que ambas partes deben escucharse, plasmando sus acuerdos en el contrato de trabajo. Es de tener en cuenta que una de las mayores causas de desmotivación en el trabajador y, por tanto, de ruptura de la relación laboral, es el incumplimiento de la legislación aplicable por parte del patrono, y no digamos el riesgo que supone frente a una posible fiscalización de la Inspectoría del trabajo. Este tipo de contratos proporciona certeza y seguridad jurídica a la relación laboral entre patrono y trabajador, de forma que ambas partes conozcan claramente sus derechos y obligaciones.",
        },
        firstTitle: "Modalidades de Contratos de Trabajo",
        onlyText2: {
          firstTextBlack: "Infante, Fernández & Asociados",
          firstText: "Si existe duda acerca del tipo de contrato a convenir, en",
          secondText:
            " brindamos asesoría en cuanto a las modalidades de contrato de trabajo que establece La Ley Orgánica del Trabajo de los Trabajadores y las Trabajadoras (LOTTT), a saber:",
        },
        listType: {
          style: "disc",
          font: "400",
        },
        list: [
          {
            content: "Contrato de trabajo a tiempo indeterminado.",
          },
          {
            content: "Contrato de trabajo a tiempo determinado.",
          },
          {
            content: "Contrato de trabajo para una obra determinada.",
          },
        ],
      },
      {
        key: "accidenteLaboral",
        title: "Acción por Enfermedad o Accidente Laboral",
        onlyText: {
          firstTextBlack: "Infante, Fernández & Asociados,",
          firstText: "En ",
          secondText:
            "defendemos el derecho de los trabajadores en caso de enfermedad o accidente laboral, ofreciendo asesoría, asistencia y representación, tanto en sede administrativa como judicial. Para hacer uso de esta defensa, se debe tener claro el momento cuando se debe oponer tal acción, ya que de lo contrario puede ser declarada improcedente debido a la extinción por prescripción.",
        },
        firstTitle:
          "El trabajador tiene 3 alternativas al reclamar indemnizaciones. ALTERNATIVAS AL RECLAMAR INDEMNIZACIONES.",
        onlyText2: {
          firstText:
            "En materia de accidentes laborales, el trabajador tiene varias opciones a su favor al momento de reclamar las indemnizaciones por daños materiales y morales derivados de la enfermedad o accidente ocupacional, pudiendo concurrir tres pretensiones con fundamentos legales diversos, a saber:",
          secondText:
            " brindamos asesoría en cuanto a las modalidades de contrato de trabajo que establece La Ley Orgánica del Trabajo de los Trabajadores y las Trabajadoras (LOTTT), a saber:",
        },
        listType: {
          style: "disc",
          font: "600",
        },
        list: [
          {
            content:
              "Reclamo de las indemnizaciones previstas en los artículos 560 y siguientes de la Ley Orgánica del Trabajo. Aplicable ratione temporis.Contrato de trabajo a tiempo indeterminado.",
            text: "Derivadas de la responsabilidad objetiva del patrono, tanto por daños materiales como morales.",
          },
          {
            content:
              "Reclamo de las indemnizaciones previstas en la Ley Orgánica de Prevención, Condiciones y Medio Ambiente de Trabajo (LOPCYMAT).",
            text: "Cuya procedencia se deriva de la responsabilidad subjetiva del empleador.",
          },
          {
            content: "Indemnizaciones derivadas del hecho ilícito del patrono.",
            text: "Previstas en el Código Civil. Estos parámetros han sido establecidos y ratificados entre otras por la Sala de Casación Social, contenido en la Sentencia N° 430 del 25 de octubre de 2.000, acogido por esa máxima instancia en el fallo N° 2.176 del 5 de octubre de 2.006 y ratificado en Sentencia de la Sala de Casación Social N° 444 del 2 de julio de 2015.",
          },
        ],
      },
      {
        key: "contratosDiscapacitados",
        title: "Contratación Especial para Personal Discapacitado",
        onlyText: {
          firstTextBlack: "Infante, Fernández & Asociados,",
          firstText:
            "¿Sabes porque estás en la obligación de contratar personal discapacitado en tu empresa? Te explicamos que La Ley Orgánica del Trabajo, de los Trabajadores y Trabajadoras, impone la obligación a todas las entidades públicas o privadas de incluir personas con discapacidad. Es importante destacar, que se obliga a contratar el equivalente al 5% de la nómina del personal con discapacidad, teniendo en cuenta que los cargos que se asignen no deben impedir su desempeño. La recomendación de ",
          secondText:
            " es que antes de contratar personas discapacitadas, verifiquen que estén debidamente certificadas por el Consejo Nacional de Discapacidad (CONADIS). De igual forma, nuestro equipo te acompaña en la realización de un contrato especial destacando la certificación.",
        },
      },
      {
        key: "contratosExtranjeros",
        title: "Contratación Especial para Personal Extranjero",
        onlyText: {
          firstTextBlack: "Infante, Fernández & Asociados,",
          firstText:
            "Si piensas contratar personal extranjero, se debe tener claro el porcentaje a contratarse y así evitar sanciones. En tal sentido el porcentaje de contratación no debe exceder del 5%. La Ley Orgánica del Trabajo, de los Trabajadores y Trabajadoras, establece en el artículo 27 lo siguiente: “El noventa por ciento o más de los trabajadores y de las trabajadoras al servicio de un patrono o una patrona que ocupen un mínimo de diez, deben ser venezolanos o venezolanas”. Así mismo, las remuneraciones del personal extranjero, no excederán del veinte por ciento del total de las remuneraciones pagadas al resto de los trabajadores y trabajadoras. En ",
          secondText: " te acompañamos en la realización de un contrato especial para estos casos.",
        },
      },
    ],
  },
};

export const URLasesoriaFinanciera = {
  banner: {
    title: "Asesoría Financiera y Contable",
    subtitle: "En Infante, Fernández & Asociados ofrecemos este servicio a todo tipo de empresa.",
    imageBanner: asesoriaProfesionalBanner,
  },
  mainText: {
    firstText:
      "Nos ocupamos de todos los actos contables y financieros relacionados a las sociedades, desde lo relativo a su constitución hasta las tareas de liquidación de las mismas, haciendo referencia a su parte económica y financiera, así como los sistemas de control, registro, gastos, ingresos y otras operaciones que demanda la empresa. Interpretamos toda la información que recibe la empresa para poder llevar a cabo las decisiones más correctas, basados en el conocimiento de la realidad económica y análisis exhaustivo del mercado.",
  },
  microservices: {
    buttons: [
      {
        name: "OUTSOURCING CONTABLE-FISCAL",
        image: OutsourcingIconOrange,
        color: "orange",
        key: "outsourcingContable",
      },
      {
        name: "ASESORÍA TRIBUTARIA",
        image: AsesoriaIconOrange,
        color: "orange",
        key: "asesoriaTributaria",
      },
      {
        name: "DECLARACIÓN DE IMPUESTO SOBRE LA RENTA (ISLR)",
        image: ISLRIconOrange,
        color: "orange",
        key: "declaracionIslr",
      },
      //{
      //  name: "DECLARACIÓN DEL IMPUESTO AL VALOR AGREGADO (IVA)",
      //  image: DiscapacitadoIconOrange,
      //  color: "orange",
      //  key: "declaracionIva",
      //},
      {
        name: "INVENTARIO DE BIENES",
        image: InventarioconOrange,
        color: "orange",
        key: "inventarioBienes",
      },
      {
        name: "CARTA DE ACEPTACIÓN DE COMISARIO",
        image: CartaAceptacionIconOrange,
        color: "orange",
        key: "cartaAceptacion",
      },
      {
        name: "LIBROS CONTABLES Y MERCANTILES",
        image: LibrosContablesIconOrange,
        color: "orange",
        key: "librosContables",
      },
      {
        name: "SELLADO OBLIGATORIO DE LOS LIBROS ANTE EL REGISTRO MERCANTIL",
        image: SelladoIconOrange,
        color: "orange",
        key: "selladoLibros",
      },
    ],
    sections: [
      {
        key: "outsourcingContable",
        title: "Outsourcing Contable-Fiscal",
        onlyText: {
          firstTextBlack: "Infante, Fernández & Asociados,",
          secondTextBlack: "Outsourcing Contable Fiscal.",
          thirdTextBlack: "Outsourcing Contable Fiscal.",
          firstText: "En ",
          secondText:
            " llevamos todas las funciones contables y fiscales propias del departamento contable de la empresa a través del servicio ",
          thirdText:
            " La ventaja de este servicio se extiende a empresas de cualquier nivel, industria y tamaño, ya que permite mejorar la gestión administrativa y financiera del negocio sin incurrir en costos asociados a la contratación de personal adicional. Es una forma inteligente de contar con talento profesional, acceder a la tecnología que necesita la empresa y potenciar su crecimiento. En definitiva, nuestro servicio",
          fourth:
            "optimiza la productividad de la empresa, mejora sus procesos administrativos e incluso brinda soporte a la gestión fiscal y tributaria, evitando posibles sanciones derivadas del incumplimiento Fiscal.",
        },
        onlyText2: {
          firstTextBlack: "Outsourcing Pack,",
          firstText: "Te presentamos nuestros planes ",
          secondText: " adaptables al tipo de Contribuyente: ",
        },
        cardsHide: [
          {
            imageCard: OutsourcingPackI,
            firstTitle: "PARA CONTRIBUYENTES ORDINARIOS",
            secondTitle: "Outsourcing Pack I",
            listType: {
              style: "disc",
              font: "400",
            },
            list: [
              {
                content: "LIBROS DE COMPRAS Y VENTAS.",
              },
              {
                content: "DECLARACIÓN DE IVA.",
              },
              {
                content: "DECLARACIÓN DE RETENCIONES ISLR.",
              },
              {
                content: "DECLARACIÓN DE IMPUESTOS MUNICIPALES.",
              },
              {
                content: "REGISTRO DE TRANSACCIONES.",
              },
              {
                content: "EMISIÓN DE ESTADOS FINANCIEROS.",
              },
              {
                content: "ACTUALIZACIÓN DE LIBROS CONTABLES, FORMA LIBRE O FORMA CONTINUA (Diario, Mayor, Inventario).",
              },
            ],
          },
          {
            imageCard: OutsourcingPackII,
            firstTitle: "PARA CONTRIBUYENTES ESPECIALES",
            secondTitle: "Outsourcing Pack II",
            listType: {
              style: "disc",
              font: "400",
            },
            list: [
              {
                content: "LIBROS DE COMPRAS Y VENTAS.",
              },
              {
                content: "DECLARACIÓN DE IVA.",
              },
              {
                content: "DECLARACIÓN DE RETENCIONES ISLR, IVA, IGTF, ANTICIPO ISRL",
              },
              {
                content: "DECLARACIÓN DE IMPUESTOS MUNICIPALES.",
              },
              {
                content: "REGISTRO DE TRANSACCIONES.",
              },
              {
                content: "EMISIÓN DE ESTADOS FINANCIEROS.",
              },
              {
                content: "ACTUALIZACIÓN DE LIBROS CONTABLES, FORMA LIBRE O FORMA CONTINUA (Diario, Mayor, Inventario).",
              },
            ],
          },
          {
            imageCard: OutsourcingPackIII,
            firstTitle: "NÓMINA Y PARAFISCALES",
            secondTitle: "Outsourcing Pack III",
            listType: {
              style: "disc",
              font: "400",
            },
            list: [
              {
                content: "CÁLCULO Y REPORTE DE NÓMINA.",
              },
              {
                content: "RECIBOS DE PAGO.",
              },
              {
                content: "CÁLCULO DE VACACIONES.",
              },
              {
                content: "CÁLCULO DE UTILIDADES.",
              },
              {
                content: "REPORTE DE ACUMULADO (Intereses de Prestaciones Sociales).",
              },
              {
                content: "CÁLCULO DE LIQUIDACIONES.",
              },
              {
                content: "CONTRATOS DE TRABAJO.",
              },
              {
                content: "REGISTRO PATRONAL DE ASEGURADOS.",
              },
              {
                content: "FACTURACIÓN IVSS.",
              },
              {
                content: "LIQUIDACIÓN FAOV.",
              },
              {
                content: "LIQUIDACIÓN INCES.",
              },
              {
                content: "DECLARACIÓN R-NET.",
              },
            ],
          },
        ],
      },
      {
        key: "asesoriaTributaria",
        title: "Asesoría Tributaria",
        onlyText: {
          firstText: "Nuestra asesoría tributaria, permite a la empresa cumplir los siguientes objetivos:",
        },
        listType: {
          style: "decimal",
          font: "400",
        },
        list: [
          {
            content: "Identificar la situación económica real de la empresa.",
          },
          {
            content: "Minimizar los riesgos de multas y sanciones.",
          },
          {
            content: "Proteger el patrimonio de la empresa mediante auditorias.",
          },
          {
            content: "Optimizar la rentabilidad y liquidez de la empresa.",
          },
        ],
        secondTitle: "Además, evitas incurrir en 3 TIPOS DE ILÍCITOS TRIBUTARIOS.",
        onlyText3: {
          firstTextBlack: "Código Orgánico Tributario (COT),",
          firstText:
            "Estos ilícitos se originan al momento que el contribuyente incumple los lineamientos establecidos en el",
          secondText:
            " siendo clasificados desde los formales hasta los penales, dependiendo la gravedad de los mismos. En tal sentido, es importante mencionar que dichos ilícitos se encuentran en el mencionado texto legal, desde el artículo 99 hasta el 130.",
        },
        onlyText4: {
          initialTextBlack: "ILÍCITOS FORMALES:",
          firstText:
            " Se originan por incumplir deberes formales, tales como no inscribirse en los registros exigidos por las normas tributarias, no emitir o exigir facturas, no llevar libros o registros contables, proporcionar información parcial, insuficiente o errónea.",
        },
        onlyText5: {
          initialTextBlack: "ILÍCITOS MATERIALES:",
          firstText:
            " Falta inherente a la omisión o retraso de los pagos de los tributos gravados por la Administración Tributaria, tales como anticipos, incumplimiento de la obligación de retener o percibir tributos, obtención de devoluciones o reintegros indebidos.",
        },
        onlyText6: {
          initialTextBlack: "ILÍCITOS PENALES:",
          firstText:
            " Son conductas castigadas con prisión, porque se causa un grave perjuicio que entorpece la actividad recaudadora del Estado. Por ejemplo, la omisión de ingresos de la empresa para disminuir el tributo a pagar, la instigación pública al incumplimiento de la normativa tributaria, la divulgación y uso de información confidencial.",
        },
      },
      {
        key: "declaracionIslr",
        title: "Declaración de Impuesto Sobre La Renta (ISLR)",
        firstTitle: "¿Que Ofrecemos?",
        listType: {
          style: "decimal",
          font: "500",
          size: "lg",
        },
        list: [
          {
            content: "Determinación del Enriquecimiento Fiscal",
          },
          {
            content: "Papeles de Trabajo que incluyen:",
            listType: {
              style: "decimal",
              font: "400",
            },
            list: [
              {
                content: "Detalle de CONCILIACIÓN FISCAL de RENTAS.",
              },
              {
                content: "Detalle de INVENTARIOS.",
              },
              {
                content: "Detalle de ACTIVOS Y DEPRECIACIONES.",
              },
              {
                content: "Detalle de ANTICIPOS.",
              },
            ],
          },
          {
            content: "Libro de Ajuste Fiscal",
          },
        ],
      },
      {
        key: "inventarioBienes",
        title: "Inventario de Bienes",
        onlyText: {
          firstTextBlack: "Infante, Fernández & Asociados,",
          firstText: "Como otro servicio de ",
          secondText:
            "  el Inventario de Bienes es el documento legal, donde se detalla y se valora todos los bienes tangibles y en existencia de la empresa en formación, que pueden utilizarse para su alquiler, uso, transformación, consumo o venta.  Debe ser una relación detallada en la que se incluyan, además de los tangibles, los derechos y deudas de la empresa. Por lo tanto, integra el patrimonio de la sociedad, es decir, también ayuda a comprobar que elementos componen el patrimonio de la organización, más allá de mantener un control de los productos o servicios que ofrece a sus clientes.  El inventario permite que la empresa conozca la fluctuación de artículos, lo que a su vez influye en las decisiones que se tomarán acerca de los proveedores y la cantidad de existencias que deben mantenerse para cumplir con la demanda de los clientes, además de garantizar que no haya mermas, robos o excedentes de productos que significan un mayor gasto.",
        },
      },
      {
        key: "cartaAceptacion",
        title: "Carta de Aceptación de Comisario",
        onlyText: {
          firstTextBlack: "Infante, Fernández & Asociados,",
          secondTextBlack: "Carta de Aceptación de Comisario",
          firstText: "Como uno de los servicios que ofrece ",
          secondText: " la",
          thirdText:
            " se constituye en requisito obligatorio para registrar una empresa o Pyme. Es el documento donde uno de nuestros contadores acepta la obligación con la empresa, que a su vez lo designó por medio de una asamblea ordinaria para ejercer dicho cargo. La carta servirá para que informe a la asamblea del siguiente año sobre la situación de la empresa, especificándolo en sus estados financieros. El comisario se encarga de aprobar o no los estados financieros, siendo generalmente designado por un periodo de 5 años, gozando de total independencia para el desempeño de sus funciones. Deberá asistir a las asambleas y según el acta podrá revisar libros, balances y emitir su informe. Esta figura se encuentra establecida en los artículos 287, 304 al 311 del Código de Comercio Venezolano y Normas Interprofesionales para el Ejercicio de la función del Comisario.",
        },
      },
      {
        key: "librosContables",
        title: "Libros Contables y Mercantiles",
        onlyText: {
          initialTextBlack: "Infante, Fernández & Asociados,",
          firstTextBlack: "dotación de Los Libros Contables y Mercantiles.",
          secondTextBlack: "¿Qué son los Libros Contables y Mercantiles?",
          firstText: " tiene a tu disposición la ",
          secondText: " Pero,",
          thirdText:
            " Son asientos informativos donde se registran las operaciones realizadas. La legislación mercantil venezolana establece la obligación por parte de los comerciantes, de llevar al día los siguientes libros:",
        },
        listType: {
          style: "decimal",
          font: "500",
        },
        list: [
          {
            content: "Libros de accionistas.",
          },
          {
            content: "Libros de actas y asambleas.",
          },
          {
            content: "Libros de las juntas de administradores.",
          },
          {
            content: "Libros diarios.",
          },
          {
            content: "Libro mayor.",
          },
          {
            content: "Libros de inventarios y Balances.",
          },
        ],
        onlyText3: {
          firstTextBlack: "Código Orgánico Tributario,",
          firstText:
            "No mantener los libros y registros fiscales en el domicilio tributario, o no exhibirlos cuando la Administración Tributaria los solicite, está tipificado como un ilícito tributario formal. Según el artículo 102 del ",
          secondText: " estas son las sanciones que podrías afrontar:",
        },
        listType2: {
          style: "decimal",
          font: "500",
        },
        list2: [
          {
            initialContentBlack: "Clausura de la oficina, local o establecimiento",
            content: " por un lapso de cinco (5) días continuos.",
          },
          {
            initialContentBlack: "Clausura de la oficina, local o establecimiento",
            content:
              " el tipo de cambio oficial de la moneda de mayor valor, publicado por el Banco Central de Venezuela.",
          },
        ],
        onlyText4: {
          firstText:
            "La sanción de clausura prevista para los ilícitos establecidos en este artículo, se extenderá hasta tanto el sujeto pasivo cumpla con los respectivos deberes formales y notifique a la Administración Tributaria laregularización de la situación que dio origen al ilícito.",
        },
      },
      {
        key: "selladoLibros",
        title: "Sellado Obligatorio de los Libros ante el Registro Mercantil",
        onlyText: {
          firstTextBlack: "Infante, Fernández & Asociados,",
          secondTextBlack: "Código de Comercio,",
          firstText:
            "Es muy recurrente la interrogante, si verdaderamente es obligatorio el sellado de todos y cada uno de los libros que debe llevar toda empresa que se dedique a la actividad comercial. La respuesta que te brinda ",
          secondText: " la conseguimos en el mismo ",
          thirdText:
            " en su artículo 33, el cual establece que “el Libro Diario y el de Inventario no pueden ponerse en uso sin que hayan sido previamente presentados al Tribunal o Registro Mercantil, en los lugares donde los haya, o al juez ordinario de mayor categoría en la localidad donde no existan aquellos , a fin de poner en el primer folio de cada libro nota de los que este tuviere, fechada y firmada por el Juez y su Secretario o por el Registrador Mercantil. Se estampará en todas las demás hojas el Sello de la oficina. Esto con respecto a los libros exigidos en el aparte referido a la contabilidad mercantil. Adicionalmente, en el artículo 260, se establece la obligatoriedad de llevar los siguientes:",
        },
      },
    ],
  },
};
