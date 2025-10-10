import {type User} from "firebase/auth";

  interface ProfileMenuProps {
        user: User | null;
    }

    interface SignOutProps {
        signOut: () => Promise<void>;
    }
    
    
export default function ProfileMenu({user, signOut}: ProfileMenuProps & SignOutProps){

  
return(
    <div>
        {user?.displayName}
        <div>Profile</div>
        <div>Collection</div>
        <div onClick={signOut}>Sign out</div>
    </div>
)
}