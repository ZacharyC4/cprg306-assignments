"use client"
import {useState} from "react"
import { useEffect } from "react"

export default function MealIdeas({ingredient}){

    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient)
    {
        try 
        {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
            );
            if (!response.ok) console.log(response.status);
            const data = await response.json();
            console.dir(data);
            setMeals(data.meals || []);
            
        }
        catch (error) 
        {
            console.log(`Error: ${error.message}`);
        }

    }
    const loadMealIdeas = () => {
        if (ingredient) fetchMealIdeas(ingredient);
    }
    useEffect(() => {loadMealIdeas();}, [ingredient]);

    return(
        <div>
            <h1 className="text-3xl text-indigo-400 font-bold"> Meal ideas for "{ingredient}"</h1>
                <ul>
                    {meals.map((meal) => (
                        <li key={meal.idMeal}>
                            <h2 className="mt-4 text-indigo-300 py-1 font-bold">{meal.strMeal}</h2>
                            <img className="size-48" src={meal.strMealThumb} alt={meal.strMeal}/>
                        </li>
                    ))}
                </ul>
        </div>

    )
}
