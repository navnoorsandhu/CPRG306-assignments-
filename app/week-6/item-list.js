"use client"

import React, { useState, useEffect } from 'react';
import Item from './item';

const ItemList = ({items = []}) => {
  const [sortBy, setSortBy] = useState('name');
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    if (Array.isArray(items)) {
      const sorted = [...items].sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
          return a.category.localeCompare(b.category);
        }
        
      });
      setSortedItems(sorted);
    }
}, [items, sortBy]);

  const handleSortBy = (value) => {
    setSortBy(value);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => handleSortBy('name')}
          className={sortBy === 'name' ? 'bg-blue-500' : 'bg-gray-300'}
        >
          Sort by Name
        </button>
        <button
          onClick={() => handleSortBy('category')}
          className={sortBy === 'category' ? 'bg-blue-500' : 'bg-gray-300'}
        >
          Sort by Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
