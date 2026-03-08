import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./../styles/signup.css";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {

    e.preventDefault();   // prevents page reload

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          name,
          email,
          password
        }
      );

      console.log(res.data);

      alert("Signup successful");

    } catch (err) {
      console.log(err);
      alert("Signup failed");
    }

  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        <h2>Create Account</h2>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Full Name"
            onChange={(e)=>setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Signup
          </button>

        </form>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;