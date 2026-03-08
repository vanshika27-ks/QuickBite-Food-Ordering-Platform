import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./../styles/cart.css";

function Cart(){

const { cart, removeFromCart } = useContext(CartContext);

const navigate = useNavigate();

const total = cart.reduce(
(sum,item)=>sum + parseInt(item.price.replace("₹","")),0
);

const placeOrder = async ()=>{

try{

await axios.post(
"http://localhost:5000/api/orders",
{
items: cart,
total: total
}
);

navigate("/order-success");

}catch(err){
console.log(err);
}

};

return(

<div className="cart-page">

<h1>Your Cart</h1>

{cart.length === 0 ? (

<p>Your cart is empty</p>

) : (

<>

<div className="cart-items">

{cart.map((item,index)=>(
<div className="cart-item" key={index}>

<div className="cart-info">
<h3>{item.name}</h3>
<p>{item.price}</p>
</div>

<button
className="remove-btn"
onClick={()=>removeFromCart(index)}
>
❌ Remove
</button>

</div>
))}

</div>

<div className="cart-total">

<h2>Total: ₹{total}</h2>

<button
className="order-btn"
onClick={placeOrder}
>
Place Order
</button>

</div>

</>

)}

</div>

)

}

export default Cart;