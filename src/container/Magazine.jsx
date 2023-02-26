import React from 'react'
import styles from '../styles.js'
import images from '../constants/images'

const Magazine = () => {
  return (
<section className='pb-28 max-md:pb-28'>
        <div className={`${styles.boxWidth} ${styles.paddingX} ${styles.flexCenter} flex-col m-auto`}>
        <div className="mb-20 after:w-8 after:h-px after:bg-dimLightGrey after:block before:w-8 before:h-px before:bg-dimLightGrey before:block flex flex-row items-center justify-center gap-4 max-ss:mb-10">
                <h2 className='text-primary uppercase text-base'>Buy 2 mugs and get a coffee magazine free</h2>
            </div>
            <div className='flex justify-between items-start flex-row gap-20 max-md:gap-10 max-md:flex-col max-md:items-center max-md:text-center'>
                <div className='grid grid-rows-2 grid-flow-col gap-5'>
                    <img className='row-span-3' src={images.MagazineOne} alt="Magazine" />
                    <img className='row-span-2' src={images.MagazineTwo} alt="Magazine" />
                    <img className='col-span-1'  src={images.MagazineThree} alt="Magazine" />

                    
                </div>
                <div>
                    <span className='block text-primary text-base mb-3.5'>Premium Offer</span>
                    <h2 className='text-primary text-3xl mb-4'>Get our Coffee <br /> Magazine</h2>
                    <p className='text-base text-dimGrey mb-6'>The most versatile furniture system ever <br /> created. Designed to fit your life.</p>
                    <button>Start Shopping</button>
                </div>
            </div>
                
        </div>
        
        
   </section>
  )
}

export default Magazine