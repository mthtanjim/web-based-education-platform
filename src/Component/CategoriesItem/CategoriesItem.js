import React from 'react'

const CategoriesItem = ({ title, totalCourse }) => {
    return (
        <div className='hover:bg-cyan-800 cursor-pointer  bg-cyan-600 w-1/4 m-5 h-56 rounded-2xl flex flex-col items-center justify-center text-white'>
            <p>{title}</p>
            <p className='py-2 text-gray-300'>{totalCourse}</p>
        </div>
    )
}

export default CategoriesItem