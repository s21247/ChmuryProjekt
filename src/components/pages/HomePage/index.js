import React from 'react';
import ImageSlider from "./HomeImgSlider/imageSlider";
import '../../styles/home.css';
import Survey from "./Comments/Survey/survey";
import RecaptchaComponent from "./Comments/RecaptchaComponent";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

const Home = () => {
    return (
        <>
            <React.Fragment>
                <ImageSlider/>,
                <h1>Comments</h1>
                <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_SECRET_KEY}>
                    <RecaptchaComponent/>
                    <Survey/>
                </GoogleReCaptchaProvider>,
            </React.Fragment>
        </>
);
};

export default Home;