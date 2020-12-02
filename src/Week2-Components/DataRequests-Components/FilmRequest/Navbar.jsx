import React, {Link} from 'react-router-dom'
const Navbar = () => {
    return (
<>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/finddetails">Find movie details</Link>             
                <Link to="/about">About</Link>
            </div>
        </>
)
}
export default Navbar;