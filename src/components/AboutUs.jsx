import React from "react";
import Footer from './Footer.jsx';
import misobanner from '../photos/misobanner.jpeg';
import ceo from '../photos/ceo.jpeg';
import wood from '../photos/misowood.jpeg';

const AboutUs = () => {
    return (
        <>
      <div className="pt-2 sm:pt-7 pb-2 sm:pb-8">
        <div>
          <div className="flex justify-center">
            <p className="font-bold text-4xl">ABOUT US</p>
          </div>
          <div className="flex flex-col md:flex-row items-center pt-5 px-5 md:px-20">
            <figure className="flex-shrink-0 text-center md:text-left">
              <img src={ceo} alt="CEO image" className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto md:mx-0" />
              <p className="text-center mt-2 font-bold">FOUNDER</p>
              <p className="text-center mt-1">Apoorv Arin</p>
            </figure>
            <p className="italic text-base sm:text-lg md:text-xl sm:pl-10 sm:pr-10 text-justify pl-5 pr-5 mt-5 md:mt-0 md:ml-10">
              Miso is a vibrant startup focused on transforming the gifting industry. 
              We believe personalized gifts create meaningful connections and lasting 
              memories. By combining creativity, technology, and craftsmanship, we offer 
              high-quality, unique products that appeal to a wide audience.

              Our mission is to deliver distinctive, high-quality gifts that strengthen relationships 
              through thoughtful personalization. We aim to be recognized for our creativity 
              and customer-focused approach, with a dedicated team ensuring each product 
              is exceptional.

              We value creativity, quality, and personalization. Our products 
              are crafted with care, using top materials to ensure they stand out. We are 
              committed to providing excellent customer service and a smooth shopping experience.

              Our offerings include custom engraved items, personalized accessories, unique home 
              décor, and customized apparel. Whether for corporate clients or individual needs, 
              Miso is dedicated to making every gift special and memorable.
            </p>
          </div>

        </div>

        {/*-----------------------------  WHAT WE DO -----------------------------------------*/}

        <div className="flex justify-center pt-10">
          <p className="font-bold text-3xl">What We Do ?</p>
        </div>
        <div className="flex flex-wrap pt-5">
          <p className="iitalic text-base sm:text-lg md:text-xl sm:pl-10 sm:pr-10 text-justify pl-5 pr-5 mt-5 md:mt-0 md:ml-10">
          At Miso, we specialize in creating unique, personalized gifts that make every occasion memorable. 
          Our range includes custom engraved items like pens and plaques, personalized accessories such as 
          wallets and phone cases, and unique home décor including photo frames and wall art. We also offer 
          customized apparel like T-shirts and hoodies, all designed to add a personal touch to your everyday items.

          In addition, we excel in crafting beautifully engraved and carved wooden items, making use of advanced 
          techniques to produce stunning gifts and décor. We also create personalized songs and detailed illustration 
          vectors, catering to special occasions and unique design needs. Whether for corporate clients or personal 
          gifts, Miso ensures that every product is crafted to be truly special and memorable,
          </p>          
        </div>

        {/* -------------------------------BUSINESS SUMMARY ------------------------------------- */}


        <div className="flex justify-center pt-10">
          <p className="font-bold text-3xl">Business Summary</p>
        </div>
        <div className="flex flex-wrap pt-5">
          <p className="italic text-base sm:text-lg md:text-xl sm:pl-10 sm:pr-10 text-justify pl-5 pr-5 mt-5 md:mt-0 md:ml-10">
            <span className="font-bold italic text-xl">Personalized Gifting Redefined</span><br />
            Unlocking the Magic of Personalized Perfection: Journey with Miso!
          </p>
          <ol className="italic text-base sm:text-lg md:text-xl sm:pl-10 sm:pr-10 text-justify pl-5 pr-5 mt-5 md:mt-0 md:ml-10">
            <li className="my-5">1. Personalized Gifts: Offering custom engraved items, home décor, apparel, and advanced wooden carvings for all occasions.</li>
            <li className="my-5">2. Offering a diverse range of customization options for corporate branding and heartfelt gifts, ensuring each creation is unique.</li>
            <li className="my-5">3. Ensuring exceptional quality and service with every order, making every interaction a delightful experience.</li>  
          </ol>          
        </div>

        <div className="flex justify-center pt-10">
          <p className="font-bold text-3xl">Company Overview</p>
        </div>
        <div className="flex flex-wrap italic text-base sm:text-lg md:text-xl sm:pl-10 sm:pr-10 text-justify pl-5 pr-5 mt-5 md:mt-0 md:ml-10">
          <span className="font-bold text-xl">Personalized Artistery</span>
          <p>We create unique wooden engraved items such as keychains, home decor, and gift items tailored to your personal style.</p>
          <br /><br />
          <p className="font-bold text-xl">Eco friendly Focus</p>
          <p>Our commitment to sustainabilty guides our use of natural materials and eco-friendly processes.</p>
          <br /><br />
          <p className="font-bold text-xl">Advanced Craftsmanship</p>
          <p>Using cutting-edge techniques and high-quality materials to create beautifully detailed and unique products.</p>
          <br /><br />
          <p className="font-bold text-xl">Corporate Gifting solutions</p>
          <p>We offer personalized corporate gifting options for clients, partners, and employees to strengthen business relationships</p>
+
        </div>



        <div className="flex justify-center px-20 pt-10">
          <p className="font-bold text-3xl">Vision and Mission</p>
        </div>
        <div className="flex flex-wrap italic text-base sm:text-lg md:text-xl sm:pl-10 sm:pr-10 text-justify pl-5 pr-5 mt-5 md:mt-0 md:ml-10 ">
          <p className="font-bold text-xl">Vision</p>
          <p>Our vision at Miso is to blend traditional craftsmanship with modern technology to create unique, sustainable, 
            and personalized products that celebrate the beauty of nature and culture. We strive to offer our customers high- quality, eco-friendly 
            items that embody creativity and bring joy to everyday life

            • Miso envisions a world where every engraved creation is more than just an item-it's a gateway to cherished memories and meaningful connections</p>
        </div>
        <div className="flex flex-wrap italic text-base sm:text-lg md:text-xl sm:pl-10 sm:pr-10 text-justify pl-5 pr-5 mt-5 md:mt-0 md:ml-10">
          <p className="font-bold text-xl">Mission</p>
          <p>Our mission is to provide customers with beautifully crafted, personalized products that enhance their experiences and capture 
            meaningful moments. We aim to offer exceptional customer service and innovative designs that cater to diverse tastes and preferences. Through our 
            commitment to sustainability and ethical practices, we seek to positively impact the world and leave a lasting legacy of quality and craftsmanship.</p>
        </div>
      </div>
    </>
    )
}

export default AboutUs;

