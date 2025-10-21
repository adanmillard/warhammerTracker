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
            <li>
                <a href="/">{user?.displayName}</a>
            </li>
            <Nav/>
            <li onClick={signOut}>Sign out</li>
            {/* Fix sign out if on different page to reroute back to homepage */}
        </ul>
        
    </div>
)
}