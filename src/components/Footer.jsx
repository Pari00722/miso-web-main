import React, { useState } from "react";
import { FaRegCopyright } from "react-icons/fa";
import {
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaXTwitter,
  FaPhone,
} from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation(); // To track the current route
  const isActive = (path) => location.pathname === path; // Check if the current route is active

  return (
    <div className="bg-[#ac83a9] pt-5 pb-5 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between text-center mb-10">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <p className="pb-4 text-2xl font-[Montserrat]">SERVICES</p>
            <ul className="space-y-2">
              <li
                className={`content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px] ${
                  isActive("/custom-laser") ? "underline" : ""
                }`}
              >
                <Link to="/custom-laser">Custom laser etching</Link>
              </li>
              <li
                className={`content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px] ${
                  isActive("/tailor-greeting") ? "underline" : ""
                }`}
              >
                <Link to="/tailor-greeting">Tailored greeting card design</Link>
              </li>
              <li
                className={`content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px] ${
                  isActive("/engraved") ? "underline" : ""
                }`}
              >
                <Link to="/engraved">Engraved wooden products</Link>
              </li>
              <li
                className={`content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px] ${
                  isActive("/mugs") ? "underline" : ""
                }`}
              >
                <Link to="/mugs">Customized mugs</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <p className="pb-4 text-2xl font-[Montserrat]">COMPANY</p>
            <ul className="space-y-2">
              <li
                className={`content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px] ${
                  isActive("/") ? "underline" : ""
                }`}
              >
                <Link to="/">About Us</Link>
              </li>
              <li
                className={`content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px] ${
                  isActive("/our-team") ? "underline" : ""
                }`}
              >
                <Link to="/our-team">Our Team</Link>
              </li>
              <li
                className={`content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px] ${
                  isActive("/contact") ? "underline" : ""
                }`}
              >
                <Link to="/contact">Contact</Link>
              </li>
              <li
                className={`content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px] ${
                  isActive("/internships") ? "underline" : ""
                }`}
              >
                <Link to="/internships">Internships</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <p className="pb-4 text-2xl font-[Montserrat]">LEGAL</p>
            <ul className="space-y-2">
              <li
                className={`content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px] ${
                  isActive("/terms-of-use") ? "underline" : ""
                }`}
              >
                <Link to="/terms-of-use">Terms Of Use</Link>
              </li>
              <li
                className={`content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px] ${
                  isActive("/privacy-policy") ? "underline" : ""
                }`}
              >
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li
                className={`content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px] ${
                  isActive("/cookie") ? "underline" : ""
                }`}
              >
                <Link to="/cookie">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-center mb-4 md:mb-0">
            <FaRegCopyright className="mr-2" />
            <p className="text-xl">
              <strong>MISO</strong>
            </p>
          </div>
          <div className="flex gap-4 text-2xl">
            <a
              className="transition-all hover:text-3xl ease-in-out text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/miso__by_arin?igsh=b3Zoa3NnZGc4OGZ0"
            >
              <FaInstagram />
            </a>
            <a
              className="transition-all hover:text-3xl ease-in-out text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/miso-creations/"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="transition-all hover:text-3xl ease-in-out text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=61563061833928&mibextid=ZbWKwL"
            >
              <CiFacebook />
            </a>
            <a
              className="transition-all hover:text-3xl ease-in-out text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="tel:+(91) 9119733531"
            >
              <FaPhone />
            </a>
            <a
              className="transition-all hover:text-3xl ease-in-out text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:hellomiso21@gmail.com?subject=Hello&body=Hi%20there!"
            >
              <MdOutlineEmail />
            </a>
            <a
              className="transition-all hover:text-3xl ease-in-out text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://pin.it/4Ft59jguR"
            >
              <FaPinterest />
            </a>
            <a
              className="transition-all hover:text-3xl ease-in-out text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/miso_offical?t=cJYHnpP4WcQJYbT_ct69EA&s=09"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
