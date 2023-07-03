import React from "react";
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import db from "../db.json"

import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({
    subsets: ['cyrillic'],
    display: 'swap',
    weight: "400"
})

type FooterData = {
    href: string;
    label: string;
}[];


async function Footer() {
    let footerData: FooterData

    // Mocked response with json-server for DEV enviroment
    if (process.env.NODE_ENV === "development") {
        // console.log("process.env.NODE_ENV", process.env.NODE_ENV)
        const response = await fetch('http://localhost:4000/footerData');
        footerData = await response.json();
        // console.log("footerData", footerData)
    } else {
        footerData = db.footerData;
        // console.log("footerData FROM DB directly", footerData)
    }


    return (
        <div className="footer">
            <Link aria-label="Homepage" href="/">
                <p className="footerLogo"> <span className={pacifico.className}>Your job on IT </span></p>
                <p className="copyright">© Copyright 2023</p>
            </Link>
            <div>
                <div className="links-footer">
                    {footerData.map(footerLinks =>
                        <>
                            <Link className="linkfooter" aria-label={footerLinks.label} href={footerLinks.href}>
                                {footerLinks.label}
                            </Link>
                            <br />
                        </>
                    )
                    }
                </div>
                <div className="social-links">
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
        </div>
    );
}

export default Footer;
