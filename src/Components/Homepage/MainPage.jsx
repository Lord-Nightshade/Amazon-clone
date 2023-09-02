import React from "react";
import './MainPage.css'
import AdvertisementOne from "./AdvertisementOne/AdvertisementOne";
import AdvertisementFour from "./AdvertisementFour/AdvertisementFour";

export default function MainPage(){

    return(
        <div className="MainPage">
        
        <div style={{paddingTop:'210px' , display:'flex' ,flexWrap:"wrap"}}>
           
            <AdvertisementOne/>
            <AdvertisementFour/>
            <AdvertisementOne/>
            <AdvertisementOne/>
            <AdvertisementFour/>
            <AdvertisementOne/>
            
        </div>
        </div>
    )
}