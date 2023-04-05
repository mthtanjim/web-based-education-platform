import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import SliderMenu from '../../Component/SliderMenu/SliderMenu'
import HeadingText from '../../Component/HeadingText/HeadingText'
import Blog from '../../Component/Blog/Blog'
import SuiteCourse from '../../Component/SuiteCourse/SuiteCourse'
import Categories from '../../Component/Categories/Categories'


const HomePage = () => {
    return (
        <div>
            <Navbar />
            <SliderMenu />
            <HeadingText heText={'Our Best Popular Courses'} />
            <Categories />
            <Blog />
            <SuiteCourse />
        </div>
    )
}

export default HomePage