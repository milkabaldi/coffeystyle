import React from 'react'
import styles from '../styles.js'

const Textx = () => {
  return (
    <section className='py-48 max-md:py-28'>
        <div className={`${styles.boxWidth} ${styles.paddingX} ${styles.flexCenter} flex justify-center items-center flex-col m-auto text-center`}>
            <h2 className='text-primary text-3xl mb-5 leading-10'>Even the all-powerful Pointing has no control <br/> about the blind texts.</h2>
            <p className='text-dimGrey text-base mb-5 leading-7 max-w-3xl'>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
            <a href="#readmore" className='text-base text-dimBrown leading-7 border-b border-dimBrown transition-colors ease-in-out duration-300 hover:text-dimGrey hover:border-dimGrey'>Read the full Story</a>
        </div>
    </section>
  )
}

export default Textx