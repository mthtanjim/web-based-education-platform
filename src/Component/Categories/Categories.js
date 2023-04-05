import React from 'react'
import categories from '../../rawDataFile/categories'
import CategoriesItem from '../CategoriesItem/CategoriesItem'


const Categories = () => {
    return (
        <div className='flex justify-between mb-10'>
            {
                categories.map(course =>
                    <CategoriesItem
                        title={course.title}
                        totalCourse={course.totalCourse}
                    />)
            }
        </div>
    )
}

export default Categories