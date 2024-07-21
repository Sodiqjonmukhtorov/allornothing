import React from 'react'
import './Header.css'
import logoHeader from '/logo.svg'
import icons from '/header_icons.svg'

export const Header = () => {
  return (
    <div className='header'>
        <a href="/">
     <img src={logoHeader} alt="_blank" />
     </a>
     <ul className='header__list'>
        <li><a className='header__link' href="#">MEN</a></li>
        <li><a className='header__link' href="#">women</a></li>
        <li><a className='header__link' href="#">sale</a></li>
        <li><a className='header__link' href="#">children</a></li>
        <li><a className='header__link' href="#">collection</a></li>
     </ul>
     <img className='header__icons' src={icons} alt="_blank" />
    </div>
  )
}
