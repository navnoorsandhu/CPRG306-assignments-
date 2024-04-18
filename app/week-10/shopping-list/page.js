
"use client";

import React, { useState } from "react";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";


function Page() {
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.trim().toLowerCase();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="flex flex-col md:flex-row justify-around p-2">
      <div className="flex-1">
        <h1 className='font-bold text-4xl mb-4'>Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}

export default Page;
