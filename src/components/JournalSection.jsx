import React from 'react';
import "../styles/JournalSection.css";
import { Link } from 'react-router-dom';

const JournalSection = () => {
    return (
        <div className='jsMainParent'>

            <div className='jsLeft text-center'>
                <img src='/assets/mainjournalimg.png' alt='Journal' className='w-72' />
                <p className='mt-8 text-2xl'>
                    Welcome to our gifting journal! Discover creative ideas and inspiration for choosing the perfect gifts for every occasion. From unique gift guides and DIY projects to stories behind our handcrafted products, our journal is your go-to source for all things gifting.
                </p>

                {/* Updated Link to go directly to the Gift Guides page */}
                <Link to={`/journal/gift-guides`}>
                    <button className='readBtn'>EXPLORE THE JOURNAL</button>
                </Link>
            </div>

            <div className='jsRight flex  flex-row gap-20'>
                {/* Gift Guides Section */}
                <div className="group text-center">
                    <Link to={`/journal/gift-guides`}>
                        <img src='/assets/journalimg1.png' alt='Gift Guides' className='jsImg rounded-xl transform transition-transform duration-300 group-hover:scale-105 ml-12' />
                    </Link>
                    <p className='mt-4 text-xl font-bold transform transition-transform hover:underline duration-300 group-hover:scale-105'>
                        GIFTING GUIDES: IDEAS FOR EVERY OCCASION
                    </p>
                </div>

                {/* DIY Projects Section */}
                <div className="group text-center">
                    <Link to={`/journal/diy-projects`}>
                        <img src='/assets/journalimg2.png' alt='DIY Projects' className='jsImg rounded-xl ml-12 transform transition-transform duration-300 group-hover:scale-105' />
                    </Link>
                    <p className='mt-4 text-xl font-bold transform transition-transform duration-300 group-hover:scale-105 hover:underline '>
                        DIY PROJECTS: CRAFT YOUR OWN UNIQUE GIFTS
                    </p>
                </div>
            </div>
        </div>
    );
}

export default JournalSection;
