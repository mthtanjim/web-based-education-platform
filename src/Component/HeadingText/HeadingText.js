import React from 'react'

const HeadingText = ({ heText, description }) => {
    return (
        <div className='text-center my-10'>
            <p className='text-cyan-800 text-4xl font-semibold '>{heText}</p>
            {
                description
                    ? description : <p className='text-sm my-3'>Take your career to unique heights in this
                        competitive <br /> job Market all the catefgories
                        you need are here . Choose your most preferred course</p>
            }

        </div>
    )
}

export default HeadingText