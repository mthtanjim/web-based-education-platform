import React from 'react'

function Subscribe() {
    return (
        <div className='flex items-center py-10'>
            <div>
                <h1 className='text-6xl py-4'>Subscribe to our Newsletter</h1>
                <p >subscribe to our newsletter to receive exclusive </p> <p className='pb-4'> offers,latest news and updates</p>
                <div className='flex'>
                    <input placeholder='enter your email' className='border-2 border-gray-200 rounded-2xl  p-2 mr-4' />
                    <button className='p-4 bg-blue-500 hover:bg-blue-700 text-white rounded-2xl'>Subscribe</button>
                </div>
            </div>
            <div>
                <img className='rounded-xl' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
            </div>
        </div >
    )
}

export default Subscribe