import React from 'react'
import menuData from '../../rawDataFile/menuData'
import Button from '../Button/Button'


const Navbar = () => {
    return (
        <div class="grid grid-col-3 grid-flow-col gap-4 py-3 content-center items-center">
            <div>
                <h1 className='text-4xl font-bold '>Edux</h1>
            </div>
            <div className='flex justify-self-center'>
                {
                    menuData.map(item =>
                        <a href='#' className='px-4 cursor-pointer'>{item.title}</a>
                    )
                }
            </div>
            <div className='justify-self-end'>
                <Button text="Login" width={'20px'} height={'10px'} border />
            </div>
        </div >
    )
}

export default Navbar