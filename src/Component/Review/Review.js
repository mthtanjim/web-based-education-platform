import React from 'react'
import Slider from "react-slick";
import HeadingText from '../HeadingText/HeadingText'
import reviews from '../../rawDataFile/reviews';
import ReviewContent from './ReviewContent/ReviewContent';

const Review = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 3000,
    };

    return (
        <div>
            <HeadingText
                heText={'What Student are saying'}
                description={''}
            />

            <div className='flex justify-center rounded-md'>
                <div className='h-96 w-2/3  mb-10 rounded-md'>
                    <div>
                        <Slider {...settings} >
                            {
                                reviews.map(review =>
                                    <ReviewContent
                                        describe={review.describe}
                                        name={review.name}
                                        course={review.course}
                                    />
                                )
                            }
                        </Slider>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Review