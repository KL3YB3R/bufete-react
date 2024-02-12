import { Typography } from "@material-tailwind/react";

export const Lists = ({
  content,
  textSize = "lg",
  mt = "8",
  mb = "2",
  width = "full",
  listType = "disc",
  font = "400",
  pl = "4",
  px = "0",
  listArray = "list",
}) => {
  let listContent;
  listArray === "list2" ? (listContent = content.list2) : (listContent = content.list);

  return (
    <ul className={`w-${width} mx-auto mt-${mt} pl-${pl} px-${px} list-${listType}`}>
      {listContent.map((list, i) => (
        <li key={i} className={`mb-${mb} text-${textSize} font-${font}`}>
          <b>{list?.initialContentBlack}</b>
          {list.content}

          {list.text ? (
            <Typography as="p" className="font-400 mt-1 mb-5">
              {list.text}
            </Typography>
          ) : (
            ""
          )}

          {list.list ? (
            <ul className={`${listType === "disc" ? "list-decimal" : "list-circle"} font-400 mt-2 ml-4 mb-6`}>
              {list.list.map((subItem, i) => (
                <li key={i} className={`text-${textSize} mb-3`}>
                  {subItem.content}
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </li>
      ))}
    </ul>
  );
};
