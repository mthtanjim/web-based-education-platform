import React from 'react'
import HeadingText from '../HeadingText/HeadingText'
import courses from '../../rawDataFile/courses'
import Course from '../Course/Course'
import Button from '../Button/Button'

const SuiteCourse = () => {
    return (
        <div className='pt-5 pb-16 bg-cyan-100 px-5 mb-20'>
            <HeadingText description={'In publishing and graphic design, Lorem ipsum is a '} heText={'Course Subjects to suit you'} />
            <div className='grid grid-cols-3 gap-6'>
                {
                    courses.map(course =>
                        <Course
                            title={course.title}
                            categories={course.catagories}
                            coursePrice={course.coursePrice}
                            img={course.img}
                            rate={course.rate}
                            key={course.id}
                        />
                    )
                }
            </div>
            <div className='flex mt-5 justify-center'>
                <Button text={'Show All Course'} border height={'10px'} width={'20px'} />
            </div>
        </div>
    )
}

export default SuiteCourse