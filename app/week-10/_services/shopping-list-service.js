import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


    export async function getItems(userId) {
        const itemsCollection = collection(db, "users", userId, "items");
        const itemsSnapshot = await getDocs(itemsCollection);
        const items = itemsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return items;
    }

    export async function addItem(userId, item) {
        const itemsCollection = collection(db, "users", userId, "items");
        await addDoc(itemsCollection, item);
    }

