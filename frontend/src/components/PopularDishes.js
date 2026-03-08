import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./../styles/dishes.css";

function PopularDishes(){

const { addToCart } = useContext(CartContext);

const dishes = [
{
name:"Margherita Pizza",
price:"₹199",
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591"
},
{
name:"Cheese Burger",
price:"₹149",
image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
},
{
name:"Chicken Biryani",
price:"₹229",
image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
},
{
name:"Creamy Pasta",
price:"₹179",
image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
},
{
name:"Paneer Butter Masala",
price:"₹199",
image:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7"
},
{
name:"Chicken Momos",
price:"₹129",
image:"https://images.unsplash.com/photo-1604908177522-0403d2dfb3c0"
},
{
name:"Masala Dosa",
price:"₹119",
image:"https://images.unsplash.com/photo-1589302168068-964664d93dc0"
},
{
name:"Chole Bhature",
price:"₹129",
image:"https://images.unsplash.com/photo-1626132647523-66f5bf9e01f0"
},
{
name:"Butter Chicken",
price:"₹269",
image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
},
{
name:"Chocolate Waffle",
price:"₹159",
image:"https://images.unsplash.com/photo-1551024506-0bccd828d307"
}
];

return(

<div className="popular-section">

<h2>Popular Dishes</h2>

<div className="dishes-scroll">

{dishes.map((dish,index)=>(
<div className="dish-card" key={index}>

<img src={dish.image} alt={dish.name}/>

<div className="dish-info">

<h3>{dish.name}</h3>

<div className="dish-bottom">

<span>{dish.price}</span>

<button onClick={()=>addToCart(dish)}>
Add
</button>

</div>

</div>

</div>
))}

</div>

</div>

)

}

export default PopularDishes;