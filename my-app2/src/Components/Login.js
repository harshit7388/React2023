import "./Login.css";

import React, { useState } from "react";

const Login = () => {
  const [isloggedin, setLoggedin] = useState(false);

  const logoutHandle = ()=>{
        setLoggedin(false)
  }
  const loginHandle = ()=>{
        setLoggedin(true)
  }

  return (
    <>
      {isloggedin ? (
        <div>
          <h1>hey you are logged in</h1>
          <button  className="logout-btn" onClick={logoutHandle}>logout</button>
        </div>
      ) : (
        <div>
          <h1>hey you are logged out</h1>
          <button className="login-btn" onClick={loginHandle}>login</button>
        </div>
      )}
    </>
  );
};

export default Login;