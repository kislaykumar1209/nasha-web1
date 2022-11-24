import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, login } from "../../actions/actions";
import "./login.css";
import { useHistory } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useHistory()


  const {error, loading, isAuthenticated} = useSelector((state)=>state.user)

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginUsername, loginPassword));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if(isAuthenticated){
      navigate.push('/dashboard')
    }
  }, [dispatch, error,isAuthenticated]);

  return (
    <div id="container">
      <div id="loginform">
        <h2 id="headerTitle">Login</h2>
        <div>
          <form onSubmit={loginSubmit}>
            <div class="row">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                required
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
              />
            </div>
            <div class="row">
              <label>password</label>
              <input
                type="password"
                placeholder="Enter password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <div id="button" class="row">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
        {/* <OtherMethods /> */}
      </div>
    </div>
  );
};

export default Login;
