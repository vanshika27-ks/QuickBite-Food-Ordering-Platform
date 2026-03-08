import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./../styles/menu.css";

function RestaurantMenu() {

  const { addToCart } = useContext(CartContext);

  const [category, setCategory] = useState("All");

  const menu = [

    {
      name: "Margherita Pizza",
      price: "₹199",
      category: "Pizza",
      image: "https://source.unsplash.com/400x300/?pizza"
    },

    {
      name: "Pepperoni Pizza",
      price: "₹249",
      category: "Pizza",
      image: "https://source.unsplash.com/400x300/?pepperoni-pizza"
    },

    {
      name: "Cheese Burger",
      price: "₹149",
      category: "Burger",
      image: "https://source.unsplash.com/400x300/?burger"
    },

    {
      name: "Chicken Burger",
      price: "₹179",
      category: "Burger",
      image: "https://source.unsplash.com/400x300/?chicken-burger"
    },

    {
      name: "Creamy Pasta",
      price: "₹189",
      category: "Pasta",
      image: "https://source.unsplash.com/400x300/?pasta"
    },

    {
      name: "Chicken Biryani",
      price: "₹229",
      category: "Biryani",
      image: "https://source.unsplash.com/400x300/?biryani"
    }

  ];

  const filteredMenu =
    category === "All"
      ? menu
      : menu.filter((item) => item.category === category);

  return (
    <div className="menu-page">

      {/* Restaurant Info */}
      <div className="restaurant-header">
        <h1>Pizza Palace</h1>
        <p>⭐ 4.7 • 30 mins • Italian</p>
      </div>

      {/* Categories */}
      <div className="menu-categories">

        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Pizza")}>Pizza</button>
        <button onClick={() => setCategory("Burger")}>Burger</button>
        <button onClick={() => setCategory("Pasta")}>Pasta</button>
        <button onClick={() => setCategory("Biryani")}>Biryani</button>

      </div>

      {/* Menu Grid */}
      <div className="menu-grid">

        {filteredMenu.map((item, index) => (
          <div className="menu-card" key={index}>

            <img src={item.image} alt={item.name} />

            <div className="menu-info">

              <h3>{item.name}</h3>

              <div className="menu-bottom">

                <span className="price">{item.price}</span>

                <button
                  className="add-btn"
                  onClick={() => addToCart(item)}
                >
                  Add
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default RestaurantMenu;