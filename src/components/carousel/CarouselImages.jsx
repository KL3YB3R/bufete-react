import { Typography } from "@material-tailwind/react";

export const CarouselImages = ({ slides }) => {
  return (
    <>
      {/* ITEM 1 */}
      <div className="w-full">
        <img src={slides[0]} alt="" className="w-screen h-full object-cover" />
        <div className="absolute flex flex-col items-end justify-center w-screen top-5 bottom-5 bg-gradient-to-r from-transparent to-blue py-8">
          <Typography
            as="p"
            className="w-9/12 sm:w-8/12 md:w-7/12 xl:w-3/6 text-start my-auto mr-10 sm:mr-16 text-xl md:text-2xl lg:text-3xl font-400 md:font-300 text-white leading-8 md:leading-12"
          >
            Velamos por las relaciones personales, profesionales y contractuales del{" "}
            <span className="uppercase font-bold">DERECHO CIVIL</span> además de
          </Typography>
          <Typography
            as="h1"
            className="w-9/12 sm:w-8/12 md:w-7/12 xl:w-3/6 text-start my-auto mt-2 md:-mt-4 mr-10 sm:mr-16 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-400 md:font-300 text-white leading-8 md:leading-12 font-500"
          >
            TODAS LAS <br /> <span className="font-700">REDACCIONES</span>
          </Typography>
        </div>
      </div>

      {/* ITEM 2 */}
      <div className="w-full">
        <img src={slides[1]} alt="" className="w-screen h-full object-cover" />
        <div className="absolute flex flex-col items-start justify-center w-screen top-5 bottom-5 bg-gradient-to-r from-blue to-transparent py-8">
          <Typography
            as="p"
            className="w-9/12 sm:w-8/12 md:w-7/12 xl:w-3/6 text-start my-auto ml-10 sm:ml-16 md:ml-24 text-xl md:text-2xl lg:text-3xl font-400 md:font-300 text-white leading-8 md:leading-10 lg:leading-12"
          >
            Porque nuestro mayor tesoro es <br /> <span className="uppercase font-bold">LA FAMILIA</span> , gestionamos
            cada trámite relacionado a
          </Typography>
          <Typography
            as="h1"
            className="w-9/12 sm:w-8/12 md:w-7/12 xl:w-3/6 text-start my-auto -mt-4 ml-10 sm:ml-16 md:ml-24 text-xl md:text-2xl lg:text-3xl font-400 md:font-300 text-white leading-8 md:leading-10 lg:leading-12"
          >
            <span className="font-700">INSTITUCIONES FAMILIARES</span> A LA LUZ DE LA LOPNNA <br />
          </Typography>
        </div>
      </div>

      {/* ITEM 3 */}
      <div className="w-full">
        <img src={slides[2]} alt="" className="w-screen h-full object-cover" />
        <div className="absolute flex flex-col items-end justify-center w-screen top-5 bottom-5 bg-gradient-to-r from-transparent to-blue py-8">
          <Typography
            as="p"
            className="w-9/12 sm:w-8/12 md:w-7/12 xl:w-3/6 text-start my-auto mr-10 sm:mr-16 text-xl md:text-2xl lg:text-3xl font-400 md:font-300 text-white leading-8 md:leading-10 lg:leading-12"
          >
            Todas las funciones <span className="uppercase font-bold">CONTABLES</span> y{" "}
            <span className="uppercase font-bold">FISCALES</span> propias del departamento contable de su empresa con
            nuestro servicio...
          </Typography>
          <Typography
            as="h1"
            className="w-9/12 sm:w-8/12 md:w-7/12 xl:w-3/6 text-start my-auto mt-2 md:-mt-4 mr-10 sm:mr-16 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-400 md:font-300 text-white leading-8 md:leading-12 font-500"
          >
            <span className="font-700">OUTSOURCING</span> CONTABLE-FISCAL <br />
          </Typography>
        </div>
      </div>

      {/* ITEM 4 */}
      <div className="w-full">
        <img src={slides[3]} alt="" className="w-screen h-full object-cover" />
        <div className="absolute flex flex-col items-end w-screen top-5 bottom-5 bg-gradient-to-r from-transparent to-blue">
          <Typography
            as="h1"
            className="w-9/12 sm:w-8/12 md:w-7/12 xl:w-3/6 text-start my-auto mr-10 sm:mr-16 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-400 md:font-300 text-white leading-8 md:leading-12 font-500"
          >
            CONTACTA NUESTRA <br /> <span className="font-700">RED DE MENTORES</span>
          </Typography>
          <Typography
            as="p"
            className="w-9/12 sm:w-8/12 md:w-7/12 xl:w-3/6 text-start my-auto -mt-0 mr-10 sm:mr-16 text-xl md:text-2xl lg:text-3xl font-400 md:font-300 text-white leading-8 md:leading-10 lg:leading-12"
          >
            Acompaña tu <span className="uppercase font-bold">EMPRENDIMIENTO</span> y{" "}
            <span className="uppercase font-bold">FISCALES</span> compartiendo enseñanzas y experiencias en la creación
            de negocios exitosos.
          </Typography>
        </div>
      </div>

      {/* ITEM 5 */}
      <div className="w-full">
        <img src={slides[4]} alt="" className="w-screen h-full object-fill" />
        <div className="absolute flex flex-col justify-center items-end w-screen top-5 bottom-5 bg-gradient-to-r from-transparent to-blue">
          <Typography
            as="p"
            className="w-9/12 sm:w-8/12 md:w-7/12 xl:w-3/6 text-start my-auto mr-10 sm:mr-16 text-xl md:text-2xl lg:text-3xl font-400 md:font-300 text-white leading-8 md:leading-10 lg:leading-12"
          >
            COMIENZA EL CAMINO AL ÉXITO SIENDO DUEÑO DE TU PROPIO NEGOCIO
          </Typography>
          <Typography
            as="h1"
            className="w-9/12 sm:w-8/12 md:w-7/12 xl:w-3/6 text-start my-auto mt-2 md:-mt-4 mr-10 sm:mr-16 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-400 md:font-300 text-white leading-8 md:leading-12 font-500"
          >
            <span className="font-700">CONSTITUIMOS TU EMPRESA PYME</span>
          </Typography>
          <Typography
            as="p"
            className="w-9/12 sm:w-8/12 md:w-7/12 xl:w-3/6 text-start my-auto -mt-0 mr-10 sm:mr-16 text-xl md:text-2xl lg:text-3xl font-400 md:font-300 text-white leading-8 md:leading-10 lg:leading-12"
          >
            Consulta nuestros Planes Constitutivos
          </Typography>
        </div>
      </div>
    </>
  );
};
