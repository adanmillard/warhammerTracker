import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../firebase"; // Adjust the path if your firebase config is elsewhere
import { useEffect, useState } from "react";
import ProfileMenu from "./ProfileMenu";
import { useNavigate } from "react-router-dom";

export default function FirebaseLogin() {

    const navigate = useNavigate();

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
            return result;
        } catch (error:any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        }
    }



    const handleSignOut = async (user: User) => {
        try {
            if (!user) {
                navigate('/');
                return
            }
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.log("Error signing out:", error);
        }
    }

return(
    <div className=" w-full">
        <ul className="flex justify-end gap-6 p-4 bg-gray-800 text-white">
            {!user ? (
                <li className="cursor-pointer" onClick={signInWithGoogle}>Log in</li>
            ):(
                <>
                <ProfileMenu user={user} signOut={() => handleSignOut(user)}></ProfileMenu>
                </>
            )}
        </ul>
    </div>
)
}
