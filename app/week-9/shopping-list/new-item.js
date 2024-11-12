"use client"
import {useState} from "react"
import ItemList from "./item-list";

export default function NewItem({onAddItem})
{

    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");
    const [quantity, setQuantity] = useState(1);
    const handleNameChange = (event) => setName(event.target.value);
    const handleCategoryChange = (event) => setCategory(event.target.value);
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        let newItem = 
        { 
            name: name,
            category: category,
            quantity : quantity
        };
        onAddItem(newItem);
        

    }


    const increment = (event) =>
    {
        event.preventDefault();
        let currentQuantity = quantity;
        if (currentQuantity < 20)
        {
            setQuantity(currentQuantity + 1);
        }
    }
    const decrement = (event) =>
    {
        event.preventDefault();
        let currentQuantity = quantity;
        if (currentQuantity > 1)
        {
            setQuantity(currentQuantity - 1);
        }
    }
 let incrementStyle = "bg-emerald-400 rounded-lg w-8 hover:bg-emerald-600 text-black font-bold";
 let decrementStyle = "bg-emerald-400 rounded-lg w-8 hover:bg-emerald-600 ml-2 text-black font-bold";
 let endStyle = "bg-gray-600 rounded-lg w-8 ml-2 cursor-not-allowed";
 let endStyle2 = "bg-gray-600 rounded-lg w-8 cursor-not-allowed"; 
    if (quantity >= 20)
    {
        incrementStyle = endStyle2;
    }
    if (quantity <= 1)
    {
        decrementStyle = endStyle;
    }

    return(
        <main className="pl-8 mb-4">
            <form className="p-4 border border-emerald-600 bg-gray-900 w-80"  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="inline-block"></label>
                    <input
                        onChange={handleNameChange}
                        value={name}
                        type="text"
                        placeholder="Item Name"
                        className="px-2 py-1 rounded border border-emerald-500 focus:bg-emerald-50 text-black w-full"
                    />
                </div>

                <div className="bg-gray-800 p-2 my-3 border-emerald-500 border rounded-lg flex justify-between w-32">
                    <div className="flex mr-12">
                        <h1>{quantity}</h1>
                        <div className="flex ml-3">
                            <button className={incrementStyle} onClick={increment}>+</button>
                            <button className={decrementStyle} onClick={decrement}>-</button>
                        </div>
                    </div>

                    <select onChange={handleCategoryChange} className="text-black p-1 border 2 border-emerald-500 rounded-lg">
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                        
                    </select>
                </div>

                <button className="w-full bg-emerald-400 rounded-lg px-4 py-2 inline-block hover:bg-emerald-600 text-black font-bold" type="submit">Submit</button>

            </form>
        </main>
        
    )
}