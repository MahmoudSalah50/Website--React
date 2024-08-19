import React from 'react'
import Heading from '../layouts/Heading'
import ReveiwCard from '../layouts/ReveiwCard'

import rev2 from "../assets/rev2.webp"
import rev3 from "../assets/rev3.webp"

const Reviews = () => {
  return (
    <div className='min-h-{80vh} flex flex-col items-center justify-center md:px-32 px-5'>
        <Heading title="Our" title2="Reviews"/>
        <div className='flex flex-col md:flex-row gap-5 mt-5'>
            <ReveiwCard img={rev2}/>
            <ReveiwCard img={rev2}/>
            <ReveiwCard img={rev3}/>
            
        </div>
    </div>
  )
}

export default Reviews