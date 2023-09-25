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
    const { image, title, category,category_bg,card_bg,desc,donation } = card || {};

    const handleDonation = () =>{

        const addedDonatedAmount = [];
        const donatedAmount = JSON.parse(localStorage.getItem('donation'))
        if(!donatedAmount){
            addedDonatedAmount.push(card);
            localStorage.setItem('donation', JSON.stringify(addedDonatedAmount))
            swal("Good job!", "You clicked the button!", "success"); 
        }
        else{

            const isExist = donatedAmount.find((card) => card.id ===idInt);
            if(!isExist){
                addedDonatedAmount.push(...donatedAmount,card);
            localStorage.setItem('donation', JSON.stringify(addedDonatedAmount))
            swal("Good job!", "You clicked the button!", "success");  
            }
            else{
                swal("Oops!", "You clicked the button!", "error"); 
            }
            
        }
    }
    return (
        <div>
            
            <div className=" flex justify-center items-center h-[80vh] w-[700px] mx-auto">
                <div>
                <div className="flex justify-center">
                <img className='h-[400px] w-auto' src={image} alt="" />
                </div>
                <div className='mt-[-40px] pl-14'>
                
                    <button onClick={handleDonation}>Donate ${donation}</button>
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