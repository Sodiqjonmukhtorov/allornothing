import React from 'react'
import './Acessuars.css'
import img1 from '/product_30.svg'
import img2 from '/product_old.svg'
import img3 from '/product_new.svg'
import img4 from '/product_old.svg'

export const Acessuars = () => {
  return (
    <div className='Acessuars'>
        <h3 className='Acessuars__title'>ACESSUARS</h3> <hr />
<div className='Acessuars__img'>
    <img className='Acessuars___icon' src={img1} alt="_black" />
    <img className='Acessuars___icon' src={img2} alt="_black" />
    <img className='Acessuars___icon' src={img3} alt="_black" />
    <img className='Acessuars___icon' src={img4} alt="_black" />
</div>
    </div>
  )
}
