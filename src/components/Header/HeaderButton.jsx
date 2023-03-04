import React from 'react';

const HeaderButton = (props) => {
    return (
        <button onClick={props.onClose} className="header__button">
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default HeaderButton;