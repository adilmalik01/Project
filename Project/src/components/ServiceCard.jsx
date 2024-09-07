import React from 'react';

// Service Card Component
const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white mt-5 h-[400px] shadow-md rounded-lg w-[350px] text-center flex flex-col justify-around items-center">
            <div className="text-4xl mb-4 text-teal-500">{icon}</div>
            <div>
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-md text-gray-600 mt-2 px-5">{description}</p>
            </div>
            <button className='w-[130px] text-[16px] font-medium h-[40px] border border-black/75'>Order Now</button>
        </div>
    );
};

export default ServiceCard;