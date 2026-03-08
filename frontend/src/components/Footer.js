import "./../styles/footer.css";

function Footer(){

return(

<footer className="footer">

<div className="footer-container">

<div className="footer-logo">

<h2>QuickBite</h2>

<p>Delicious food delivered to your doorstep.</p>

</div>

<div className="footer-links">

<h3>Quick Links</h3>

<ul>
<li>Home</li>
<li>About</li>
<li>Support</li>
<li>Track Order</li>
</ul>

</div>

<div className="footer-contact">

<h3>Contact</h3>

<p>Email: support@quickbite.com</p>

<p>Service: Online Food Ordering</p>

</div>

<div className="footer-social">

<h3>Follow Us</h3>

<div className="social-icons">

<i className="fa-brands fa-facebook"></i>
<i className="fa-brands fa-instagram"></i>
<i className="fa-brands fa-twitter"></i>

</div>

</div>

</div>

<p className="footer-bottom">
© 2026 QuickBite. All rights reserved.
</p>

</footer>

)

}

export default Footer