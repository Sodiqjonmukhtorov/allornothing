import React from 'react'
import './Footer.css'
import footer from '/footer.svg'

export const Footer = () => {
  return (
    <div className='Footer'>
<h3 className='footer__title'>All or Nothing</h3>
<div className='footer__list'>
<ul>
<li className='footer__item'>+ 94 099 4001</li>
<li className='footer__item'>+ 94 099 4001</li>
</ul>
<ul>
<li className='footer__item'>Biz haqimizda</li>
<li className='footer__item'>Ish vaqti 11:00 - 23:00</li>
</ul>
<img className='footer__img' src={footer} alt="_black" />
</div>
    </div>
  )
}
