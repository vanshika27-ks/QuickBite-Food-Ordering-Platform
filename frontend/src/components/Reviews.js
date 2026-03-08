import "./../styles/reviews.css";

function Reviews(){

const reviews = [

{
name:"Rahul Sharma",
rating:"★★★★★",
comment:"QuickBite makes ordering food extremely easy and convenient."
},

{
name:"Ananya Verma",
rating:"★★★★☆",
comment:"The interface is clean and the experience is very smooth."
},

{
name:"Karan Mehta",
rating:"★★★★★",
comment:"Fast browsing, great UI and very easy to use."
}

];

return(

<div className="reviews-section">

<h2>What Our Customers Say</h2>

<div className="reviews-grid">

{reviews.map((review,index)=>(
<div className="review-card" key={index}>

<div className="review-user">

<div className="user-avatar">
{review.name.charAt(0)}
</div>

<div>
<h3>{review.name}</h3>
<p className="stars">{review.rating}</p>
</div>

</div>

<p className="review-text">
"{review.comment}"
</p>

</div>
))}

</div>

</div>

)

}

export default Reviews