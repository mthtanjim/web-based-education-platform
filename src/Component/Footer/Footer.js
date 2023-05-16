import React from 'react'

const Footer = () => {
    const date = new Date();
    return (
        <div className='h-72 text-white items-center flex justify-center bg-gradient-to-t from-cyan-100 via-cyan-500 to-cyan-600 my-2'>
            <div>
                <h1 className='block text-4xl text-black'>Anup , Tanjim , Laila</h1>
                <h1 className='text-xl block text-center py-4'>{date.getFullYear()} @ copy right </h1>
            </div>
        </div >
    )
}

export default Footer