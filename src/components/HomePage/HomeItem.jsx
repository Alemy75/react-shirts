import React from 'react';

const HomeItem = () => {
    return (
        <div className="home__item">
            <img
                src="src/assets/img/item.jpg"
                alt=""
                onMouseOver={e => (e.currentTarget.src = "src/assets/img/item3.jpg")}
                onMouseOut={e => (e.currentTarget.src = "src/assets/img/item.jpg")}
            />
            <h4 className="home__title">ФУТБОЛКА AWWA</h4>
            <div className="home__cost">1200 $</div>
            <button className="home__button">Подробнее</button>
        </div>
    );
};

export default HomeItem;