import React from "react";

function Login() {
  return (
    <div className="input">
      <input label="firstname" name="firstName" type="text" />
      <br></br>
      <input label="password" name="password" type="password" />
      <br></br>
      <button className="button">Login</button>
      <button className="button">Create Account</button>
    </div>
  );
}

export default Login;
