import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../firebase"; // Adjust the path if your firebase config is elsewhere
import { useEffect, useState } from "react";
import ProfileMenu from "./ProfileMenu";
import { useNavigate } from "react-router-dom";

export default function FirebaseLogin() {

    const navigate = useNavigate();

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            console.log(currentUser)

            if (currentUser) {
                const token = await currentUser.getIdToken();
                console.log(token)

                try {
                    const res = await fetch(`http://localhost:5000/api/users/sync`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        }
                    });
                    if (!res.ok) {
                        console.error('Failed to sync user with backend');
                    }

                    const data = await res.json();
                    console.log('User synced with backend:', data.user);

                    navigate('/profile');
                } catch (error) {
                    console.error('Error syncing user with backend:', error);
                }
            }



        });
        return () => unsubscribe();
    }, [navigate]);

    const signInWithGoogle: any = async () => {
        const provider = new GoogleAuthProvider();
        try{
            await signInWithPopup(auth, provider);
        } catch (error:any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        }
    }

    const handleSignOut = async () => {
        try {
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
                <ProfileMenu user={user} signOut={handleSignOut}></ProfileMenu>
                </>
            )}
        </ul>
    </div>
)
}
