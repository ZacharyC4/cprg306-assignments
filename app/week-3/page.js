import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-indigo-950">
        <div>
            <h1 className="text-3xl text-indigo-100 pb-4 pl-4">Shopping List</h1>
            <ItemList />
        </div>
    </main>
  );
}