import React from 'react';
import Footer from './Footer.jsx';


const Cookie = () => {
    return (
        <>
            <div className=' bg-[#efebe7f7] pt-24 pb-20'>

                <div>
                    <p className='text-8xl font-[Raleway] text-center'><strong>COOKIE POLICY</strong></p>
                </div>

                <div className='flex flex-col pt-20 '>
                    <div className='text-4xl font-[Montserrat] pl-20'>
                        <strong>Types of Cookies Used</strong>
                    </div>
                    <br />
                    <div className='text-xl pl-32 pr-32 font-[Raleway]'>
                        We use various types of cookies, including essential cookies for site functionality, performance cookies for site analytics, functionality cookies to enhance user experience, and targeting cookies for personalized content.
                    </div>
                </div>
                <div className='flex flex-col pt-20'>
                    <div className='text-4xl font-[Montserrat] pl-20'>
                        <strong>Purpose of Cookies</strong>
                    </div>
                    <br />
                    <div className='text-xl pl-32 pr-32 font-[Raleway]'>
                        Cookies help us improve your experience by analyzing site traffic, remembering your preferences, and tailoring content to your interests.
                    </div>
                </div>
                <div className='flex flex-col pt-20'>
                    <div className='text-4xl font-[Montserrat] pl-20'>
                        <strong> User Consent</strong>
                    </div>
                    <br />
                    <div className='text-xl pl-32 pr-32 font-[Raleway]'>
                        By continuing to use our website, you consent to the use of cookies. You can manage your cookie preferences through our cookie banner or settings.
                    </div>
                </div>
                <div className='flex flex-col pt-20'>
                    <div className='text-4xl font-[Montserrat] pl-20'>
                        <strong>Managing Cookies</strong>
                    </div>
                    <br />
                    <div className='text-xl pl-32 pr-32 font-[Raleway]'>
                        You can control or disable cookies through your browser settings. Please refer to your browser’s help section for instructions on how to do this.
                    </div>
                </div>
                <div className='flex flex-col pt-20'>
                    <div className='text-4xl font-[Montserrat] pl-20'>
                        <strong> Data Protection</strong>
                    </div>
                    <br />
                    <div className='text-xl pl-32 pr-32 font-[Raleway]'>
                        We handle cookie data in accordance with our privacy policy, ensuring that your information is protected and used in compliance with applicable privacy regulations.
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cookie;

