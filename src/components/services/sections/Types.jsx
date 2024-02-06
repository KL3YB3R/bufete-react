import { Typography } from "@material-tailwind/react";

export const Types = ({ content }) => {
  return (
    <section className="w-12/12 mx-auto mt-20 flex justify-center items-center flex-wrap">
      {/* // ! TYPES => CONTENT LEFT */}
      <article className="w-10/12 mt-10 xl:mt-0 xl:w-4/12 md:grid md:grid-cols-2 md:gap-3 xl:flex xl:flex-col justify-end order-2 xl:order-1">
        {content.contentLeft.map((type, i) => (
          <aside
            key={i}
            className="rounded-xl xl:rounded-full sm:h-max md:h-24 2xl:h-20 bg-blue-100 shadow-md mb-4 flex lg:flex-row-reverse text-left xl:text-right "
          >
            <span className="hidden xl:block w-max h-auto rounded-r-full bg-blue p-5"></span>
            <div className="w-11/12 mx-auto xl:w-10/12 h-full flex flex-col justify-center xl:mr-4">
              <Typography as="h5" className="font-600 text-md p-1 pb-0">
                {type.title}
              </Typography>
              <Typography as="p" className="font-400 text-sm p-1 pb-2">
                {type.content}
              </Typography>
            </div>
          </aside>
        ))}
      </article>
      {/* // ! TYPES => MAIN CONTENT */}
      <article className="w-10/12 xl:w-3/12 order-1 xl:order-2 flex justify-center">
        <img src={content.mainImage} alt="" className="w-80 h-80 object-cover rounded-full shadow-xl" />
      </article>
      {/* // ! TYPES => CONTENT RIGHT */}
      <article className="w-10/12 mt-4 xl:mt-0 xl:w-4/12 md:grid md:grid-cols-2 md:gap-3 xl:flex xl:flex-col order-3">
        {content.contentRight.map((type, i) => (
          <aside
            key={i}
            className="rounded-xl xl:rounded-full sm:h-max md:h-24 2xl:h-20 bg-blue-100 shadow-md mb-4 flex text-left"
          >
            <span className="hidden xl:block w-max h-auto rounded-l-full bg-blue p-5"></span>
            <div className="w-11/12 mx-auto xl:w-10/12 h-full flex flex-col justify-center xl:mr-8">
              <Typography as="h5" className="font-600 text-md p-1 pb-0">
                {type.title}
              </Typography>
              <Typography as="p" className="font-400 text-sm p-1 pb-2">
                {type.content}
              </Typography>
            </div>
          </aside>
        ))}
      </article>
      <article className="w-10/12 mt-4 xl:mt-3 md:w-7/12 lg:w-5/12 order-4">
        {content.contentBottom.map((type, i) => (
          <aside
            key={i}
            className="rounded-xl xl:rounded-full sm:h-max md:h-24 2xl:h-20 bg-blue-100 shadow-md mb-4 flex text-left"
          >
            <span className="hidden xl:block w-max h-auto rounded-l-full bg-blue p-5"></span>
            <div className="w-11/12 mx-auto xl:w-10/12 h-full flex flex-col justify-center xl:ml-4">
              <Typography as="h5" className="font-600 text-md p-1 pb-0">
                {type.title}
              </Typography>
              <Typography as="p" className="font-400 text-sm p-1 pb-2">
                {type.content}
              </Typography>
            </div>
            <span className="hidden xl:block w-max h-auto rounded-r-full bg-blue p-5"></span>
          </aside>
        ))}
      </article>
    </section>
  );
};
