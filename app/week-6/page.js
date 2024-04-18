"use client"

import React, { useState } from 'react'; 
import NewItem from './new-item'; 
import ItemList from './item-list'; 
import itemsData from './items.json';
export default function Page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]); 
  };

  return (
    <main>
      <h1 className='font-bold text-4xl p-2'>Shopping list</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} /> 
    </main>
  );
}