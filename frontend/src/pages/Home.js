import { useState, useRef } from "react";
import HeroSection from "../components/Hero";
import CategorySlider from "../components/CategorySlider";
import PopularDishes from "../components/PopularDishes";
import Reviews from "../components/Reviews";
import TopRestaurants from "../components/TopRestaurants";

function Home(){

const [search,setSearch] = useState("");
const [category,setCategory] = useState("All");

const restaurantRef = useRef(null);

const scrollToRestaurants = () => {
restaurantRef.current.scrollIntoView({ behavior: "smooth" });
};

return(

<div>

<HeroSection 
search={search}
setSearch={setSearch}
onSearch={scrollToRestaurants}
/>

<CategorySlider setCategory={setCategory}/>

<PopularDishes />

{/* Restaurant Section */}

<div ref={restaurantRef}>

<h2>Popular Restaurants</h2>

<TopRestaurants category={category} search={search}/>

</div>

<Reviews />

</div>

)

}

export default Home;