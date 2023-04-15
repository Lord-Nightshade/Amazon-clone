import React from "react";
import "./NavigationBar.css";

export default function NavigationBar(){
    return(
        <>
        <div className="NavigationBar_Component">
            <div className="NavigationBar_logo"> </div>
            {/* Location Selector */}
            <div className="NavigationBar_ParentLocation">
            <div className="NavigationBar_LocationLogo"></div>
            <div className="NavigationBar_location">Kolkata</div>

            </div>
 
            <div className="NavigationBar_SearchComponent">

            <div>
                <select value="" className="NavigationBar_Dropdown">
                    <option>All Categories</option>
                    <option>Alexa</option>
                    <option>Books</option>
                    <option>Toys</option>
                    <option>Electronics</option>
                    <option>Clothes</option>
                    <option>Appliances</option>
                </select>
            </div>

            <div>
                <input type="text" className="NavigationBar_search"></input>
            </div>

            <div className="NavigationBar_searchIconDiv">
                <div className="NavigationBar_searchIcon"></div>
            </div>

            </div>
           
            <div className="navtext NavigationBar_Singin">
                <div>Hello, SignIn</div>
                <div>Accounts & Lists</div>
            </div>

            <div className="navtext NavigationBar_returns">Returns & Orders</div>

            <div className="navtext NavigationBar_Cart">
                <div className="cart_img"></div>
                <div className="NavigationBar_Cartnumber">0</div>
                <div className="NavigationBar_cartText">Cart</div>
                
            </div>
            
           
        </div>
        <div className="NavigationBar_Footer">
            <div className="NavigationBar-FooterText">Best Seller</div>
            <div className="NavigationBar-FooterText">Mobile</div>
            <div className="NavigationBar-FooterText">Amazon Pay</div>
            <div className="NavigationBar-FooterText">Electronics</div>
            <div className="NavigationBar-FooterText">Prize</div>
            <div className="NavigationBar-FooterText">Customer Service</div>
            <div className="NavigationBar-FooterText">New Release</div>
        </div>
        </>
    )
}