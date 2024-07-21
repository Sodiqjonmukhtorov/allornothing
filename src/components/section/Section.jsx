import React from 'react'
import './Section.css'
import sectionIcons from '/section.svg'

export const Section = () => {
  return (
    <div className='section'>
      <img className='section' src={sectionIcons} alt="_black" />
    </div>
  )
}
