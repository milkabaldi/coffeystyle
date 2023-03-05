import React from 'react'
import styles from '../styles.js'
import data from '../constants/data'

const Footer = () => {
  return (
    <section className="py-28 max-md:py-14">
      <div
        className={`${styles.boxWidth} ${styles.paddingX} ${styles.flexDefault} flex-row m-auto gap-5 max-md:flex-col `}
      >
        <div className='flex flex-col justify-between h-52 max-md:h-full'>
          <div className='flex flex-col'>
            <span className='text-3xl block text-primary font-bold mb-5'>CoffeeStyle</span>
            <span className='block text-base text-dimGrey mb-5'>Delivering the best coffee life since 1996. <br /> From coffee geeks to the real ones.</span>  
          </div>
          <span className='block text-base text-dimGrey' >CoffeeStyle Inc. © 1996</span>
        </div>
        <ul>
          <span className='block mb-5 text-xl text-primary'>Menu</span>
          {data.footerLinkOne.map((item) => (
            <li className='mb-3' key={item.name}><a className='text-base text-dimGrey  hover:text-dimBrown transition-colors ease-in-out duration-300 active:border-b-2 border-dimBrown' href={item.link}>{item.name}</a></li>
          ))}
        </ul>
        <ul>
          <span className='block mb-5 text-xl text-primary'>Follow Us</span>
          {data.footerLinkTwo.map((menu) => (
             <li className='mb-3' key={menu.name}><a className='text-base text-dimGrey  hover:text-dimBrown transition-colors ease-in-out duration-300 active:border-b-2 border-dimBrown' href={menu.link}>{menu.name}</a></li>
          ))}
        </ul>
        <div className={`${styles.flexDefault} flex-col h-52 max-md:h-full`}>
          <span className='block mb-5 text-xl text-primary'>Contact Us</span>
          <span className='block text-base text-dimGrey mb-7'>We’re Always Happy to Help</span>
          <a className='text-3xl mb-5 text-primary  hover:text-dimBrown transition-colors ease-in-out duration-300 active:border-b-2 border-dimBrown' href="mailto:us@coffeestyle.io">us@coffeestyle.io</a>
          <a className='text-base text-dimGrey  hover:text-dimBrown transition-colors ease-in-out duration-300 active:border-b-2 border-dimBrown' href="https://github.com/milkabaldi">Powered by MilkaBaldi</a>
        </div>
      </div>
    </section>
  )
}

export default Footer
