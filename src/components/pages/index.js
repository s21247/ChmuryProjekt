import React from 'react';
import ImageSlider from "../HomeImgSlider/ImageSlider";
import {SliderData} from "../HomeImgSlider/SliderData";
import '../styles/home.css';

const Home = () => {
    return (
        <>
            <ImageSlider slides={SliderData}/>
        </>
    );
};

export default Home;