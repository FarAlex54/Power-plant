import React, { useState } from 'react'
import CardItem from './Items/CardItem'
import { useRef } from 'react';
import Analytic from './Analytic'
import Visual from './Visual'


const Body = () => {



  return (  
    <div className='d-flex flex-row bg-info'>
        <Analytic/>
        <Visual/>
    </div>
  )
}

export default Body