
import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <ul
      className="bg-red-300 p-4 w-1/2 mt-6 mx-4 cursor-pointer"
      onClick={() => onSelect({ name, quantity, category })}
    >
      <li className="font-bold text-xl">
        Name: {name}
      </li>
      <li>
        Buy {quantity} in the {category} category
      </li>
    </ul>
  );
};

export default Item;
