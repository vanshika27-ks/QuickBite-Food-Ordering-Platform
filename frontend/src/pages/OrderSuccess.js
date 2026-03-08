import { Link } from "react-router-dom";
import "./../styles/order.css";

function OrderSuccess(){

const orderId = "QB" + Math.floor(10000 + Math.random() * 90000);

return(

<div className="order-success">

<h1>🎉 Order Placed Successfully!</h1>

<p>Your delicious food is being prepared.</p>

<h3>Order ID: {orderId}</h3>

<p>Estimated Delivery: 30 minutes</p>

<Link to="/track-order" className="track-btn">
Track Your Order →
</Link>

</div>

)

}

export default OrderSuccess;