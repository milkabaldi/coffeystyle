import React from 'react'
import images  from '../constants/images' 

function Navbar() {
  return (
    <header className=''>
      <div>
        <a href="/">CoffeStyle.</a>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Our Products</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
          <li>Styleguide</li>
        </ul>
      </nav>

      <div>
        <img src={images.Cart} alt="cart" />
        <span>Cart</span>
        <span>0</span>
      </div>
    </header>
  )
}

export default Navbar
