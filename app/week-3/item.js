export default function Item({name, quantity, category})
{
    return (
        <div className="text-indigo-200 pl-4">
            <ul className="border border-solid border-blue-300 max-w-sm mb-5 bg-indigo-800 py-2 px-3">
                <li className="font-extrabold">{name}</li>
                <li>Buy {quantity} in {category} </li>
            </ul>
        </div>
    );


}