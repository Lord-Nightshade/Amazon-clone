import React from "react";
import './AdvertisementOne.css';

export default function AdvertisementOne(props){
    return(
        <div className="AdvOne_main">
            <div className="AdvOne_header">
                Upto 70% Off || Electronics store clearance
            </div>
            <div className="AdvOne_body">
                <img className="AdvOne_img" src="https://ik.imagekit.io/amitesh/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1681566402269" alt=''/>
            </div>
            <div className="AdvOne_footer">
                See more
            </div>
        </div>
    )
}