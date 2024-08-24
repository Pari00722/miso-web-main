import React from "react";
import Footer from './Footer.jsx';
import misobanner from '../photos/misobanner.jpeg';
import ceo from '../photos/ceo.jpeg';
import wood from '../photos/misowood.jpeg';

const AboutUs = () => {
    return (
        <>
            <div className="bg-[#efebe7f7] pt-10 pb-10">
                <div className="font-[GreyQo] text-[#06024d] italic text-center animate-fadeIn text-8xl">
                    About Miso
                </div>
                <div className="text-7xl pt-14 pb-10 text-center text-[#753c3c] animate-fadeIn font-[Raleway] ">
                    You Imagine, We Create
                </div>
                <div className="flex pt-12 pb-10 ">
                    <div className="text-[#4d023d] text-xl pl-10 flex-70  pr-5">
                        Miso is a vibrant startup focused on transforming the gifting industry. We believe personalized gifts create meaningful connections and lasting memories. By combining creativity, technology, and craftsmanship, we offer high-quality, unique products that appeal to a wide audience.

                        Our mission is to deliver distinctive, high-quality gifts that strengthen relationships through thoughtful personalization. We aim to be recognized for our creativity and customer-focused approach, with a dedicated team ensuring each product is exceptional.
                        <br /><br />
                        We value creativity, quality, and personalization. Our products are crafted with care, using top materials to ensure they stand out. We are committed to providing excellent customer service and a smooth shopping experience.

                        Our offerings include custom engraved items, personalized accessories, unique home décor, and customized apparel. Whether for corporate clients or individual needs, Miso is dedicated to making every gift special and memorable.
                        <br /><br />
                        At Miso, we specialize in creating unique, personalized gifts that make every occasion memorable. Our range includes custom engraved items like pens and plaques, personalized accessories such as wallets and phone cases, and unique home décor including photo frames and wall art. We also offer customized apparel like T-shirts and hoodies, all designed to add a personal touch to your everyday items.
                        <br /><br />
                        In addition, we excel in crafting beautifully engraved and carved wooden items, making use of advanced techniques to produce stunning gifts and décor. We also create personalized songs and detailed illustration vectors, catering to special occasions and unique design needs. Whether for corporate clients or personal gifts, Miso ensures that every product is crafted to be truly special and memorable.
                    </div>
                    <div>
                        <img src={misobanner} className="pr-5 flex-30" alt="misobanner" />
                    </div>
                </div>
                <div className="justify-center pl-20 pr-20 pt-10 pb-10">
                    <img src={wood} alt="wood" className="flex max-w-xl" />
                </div>

                {/* <div className="text-5xl pt-5 text-[#06024d] pb-5 animate-moveLeftToRight italic font-bold font-[GreyQo]">
                    FOUNDER
                </div> */}
                <div className='flex pt-10 '>
                    <div className="items-center flex text-center">
                        <img src={ceo} className="pl-20 pr-20 max-w-xl pb-10" alt="Apoorva Arin" />
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;