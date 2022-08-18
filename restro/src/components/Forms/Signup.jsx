import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncPostUser } from "../../Redux/actions/userActions";

export default function Signup() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "userEmail") {
      setUserEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSignup = async () => {
    if (!name) {
      setError("Please enter name");
    } else if (!userEmail) {
      setError("Please enter email");
    } else if (!password) {
      setError("Please enter password");
    } else {
      const formData = {
        name: name,
        email: userEmail,
        password: password,
      };
      dispatch(asyncPostUser(formData));
    }
  };

  const handleUserLoginError = () => {
    if (user.hasOwnProperty("success")) {
      navigate("/");
    } else if (user.hasOwnProperty("error")) {
      setError("server busy try again ");
    }
  };

  useEffect(() => {
    handleUserLoginError();
  }, [user]);

  return (
    <div className=" loginContainer">
      <div className="login-form">
        <div>
          <h1 className="form_heading">Welcome ! Please Signup</h1>
        </div>

        <div className="mb-3 input">
          <input
            value={name}
            onChange={handleChange}
            name="name"
            type="email"
            class="form-control"
            placeholder="Name"
          />
        </div>

        <div className="mb-3 input">
          <input
            value={userEmail}
            onChange={handleChange}
            name="userEmail"
            type="email"
            class="form-control"
            placeholder="user email"
          />
        </div>
        <div class=" input">
          <input
            value={password}
            onChange={handleChange}
            name="password"
            type="password"
            class="form-control inputText"
            placeholder="password"
          />
        </div>

        {error && (
          <div className="form_error" alignItems="center">
            <h7>{error}</h7>
          </div>
        )}

        <button className=" form_button input mt-3" onClick={handleSignup}>
          SIGN Up
        </button>

        <h7 className="mt-4">
          Already Registered ?
          <Link to="/" style={{ textDecoration: "none" }}>
            <span style={{ color: "#52a7ef" }}> login</span>
          </Link>
        </h7>
      </div>
    </div>
  );
}
