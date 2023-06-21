import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Socio Chat</span>
        <span className="title">Login</span>
        {/* <span>testing email:seetha@gmail.com password:seetha</span>
        <span>testing email:rama@gmail.com password:rama</span> */}
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="seetha@gmail.com or rama@gmail.com" />
          <input type="password" placeholder="seetha or rama" />
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};
export default Login;
