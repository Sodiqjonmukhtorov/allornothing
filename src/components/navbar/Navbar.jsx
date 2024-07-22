import React from 'react'
import './Navbar.css'
import navbar1 from '/navbar1.svg'
import navbar2 from '/navbar2.svg'
import navbar3 from '/navbar3.svg'
import navbar4 from '/navbar4.svg'


export const Navbar = () => {
  return (
    <div className='Navbar'>
        <h3 className='navbar__title'>ALL MENU</h3> <hr />
        <div className='navbar__img'>
<img className='NAVBAR_icon' src={navbar1} alt="_black" />
<img className='NAVBAR_icon' src={navbar2} alt="_black" />
<img className='NAVBAR_icon' src={navbar3} alt="_black" />
<img className='NAVBAR_icon' src={navbar4} alt="_black" />
        </div>
    </div>
  )
}
