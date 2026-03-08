import "./../styles/hero.css";

function HeroSection({ search, setSearch, onSearch }){

return(

<div className="hero-section">

<h1>Discover Delicious Food</h1>

<p>Find the best restaurants near you</p>

<div className="search-box">

<input
type="text"
placeholder="Search food or restaurants..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<button onClick={onSearch}>
Search
</button>

</div>

</div>

)

}

export default HeroSection;