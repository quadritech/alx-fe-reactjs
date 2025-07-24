
import { Link } from "react-router-dom";

function Navbar() {
    return (
    <div style={{ display: "flex", gap: "3rem", justifyContent: "center" , backgroundColor: 'white', width: '100vw', padding: "1rem 0"}}>
    <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
    </div>
    );
}
export default Navbar;
