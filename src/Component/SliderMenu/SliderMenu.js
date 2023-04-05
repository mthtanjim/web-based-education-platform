import React from 'react'
import Button from '../Button/Button'

const SliderMenu = () => {
    return (
        <div className='h-[500px] flex justify-between items-center'>
            <div className='w-1/2 mr-10'>
                <p className='text-7xl font-bold'>Find Your Perfect Course Here</p>
                <p className='text-justify py-4'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                <div className='flex'>
                    <Button text={'Get Start Now'} width={'15px'} height={'10px'} border />
                    <Button text={'Learn More'} width={'15px'} height={'10px'} />
                </div>
            </div>
            <div>
                <img className='rounded-md'
                    src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
            </div>
        </div>
    )
}

export default SliderMenu