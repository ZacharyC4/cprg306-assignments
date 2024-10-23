export default function Item({name, quantity, category})
{
    
    return (
        <div className="text-indigo-300 pl-8">
            <ul className="border border-solid border-emerald-500 max-w-sm mb-5 bg-gray-800 py-2 px-3">
                <li className="font-extrabold">{name}</li>
                <li>Buy {quantity} in {category} </li>
            </ul>
        </div>
    );


}