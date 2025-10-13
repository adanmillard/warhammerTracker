import {type User} from "firebase/auth";
import Nav from "./Nav";

  interface ProfileMenuProps {
        user: User | null;
    }

    interface SignOutProps {
        signOut: () => Promise<void>;
    }
    
    
export default function ProfileMenu({user, signOut}: ProfileMenuProps & SignOutProps){

return(
    <div>
        <ul>
            {user?.displayName}
            <Nav/>
            <li onClick={signOut}>Sign out</li>
        </ul>
        
    </div>
)
}