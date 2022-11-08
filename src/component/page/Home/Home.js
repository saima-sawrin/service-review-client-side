import React from 'react';
import Gallery from './Gallery/Gallery';
import Hero from './HeroSection/Hero';
import Services from './Services/Services';
import Shop from './Shop/Shop';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Shop></Shop>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;