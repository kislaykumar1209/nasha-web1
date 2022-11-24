import React from "react";
import { NavLink } from "react-router-dom";
import "./homescreen.css";

function homescreen() {
  return (
    <>
      <nav>
        <div class="menu">
          <div class="logo">
            <a href="#">Apiero</a>
          </div>
        </div>
      </nav>
      <div class="img"></div>
      <div class="center">
        <div class="title">Create Amazing Website</div>
        <div class="sub_title">Pure HTML & CSS Only</div>
        <div class="btns">
          <button style={{textDecoration: "none"}}><NavLink to='/login'>Login</NavLink></button>
          <button style={{textDecoration:"none"}}><NavLink to='/register'>Get Started</NavLink></button>
        </div>
      </div>
    </>
  );
}

export default homescreen;
