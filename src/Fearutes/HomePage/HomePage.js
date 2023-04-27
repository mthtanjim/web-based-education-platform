import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import SliderMenu from '../../Component/SliderMenu/SliderMenu'
import HeadingText from '../../Component/HeadingText/HeadingText'
import Blog from '../../Component/Blog/Blog'
import SuiteCourse from '../../Component/SuiteCourse/SuiteCourse'
import Categories from '../../Component/Categories/Categories'
import ReviewTop from '../../Component/ReviewTop/ReviewTop'
import Review from '../../Component/Review/Review'
import Mentor from '../../Component/Mentor/Mentor'


const HomePage = () => {
    return (
        <div>
            <Navbar />
            <SliderMenu />
            <HeadingText heText={'Our Best Popular Courses'} />
            <Categories />
            <Blog />
            <SuiteCourse />
            <ReviewTop />
            <Review />
            <Mentor />
        </div>
    )
}

export default HomePage