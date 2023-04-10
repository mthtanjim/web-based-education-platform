import React from 'react'

const ReviewContent = ({ describe, name, course }) => {
    return (
        <div className='h-96 self-center w-full rounded-md bg-green-100 p-5'>
            <i className="fa-solid fa-quote-left text-9xl"></i>
            <p>{describe}</p>
            <div className='flex items-center mt-5'>
                <img
                    src="https://www.shutterstock.com/image-photo/profile-picture-happy-friendly-young-260nw-1863570355.jpg "
                    className='rounded-[50%] w-20 h-20 object-cover'
                    alt=""
                />
                <div className='ml-5'>
                    <p className='text-xl capitalize font-semibold'>{name}</p>
                    <p className='text-sm'>{course}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewContent