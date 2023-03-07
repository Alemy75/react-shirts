import React from 'react';

const HomeItem = (props) => {
    return (
        <div className="home__item">
            <img
                src={props.photos[0]}
                alt=""
                onMouseOver={e => (e.currentTarget.src = props.photos[1])}
                onMouseOut={e => (e.currentTarget.src = props.photos[0])}
            />
            <h4 className="home__title">{props.name.toUpperCase()}</h4>
            <div className="home__cost">{props.price} $.</div>
            <button className="home__button">Подробнее</button>
        </div>
    );
};

export default HomeItem;