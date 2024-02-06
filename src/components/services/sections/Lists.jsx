export const Lists = ({ content }) => {
  return (
    <div className="mt-8 pl-4">
      {content.list.map((list, i) => (
        <li key={i} className="mb-2 text-lg">
          {list.content}
        </li>
      ))}
    </div>
  );
};
