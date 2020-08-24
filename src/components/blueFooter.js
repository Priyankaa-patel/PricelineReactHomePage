import React from 'react';
const images = [
    require('./../images/priceline.svg'),
    require('./../images/booking.svg'),
    require('./../images/kayak.svg'),
    require('./../images/agoda.svg'),
    require('./../images/rentalcars.svg'),
    require('./../images/opentable.svg'),
]


class BlueFooter extends React.Component {
    // renderImage = (src, index) => {
    //     return (

    //         <a href='#'><img src={src} key={index} alt='' /></a>

    //     );
    // }
    render() {

        const imageList = images.map(image => <a href='#' key={image}><img src={image} alt='' /></a>)
        return (
            <div className='blue-footer' >
                <p>Priceline is part of Booking Holdings, the world leader in online travel & related services.</p>
                {imageList}
            </div >
        );
    }
}

export default BlueFooter;