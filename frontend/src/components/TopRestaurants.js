import "./../styles/toprestaurants.css";

function TopRestaurants({ category, search }){

    const restaurants = [

        {
        name:"La Pino'z Pizza",
        rating:"4.5",
        time:"30 mins",
        cuisine:"Pizza, Italian",
        image:"https://images.unsplash.com/photo-1513104890138-7c749659a591"
        },
        
        {
        name:"Katani Dhaba",
        rating:"4.4",
        time:"25 mins",
        cuisine:"North Indian",
        image:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
        },
        
        {
        name:"Town Centre",
        rating:"4.3",
        time:"35 mins",
        cuisine:"Indian, Chinese",
        image:"https://images.unsplash.com/photo-1555992336-03a23c7b20ee"
        },
        
        {
        name:"Subway",
        rating:"4.2",
        time:"20 mins",
        cuisine:"Fast Food",
        image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        },
        
        {
        name:"Burger King",
        rating:"4.3",
        time:"25 mins",
        cuisine:"Burgers, Fast Food",
        image:"https://images.unsplash.com/photo-1550547660-d9450f859349"
        },
        
        {
        name:"Domino's Pizza",
        rating:"4.4",
        time:"30 mins",
        cuisine:"Pizza",
        image:"https://images.unsplash.com/photo-1594007654729-407eedc4fe24"
        },
        
        {
        name:"McDonald's",
        rating:"4.2",
        time:"20 mins",
        cuisine:"Burgers, Fast Food",
        image:"https://images.unsplash.com/photo-1550317138-10000687a72b"
        },
        
        {
        name:"Gopal Sweets",
        rating:"4.6",
        time:"25 mins",
        cuisine:"North Indian, Sweets",
        image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d"
        },
        
        {
        name:"Singh's Food Court",
        rating:"4.1",
        time:"20 mins",
        cuisine:"Street Food",
        image:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
        },
        
        {
        name:"OvenFresh",
        rating:"4.5",
        time:"35 mins",
        cuisine:"Bakery, Cafe",
        image:"https://images.unsplash.com/photo-1509042239860-f550ce710b93"
        },
        
        {
        name:"Pyramid Amayra",
        rating:"4.4",
        time:"30 mins",
        cuisine:"North Indian",
        image:"https://images.unsplash.com/photo-1600891963935-c1f4d0f6d2cc"
        },
        
        {
        name:"Chai Sutta Bar",
        rating:"4.3",
        time:"15 mins",
        cuisine:"Tea, Snacks",
        image:"https://images.unsplash.com/photo-1509042239860-f550ce710b93"
        },
        
        {
        name:"The Belgian Waffle Co.",
        rating:"4.6",
        time:"20 mins",
        cuisine:"Desserts, Waffles",
        image:"https://images.unsplash.com/photo-1551024506-0bccd828d307"
        },
        
        {
        name:"Pizza Hut",
        rating:"4.4",
        time:"30 mins",
        cuisine:"Pizza",
        image:"https://images.unsplash.com/photo-1548365328-5c6db3225c98"
        },
        
        {
        name:"KFC",
        rating:"4.5",
        time:"25 mins",
        cuisine:"Fried Chicken",
        image:"https://images.unsplash.com/photo-1562967916-eb82221dfb92"
        },
        
        {
        name:"Barista",
        rating:"4.3",
        time:"20 mins",
        cuisine:"Coffee, Cafe",
        image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
        },
        
        {
        name:"Haldiram's",
        rating:"4.5",
        time:"30 mins",
        cuisine:"North Indian",
        image:"https://images.unsplash.com/photo-1604908177522-0403d2dfb3c0"
        },
        
        {
        name:"Wow! Momo",
        rating:"4.2",
        time:"25 mins",
        cuisine:"Momos, Chinese",
        image:"https://images.unsplash.com/photo-1604908554265-8f6b60e3e7fa"
        },
        
        {
        name:"Biryani Blues",
        rating:"4.4",
        time:"30 mins",
        cuisine:"Biryani",
        image:"https://images.unsplash.com/photo-1631515242808-497c3fbd397b"
        },
        
        {
        name:"Punjabi Haveli",
        rating:"4.6",
        time:"35 mins",
        cuisine:"Punjabi, North Indian",
        image:"https://images.unsplash.com/photo-1546069901-eacef0df6022"
        }
        
        ];
        const filteredRestaurants = restaurants.filter((restaurant) =>
            restaurant.name.toLowerCase().includes(search?.toLowerCase() || "")
            );

return(

<div className="top-restaurants">

<h2>Top Rated Restaurants</h2>

<div className="restaurant-slider">

{filteredRestaurants.map((item,index)=>(
<div className="restaurant-card" key={index}>

<img src={item.image} alt="" />

<div className="restaurant-info">

<h3>{item.name}</h3>

<p>⭐ {item.rating} • {item.time}</p>

</div>

</div>
))}

</div>

</div>

)

}

export default TopRestaurants;