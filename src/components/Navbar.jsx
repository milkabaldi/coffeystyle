import React from 'react'

function Navbar() {
  return (
    <nav>
        <div>
          <a href='/'>CoffeStyle.</a>
        </div>
        <ul>
          <li>Home</li>
          <li>Our Products</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
          <li>Styleguide</li>
        </ul>
        <div>
          <img src="" alt="cart" />
          <span>Cart</span>
          <span>0</span>
        </div>
    </nav>
  )
}

export default Navbar