import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h1>This Page is Not Found</h1>
            <button>
                <Link to='/'>Home</Link>
            </button>
        </div>
    )
}

export default NotFound;