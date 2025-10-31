import {Outlet} from "react-router-dom";
import FirebaseLogin from "./FirebaseLogin";

export default function Layout(){
    return(
        <div>
            <FirebaseLogin />
            <Outlet/>
        </div>
    )
}
