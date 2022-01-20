import React from 'react';
import ImageSlider from "../HomeImgSlider/ImageSlider";
import '../styles/home.css';
import Survey from "../Comments/Survey/Survey";

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