import React from 'react';
import { Link } from 'react-router-dom';

const Donation = ({donation}) => {
    const{image, title, category, donate, card_bg, category_bg, text_category_color} = donation;

    const cardBg = {
        backgroundColor : card_bg
      }
    
      const cardCategory = {
        backgroundColor : category_bg,
        color : text_category_color
      }
      
    
      const textColor = {
        color : text_category_color
      }
    return (
        <div>
            <div style={cardBg} className="relative flex md:w-full m-5 flex-row rounded-xl shadow-md">
                <div className="flex justify-center items-center">
                    <img
                    src={image}
                    alt="image"
                    className="h-56 w-56 object-cover rounded-l-xl"
                    />
                </div>
                <div className="p-6">
                    <h6 style={cardCategory} className="w-24 text-center py-2 rounded-lg font-bold">
                    {category}
                    </h6>
                    <h4 className="mb-2 text-2xl font-semibold">
                    {title}
                    </h4>
                    <p style={textColor} className="mb-8 text-lg font-bold ">
                    ${donate}
                    </p>
                  
                    <button 
                    style={cardBg}
                    className='py-2 px-4 rounded-lg font-bold text-black'>
                      View Details
                    </button>
                  
                    
                </div>
            </div>
            
            
        </div>
    );
};

export default Donation;