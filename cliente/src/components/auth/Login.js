import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // extract user
  const { email, password } = user;

  const onChange = (e) => {
    setUser({
      ...user, //take a copy of user
      [e.target.name]: e.target.value, //rewrite user
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //validation empty field

    //action
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
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
          <div className="campo-dorm">
            <Link to={"/budgets"} className="enlace-cuenta">
              Sign in.
            </Link>
            {/* <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Sign in"
            /> */}
          </div>
        </form>
        <Link to={"/new-acount"} className="enlace-cuenta">
          Create an account.
        </Link>
      </div>
    </div>
  );
};

export default Login;
