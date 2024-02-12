import { Typography } from "@material-tailwind/react";
import { CardsButtons, CardsHide, Lists, TextWithoutImage } from "../services/sections";
import { OnlyText } from "../services/sections/OnlyText";

export const Section = ({ content }) => {
  return (
    <article id={content.key} className="hidden w-12/12 mx-auto p-2 mt-10 container-buttons-content opacity-0">
      {/* <Typography as="h4" className="font-600 text-lg text-center">
        {content.title}
      </Typography> */}

      {content.submains ? (
        <div className="cards-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-start items-start gap-8 w-full px-2 mt-12 mb-3">
          {content.submains.map((submain, i) => (
            <CardsButtons key={i} content={submain} />
          ))}
        </div>
      ) : (
        ""
      )}

      {content.onlyText ? <OnlyText content={content.onlyText} mb="8" /> : ""}
      {content.firstTitle ? (
        <Typography as="h6" className="font-600 text-lg w-10/12 mx-auto mb-0">
          {content.firstTitle}
        </Typography>
      ) : (
        ""
      )}
      {content.onlyText2 ? <OnlyText content={content.onlyText2} mt="8" mb="8" /> : ""}
      {content.list ? (
        <Lists
          content={content}
          mt="2"
          mb="3"
          width="10/12"
          listType={content.listType.style}
          font={content.listType.font}
          textSize={content.listType.size}
        />
      ) : (
        ""
      )}

      {content.cardsHide ? <CardsHide content={content.cardsHide} cols="3" mt="12" xl="12/12" /> : ""}
      {content.secondTitle ? (
        <Typography as="h6" className="font-600 text-lg w-10/12 mx-auto mt-6 mb-0">
          {content.secondTitle}
        </Typography>
      ) : (
        ""
      )}
      {content.onlyText3 ? <OnlyText content={content.onlyText3} mt="8" mb="3" /> : ""}
      {content.list2 ? (
        <Lists
          content={content}
          mt="10"
          mb="3"
          width="10/12"
          listType={content.listType2.style}
          font={content.listType2.font}
          textSize={content.listType2.size}
          listArray="list2"
        />
      ) : (
        ""
      )}
      {content.onlyText4 ? <OnlyText content={content.onlyText4} mt="0" mb="8" /> : ""}
      {content.onlyText5 ? <OnlyText content={content.onlyText5} mt="0" mb="8" /> : ""}
      {content.onlyText6 ? <OnlyText content={content.onlyText6} mt="0" mb="8" /> : ""}
    </article>
  );
};
