"use client"
import { useState } from "react";
import Item from "./item";
import items from "./items.json";
import NewItem from "../week-5/new-item";


export default function ItemList() {

    const [sortBy, setSortBy] = useState("name");
    let itemArray = items;

    const handleSortByName = (event) => {
        event.preventDefault();
        setSortBy("name");
        itemArray.sort((a, b) => a.name.localeCompare(b.name));
    }

    const handleSortByCategory = (event) => {
        event.preventDefault();
        setSortBy("category");
        itemArray.sort((a, b) => a.category.localeCompare(b.category));
    }

    let nameStyle = "bg-gray-800 p-2 my-3 ml-4 border-emerald-500 border rounded-lg text-indigo-300";
    let buttonStyle = "bg-gray-800 p-2 my-3 ml-4 border-emerald-500 border rounded-lg text-indigo-300";
    let activeStyle = "bg-emerald-500 p-2 my-3 ml-4 border-emerald-500 border rounded-lg text-indigo-800";
    
    if (sortBy === "name") {nameStyle = activeStyle;}
    if (sortBy === "category") {buttonStyle = activeStyle;}

      return (
        <main>
          <NewItem />
          <button className={nameStyle} onClick={handleSortByName}>Sort by Name</button>
          <button className={buttonStyle} onClick={handleSortByCategory}>Sort by Category</button>
          <ul>
            {itemArray.map((item, id) => (
              <Item key={id} name={item.name} quantity={item.quantity} category={item.category} />
            ))}
            <li>
            
            
            </li>
          </ul>
      </main>
        );
}
