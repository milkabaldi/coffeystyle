import React from 'react'
import images from '../constants/images'
import styles from '../styles.js'

const Mugs = () => {
  return (
    <section className='bg-mugs py-48 bg-cover bg-no-repeat bg-bottom' >
      <div className={`${styles.boxWidth} ${styles.paddingX} ${styles.flexCenter} flex justify-center items-center flex-col h-full m-auto`}>
        <span className='block text-base text-secondary mb-2.5'>Best place to buy design</span>
        <h1 className='text-secondary mb-2.5 text-5xl	'>Coffee Mugs</h1>
        <p className='text-lg text-secondary text-center mb-10'>The most versatile furniture system ever created. Designed to fit your life, made to move and grow.</p>
        <button>Explore Our Products</button>
      </div>
          
    </section>
  )
}

export default Mugs