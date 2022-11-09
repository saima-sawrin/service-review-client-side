import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import Gallery from './Gallery/Gallery';
import Hero from './HeroSection/Hero';
import Services from './Services/Services';
import Shop from './Shop/Shop';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Shop></Shop>
            <Gallery></Gallery>
            <Banner></Banner>
        </div>
    );
};

export default Home;