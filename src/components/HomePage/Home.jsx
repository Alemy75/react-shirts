import React from 'react';
import HomeItem from "./HomeItem.jsx";

const Home = () => {
    return (
        <section className="home_wrap">
            <div className="container">
                <div className="home">
                    <HomeItem/>
                    <HomeItem/>
                    <HomeItem/>
                    <HomeItem/>
                    <HomeItem/>
                    <HomeItem/>
                </div>
            </div>
        </section>
    );
};

export default Home;