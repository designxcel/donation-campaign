import { useEffect, useState } from "react";
import Donation from "./Donation";
import swal from "sweetalert";


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
            setNoData('No data found!!')
        }
    },[])

    const handleRemove = () => {
        
        localStorage.clear();
        setDonations([])
        
    }
    return (
        <div>
            {
                noData ? <p className="h-[70vh] flex justify-center items-center text-2xl font-bold">{noData}</p> : 
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                        {
                            isShowing ? 
                            donations?.map(donation => <Donation key={donation.id} donation={donation}></Donation>)
                            :
                            donations?.slice(0,4).map(donation => <Donation key={donation.id} donation={donation}></Donation>)
                        }
                    </div>

                    <div className="flex gap-5 justify-center items-center">
                        <div className="flex justify-center items-center">
                            {
                                donations.length > 3 && <button className="btn btn-primary" onClick={() => setIsShowing(!isShowing)}>
                                {isShowing ? "see less" : "see all"}
                                </button>
                            }
                        </div>
                        <div>
                            {
                                donations.length > 0 && <button onClick={handleRemove} className="btn btn-primary">Delete All</button>
                                
                            }
                            
                        </div>
                    </div>
                    
                </div>
            }
        </div>
    );
};

export default Donations;