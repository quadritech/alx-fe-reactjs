import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar () {
    return (
      <nav className="static">
        <ul className="flex-2 space-edge">
          <li>
            <Link to="/">Recipes Haven</Link>
          </li>
          <ul  className="flex-2">
            <li>
              <Link to="/add">Add Recipes</Link>
            </li>
            <li>
              <Link to="/all">View Recipes</Link>
            </li>
            <li>
                <SearchBar />
            </li>
          </ul>
        </ul>
      </nav>
    );
}

export default Navbar;