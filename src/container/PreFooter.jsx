import React from 'react'
import images from '../constants/images'

const PreFooter = () => {
  return (
    <section className='pb-28 max-md:pb-28'>
        <div>
            <img className='w-full' src={images.bgPreFooter} alt="Background" />
        </div>
    </section>
  )
}

export default PreFooter