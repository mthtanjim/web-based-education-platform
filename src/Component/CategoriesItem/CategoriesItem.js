import React from 'react'

const CategoriesItem = ({ title, totalCourse }) => {
    return (
        <div className='hover:bg-cyan-400 cursor-pointer text-black  bg-cyan-300 w-1/4 m-5 h-56 rounded-2xl flex flex-col items-center justify-center '>
            <p>{title}</p>
            <p className='py-2 text-black'>{totalCourse}</p>
        </div>
    )
}

export default CategoriesItem