import React from 'react';

const CarouselImages = ({ Urls }) => {


    return (
        Urls.map(url =>
            <div className='carousel-image-box' key={url.id}>
                <div className='carousel-margin'>
                    <a href='#'>
                        <img src={url.src} alt='' className='img ' />
                    </a>
                    <div className='carousel-textarea'>
                        <div className='carousel-feature'><span>Hotel + Flight </span><span className='price-cut'><sup>$</sup>{url.oldPrice}</span></div>
                        <div className='carousel-title'><span>{url.title}</span> <span><sup>$</sup>{url.newPrice}</span></div>
                        <div className='carousel-addon'><span>3 nights hotel + Round-trip flight</span> <span>per person</span></div>
                    </div>
                </div>
            </div>
        ));

}

export default CarouselImages;