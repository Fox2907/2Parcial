import React from 'react'
import './FoodName.css'

export const FoodName = () => {
  return (
    <div className="food-name-container">
        <div className='food-name'>
            <div className="food-name-figure"></div>
            <span>Crunchy Butterscotch</span>
        </div>
        <div className='food-name-ingredients'>Butterscotch & Cashews</div>
    </div>
  )
}

