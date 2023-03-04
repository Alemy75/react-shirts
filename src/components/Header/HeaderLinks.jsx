import React from 'react';
import CartIco from "../../assets/svg/cart.svg";
import SearchIco from "../../assets/svg/search.svg";
import LoginIco from "../../assets/svg/login.svg";
import ProfileIco from "../../assets/svg/account.svg";

const HeaderLinks = () => {
    return (
        <div className="header__links">
            <img src={CartIco} alt=""/>
            <img src={SearchIco} alt=""/>
            <img src={LoginIco} alt=""/>
            <img src={ProfileIco} alt=""/>
        </div>
    );
};

export default HeaderLinks;