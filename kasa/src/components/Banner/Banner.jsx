import React from 'react'
import Banner from '../../.././src/assets/images/IMG.jpg';
import './../Banner/Banner.scss';

export default function Banner() {
  return (
    <div className='Home_Banner'>
        <img clasname='Home_Banner' src={IMG} alt="Image de couverture" />

    </div>
  )
}
