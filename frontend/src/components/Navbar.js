import { Link } from "react-router-dom";
import Logo from "./1aac83.png"
const Navbar = () => {
    return ( 
        <header>
            <div className="container">
                <Link className = "LINKS" to = "/"><img src={ Logo } style={{ maxWidth: '50px', maxHeight: '50px'}} alt = ""/><h1>NASHAT</h1></Link>
            </div>
        </header>
     );
}
 
export default Navbar;