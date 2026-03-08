import "./../styles/category.css";

function CategorySlider({ setCategory }) {

  const categories = [
    { name: "Pizza", icon: "🍕" },
    { name: "Burger", icon: "🍔" },
    { name: "Noodles", icon: "🍜" },
    { name: "Biryani", icon: "🍛" },
    { name: "Salad", icon: "🥗" },
    { name: "Fries", icon: "🍟" },
    { name: "Dessert", icon: "🍰" },
    { name: "Drinks", icon: "🥤" }
  ];

  return (
    <div className="category-section">

      <h2 className="category-title">Food Categories</h2>

      <div className="category-slider">

        {categories.map((item, index) => (
          <div
            className="category-card"
            key={index}
            onClick={() => setCategory(item.name)}
          >

            <div className="category-icon">
              {item.icon}
            </div>

            <p className="category-name">
              {item.name}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default CategorySlider;