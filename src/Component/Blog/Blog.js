import React from 'react'
import Button from '../Button/Button'

const Blog = () => {
    return (
        <div className='flex mb-10 justify-evenly items-center'>
            <div className='mr-20 h-[500px]'>
                <img className='rounded-md h-[500px]' src="https://assets.materialup.com/uploads/fec9cc3e-047b-4ab2-a7e7-deb044ce19eb/preview.jpg" alt="" />
            </div>
            <div>
                <h1 className='text-4xl'>We Are Always Ensure Best <br />
                    Course For Your Learning</h1>
                <p className='text-sm text-justify w-[500px] mt-4'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demostrate the visual form of a document</p>
                <ul className='mt-3'>
                    <li>
                        <i class="fa-solid fa-check pr-3 text-cyan-500"></i>Take your career to unique heights in this competitive
                    </li>
                    <li>
                        <i class="fa-solid fa-check pr-3 text-cyan-500"></i>Take your career to unique heights in this competitive
                    </li>
                    <li>
                        <i class="fa-solid fa-check pr-3 text-cyan-500"></i>Take your career to unique heights in this competitive
                    </li>
                    <li>
                        <i class="fa-solid fa-check pr-3 text-cyan-500"></i>Take your career to unique heights in this competitive
                    </li>
                    <li>
                        <i class="fa-solid fa-check pr-3 text-cyan-500"></i>Take your career to unique heights in this competitive
                    </li>
                    <li>
                        <i class="fa-solid fa-check pr-3 text-cyan-500"></i>Take your career to unique heights in this competitive
                    </li>
                    <li>
                        <i class="fa-solid fa-check pr-3 text-cyan-500"></i>Take your career to unique heights in this competitive
                    </li>
                    <li>
                        <i class="fa-solid fa-check pr-3 text-cyan-500"></i>Take your career to unique heights in this competitive
                    </li>

                </ul>
                <div className='flex mt-6'>
                    <Button text={'Get Start Now'} width={'50px'} height={'10px'} border />
                </div>
            </div>
        </div>
    )
}

export default Blog