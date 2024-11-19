"use client"
import { useEffect, useState } from "react";
import Item from "./item";


export default function ItemList({items, onItemSelect}) {

    const [sortBy, setSortBy] = useState("name");
    const [displayItems, setDisplayItems] = useState([]);

    useEffect(() => {
      const sortedItems = [...items].sort((a, b) => sortBy === "name" 
      ? a.name.localeCompare(b.name)
      : a.category.localeCompare(b.category));
      setDisplayItems(sortedItems);
    }, [items, sortBy]);

    const handleSortByName = (event) => {
        event.preventDefault();
        setSortBy("name");
    }

    const handleSortByCategory = (event) => {
        event.preventDefault();
        setSortBy("category");
    }

    let nameStyle = "bg-gray-800 p-2 my-3 ml-4 border-emerald-500 border rounded-lg text-indigo-300";
    let buttonStyle = "bg-gray-800 p-2 my-3 ml-4 border-emerald-500 border rounded-lg text-indigo-300";
    let activeStyle = "bg-emerald-500 p-2 my-3 ml-4 border-emerald-500 border rounded-lg text-indigo-800";
    
    if (sortBy === "name") {nameStyle = activeStyle;}
    if (sortBy === "category") {buttonStyle = activeStyle;}

      return (
        <main>
          {/* <NewItem /> */}
          <button className={nameStyle} onClick={handleSortByName}>Sort by Name</button>
          <button className={buttonStyle} onClick={handleSortByCategory}>Sort by Category</button>
          <ul>
            {displayItems.map((item, id) => (
              <Item 
              key={id} 
              name={item.name} 
              quantity={item.quantity} 
              category={item.category}
              onSelect={() => onItemSelect(item)} />
            ))}
            <li>
            
            
            </li>
          </ul>
      </main>
        );
}
