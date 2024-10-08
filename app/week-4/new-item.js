"use client"
import {useState} from "react"

export default function NewItem()
{

    const [quantity, setQuantity] = useState(1);
    const increment = () =>
    {
        let currentQuantity = quantity;
        if (currentQuantity < 20)
        {
            setQuantity(currentQuantity + 1);
        }
    }
    const decrement = () =>
    {
        let currentQuantity = quantity;
        if (currentQuantity > 1)
        {
            setQuantity(currentQuantity - 1);
        }
    }
 let incrementStyle = "bg-emerald-400 rounded-lg w-8 hover:bg-emerald-600 text-black font-bold";
 let decrementStyle = "bg-emerald-400 rounded-lg w-8 hover:bg-emerald-600 ml-2 text-black font-bold";
 let endStyle = "bg-gray-600 rounded-lg w-8 ml-2 cursor-not-allowed";
    if (quantity >= 20)
    {
        incrementStyle = endStyle;
    }
    if (quantity <= 1)
    {
        decrementStyle = endStyle;
    }

    return(
        <main className="flex justify-center w-full">
            <div className="bg-gray-800 w-36 p-2 m-4 border-emerald-500 border">
                <div className="flex justify-between">
                        <h1>{quantity}</h1>
                    <div className="flex">
                        <button className={incrementStyle} onClick={increment}>+</button>
                        <button className={decrementStyle}  onClick={decrement}>-</button>
                    </div>


                </div>
            </div>
        </main>
        
    )
}