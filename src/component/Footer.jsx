import { Copyright, Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
<div className="">
<div className="footer_section">
    <div className="container">
       <div className="footer_sectio_2">
          <div className="row">
             <div className="col-lg-4 col-md-6">
                <h3 className="footer_logo">SHOPER</h3>
                <p className="footer_text">t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of </p>
             </div>
             <div className="col-lg-4 col-md-6">
                <h3 className="useful_text">Navigation</h3>
                <div className="footer_menu">
                   <ul>
                      <li className="active"><Link to='/'>Home</Link></li>
                      <li><Link to='/product'>Product</Link></li>
                      <li><Link to='/camera'>Camera</Link></li>
                      <li><Link to='/phone'>Phone</Link></li>
                      <li><Link to='/laptop'>Laptop</Link></li>
                   </ul>
                </div>
             </div>
             {/* <div className="col-lg-3 col-md-6">
                <h3 className="useful_text">Contact Info</h3>
                <p className="address_text">Office Address</p>
                <div className="map_icon"><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i><span className="padding_left15">Loram ipusm New York, NY 36524</span></a></div>
                <p className="address_text">Customer Service:</p>
                <div className="map_icon"><a href="#"><i className="fa fa-phone" aria-hidden="true"></i><span className="padding_left15">( +01 1234567890 )</span></a></div>
                <div className="map_icon"><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i><span className="padding_left15">demo@gmail.com</span></a></div>
             </div> */}
             <div className="col-lg-4 col-md-6">
                <h2 className="useful_text">Discover</h2>
                <div className="subscribe_menu">
                   <ul>
                      <li><a href="#">Help</a></li>
                      <li><a href="#">How It Works</a></li>
                      <li><a href="#">subscribe</a></li>
                      <li><a href="contact.html">Contact Us</a></li>
                   </ul>
                </div>
                <div className="social_icon">
                   <ul>
                      <li><a href="#"><Facebook/></a></li>
                      <li><a href="#"><Twitter/></a></li>
                      <li><a href="#"><LinkedIn/></a></li>
                      <li><a href="#"><Instagram/></a></li>
                   </ul>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>

<div className="copyright_section">
<div className="container">
 <p className="copyright_text"><Copyright /> 2023 All Rights Reserved. Design by <a href="ibrahim1.netlify.app">Md Ibrahim Bashar</a></p>
</div>
</div>
</div>
  )
}

export default Footer