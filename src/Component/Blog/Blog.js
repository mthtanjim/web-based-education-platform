import React from 'react'
import Button from '../Button/Button'

const Blog = () => {
    return (
        <div className='flex mb-10'>
            <div className='mr-20'>
                <img className='rounded-md' src="https://cdn.pixabay.com/photo/2018/02/27/10/49/training-3185170__480.jpg" alt="" />
            </div>
            <div>
                <h1 className='text-4xl'>We Are Always Ensure Best <br />
                    Course For Your Learning</h1>
                <p className='text-sm text-justify w-[500px] mt-4'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demostrate the visual form of a document</p>
                <ul className='mt-3'>
                    <li>Take your career to unique heights in this competitive job Marke</li>
                    <li>Take your career to unique heights in this competitive job Marke</li>
                    <li>Take your career to unique heights in this competitive job Marke</li>
                    <li>Take your career to unique heights in this competitive job Marke</li>
                    <li>Take your career to unique heights in this competitive job Marke</li>
                    <li>Take your career to unique heights in this competitive job Marke</li>
                    <li>Take your career to unique heights in this competitive job Marke</li>
                    <li>Take your career to unique heights in this competitive job Marke</li>
                    <li>Take your career to unique heights in this competitive job Marke</li>
                    <li>Take your career to unique heights in this competitive job Marke</li>
                    <li>Take your career to unique heights in this competitive job Marke</li>
                    <li>Take your career to unique heights in this competitive job Marke</li>
                </ul>
                <div className='flex mt-6'>
                    <Button text={'Get Start Now'} width={'50px'} height={'10px'} border />
                </div>
            </div>
        </div>
    )
}

export default Blog