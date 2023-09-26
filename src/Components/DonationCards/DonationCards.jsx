import React from 'react';
import Card from '../Card/Card';


const DonationCards = ({donationCards}) => {

    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-10 underline'>Donation Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16'>
                {
                    donationCards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
            
        </div>
    );
};

export default DonationCards;