import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import "./../styles/navbar.css";

function Navbar() {

  const { cart } = useContext(CartContext);

  const { token, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">

      <div className="logo">
        <i className="fa-solid fa-burger"></i> QuickBite
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">
            <i className="fa-solid fa-house"></i> Home
          </Link>
        </li>

        <li>
          <Link to="/about">
            <i className="fa-solid fa-circle-info"></i> About
          </Link>
        </li>

        <li>
          <Link to="/support">
            <i className="fa-solid fa-headset"></i> Support
          </Link>
        </li>

        <li>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i> Cart ({cart.length})
          </Link>
        </li>

        <li>
          <Link to="/track-order">
            Track Order
          </Link>
        </li>

        {!token ? (

          <li>
            <Link to="/signup" className="signup-btn">
              Signup
            </Link>
          </li>

        ) : (

          <li>
            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </li>

        )}

      </ul>

    </nav>
  );
}

export default Navbar;