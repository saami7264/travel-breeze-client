import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-section py-5 g-0 row'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                <i class="fab fa-facebook fa-5x"></i>
                <i class="fab fa-twitter fa-5x"></i>
                <i class="fab fa-instagram fa-5x"></i>
                <i class="fab fa-youtube fa-5x"></i>
                <i class="fab fa-snapchat fa-5x"></i>
            </div>
            <div className='col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3'>
                <h3 className='text-white'>Subscribe To Newsletter</h3>
                <input className='input-field' type="text" placeholder='Name' />
                <input className='input-field' type="text" placeholder='Email' />
                <input type="button" className='btn btn-info pt-2' value="Subscribe to Newsletter" />
            </div>
            <div className='col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3'>
                <h3 className='text-white'>Travel Breeze</h3>
                <h4 className='text-white'>Md Abdul Muhib Sami</h4>
                <small className='text-white'>©2021, All Rights Reserved</small>
            </div>
        </div>
    );
};

export default Footer;