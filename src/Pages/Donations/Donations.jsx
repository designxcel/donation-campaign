import { useEffect, useState } from "react";
import Donation from "./Donation";


const Donations = () => {
    const [donations, setDonations] = useState([]);
    const [noData, setNoData] = useState(false);
    const [isShowing, setIsShowing] = useState(false);

    useEffect(() =>{
        const donatedAmount = JSON.parse(localStorage.getItem('donations'));

        if(donatedAmount){
            setDonations(donatedAmount);
        }
        else{
            setNoData('no data found')
        }
    },[])
    return (
        <div>
            {
                noData ? <p>{noData}</p> : 
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                        {
                            donations.map(donation => <Donation donation={donation}></Donation>)
                        }
                    </div>
                    <div>
                         <button>See All</button>
                     </div>
                </div>
            }
        </div>
    );
};

export default Donations;