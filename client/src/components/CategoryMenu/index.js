import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {


  return (
          <div className="lowbar">
            <div className="lowbar-container">
              <div className="logo"><img src="../../images\sf-logo.svg" /></div>
            
              <div className="menu">
                <div className="nav">
                  <ul className="primary">
                    <li><a href="/">HOME</a></li>
                    <li className="menu-item">
                      <a href="/products/all">PRODUCTS</a>
                      <ul className="sub-menu">
                        <li><a href="/products/roses">ROSES</a></li>
                        <li><a href="/products/ftdexclusives">FTD EXCLUSIVES</a></li>
                        <li><a href="/products/plants">PLANTS</a></li>
                        <li><a href="/products/bestsellers">BEST SELLERS</a></li>
                        <li><a href="/products/corporategifts">CORPORATE GIFTS</a></li>
                        <li><a href="/products/gourmetbaskets">GOURMET BASKETS</a></li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="/occasions/all">OCCASIONS</a>
                      <ul className="sub-menu">
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
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="/about/aboutus">ABOUT US</a>
                      <ul className="sub-menu">
                        <li><a href="/about/aboutus">ABOUT US</a></li>
                        <li><a href="/about/flowers">ABOUT FLOWERS</a></li>
                        <li><a href="/about/contactus">CONTACT US</a></li>
                        <li><a href="/about/deliveryinfo">DELIVERY INFO</a></li>
                        <li><a href="/about/ourguarantee">OUR GUARANTEE</a></li>
                      </ul>
                    </li>                  
                  </ul>
                </div>
              </div>
            </div>
          </div>
  );
}

export default CategoryMenu;
