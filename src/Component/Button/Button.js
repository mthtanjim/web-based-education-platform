import React from 'react'

const Button = ({ text, width, height, border }) => {
    return (
        <p className={`${border ? ' bg-cyan-100 text-black' : 'border-cyan-400 border-2 text-cyan-800 ml-7'} hover:text-white  rounded-md cursor-pointer  hover:bg-cyan-400 duration-700`} style={{ padding: `${height} ${width}` }}>
            {text}
        </p >
    )
}

export default Button