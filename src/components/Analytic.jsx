import CardItem from './Items/CardItem'
import React, { useContext, useState } from 'react'
import {Container, Row, Col, Image, Form, InputGroup} from 'react-bootstrap';
import '../App.css';
import { AppContext } from '../App';


const Analytic = () => {
  const analyticContext = useContext(AppContext);
  return (
    <Container fluid>
      <InputGroup className="mt-3">
        <InputGroup.Text id="kotIn">подача котел</InputGroup.Text>
        <Form.Control aria-describedby="kotIn"/>
      </InputGroup>
      <InputGroup className="mt-3">
        <InputGroup.Text id="kotOut">обратка котел</InputGroup.Text>
        <Form.Control aria-describedby="kotOut" />
      </InputGroup>
      <InputGroup className="mt-3">
        <InputGroup.Text id="TankIn">обратка из дома</InputGroup.Text>
        <Form.Control aria-describedby="TankIn"/>
      </InputGroup>
      <InputGroup className="mt-3">
        <InputGroup.Text id="TankOut">подача в дом</InputGroup.Text>
        <Form.Control aria-describedby="TankOut" />
      </InputGroup>
      <CardItem></CardItem>
    </Container>
  )
}

export default Analytic