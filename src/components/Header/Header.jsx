import React, {useState} from 'react';
import HeaderPopup from "./HeaderPopup.jsx";
import HeaderLinks from "./HeaderLinks.jsx";
import HeaderNav from "./HeaderNav.jsx";
import HeaderButton from "./HeaderButton.jsx";

const Header = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const popupHandler = () => {
        setIsPopupOpen(prevState => !prevState)
    }

    return (
        <div className="header-wrap">
            <div className="container">
                <div className="header">
                    <div className="header__logo">
                        <div className="header__text">T-SHIRTS</div>
                    </div>
                    <HeaderButton
                        onClose={popupHandler}
                    />
                    {
                        isPopupOpen && <HeaderPopup
                            onClose={popupHandler}
                        />
                    }
                    <HeaderNav/>
                    <HeaderLinks/>
                </div>
            </div>
        </div>
    );
};

export default Header;