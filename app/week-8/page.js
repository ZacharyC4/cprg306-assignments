"use client"
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";



export default function Page()
{
    const [selectedItemName, setSelectedItemName] = useState("");
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (NewItem) => {
        setItems((prevItems) => [...prevItems, NewItem]);
     }
    
    const handleItemSelect = (item) => {
        const cleanName = item.name
        .split(',')[0]
        .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
        .trim();
    
        setSelectedItemName(cleanName);
    } 
    return (
        <main className="flex">
            <div className="flex-1">
                <h1 className="text-3xl pl-4 my-4"> Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="flex-1">
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}