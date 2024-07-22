import React from 'react'
import './Box.css'
import boxIcon from '/box_icons.svg'
import box1 from '/box_img.svg'

export const Box = () => {
  return (
    <div className='Box'>
        <h3 className='box__h3_title'>BY BRAND</h3> <hr />
        <div className='box__block'>
        <div className='box__context'>
        <h1 className='Box__title'>selection by brands
        </h1>
        <a className='box__link' href="#"><img src={boxIcon} alt="_black" /></a>
        </div>
        <div className='box__block_img'>
            <img src={box1} alt="_black" />
        </div>
        </div>

    </div>
  )
}
