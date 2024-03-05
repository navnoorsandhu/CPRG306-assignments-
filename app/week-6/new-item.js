"use client";
import React, { useState } from 'react';

const NewItem = ({ addNewItem }) => {

  const [name, choose_name] = useState('');
  const [quantity, choose_quantity] = useState(1);
  const [category, choose_category] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = { name, quantity, category };

    console.log(item);

    alert(`Name: ${name}\n Quantity: ${quantity}\n Category: ${category}`);

    const id = Math.random().toString(50);
    addNewItem({id, name, quantity, category});
    
    choose_name('');
    choose_quantity(1);
    choose_category('produce');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => choose_name(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-600">

            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => choose_quantity(Number(e.target.value))}
            required
            min="1"
            max="99"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-600">

            Category
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => choose_category(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewItem;
