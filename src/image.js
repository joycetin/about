import React from 'react'
import logo from './logo.png'
import delivery from './delivery.jpg'
import delivery_men from'./delivery_men.jpg'
import './image.css'

export const Images1 = () => {
  return (
    <div>
        {/* <img src={mission} alt='#' className='img1'/> */}
    </div>
  )
}

export const Images2 = () => {
    return (
      <div >
          <img src={delivery_men} alt='#' className='img2'/>
      </div>
    )
  }

export const Images3 = () => {
    return (
      <div>
          <img src={delivery} alt='#'  className='img3'/>
      </div>
    )
  }

  export const Images4 = () => {
    return (
      <div>
          <img src={logo} alt='#'  className='img4'/>
      </div>
    )
  }
