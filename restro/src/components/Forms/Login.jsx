import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoginUser } from "../../Redux/actions/userActions";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.userReducer);

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleLogin = async () => {
    if (!email) {
      setError("Please enter email");
    } else if (!password) {
      setError("Please enter password");
    } else {
      dispatch(
        asyncLoginUser({
          email,
          password,
        })
      );
    }
  };

  const handleUserLoginError = () => {
    if (user.hasOwnProperty("successToken")) {
      localStorage.setItem("token", user.successToken);
      navigate("/food");
    } else if (user.hasOwnProperty("error")) {
      setError("Invalid email or password");
    }
  };

  useEffect(() => {
    handleUserLoginError();
  }, [user]);

  return (
    <div className=" loginContainer">
      <div className="login-form">
        <div>
          <h1 className="form_heading">Welcome ! Please Login</h1>
        </div>

        <div className="mb-3 input">
          <input
            value={email}
            onChange={handleChange}
            name="email"
            type="email"
            className="form-control   "
            placeholder="user email"
          />
        </div>

        <div class=" input">
          <input
            value={password}
            onChange={handleChange}
            name="password"
            type="password"
            className="form-control"
            placeholder="password"
          />
        </div>

        {error && (
          <div className="form_error" alignItems="center">
            <h7>{error}</h7>
          </div>
        )}

        <button className=" form_button input mt-3" onClick={handleLogin}>
          SIGN In
        </button>

        <h7 className="mt-4">
          Not Registered ?
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <span style={{ color: "#52a7ef" }}> SignUp</span>
          </Link>
        </h7>
      </div>
    </div>
  );
}
