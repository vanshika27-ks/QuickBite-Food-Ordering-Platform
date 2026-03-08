import "./../styles/trackorder.css";

function TrackOrder(){

return(

<div className="track-container">

<h1>Track Your Order</h1>

<p className="order-id">Order ID: QB1024</p>

<div className="map-section">

<h2>Delivery Location</h2>

<div className="map-card">

<i className="fa-solid fa-map-location-dot"></i>

<p>Your order is currently on the way.</p>

</div>

</div>

<div className="timeline">

<div className="timeline-step completed">
<div className="circle">✔</div>
<div className="content">
<h3>Order Placed</h3>
<p>Your order has been successfully placed.</p>
</div>
</div>

<div className="timeline-step completed">
<div className="circle">✔</div>
<div className="content">
<h3>Preparing Food</h3>
<p>The restaurant is preparing your order.</p>
</div>
</div>

<div className="timeline-step active">
<div className="circle">⏳</div>
<div className="content">
<h3>Out for Delivery</h3>
<p>Your order is on the way.</p>
</div>
</div>

<div className="timeline-step">
<div className="circle">•</div>
<div className="content">
<h3>Delivered</h3>
<p>Your order will arrive soon.</p>
</div>
</div>

</div>

<div className="delivery-partner">

<h2>Delivery Partner</h2>

<div className="partner-card">

<div className="partner-info">

<i className="fa-solid fa-user"></i>

<div>
<h3>Rahul Sharma</h3>
<p>On the way to deliver your order</p>
</div>

</div>

<button className="call-btn">
<i className="fa-solid fa-phone"></i> Call Rider
</button>

</div>

</div>

</div>

)

}

export default TrackOrder;