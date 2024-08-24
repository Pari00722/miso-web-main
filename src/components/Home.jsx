import React from 'react';
import '../styles/Home.css';


const Home = () => {
    return (
        <div className='heroSecMainParent'>
            <p className='welcomeStore'>WELCOME TO OUR STORE</p>
            <p className='heroDescription font-handlee text-2xl'>From heartfelt gifts to timeless decor, Miso brings your vision to life.</p>

            <div className='heroRow'>
                <div className='heroContent'>
                    <img src="/assets/one.png" className="heroImage" alt="Thoughtful Gifts" />
                    <div className='heroText font-handlee'>
                        <p className='heroHeading text-3xl font-semibold'>Thoughtful Gifts</p>
                        <p className='heroDesc text-2xl'>Handpicked treasures for every special occasion.</p>
                    </div>
                </div>

                <div className='heroContent'>
                    <img src="/assets/two.png" className="heroImage" alt="Crafted with Care" />
                    <div className='heroText font-handlee'>
                        <p className='heroHeading text-3xl font-semibold'>Crafted with Care</p>
                        <p className='heroDesc text-2xl'>Expertly made with attention to every detail.</p>
                    </div>
                </div>

                <div className='heroContent '>
                    <img src="/assets/three.png" className="heroImage" alt="Elegance in Every Piece" />
                    <div className='heroText font-handlee'>
                        <p className='heroHeading text-3xl font-semibold'>Elegance in Every Piece</p>
                        <p className='heroDesc text-2xl'>Sophisticated designs that elevate any gift-giving moment.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
