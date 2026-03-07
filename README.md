# 🍔 QuickBite – Full Stack Food Ordering Platform

QuickBite is a **full-stack food ordering web application** inspired by platforms like **Swiggy and Zomato**.
It allows users to **discover restaurants, search for food, filter by categories, add items to cart, place orders, and track their orders** in a seamless and user-friendly interface.

This project demonstrates **end-to-end full-stack development**, integrating a responsive frontend with a secure backend and cloud database.

---

# 🚀 Live Demo

Frontend: *(Add after deployment)*
Backend API: *(Add after deployment)*

---

# 📌 Features

### 🔐 Authentication System

* User Signup and Login
* Secure password hashing using **bcrypt**
* **JWT (JSON Web Token)** based authentication
* Protected routes for authenticated users

### 🔍 Smart Search System

* Search restaurants by **name**
* Search by **food items or cuisines**
* Real-time filtering of restaurants

### 🍕 Food Category Filtering

Users can filter restaurants by food categories such as:

* Pizza
* Burger
* Noodles
* Biryani
* Salad
* Fries
* Desserts
* Drinks

Restaurants dynamically update based on selected category.

### 🛒 Cart Management

* Add items to cart
* Remove items from cart
* Dynamic cart total calculation
* Cart item counter in navbar

### 📦 Order System

Users can:

* Place food orders
* View order confirmation
* Track order status

### 📍 Order Tracking

Users can track order progress such as:

* Preparing
* On the way
* Delivered

### 🧑‍💻 Developer Profile Page

An About page showcasing:

* Developer introduction
* Project features
* Technology stack
* Architecture overview

### 📞 Support Page

Includes:

* FAQ section
* Help information
* Contact support layout

---

# 🏗️ Project Architecture

```text
React Frontend
      ↓
Axios API Requests
      ↓
Node.js + Express Backend
      ↓
MongoDB Atlas Database
```

Frontend communicates with backend through **REST APIs**, and the backend stores data securely in **MongoDB Atlas**.

---

# 🧰 Tech Stack

## Frontend

* React.js
* React Router
* Context API
* Axios
* CSS3
* Font Awesome Icons

## Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt.js

## Database

* MongoDB Atlas
* Mongoose ODM

## Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

# 📂 Project Structure

```text
QuickBite-Food-Ordering-Platform
│
├── frontend
│   ├── components
│   ├── pages
│   ├── context
│   ├── styles
│   └── assets
│
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   └── server.js
```

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/QuickBite-Food-Ordering-Platform.git
cd QuickBite-Food-Ordering-Platform
```

---

### 2️⃣ Install Frontend Dependencies

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

### 3️⃣ Install Backend Dependencies

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

### 4️⃣ Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

# 🗄️ Database Schema

## User Model

```text
name
email
password
```

Passwords are securely hashed before storing.

---

## Order Model

```text
items
total
status
createdAt
```

Order status is updated as the order progresses.

---

# 🔐 Security Features

* Password hashing using **bcrypt**
* JWT token authentication
* Protected routes for logged-in users
* Secure API communication

---

# 📈 Future Improvements

Possible future enhancements:

* Online payment integration
* Real-time order tracking
* Restaurant rating system
* Admin dashboard
* Google Maps location integration
* Push notifications
* Mobile responsive improvements

---

# 👩‍💻 Author

**Vanshika Salaria**

Full Stack Developer passionate about building scalable web applications and solving real-world problems through technology.

GitHub:
https://github.com/vanshika27-ks

---

# ⭐ Project Purpose

This project was developed as a **portfolio-level full stack application** to demonstrate skills in:

* Full Stack Web Development
* REST API Development
* Authentication Systems
* Database Integration
* Frontend UI Design
* Deployment and DevOps basics

---

# 📜 License

This project is open-source and available under the MIT License.
