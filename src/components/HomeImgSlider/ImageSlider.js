import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import useFirestore from "../hooks/useFirestore";

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const { docs } = useFirestore('HomeSliderImages');
    const length = docs.length;


    const nextSlide = () => {
        clearTimeout(timeout);
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        clearTimeout(timeout);
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const timeout = setTimeout(nextSlide, 7000);

    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {docs && docs.map((docs, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img src={docs.url} alt='image' className='image'/>
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default ImageSlider;