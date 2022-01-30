import React from 'react';
import ImageSlider from "./HomeImgSlider/imageSlider";
import '../../styles/home.css';
import Survey from "./Comments/Survey/survey";

const Home = () => {
    return (
        <>
            <React.Fragment>
            <ImageSlider/>,
                <h1>Comments</h1>
            <Survey/>
            </React.Fragment>
        </>
    );
};

export default Home;