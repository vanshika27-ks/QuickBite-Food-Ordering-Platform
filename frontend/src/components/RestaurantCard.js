import { useNavigate } from "react-router-dom";

function RestaurantCard({name,image,rating,time,price}){

const navigate = useNavigate();

return(

<div
className="restaurant-card"
onClick={()=>navigate("/restaurant")}
>

<img src={image} alt="" />

<div className="restaurant-info">

<h3>{name}</h3>

<p>⭐ {rating} • {time}</p>

<p>{price}</p>

</div>

</div>

)

}

export default RestaurantCard