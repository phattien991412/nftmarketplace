import React from "react";

const Count = ({ data }) => {
  return (
    <ul className="flex items-center flex-wrap lg:flex-nowrap gap-20 py-8">
      {data.map((item) => (
        <li key={item.title} className="">
          <h4 className="text-3xl font-semibold">{item.count}</h4>
          <p className="text-base py-2">{item.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default Count;
