import React from 'react';
import '../../styles/home.css';
import Survey from "./Comments/Survey/survey";

const Home = () => {
    return (
        <>
            <React.Fragment>
                <div className="imageDiv">
                    <img src="https://firebasestorage.googleapis.com/v0/b/model-aria-333216.appspot.com/o/RestaurantImages%2Ffirestore.jpg?alt=media&token=993ebefa-2ad2-436d-9dda-ef5ce810e507" alt='image' className='image'/>
                </div>
                <h1>Comments</h1>
                <Survey/>
            </React.Fragment>
        </>
    );
};

export default Home;