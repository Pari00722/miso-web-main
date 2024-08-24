import React from 'react';
import "../styles/Ingredients.css";

const Ingredients = () => {
    const values = [
        { img: '/assets/ing1.png', text: 'Quality' },
        { img: '/assets/ing2.png', text: 'Durability' },
        { img: '/assets/ing3.png', text: 'Personalization' },
        { img: '/assets/ing4.png', text: 'Creativity' },
        { img: '/assets/ing5.png', text: 'Handcrafted' },
        { img: '/assets/ing6.png', text: 'Eco-friendly' },
    ];

    return (
        <div className='ingMainParent font-handlee'>
            <p className='text-4xl ogtext  font-semibold text-center mb-16'>OUR VALUES</p>

            <div className='ingImgHold '>
                {values.map((value, index) => (
                    <div key={index} className='ingItem '>
                        <img src={value.img} className="zoom2" alt={value.text}/>
                        <p className='ingTextHold'>{value.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ingredients;
