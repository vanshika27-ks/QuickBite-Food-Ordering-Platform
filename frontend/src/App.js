import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Support from "./pages/Support";
import TrackOrder from "./pages/TrackOrder";
import OrderSuccess from "./pages/OrderSuccess";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCart from "./components/FloatingCart";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
path="/cart"
element={
  <ProtectedRoute>
    <Cart />
  </ProtectedRoute>
}
/>
        
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
path="/track-order"
element={
  <ProtectedRoute>
    <TrackOrder />
  </ProtectedRoute>
}
/>
        <Route path="/order-success" element={<OrderSuccess />} />
   
      </Routes>

      <FloatingCart />

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />

    </BrowserRouter>
  );
}

export default App;