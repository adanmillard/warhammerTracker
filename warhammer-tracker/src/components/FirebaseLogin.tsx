import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../firebase"; // Adjust the path if your firebase config is elsewhere
import { useEffect, useState } from "react";
import ProfileMenu from "./ProfileMenu";

export default function FirebaseLogin(){
    
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const signInWithGoogle: any = async () => {
        const provider = new GoogleAuthProvider();
        try{
            const result = await signInWithPopup(auth, provider);
            console.log(result);
        } catch (error:any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        }
    }

    const handleSignOut = async () => {
        await signOut(auth);
    }
    
return(
    <div className=" w-full">
        <ul className="flex justify-end gap-6 p-4 bg-gray-800 text-white">
            {!user ? (
                <li className="cursor-pointer" onClick={signInWithGoogle}>Log in</li>
            ):(
                <>
                <ProfileMenu user={user} signOut={handleSignOut}></ProfileMenu>
                </>
            )}
        </ul>
    </div>
)
}