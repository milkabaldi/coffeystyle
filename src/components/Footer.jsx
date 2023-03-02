import React from 'react'
import styles from '../styles.js'
import data from '../constants/data'

const Footer = () => {
  return (
    <section className="py-28">
      <div
        className={`${styles.boxWidth} ${styles.paddingX} ${styles.flexStart} flex-row m-auto gap-5`}
      >
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col'>
            <span className='text-3xl block text-primary'>CoffeeStyle</span>
            <span className='block text-base text-dimGrey'>Delivering the best coffee life since 1996. <br /> From coffee geeks to the real ones.</span>  
          </div>
          <span className='block text-base text-dimGrey' >CoffeeStyle Inc. © 1996</span>
        </div>
        <ul>
          <span>Menu</span>
          {data.footerLinkOne.map((item) => (
            <li key={item.name}><a href={item.link}>{item.name}</a></li>
          ))}
        </ul>
        <ul>
          <span>Follow Us</span>
          {data.footerLinkTwo.map((menu) => (
             <li key={menu.name}><a href={menu.link}>{menu.name}</a></li>
          ))}
        </ul>
        <div className={`${styles.flexStart} flex-col`}>
          <span className='block'>Contact Us</span>
          <span className='block'>We’re Always Happy to Help</span>
          <a href="mailto:us@coffeestyle.io">us@coffeestyle.io</a>
          <a href="https://github.com/milkabaldi">Powered by MilkaBaldi</a>
        </div>
      </div>
    </section>
  )
}

export default Footer
