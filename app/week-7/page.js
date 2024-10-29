"use client"
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";


export default function Page()
{
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (NewItem) => {
        setItems((prevItems) => [...prevItems, NewItem]);
     }

    return (
        <main>
            <h1 className="text-3xl pl-4 my-4"> Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />

        </main>
    );
}