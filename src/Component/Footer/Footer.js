import React from 'react'

const Footer = () => {
    const date = new Date();
    return (
        <div className='h-72 text-white items-center flex justify-center bg-gradient-to-t from-blue-300 via-blue-500 to-blue-600 my-2'>
            <p className='text-xl'>@ copy right {date.getFullYear()}</p>
        </div >
    )
}

export default Footer