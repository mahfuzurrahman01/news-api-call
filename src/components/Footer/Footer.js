import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div className='container footer'>
              <hr />
            <div className='news-item'>
                <a href='#'>Entertainment</a>
                <a href='#'>Sports</a>
                <a href='#'>Buisness</a>
                <a href='#'>Others</a>
            </div>
            <div className='icon'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
            <div>
              
                <p>Features, specifications, and appearances are subject to change without notice.</p>
                <p className='threat'>*Please note that Mahfuzurrahman's farm™ programs do not allow you to copy protected material. You may use this software in copying material in which you own the copyright or have obtained permission to copy from the copyright owner. Browser compatibility:
                    IE/Firefox/Chrome/Opera/Safari/Netscape</p>
                <p>About us | Terms & Conditions | Privacy | Cookies Policy | Contact Us | EULA | Uninstall</p>
                <p className='copyright'>Copyright © 2007-2022 MahfuzurRahman. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;