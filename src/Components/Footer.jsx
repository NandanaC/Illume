import React from "react";
import "./Styles/Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className="footer">
            <div className="inner_footer">
                <div className="logo_container_footer">
                    <img src="./logo_illume1.png" alt="logo"></img>
                </div>
                <div className="footer_third">
                    <h1>Need help?</h1>
                    <a href="#">Terms and Conditions </a>
                    <a href="#">Terms and conditions </a>
                </div>
                <div className="footer_third">
                    <h1>More</h1>
                    <a href="#">Privacy policy </a>
                    <a href="#">Privacy policy </a>
                </div>
                <div className="footer_third">
                    <h1>Follow Us</h1>
                    <li><a href="#"><i className="Facebook"><FacebookIcon /></i></a></li>
                    <li><a href="#"><i className="Twitter"><TwitterIcon /></i></a></li>
                    <li><a href="#"><i className="Instagram"><InstagramIcon /></i></a></li>

                    <span>
                        xyz
                </span>
                </div>
            </div>
        </div>
    )
}
export default Footer;
