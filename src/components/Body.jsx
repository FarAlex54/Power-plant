import React, { useState } from 'react'
import CardItem from './Items/CardItem'
import { useRef } from 'react';
import Analytic from './Analytic'
import Visual from './Visual'
import {Container, Row, Col} from'react-bootstrap';


const Body = () => {



  return (  
    <Container fluid className='bg-info'>
      <Row>
        <Col xxl={5} xl={5} className=''>
          <Analytic/>
        </Col>
        <Col xxl={7} xl={7} className=''>
          <Visual/>
        </Col>
      </Row>
      
      
    </Container>
    // <div className='d-flex flex-row bg-info'>
    //     <Analytic/>
    //     <Visual/>
    // </div>
  )
}

export default Body