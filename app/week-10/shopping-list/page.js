"use client"
import NewItem from "./new-item";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import { useEffect } from "react";
import { addItem, getItems } from "../_services/shopping-list-service";
import ItemList from "./item-list";
import { useUserAuth } from "../_utils/auth-context";



export default function Page()
{
    const {user} = useUserAuth();
    const [selectedItemName, setSelectedItemName] = useState("");
    const [items, setItems] = useState([]);

    const handleAddItem = (NewItem) => {
        
        addItem(user.uid, NewItem);
        setItems([...items, NewItem]);
        loadItems();

     }
    
    const handleItemSelect = (item) => {
        const cleanName = item.name
        .split(',')[0]
        .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
        .trim();
    
        setSelectedItemName(cleanName);
    } 

    const loadItems = async () =>{
        if (!user)
        {
            console.error("User not logged in");
        }
        const fetchedItems = await getItems(user.uid);
        setItems (fetchedItems);
    }

    useEffect(() => {
        if (user)
        {
            loadItems();
        }
    }, [user]);

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