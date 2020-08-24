import React from 'react';
import CarouselImages from './carouselImages';

const ImgUrls = [
    {
        id: 1,
        src: require('./../images/CHICAGO.jpg'),
        title: 'Chicago,IL',
        oldPrice: '545',
        newPrice: '476'
    },
    {
        id: 2,
        src: require('./../images/HONOLULU.jpg'),
        title: 'Honolulu,HI',
        oldPrice: '789',
        newPrice: '638'
    },
    {
        id: 3,
        src: require('./../images/LASVEGAS.jpg'),
        title: 'Las Vegas,NV',
        oldPrice: '930',
        newPrice: '171'
    },
    {
        id: 4,
        src: require('./../images/LOSANGELES.jpg'),
        title: 'Los Angeles,CA',
        oldPrice: '532',
        newPrice: '436'
    },
    {
        id: 5,
        src: require('./../images/MIAMIBEACH.jpg'),
        title: 'Miami,FL',
        oldPrice: '558',
        newPrice: '456'
    },
    {
        id: 6,
        src: require('./../images/ORLANDO.jpg'),
        title: 'Orlando,FL',
        oldPrice: '558',
        newPrice: '456'
    },
]

class Carousel extends React.Component {
    state = {
        currentIndex: null
    };

    findPrevious = (event) => {
        if (event !== undefined) {
            event.preventDefault();
        }
        this.setState({ currentIndex: this.state.currentIndex - 1 });
        console.log(this.state.currentIndex);
    }

    findNext = (event) => {
        if (event !== undefined) {
            event.preventDefault();
        }
        this.setState({ currentIndex: this.state.currentIndex + 1 });
        console.log(this.state.currentIndex);
    }




    // nextSlide = () => {
    //     const lastIndex = ImgUrls.length - 1;
    //     const { currentIndex } = this.state;
    //     const shouldResetIndex = currentIndex === lastIndex;
    //     const index = shouldResetIndex ? 0 : currentIndex + 1;
    //     console.log(currentIndex);
    //     this.setState({
    //         currentIndex: index
    //     });
    // }


    render() {
        return (
            <div className='carousel-box'>
                <h2>Don't miss these hotel + flight deals</h2>
                <div className='carousel'>
                    <div>
                        <button className='arrow'
                            onClick={this.findPrevious}
                        // disabled={this.state.currentIndex > 0}
                        >
                            <svg className="sc-bZQynM bXjywp sc-bdVaJa BeUQO" viewBox="0 0 24 24" height="24" width="24"
                                fill="currentcolor" name="left" alt="left button" tabIndex="-1" focusable="false"
                                aria-hidden="true" role="img">
                                <title id="left-id">Previous</title>
                                <path d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className='carousel-image-outer'>
                        <CarouselImages Urls={ImgUrls} />
                    </div>
                    <div>
                        <button className='arrow arrow-margin-left'
                            onClick={this.findNext}
                        // disabled={this.state.currentIndex + 1 < ImgUrls.length} 
                        >
                            <svg className="sc-gzVnrw izRhDd sc-bdVaJa BeUQO" viewBox="0 0 24 24" height="24" width="24"
                                fill="currentcolor" name="right" alt="right button" tabIndex="-1" focusable="false"
                                aria-hidden="true" role="img">
                                <title id="right-id">Next</title>
                                <path d="M12 4l-1.4 1.4 5.6 5.6H4v2h12.2l-5.6 5.6L12 20l8-8-8-8z"></path>
                            </svg>
                        </button >
                    </div >
                </div >
            </div >
        );
    }
}

export default Carousel;