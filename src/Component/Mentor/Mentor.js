import React from 'react'
import mentorData from '../../rawDataFile/mentor'

const Mentor = () => {
    return (
        <div className='py-10 bg-blue-400 mb-10'>
            <h1 className='text-center text-2xl font-semibold text-white'>Meet Our Expert Mentor</h1>
            <div className='flex gap-5 p-5 object-cover '>
                {
                    mentorData.map(mentor =>
                        <SingleMentor
                            img={mentor.img}
                            title={mentor.title}
                            name={mentor.name}
                        />
                    )
                }
            </div>
            <div className='flex justify-center '>
                <button className='text-centerz hover:scale-105  bg-blue-600 p-3 text-white rounded-sm'> All Expert Mentor</button>
            </div>
        </div>
    )
}

const SingleMentor = ({ title, img, name }) => {
    return (
        <div className='relative cursor-pointer group overflow-hidden'>
            <img src={img} alt='mentor' />
            <div className='absolute bottom-100 py-4  text-center bg-opacity-40 text-white h-[30%]  bg-black w-full group-hover:bottom-0'>
                <p>{name}</p>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Mentor