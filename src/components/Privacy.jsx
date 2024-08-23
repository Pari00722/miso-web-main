import React from 'react';
import Footer from './Footer.jsx';


const Privacy = () => {
    return (
        <>
            <div className=' bg-[#efebe7f7] pt-24 pb-20'>

                <div>
                    <p className='text-8xl font-[Raleway] text-center'><strong>PRIVACY POLICY</strong></p>
                </div>

                <div className='flex flex-col pt-20 '>
                    <div className='text-4xl font-[Montserrat] pl-20'>
                        <strong>Information We Collect</strong>
                    </div>
                    <br />
                    <div className='text-xl pl-32 pr-32 font-[Raleway]'>
                        We collect personal information such as names, email addresses, and payment details when you make a purchase or contact us. We may also collect browsing data through cookies.
                    </div>
                </div>
                <div className='flex flex-col pt-20'>
                    <div className='text-4xl font-[Montserrat] pl-20'>
                        <strong>How We Use Your Information</strong>
                    </div>
                    <br />
                    <div className='text-xl pl-32 pr-32 font-[Raleway]'>
                        Your information is used to process orders, improve our website, send updates, and respond to inquiries. We may use your data for marketing purposes with your consent.
                    </div>
                </div>
                <div className='flex flex-col pt-20'>
                    <div className='text-4xl font-[Montserrat] pl-20'>
                        <strong>Data Sharing</strong>
                    </div>
                    <br />
                    <div className='text-xl pl-32 pr-32 font-[Raleway]'>
                        We do not sell or rent your personal information. We may share data with trusted third parties for order fulfillment, payment processing, and analytics, ensuring they adhere to privacy standards.

                    </div>
                </div>
                <div className='flex flex-col pt-20'>
                    <div className='text-4xl font-[Montserrat] pl-20'>
                        <strong>Data Protection</strong>
                    </div>
                    <br />
                    <div className='text-xl pl-32 pr-32 font-[Raleway]'>
                        We implement security measures to protect your data from unauthorized access, alteration, or destruction.

                    </div>
                </div>
                <div className='flex flex-col pt-20'>
                    <div className='text-4xl font-[Montserrat] pl-20'>
                        <strong>Your Rights</strong>
                    </div>
                    <br />
                    <div className='text-xl pl-32 pr-32 font-[Raleway]'>
                        You have the right to access, correct, or delete your personal information. You can also withdraw your consent for marketing communications at any time.

                    </div>
                </div>
                <div className='flex flex-col pt-20'>
                    <div className='text-4xl font-[Montserrat] pl-20'>
                        <strong>Changes to This Policy</strong>
                    </div>
                    <br />
                    <div className='text-xl pl-32 pr-32 font-[Raleway]'>
                        We may update this privacy policy periodically. Any changes will be posted on this page with an updated effective date.

                    </div>
                </div>
                <div className='flex flex-col pt-20'>
                    <div className='text-4xl font-[Montserrat] pl-20'>
                        <strong>Contact Us</strong>
                    </div>
                    <br />
                    <div className='text-xl pl-32 pr-32 font-[Raleway]'>
                        For questions or concerns about our privacy practices, please contact us at [your contact information].
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Privacy;

