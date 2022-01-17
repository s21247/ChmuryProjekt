import React from "react";

function Card({ children, imageSource, imageAltText, title }) {
    return (
        <div className="card">
            <img src={imageSource}
                 alt={imageAltText} style={{width:"100%"}}/>
            <div className="container">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </div>
    )
}

export default Card;