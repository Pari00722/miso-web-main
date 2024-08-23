import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import './Privacy.jsx';

import { FaXTwitter } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className=" bg-[#ac83a9] pt-5 " >
                <div className=" text-white flex justify-center text-center gap-80">
                    <div className="flex flex-col">
                        <p className="pb-4 text-2xl font-[Montserrat]">SERVICES</p>
                        <p className="content font-[Raleway] text-[18px] transition-all cursor-pointer hover:text-[20px] ease-in-out">Custom laser etching</p>
                        <p className="content font-[Raleway] text-[18px] transition-all cursor-pointer hover:text-[20px] ease-in-out">Tailored greeting card design</p>
                        <p className="content font-[Raleway] text-[18px] transition-all cursor-pointer hover:text-[20px] ease-in-out">Engraved wooden products</p>
                        <p className="content font-[Raleway] text-[18px] transition-all cursor-pointer hover:text-[20px] ease-in-out">Customized mugs</p>

                    </div>
                    <div className="flex flex-col head">
                        <p className="pb-4 text-2xl font-[Montserrat]">COMPANY</p>
                        <p className="content font-[Raleway] text-[18px] transition-all cursor-pointer hover:text-[20px] ease-in-out">About Us</p>
                        <p className="content font-[Raleway] text-[18px] transition-all cursor-pointer hover:text-[20px] ease-in-out">Contact</p>
                        <p className="content font-[Raleway] text-[18px] transition-all cursor-pointer hover:text-[20px] ease-in-out">Jobs</p>
                        <p className="content font-[Raleway] text-[18px] transition-all cursor-pointer hover:text-[20px] ease-in-out">Press Kit</p>

                    </div>
                    <div className="  flex flex-col">
                        <p className="pb-4 text-2xl font-[Montserrat]">LEGAL</p>
                        <p className="content font-[Raleway] text-[18px] transition-all cursor-pointer hover:text-[20px] ease-in-out">Terms Of Use</p>
                        <p className="content font-[Raleway] text-[18px] transition-all cursor-pointer hover:text-[20px] ease-in-out">Privacy Policy </p>
                        <p className="content font-[Raleway] text-[18px] transition-all cursor-pointer hover:text-[20px] ease-in-out">Cookie Policy</p>

                    </div>
                </div>

                <div className=" flex gap-[79%] pl-20 pr-28 pb-10 pt-7">
                    <div className="flex items-center text-center justify-start gap-1 ">
                        <FaRegCopyright /> <p className="text-xl"><strong>MISO</strong></p>
                    </div>

                    <div className='flex gap-5 pb-3 text-2xl justify-end  '>
                        <a className='transition-all hover:text-3xl ease-in-out text-white' target='_blank' href='https://www.instagram.com/miso__by_arin?igsh=b3Zoa3NnZGc4OGZ0'><FaInstagram /></a>
                        <a target='_blank' className='transition-all hover:text-3xl ease-in-out  text-white' href='https://www.linkedin.com/company/miso-creations/'><FaLinkedinIn /></a>
                        <a target='_blank' className='transition-all hover:text-3xl ease-in-out text-white' href='https://www.facebook.com/profile.php?id=61563061833928&mibextid=ZbWKwL'><CiFacebook /></a>
                        <a target='_blank' className='transition-all hover:text-3xl ease-in-out text-white' href='tel:+(91) 9119733531'><FaPhone /></a>
                        <a target='_blank' className='transition-all hover:text-3xl ease-in-out text-white' href="mailto:hellomiso21@gmail.com?subject=Hello&body=Hi%20there!"><MdOutlineEmail /></a>
                        <a target='_blank' className='transition-all hover:text-3xl ease-in-out text-white' href='https://pin.it/4Ft59jguR'><FaPinterest /></a>
                        <a target='_blank' className='transition-all hover:text-3xl ease-in-out text-white' href='https://x.com/miso_offical?t=cJYHnpP4WcQJYbT_ct69EA&s=09'><FaXTwitter /></a>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
// 