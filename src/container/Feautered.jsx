import React from 'react'
import styles from '../styles.js'
import images from '../constants/images'
import data from '../constants/data'

const Feautered = () => {
  return (
    <section className='pb-28 max-md:pb-28'>
        <div className={`${styles.boxWidth} ${styles.paddingX} ${styles.flexCenter} flex justify-center items-center flex-col m-auto`}>
            <div className="mb-20 after:w-8 after:h-px after:bg-dimLightGrey after:block before:w-8 before:h-px before:bg-dimLightGrey before:block flex flex-row items-center justify-center gap-4 max-ss:mb-10">
                <h2 className='text-primary uppercase text-base'>Featured Mugs</h2>
            </div>
            <div className='flex gap-5 flex-row max-ss:flex-col'>
            {data.feautered.map((item) => (
            <div className="">
                <div className='mb-9 hover:scale-125 cursor-pointer duration-500 ease-out'>
                <img className='' key={item.mug} src={item.mug} alt="Mug" />
                </div>
                  <span className='text-xl text-primary block text-center' key={item.title}>{item.title}</span>
                  <div className='flex flex-row justify-center items-center gap-2.5'>
                    <span className='text-lg text-dimBrown block' key={item.markdown}>{item.markdown}</span>
                    <span className='text-base text-dimGrey block' key={item.price}>{item.price}</span>
                  </div>
                 
            </div>
            ))}
        </div>
            </div>

        
    </section>
  )
}

export default Feautered