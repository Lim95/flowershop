import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
function Nav() {

  function showNavigation() {
      return (
        <div className="container">
          <div className="topbar-container">
            <div className="topbar">
              <div className="topbar-col-left">
                <div className="topbar-col-left-info">
                  <ul>
                    <li>
                      <i className="bi bi-telephone"> </i>
                      <a href="tel:+1-604-585-6612">604-585-6612</a>
                    </li>
                    <li>
                      <i class="bi bi-house"> </i>
                      25-15875 84 Ave, Surrey BC V4N 0W7
                    </li>
                    <li>
                      <img src="../../images\ftd.png" class="icon-ftd"></img>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="topbar-col-right">
                <ul className="social-icons">
                  <li><a className="bi bi-facebook" href="https://www.facebook.com"></a></li>
                  <li><a className="bi bi-twitter" href="https://www.twitter.com"></a></li>
                  <li><a className="bi bi-instagram" href="https://www.instagram.com"></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lowbar-container">
            <div className="lowbar-top">
              <div className="lowbar-top-col-left"><a href="/" class="home"><img src="../../images\logo.png" class="logo"/></a></div>
              <div className="lowbar-top-col-right">
                <div className="search-bar-container lowbar-top-col-right-item">
                  <div className="search-bar">
                    <form action="/search" method="get" role="search">
                      <button type="submit" className="btn-search"><i className="bi bi-search"></i></button>
                      {/* 모르겠다 시발 */}
                      <input class="search-input" type ="search" placeholder="SEARCH PRODUCTS..." autoComplete="off"></input>
                    </form>                  
                  </div>
                </div>

                <div className="cart-container lowbar-top-col-right-item">
                  <div className="cart">
                    <div className="cart-dropdown">
                      <button className="cart-dropdown-toggle" data-tooltip="Cart">

                      {/* 시발 이것도 모르겠다 */}
                        <i className="bi bi-cart"></i>
                      </button>
                    </div>                  
                  </div>
                </div>

                <div className="account-container lowbar-top-col-right-item">
                  <div className="account">
                    <button className="btn-account" data-tooltip="My Account">
                      <i className="bi bi-person"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lowbar-menu-container">
              <div className="lowbar-menu">
                <nav className="menu">
                  <ol>
                    <li className="menu-item"><a href="/">Home</a></li>
                    <li className="menu-item">
                      <a href="/products/all">PRODUCTS</a>
                      <ol className="sub-menu">
                        <li><a href="/products/roses">ROSES</a></li>
                        <li><a href="/products/ftdexclusives">FTD EXCLUSIVES</a></li>
                        <li><a href="/products/plants">PLANTS</a></li>
                        <li><a href="/products/bestsellers">BEST SELLERS</a></li>
                        <li><a href="/products/corporategifts">CORPORATE GIFTS</a></li>
                        <li><a href="/products/gourmetbaskets">GOURMET BASKETS</a></li>
                      </ol>
                    </li>
                    <li className="menu-item">
                      <a href="/occasions/all">OCCASIONS</a>
                      <ol className="sub-menu">
                        <li><a href="/occasions/anniversary">ANNIVERSARY</a></li>
                        <li><a href="/occasions/birthday">BIRTHDAY</a></li>
                        <li><a href="/occasions/loveandromance">LOVE & ROMANCE</a></li>
                        <li><a href="/occasions/newbaby">NEW BABY</a></li>
                        <li><a href="/occasions/congratulations">CONGRATULATIONS</a></li>
                        <li><a href="/occasions/thanks">THANKS</a></li>
                        <li><a href="/occasions/getwell">GET WELL</a></li>
                        <li><a href="/occasions/sympathy">SYMPATHY</a></li>
                        <li><a href="/occasions/wedding">WEDDING</a></li>
                        <li><a href="/occasions/summber">SUMMER</a></li>
                        <li><a href="/occasions/graduations">GRADUATIONS</a></li>
                      </ol>
                    </li>
                    <li className="menu-item">
                      <a href="/about/aboutus">ABOUT US</a>
                      <ol className="sub-menu">
                        <li><a href="/about/aboutus">ABOUT US</a></li>
                        <li><a href="/about/flowers">ABOUT FLOWERS</a></li>
                        <li><a href="/about/contactus">CONTACT US</a></li>
                        <li><a href="/about/deliveryinfo">DELIVERY INFO</a></li>
                        <li><a href="/about/ourguarantee">OUR GUARANTEE</a></li>
                      </ol>
                    </li>                  
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      );
    
  }

  return (
    <header className="desktop-menu">
        {showNavigation()}
    </header>
  );
}

export default Nav;

// // 
// .dropbtn {
//   background-color: #04AA6D;
//   color: white;
//   padding: 16px;
//   font-size: 16px;
//   border: none;

// .dropdown {
//   position: relative;
//   display: inline-block;

// .dropdown-content {
//   display: none;
//   position: absolute;
//   background-color: #f1f1f1;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//   z-index: 1;

// .dropdown-content a {
//   color: black;
//   padding: 12px 16px;
//   text-decoration: none;
//   display: block;

// .dropdown-content a:hover {background-color: #ddd;}

// .dropdown:hover .dropdown-content {display: block;}

// .dropdown:hover .dropbtn {background-color: #3e8e41;}

// <div class="dropdown">
//   <button class="dropbtn">Dropdown</button>
//   <div class="dropdown-content">
//     <a href="#">Link 1</a>
//     <a href="#">Link 2</a>
//     <a href="#">Link 3</a>
//   </div>
// </div>