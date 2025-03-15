import { Link } from "react-router-dom"
import "../CSS/Navbar.css"


function NavBar() {

return <nav className="navbar">
    <div className="navbar-brand">
        <Link to="/"> <b>Movie</b> buff </Link>

    </div>
    <div className="navbar-links">
    <Link to="/" className="nav-link" >Home</Link>
 <Link to="/favorites" className="nav-link" >Favorites</Link>
 <Link to="/addmovie" className="nav-link" >Add Movie</Link>
 <Link to="/signup" className="nav-link" >Sign Up</Link>
 <Link to="/login" className="nav-link" >Login</Link>
    </div>
</nav>

}


export default NavBar