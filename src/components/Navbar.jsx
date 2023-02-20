import React, { useState } from 'react'
import images from '../constants/images'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>
        <div>
          <a className='text-4xl text-primary hover:text-primary max-ss:text-3xl' href="/">CoffeStyle.</a>
        </div>

        <ul className='flex gap-5 max-md:hidden'>
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
       
       <div className="smallscreen hidden max-md:block">
        <GiHamburgerMenu
          color="#000"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay slide-bottom flex flex-col justify-center items-center fixed w-full h-screen  bg-primary top-0 left-0 ">
            <GiHamburgerMenu
              fontSize={27}
              color='#fff'
              onClick={() => setToggleMenu(false)}
              className="mb-5"
            />
          <ul className='flex flex-col items-center justify-center gap-5'>
          <li><a className='text-lg text-secondary uppercase hover:text-dimBrown transition-colors ease-in-out duration-300 active:border-b-2 border-dimBrown' href='/'>Home</a></li>
          <li><a className='text-lg text-secondary uppercase hover:text-dimBrown transition-colors ease-in-out duration-300 active:border-b-2 border-dimBrown' href='/OurProduct'>Our Products</a></li>
          <li><a className='text-lg text-secondary uppercase hover:text-dimBrown transition-colors ease-in-out duration-300 active:border-b-2 border-dimBrown' href='/Blog'>Blog</a></li>
          <li><a className='text-lg text-secondary uppercase hover:text-dimBrown transition-colors ease-in-out duration-300 active:border-b-2 border-dimBrown' href='/About'>About</a></li>
          <li><a className='text-lg text-secondary uppercase hover:text-dimBrown transition-colors ease-in-out duration-300 active:border-b-2 border-dimBrown' href='/Contact'>Contact</a></li>
          <li><a className='text-lg text-secondary uppercase hover:text-dimBrown transition-colors ease-in-out duration-300 active:border-b-2 border-dimBrown' href='/Styleguide'>Styleguide</a></li>
        </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
