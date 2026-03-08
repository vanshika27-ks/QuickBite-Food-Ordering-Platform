import "./../styles/support.css";

function Support() {

  return (

    <div className="support-container">

      <h1>Support Center</h1>

      <p className="support-subtitle">
        Need help with QuickBite? We're here to assist you.
      </p>

      <div className="help-categories">

<h2>Help Categories</h2>

<div className="categories-grid">

<div className="category-card">
<i className="fa-solid fa-box"></i>
<h3>Orders</h3>
<p>Help with placing or tracking orders</p>
</div>

<div className="category-card">
<i className="fa-solid fa-credit-card"></i>
<h3>Payments</h3>
<p>Issues related to payment methods</p>
</div>

<div className="category-card">
<i className="fa-solid fa-user"></i>
<h3>Account</h3>
<p>Manage login and account settings</p>
</div>

<div className="category-card">
<i className="fa-solid fa-truck"></i>
<h3>Delivery</h3>
<p>Information about delivery and timing</p>
</div>

</div>

</div>

      {/* Contact Form */}

      <div className="contact-section">

<h2>Contact Support</h2>

<div className="contact-layout">

{/* Contact Form */}

<div className="contact-form">

<input type="text" placeholder="Your Name" />

<input type="email" placeholder="Your Email" />

<textarea placeholder="Describe your issue"></textarea>

<button>Send Message</button>

</div>

{/* Contact Info */}

<div className="contact-info">

<div className="info-item">

<i className="fa-solid fa-envelope"></i>

<div>
<h4>Email Support</h4>
<p>support@quickbite.com</p>
</div>

</div>

<div className="info-item">

<i className="fa-solid fa-clock"></i>

<div>
<h4>Response Time</h4>
<p>Within 24 hours</p>
</div>

</div>

<div className="info-item">

<i className="fa-solid fa-location-dot"></i>

<div>
<h4>Service Area</h4>
<p>Online Food Ordering Platform</p>
</div>

</div>

</div>

</div>

</div>

      {/* FAQ Section */}

      <div className="faq-section">

<h2>Frequently Asked Questions</h2>

<div className="faq-item">

<details>
<summary>How do I place an order?</summary>
<p>
Browse restaurants, select your favorite dishes and add them to
your cart before confirming your order.
</p>
</details>

</div>

<div className="faq-item">

<details>
<summary>Can I modify my order?</summary>
<p>
Orders can be modified before they are confirmed. Once the
restaurant starts preparing the food, changes may not be possible.
</p>
</details>

</div>

<div className="faq-item">

<details>
<summary>How can I track my order?</summary>
<p>
After placing an order, you can track the order status through
the order tracking page in QuickBite.
</p>
</details>

</div>

<div className="faq-item">

<details>
<summary>Who developed QuickBite?</summary>
<p>
QuickBite is a full-stack food ordering project developed by
Vanshika Salaria.
</p>
</details>

</div>

</div>

    </div>

  );

}

export default Support;