import React from 'react'
import {Container, Row, Col} from'react-bootstrap';


const Footer = () => {
  return (
    <Container className='bg-secondary' fluid>
      <Row>
        <Col className='text-center'>
          <p className='text-white'>Power Plant</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer