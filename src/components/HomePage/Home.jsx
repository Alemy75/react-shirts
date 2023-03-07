import React from 'react';
import HomeItem from "./HomeItem.jsx";
import items from '../../db.json'

const Home = () => {
    return (
        <section className="home_wrap">
            <div className="container">
                <div className="home">
                    {
                        items.map(item => (
                            <HomeItem 
                                name={item.name}
                                price={item.price}
                                photos={item.photos}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;