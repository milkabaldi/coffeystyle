import React from 'react'
import images from '../constants/images'

function Navbar() {
  return (
    <>
        <div>
          <a className='text-3xl text-primary hover:text-primary' href="/">CoffeStyle.</a>
        </div>

        <ul className='flex gap-5
        '>
          <li><a className='text-base text-primary uppercase hover:text-dimBrown transition-colors ease-in-out duration-300 active:border-b-2 border-dimBrown' href='/'>Home</a></li>
          <li><a className='text-base text-primary uppercase hover:text-dimBrown transition-colors ease-in-out duration-300 active:border-b-2 border-dimBrown' href='/OurProduct'>Our Products</a></li>
          <li><a className='text-base text-primary uppercase hover:text-dimBrown transition-colors ease-in-out duration-300 active:border-b-2 border-dimBrown' href='/Blog'>Blog</a></li>
          <li><a className='text-base text-primary uppercase hover:text-dimBrown transition-colors ease-in-out duration-300 active:border-b-2 border-dimBrown' href='/About'>About</a></li>
          <li><a className='text-base text-primary uppercase hover:text-dimBrown transition-colors ease-in-out duration-300 active:border-b-2 border-dimBrown' href='/Contact'>Contact</a></li>
          <li><a className='text-base text-primary uppercase hover:text-dimBrown transition-colors ease-in-out duration-300 active:border-b-2 border-dimBrown' href='/Styleguide'>Styleguide</a></li>
        </ul>

        <div>
          <button type='button' className='flex gap-2 pointer'>
            <img src={images.Cart} alt="cart" />
            <span>Cart</span>
            <span>0</span>
          </button>

        </div>
    </>
  )
}

export default Navbar
