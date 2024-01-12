import { useState } from "react"
import { Link } from "react-router-dom"
import menu from '../asset/menu.png';
import xbutton from '../asset/x.png';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);
    let isLogin = useSelector((state) => state.isLogin);
    isLogin = isLogin || localStorage.getItem("userId");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //state
    const [value, setValue] = useState();

    //logout
    const handleLogout = () => {
        try {
            dispatch(logout());
            navigate("/login");
            localStorage.clear();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <nav className="navbar">
                <h3 className="logo">
                    <Link to="/" className="home">
                    BookMyStay
                    </Link></h3>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                    onClick={() => setIsMobile(false)}>
                {isLogin?(
                    <>
                    <Link to="/" className="home">
                        <li>Home</li>
                    </Link>
                    <Link to="/orders" className="home">
                        <li>Your Orders</li>
                    </Link>
                    <Link to="/login" className="home">
                        <li onClick={handleLogout}>Logout</li>
                    </Link>
                    </>
                ):(
                    <>
                    <Link to="/login" className="home">
                        <li>Login</li>
                    </Link>
                    <Link to="/Register" className="home">
                        <li>Register</li>
                    </Link>
                    </>
                )}
                    

                </ul>
                <button className="mobile-menu-icon"
                    onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? (
                        <img src={xbutton} alt="Logo" height='20' style={{backgroundColor:'white'}} />
                    ) : (
                        <img src={menu} alt="Logo" height='20' style={{backgroundColor:'white'}} />
                    )}
                </button>
            </nav>

        </>
    )
}
export default NavBar;
