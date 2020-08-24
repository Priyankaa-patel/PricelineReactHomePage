import React from 'react';



const GalleryImages = ({ Urls }) => {
    return (
        Urls.map(url =>

            <div className='pos-relative' key={url.id}>
                <img className='images' src={url.src} alt='' />
                <a href='#'>
                    <div className='overlay'>
                        <div className="center-text-area">
                            <p className='feature'>{url.feature} </p>
                            <p className='title'>{url.title}</p>
                            <p className='add-on'>Hotels . Cars . Flights</p>
                        </div>
                    </div>
                </a>
            </div>));
}

export default GalleryImages;