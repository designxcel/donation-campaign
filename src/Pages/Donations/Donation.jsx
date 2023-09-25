import React from 'react';

const Donation = ({donation}) => {
    const{image, title, category, donate} = donation;
    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] mb-10 flex-row rounded-xl bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                    src={image}
                    alt="image"
                    className="h-56 w-56 object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                    {category}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    {donate}
                    </p>
                
                    <button className='btn btn-primary'>
                      View Details
                    </button>
                    
                </div>
            </div>

            
        </div>
    );
};

export default Donation;