import React from 'react';
import { useParams } from 'react-router-dom';
import "../styles/JournalPage.css";
import { FaShippingFast, FaLock, FaExchangeAlt } from 'react-icons/fa';
import { BsCurrencyDollar } from 'react-icons/bs';

const JournalPage = () => {
  const { category } = useParams();

  return (
    <div className='journalPageMainParent-1'>
      <div className='journalPageMainParent max-w-4xl mx-auto px-4'>
        <p className='sjText'> THE GIFTING JOURNAL </p>

        <div className='paraHold absolute'>
          <p className='flex font-times text-xl text-justify'>
            Discover creative ideas and inspiration for choosing the perfect gifts for every occasion. From unique gift guides and DIY projects to stories behind our handcrafted products, our journal is your go-to source for all things gifting.
          </p>
        </div>

        <p className='fof text-3xl text-center absolute aprilBlogHeading font-times'>
          {category === 'gift-guides' ? 'Gifting Guides: Ideas for Every Occasion' : 'DIY Projects: Craft Your Own Unique Gifts'}
        </p>

        <div className='hairImgHold'>
          <img src={category === 'gift-guides' ? '/assets/journalimg1.png' : '/assets/journalimg2.png'} className="hairImg" alt='blog' />
        </div>

        <div className='jhold flex flex-col absolute'>
          {category === 'gift-guides' ? (
            <>
              <h2 className='font-times ml-9 text-center text-2xl'>
              <br/>
              <strong> Ultimate Gifting Guide:</strong></h2> <br/>
                <p className= "font-times text-xl text-justify mt-1">Find the Perfect Personalized Wooden Engraved Gifts:<br/> Personal gifts have a way of touching hearts at Miso. That is why our collection of wooden products, which are all personally done and engraved, make any occasion extraordinary. Be it birthdays, anniversaries, or holidays, our gifting guide will help you find a meaningful present that shows you truly care.<br/><br/>
              </p>
              <h2 className='text-2xl font-bold mt-4 font-times'>Gifting for Every Occasion</h2>
              <ul className='list-disc ml-5 mt-2 text-justify font-times text-xl'>
                <li><strong>Birthdays:</strong> Give your loved ones uniquely crafted wooden jewelry boxes or picture frames with laser engravings that capture their most treasured moments.</li><br/>
                <li><strong>Anniversaries:</strong> Make this special day with custom-engraved wine boxes or beautifully created keepsakes.</li><br/>
                <li><strong>Weddings:</strong> Celebrate love with custom-engraved wood coasters or photo albums, or custom signage for the big day.</li><br/>
                <li><strong>Corporate Gifts:</strong> Impress the sense with our range of sophisticated wooden desk accessories and plaques, ideal for clients and staff alike.</li><br/><br/>
              </ul> 
              <h2 className='text-2xl font-bold mt-4 font-times'>Gift Ideas by Personality</h2>
              <ul className='list-disc ml-5 mt-2 text-justify font-times text-xl'>
                <li><strong>For the Minimalist:</strong> Sleek, discreet wooden keychains and sets of pens afford elegance in simplicity.</li><br/>
                <li><strong>For the Nature Lover:</strong> Wooden planters or serving boards with engravings add a rustic touch, very organic, to any home.</li><br/>
                <li><strong>For the Sentimental:</strong> Research customized memory boxes in which treasured keepsakes can be stored and preserved over time.</li><br/>
              </ul>

              <h2 className='text-2xl font-bold mt-4 font-times'>Why Miso?</h2>
              <div className='list-disc ml-1 mt-2 text-justify font-times text-xl'>
              <li><strong>Sustainable:</strong> Our products are made from eco-friendly materials so that your gift is as great for the planet as it is for your recipient.</li><br/>
               
               
              <li><strong>Personalization:</strong> We take it a step ahead with the option of personalized engravings so that you can make each gift truly special.</li><br/>

              <li><strong>Handcrafted:</strong> Our skilled artisans meticulously create each Miso gift, infusing it with care and precision, making every piece as unique as your special occasion.</li><br/><br/>
              </div>

                <h2 className='text-2xl font-bold mt-4 font-times'>Need Inspiration?</h2>
                <div className='text-xl font-times flex text-justify'>  Shop top selling gift categories or chat with our team for ideas unique to you.<br/>
                Ready to give the perfect gift? Shop Miso's collection today and give a gift they'll always remember.
                </div>
             
              
            </>
          ) : (
            <>
             <h2 className='font-times ml-9 text-center text-2xl'>
                <br/>
                <strong>Get Creative with Miso:</strong>
              </h2>
              <br/>
              <p className="font-times text-xl text-justify mt-1">
                DIY Wooden Engraving Projects
                <br/>
                Unleash your creativity with Miso's DIY wooden engraving kits! Whether you're a crafting enthusiast or a beginner looking to explore something new, our DIY projects are perfect for adding a personal touch to your home, gifting, or special events. With easy-to-follow guides and high-quality materials, we help you turn ordinary wood into extraordinary creations.
                <br/><br/>
              </p>

              <h2 className='text-2xl font-bold mt-4 font-times'>Why Try DIY with Miso?</h2>
              <ul className='list-disc ml-5 mt-2 text-justify font-times text-xl'>
                <li><strong>Personalized Experience:</strong> Our DIY kits allow you to design and create unique engraved wooden products that reflect your personal style.</li><br/>
                <li><strong>Fun and Easy:</strong> No experience necessary! Our step-by-step instructions make it easy to dive into your project and enjoy the creative process.</li><br/>
                <li><strong>Sustainable Crafting:</strong> All our DIY kits are crafted with eco-friendly, high-quality wood, so you can create with a clear conscience.</li><br/><br/>
              </ul>

              <h2 className='text-2xl font-bold mt-4 font-times'>Popular DIY Projects</h2>
              <ul className='list-disc ml-5 mt-2 text-justify font-times text-xl'>
                <li><strong>Engraved Wooden Coasters:</strong> Design your own set of personalized coasters. Perfect for adding a custom touch to your home or giving as a thoughtful gift.</li><br/>
                <li><strong>Custom Name Plaques:</strong> Create beautifully engraved wooden name plaques for your home, office, or as a unique housewarming gift.</li><br/>
                <li><strong>Personalized Keychains:</strong> Craft your own keychains with custom engravings—ideal for personal use or small gifts.</li><br/>
                <li><strong>Engraved Picture Frames:</strong> Build and engrave your own wooden picture frames to showcase your most cherished memories with a personal flair.</li><br/><br/>
              </ul>

              <h2 className='text-2xl font-bold mt-4 font-times'>Step-by-Step Tutorials</h2>
              <ul className='list-disc ml-5 mt-2 text-justify font-times text-xl'>
                <li><strong>Detailed Instructions:</strong> From assembling your materials to completing the final engraving, we guide you every step of the way.</li><br/>
                <li><strong>Tips & Tricks:</strong> Learn techniques to elevate your designs, such as wood staining, engraving depth, and adding finishes.</li><br/>
                <li><strong>Video Demonstrations:</strong> For visual learners, our video tutorials break down the process so you can follow along at your own pace.</li><br/><br/>
              </ul>

              <h2 className='text-2xl font-bold mt-4 font-times'>Make It Your Own</h2>
              <div className='list-disc ml-1 mt-2 text-justify font-times text-xl'>
                With Miso’s DIY kits, you have the freedom to customize your projects to your liking. Choose from various wood types, fonts, and engraving designs to create something truly special. Whether it's a heartfelt gift or a personal keepsake, your DIY creation will be one-of-a-kind.
                <br/><br/>
              </div>

              <h2 className='text-2xl font-bold mt-4 font-times'>Get Started Today!</h2>
              <div className='text-xl font-times flex text-justify'>
                Ready to dive into your next DIY adventure? Browse our full collection of DIY engraving kits and get crafting today. No matter your skill level, Miso’s kits provide everything you need to create stunning wooden engraved pieces from the comfort of your home.
              </div>
            </>
          )}
        </div>

        <div className='footerFeatures3 flex flex-row absolute font-times'>
          <div className='flex-1 text-center'>
            <FaShippingFast size={32} className="mx-auto mb-2" />
            <p>2 DAY DELIVERY</p>
          </div>
          <div className='flex-1 text-center'>
            <FaLock size={32} className="mx-auto mb-2" />
            <p>SECURE CHECKOUT</p>
          </div>
          <div className='flex-1 text-center'>
            <BsCurrencyDollar size={32} className="mx-auto mb-2" />
            <p>ROYALTY POINTS</p>
          </div>
          <div className='flex-1 text-center'>
            <FaExchangeAlt size={32} className="mx-auto mb-2" />
            <p>EASY RETURNS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalPage;
