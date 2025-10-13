import {Outlet, Link} from "react-router-dom";

export default function Nav(){
    return(
        <div>
            <Link to="/profile"><li >Profile</li></Link>
            <Link to="/collections"><li >Collection</li></Link>
            <Outlet/>
        </div>
    )
}