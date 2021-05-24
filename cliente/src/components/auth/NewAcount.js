import React, { useState } from "react";
import { Link } from "react-router-dom";
const NewAcount = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // extract user
  const { name, email, password, confirmPassword } = user;

  const onChange = (e) => {
    setUser({
      ...user, //take a copy of user
      [e.target.name]: e.target.value, //rewrite user
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Create your account</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={onChange}
            />
          </div>
          <div className="campo-dorm">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Create account."
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Go back to Login
        </Link>
      </div>
    </div>
  );
};

export default NewAcount;
