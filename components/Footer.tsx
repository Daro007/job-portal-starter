import React from "react";
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({
    subsets: ['cyrillic'],
    display: 'swap',
    weight: "400"
})


function Footer() {
    return (
        <div className="footer">
            <Link aria-label="Homepage" href="/">
                <p className="footerLogo"> <span className={pacifico.className}>Your job on IT </span></p>
                <p className="copyright">© Copyright 2023</p>
            </Link>
            <div className="links-footer">
                <Link className="linkfooter" aria-label="About Us" href="/about">
                    About Us
                </Link>
                <br />
                <Link className="linkfooter" aria-label="Contact" href="/contact">
                    Contact
                </Link>
                <br />
                <Link className="linkfooter" aria-label="Cookie Policy" href="/cookie-policy">
                    Cookie Policy
                </Link>
                <br />
                <Link className="linkfooter" aria-label="Privacy Policy" href="/privacy-policy">
                    Privacy Policy
                </Link>
                <br />
                <a className="linkfooter" aria-label="Linkedin" href="https://www.google.com/" rel="noopener noreferrer">
                    <FaLinkedin className="footer-icon" />{" "}
                </a>
                <a className="linkfooter" aria-label="Twitter" href="https://www.google.com/" rel="noopener noreferrer">
                    <FaTwitterSquare className="footer-icon" />{" "}
                </a>
                <a className="linkfooter" aria-label="Facebook" href="https://www.google.com/" rel="noopener noreferrer">
                    <FaFacebookSquare className="footer-icon" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
