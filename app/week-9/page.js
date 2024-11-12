"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";


export default function SignInPage()
{
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleSignIn()
    {
        try{
            await gitHubSignIn();
        }
        catch(error){
            console.log(error);
        }
    }

    async function handleSignOut()
    {
        try{
            await firebaseSignOut();
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <main className="p-3">
            <h1>Sign In Page</h1>
            {user ? (
                <div>
                    <h2>Welcome, {user.displayName}</h2>

                    <div className="mt-2 font-bold text-lg p-2 bg-emerald-500 w-max rounded-lg">
                        <Link href="/week-9/shopping-list/">Go to the shopping list</Link>
                    </div>
                    <button 
                        type="button"
                        className="p-5 mt-2 text-lg font-bold bg-red-500 text-white px-2 py-1 rounded"
                        onClick={handleSignOut}>Sign Out
                    </button>
                </div>
            ) : (
                <button
                    type="button"
                    className="p-5 mt-2 text-lg bg-emerald-500 text-white px-2 py-1 rounded" 
                    onClick={handleSignIn}>Sign In with GitHub
                </button>
            )}
        </main>
    )


}