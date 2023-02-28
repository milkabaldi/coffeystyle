import React from 'react'
import styles from '../styles.js'
import images from '../constants/images'
import data from '../constants/data'

const Blog = () => {
  return (
    <section className="pb-28 max-md:pb-28">
      <div
        className={`${styles.boxWidth} ${styles.paddingX} ${styles.flexCenter} flex-col m-auto`}
        blog
      >
            <div className="mb-20 after:w-8 after:h-px after:bg-dimLightGrey after:block before:w-8 before:h-px before:bg-dimLightGrey before:block flex flex-row items-center justify-center gap-4 max-ss:mb-10">
                <h2 className='text-primary uppercase text-base text-center'>Behind the mugs, lifestyle stories</h2>
            </div>
            <div className='grid grid-cols-3 gap-5 max-md:grid-cols-2 max-ss:grid-cols-1'>
            {data.blog.map((item) => (
            <a className="" href={item.link}>
                <div className='mb-9 hover:scale-125 cursor-pointer duration-500 ease-out'>
                <img className='w-full' key={item.image} src={item.image} alt="Mug product" />
                </div>
                  <span className='text-xl text-primary block mb-2.5' key={item.title}>{item.title}</span>
                  <p className='text-base text-dimGrey  mb-4' key={item.miniDescription}>{item.miniDescription}</p>
                  <span className='text-base text-primary block ' key={item.time}>{item.time}</span>
                 
            </a>
            ))}
            </div>
      </div>
    </section>
  )
}

export default Blog
