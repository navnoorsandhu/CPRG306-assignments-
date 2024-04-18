"use client";

import React, { useState } from "react";
import Item from "./item";

function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <button onClick={() => setSortBy('name')} className="p-5 m-2 text-xl border border-red-300 bg-red-300 rounded-xl">
        Sort by Name
      </button>
      <button onClick={() => setSortBy('category')} className="p-5 m-2 text-xl border border-red-300 bg-red-300 rounded-xl">
        Sort by Category
      </button>
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          onSelect={() => onItemSelect(item)} // Pass onSelect prop to handle item selection
        />
      ))}
    </div>
  );
}

export default ItemList;