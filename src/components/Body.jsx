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
        <Col xxl md={{span: 5, order: 'first'}} sm={{order: 'last'}} xs={{order: 'last'}} className=''>
          <Analytic/>
        </Col>
        <Col xxl md={{span: 7, order: 'last'}} sm={{order: 'first'}} xs={{order: 'first'}} className=''>
          <Visual/>
        </Col>
      </Row>     
    </Container>
  )
}

export default Body