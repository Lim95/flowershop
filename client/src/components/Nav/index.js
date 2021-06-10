import React, { useCallback } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
function Nav() {

      return (
          <div className="topbar">
            <div className="topbar-container">
              <div className="topbar-col-left"><img src="../../images\ftd.png" class="icon-ftd" /></div>
              <div className="topbar-col-right">
                <div className="login-container">
                  <a href="/login">Log in</a>
                  or
                  <a href="/register">Register</a>
                </div>
                <div className="cart-container">
                  <i className="bi bi-cart"></i>
                  <a href="/cart">Cart</a>
                </div>
                <div className="search-container">
                  <form action="/search" method="get" role="search">
                    <input className=".search__input" type="search" placeholder="Search" autoComplete="off"></input>
                    <button type="submit" className="btn-search"><i className="bi bi-search"></i></button>
                  </form>
                </div>
              </div>            
            </div>
          </div>

  );
}

export default Nav;
