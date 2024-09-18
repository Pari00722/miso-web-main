import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import "./Privacy.jsx";

import { FaXTwitter } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-[#ac83a9] pt-5 pb-5 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between text-center mb-10">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <p className="pb-4 text-2xl font-[Montserrat]">SERVICES</p>
              <ul className="space-y-2">
                <li className="content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px]">
                  Custom laser etching
                </li>
                <li className="content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px]">
                  Tailored greeting card design
                </li>
                <li className="content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px]">
                  Engraved wooden products
                </li>
                <li className="content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px]">
                  Customized mugs
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <p className="pb-4 text-2xl font-[Montserrat]">COMPANY</p>
              <ul className="space-y-2">
                <li className="content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px]">
                  About Us
                </li>
                <li className="content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px]">
                  Our Team
                </li>
                <li className="content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px]">
                  Contact
                </li>
                <li className="content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px]">
                  Jobs
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <p className="pb-4 text-2xl font-[Montserrat]">LEGAL</p>
              <ul className="space-y-2">
                <li className="content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px]">
                  Terms Of Use
                </li>
                <li className="content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px]">
                  Privacy Policy
                </li>
                <li className="content font-[Raleway] text-[16px] transition-all cursor-pointer hover:text-[18px]">
                  Cookie Policy
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
    </>
  );
};

export default Footer;
