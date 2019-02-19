import React from 'react';
import Logo from 'assets/logo.png';
import 'pages/Login/style.css';

const Component = () => (
  <div className="login">
    <div className="mainDiv">
    {/* <h3>Logo</h3> */}
    <img src={Logo} alt="logo"/>
    <h3 className="appName">UI Configuration</h3> 
        <div className="form">
        <p className="label">Enter User Name</p>
          <input className="text" />
          <p className="label">Enter Password</p>
          <input className="text" />
          <button>Login</button>
          <div className="clear"></div>
      </div>
    </div>
  </div>
)

export default Component;