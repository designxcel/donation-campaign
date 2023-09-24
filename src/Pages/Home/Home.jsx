import { useLoaderData } from "react-router-dom";
import DonationCards from "../../Components/DonationCards/DonationCards";


const Home = () => {
    const donationCards = useLoaderData()
    return (
        <div>
           <DonationCards donationCards ={donationCards}></DonationCards>
        </div>
    );
};

export default Home;