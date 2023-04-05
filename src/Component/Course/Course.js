import React from 'react'

const Course = ({ title, img, categories, rate, coursePrice }) => {
    return (
        <div className='bg-white p-2 rounded-md pb-5'>
            <img src={img} className='rounded-md' />
            <div className='flex justify-between items-center mt-3'>
                <div>
                    <p className='text-sm'>{categories}</p>
                    <p className='text-xl font-bold text-gray-500'>{title}</p>
                    <p>{rate}</p>
                </div>
                <p className='mr-6 bg-cyan-700 py-2 px-5 text-white rounded-xl'>$ {coursePrice}</p>
            </div>

        </div>
    )
}

export default Course