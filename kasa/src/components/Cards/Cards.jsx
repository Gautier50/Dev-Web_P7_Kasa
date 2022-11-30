import React from 'react'

export default function Cards({cover, title}) {
  return (
    <div className="cards">
        <img src={cover} alt="locations" />
        <h1>{title}</h1>
    </div>
  )
}



