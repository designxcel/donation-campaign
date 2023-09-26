import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';


const CardDetails = () => {
    // const [card, setCard] = useState({});
    
    
    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt (id);
    const card = cards.find((card) =>card.id ===idInt);
    
    // useEffect(()=>{
    //     const detailCard = cards?.find(card => card.id === id);
    //     setCard(detailCard);
    // },[id, cards])
    const { image, title,donation_details_img, category,category_bg,card_bg,desc,donate,text_category_color } = card || {};

    const handleDonation = () =>{

        const addedDonatedAmount = [];
        const donatedAmount = JSON.parse(localStorage.getItem('donations'))
        if(!donatedAmount){
            addedDonatedAmount.push(card);
            localStorage.setItem('donations', JSON.stringify(addedDonatedAmount))
            swal("Good job!", "You clicked the button!", "success"); 
        }
        else{

            const isExist = donatedAmount.find((card) => card.id ===idInt);
            if(!isExist){
                addedDonatedAmount.push(...donatedAmount,card);
            localStorage.setItem('donations', JSON.stringify(addedDonatedAmount))
            swal("Good job!", "You clicked the button!", "success");  
            }
            else{
                swal("Oops!", "You clicked the button!", "error"); 
            }
            
        }
    }
    const btnColor ={
        backgroundColor : text_category_color
    }
    return (
        <div>
            
            <div className=" flex justify-center items-center h-[70vh] w-[700px] mx-auto mt-[150px]">
                <div>
                <div className="flex justify-center">
                <img className='h-[400px] w-[700px]' src={donation_details_img} alt="" />
                </div>
                <div className='relative flex justify-left mt-[-80px] items-center pl-14 bg-black h-20 bg-opacity-50'>
                    
                        
                        <button
                        className='text-white font-semibold py-2 px-4 rounded-lg'
                        style={btnColor}
                        onClick={handleDonation}>Donate ${donate}</button>
                    
                </div>
                <div className="p-6 text-justify">
                    <h4 className="font-sans text-2xl font-semibold tracking-normal text-blue-gray-900">
                    {title}
                    </h4>
                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                    {desc}
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;