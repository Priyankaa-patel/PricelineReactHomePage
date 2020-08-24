import React from 'react';
import GalleryImages from './galleryImages';


const ImageUrls = [
    {
        id: 1,
        src: require('./../images/new-york-city.webp'),
        feature: '24-HOUR EXCITEMENT',
        title: 'New York'
    },

    {
        id: 2,
        src: require('./../images/los-angeles.webp'),
        feature: 'Cutting-edge cool',
        title: 'Los Angeles'
    },
    {
        id: 3,
        src: require('./../images/orlando.webp'),
        feature: 'Theme park paradise',
        title: 'Orlando'
    },
    {
        id: 4,
        src: require('./../images/atlanta.webp'),
        feature: 'Sweet southern charm',
        title: 'Atlanta'
    },
    {
        id: 5,
        src: require('./../images/dallas.webp'),
        feature: 'Food capital',
        title: 'Dallas'
    },
    {
        id: 6,
        src: require('./../images/san-francisco.webp'),
        feature: 'soak up the scenes',
        title: 'San Francisco'
    },
    {
        id: 7,
        src: require('./../images/miami.webp'),
        feature: 'it\'s beach time',
        title: 'Miami'
    },
    {
        id: 8,
        src: require('./../images/denver.webp'),
        feature: 'mile-high magic',
        title: 'Denver'
    },
    {
        id: 9,
        src: require('./../images/seattle.webp'),
        feature: 'pacific northwest beauty',
        title: 'Seattle'
    },
    {
        id: 10,
        src: require('./../images/san-diego.webp'),
        feature: 'ride the waves',
        title: 'San Diego'
    },
];


const Gallery = () => {
    return (
        <div className='gallery-container'>
            <h2>Discover deals in every city</h2>
            <div className='gallery-grid'>
                <div className='center-box'>
                    <GalleryImages Urls={ImageUrls} />

                </div>
            </div>
        </div>
    );
}


export default Gallery;