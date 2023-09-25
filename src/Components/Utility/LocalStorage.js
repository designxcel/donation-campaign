const getDonationAmount = () =>{
    const storedDonation = localStorage.getItem('donated-amount');
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}

const saveDonationAmount = id =>{
    const storedDonations = getDonationAmount();
    const exists = storedDonations.find(cardId => cardId === id);
    if(!exists){
        storedDonations.push(id);
        localStorage.setItem('donated-amount', JSON.stringify(storedDonations));
    }
}

export {getDonationAmount, saveDonationAmount}