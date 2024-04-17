import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, laudantium reiciendis sit quia iure at modi minus soluta libero. 
                Autem asperiores consequatur ratione obcaecati neque. Cupiditate cumque tempore voluptate assumenda!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit harum sapiente cupiditate maiores vel minima.</p>
        </div>
    </div>
  )
}

export default DescriptionBox
