import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import { faInstagram, faGooglePlusG, faFacebookF} from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
    const aboutUs = [
        {
            name:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "
        }
        
    ]
    const ourAderss = [
        {name:"Napoli -10042 center", link:"//google.com/map"},
        {name:"Borsellino"}
    ]
    const quickLinks = [
        {name:"Home", link:"/home"},
        {name:"Classes", link:"/classes"},
        {name:"Teachers", link:"/teachers"},
        {name:"Latest News", link:"/latest"},
        {name:"Contact Us", link:"/contact"},
    ]
    const categories = [
        {name:"Painting"},
        {name:"Drawing"},
        {name:"Sports, Games"},
        {name:"Life Science"},
        {name:"Activies & Events"},
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row">
                    <FooterCol key={1} menuTitle={"About Us"} menuItems={aboutUs}></FooterCol>
                    <FooterCol key={2} menuTitle={"Quick Links"} menuItems={quickLinks}></FooterCol>
                    <FooterCol key={3} menuTitle={"Categories"} menuItems={categories}></FooterCol>
                    <FooterCol key={4} menuTitle={"Our Address"} menuItems={ourAderss}>
                    <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon " icon={faFacebookF} /></a> </li>
                        <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon " icon={faInstagram} /></a> </li>
                        <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon active-icon" icon={faGooglePlusG} /></a> </li>
                    </ul>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div> 
        </footer>
       
    );
};

export default Footer;