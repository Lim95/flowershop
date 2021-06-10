import React from "react";
import "./style.css";
const Footer = () => {
  return (
    <footer class="container-fluid bg-grey py-5">
        <div class="footer-container">
            <div class="row">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6 ">
                        <div class="logo-part">
                            <h1>STARDUST FLOWERS</h1>
                            <p>25-15875 84 Ave, Surrey, BC V4N 0W7</p>
                            <p>604-585-6612</p>
                        </div>
                        </div>
                        <div class="col-md-6 px-4">
                        <h6>Hours of Operation</h6>
                        <p>Monday: 9:30 AM - 5:30 PM</p>
                        <p>Tuesday: 9:30 AM - 5:30 PM</p>
                        <p>Wednesday: 9:30 AM - 5:30 PM</p>
                        <p>Thursday: 9:30 AM - 6:00 PM</p>
                        <p>Friday: 9:30 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 5:30 PM</p>
                        <p>Sunday: Closed</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6 px-4">
                        <h6> Help us</h6>
                        <div class="row ">
                            <div class="col-md-6">
                                <ul>
                                    <li> <a href="#"> Home</a> </li>
                                    <li> <a href="#"> About</a> </li>
                                    <li> <a href="#"> Service</a> </li>
                                    <li> <a href="#"> Team</a> </li>
                                    <li> <a href="#"> Help</a> </li>
                                    <li> <a href="#"> Contact</a> </li> 
                                </ul>
                            </div>
                            <div class="col-md-6 px-4">
                                <ul>
                                    <li> <a href="#"> Cab Faciliy</a> </li>
                                    <li> <a href="#"> Fax</a> </li>
                                    <li> <a href="#"> Terms</a> </li>
                                    <li> <a href="#"> Policy</a> </li>
                                    <li> <a href="#"> Refunds</a> </li>
                                    <li> <a href="#"> Paypal</a> </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-6 ">
                        <h6> Newsletter</h6>
                        <div class="social">
                            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        </div>
                        <form class="form-footer my-3">
                            <input type="text"  placeholder="search here...." name="search"/>
                            <input type="button" value="Go" />
                        </form>
                        <p>That's technology limitation of LCD monitors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;