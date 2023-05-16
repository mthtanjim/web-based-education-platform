import React from 'react'

function Subscribe() {
    return (
        <div className='flex items-center py-10'>
            <div>
                <h1 className='text-6xl py-4'>Subscribe to our Newsletter</h1>
                <p >subscribe to our newsletter to receive exclusive </p> <p className='pb-4'> offers,latest news and updates</p>
                <div className='flex'>
                    <input placeholder='enter your email' className='border-2 outline-none w-1/2 border-gray-200 rounded-2xl  p-2 mr-4' />
                    <button className='p-4  bg-cyan-300 hover:text-white hover:bg-cyan-500 text-black rounded-2xl'>Subscribe</button>
                </div>
            </div>
            <div className='w-[80%]'>
                <img className='rounded-xl' src="https://static.vecteezy.com/system/resources/previews/005/051/189/original/boy-study-in-online-school-illustration-concept-flat-illustration-isolated-on-white-background-vector.jpg" alt="" />
            </div>
        </div >
    )
}

export default Subscribe