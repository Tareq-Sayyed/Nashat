import { Link } from "react-router-dom";
import Logo from "./1aac83.png"

import { useLogout } from "../hooks/useLogout";


const Navbar = () => {
    const { logout } = useLogout();

    const handleClick = () => {
        logout();
        console.log("logout");
    }
    
    return ( 
        <header>
            <div className="container">
                <Link className = "LINKS" to = "/"><img src={ Logo } style={{ maxWidth: '50px', maxHeight: '50px'}} alt = ""/><h1>NASHAT</h1></Link>
                <nav>

                    <div >
                        <button onClick={ handleClick }>Log out</button>
                    </div>
                    <div className="">
                        <Link className = "LINKS" to = "/login">Login</Link>
                        <Link className = "LINKS" to = "/signup">Sign Up</Link>
                    </div>
                </nav>
            
            </div>
        </header>
     );
}
 
export default Navbar;