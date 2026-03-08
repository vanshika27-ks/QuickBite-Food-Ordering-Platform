import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./../styles/floatingcart.css";

function FloatingCart(){

const { cart } = useContext(CartContext);

if(cart.length === 0) return null;

return(

<Link to="/cart" className="floating-cart">

🛒 View Cart ({cart.length})

</Link>

)

}

export default FloatingCart;