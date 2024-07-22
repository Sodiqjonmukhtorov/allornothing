import React from 'react'
import './Product.css'
import product1 from '/product_30.svg'
import product2 from '/product_old.svg'
import product3 from '/product_new.svg'
import product4 from '/product_old.svg'
import product5 from '/product_30.svg'
import product6 from '/product_old.svg'
import product7 from '/product_new.svg'
import product8 from '/product_old.svg'

export const Product = () => {
  return (
    <div className='product'>
        <h3 className='product__title'>News product</h3> <hr />
        <div className='product_img'>
              <img className='product__best' src={product1} alt="_black" />
              <img className='product__best' src={product2} alt="_black" />
              <img className='product__best' src={product3} alt="_black" />
              <img className='product__best' src={product4} alt="_black" />
              <img className='product__best' src={product5} alt="_black" />
              <img className='product__best' src={product6} alt="_black" />
              <img className='product__best' src={product7} alt="_black" />
              <img className='product__best' src={product8} alt="_black" />
        </div>
    </div>
  )
}
