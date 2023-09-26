import { useLoaderData } from "react-router-dom";
import DonationCards from "../../Components/DonationCards/DonationCards";
import Banner from "../../Components/Header/Navbar/Banner";


const Home = () => {
    const donationCards = useLoaderData()
    return (
        <div>
            <Banner></Banner>
           <DonationCards donationCards ={donationCards}></DonationCards>
           
        </div>
    );
};

export default Home;