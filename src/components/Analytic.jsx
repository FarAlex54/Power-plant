import CardItem from './Items/CardItem'
import React, { useContext, useState } from 'react'
import {Container, Row, Col, Image, Form, InputGroup} from 'react-bootstrap';
import '../App.css';
import { AppContext } from '../App';


const Analytic = () => {
  const analyticContext = useContext(AppContext);
  function edit(prop, event) {
    analyticContext.setTempData({...analyticContext.tempData, ...{[prop]: event.target.value}});
  }
  return (
    <Container fluid>
      <InputGroup className="mt-3">
        <InputGroup.Text id="kotIn">подача котел</InputGroup.Text>
        <Form.Control aria-describedby="kotIn" onChange={event => edit('kotIn', event)}/>
      </InputGroup>
      <InputGroup className="mt-3">
        <InputGroup.Text id="kotOut">обратка котел</InputGroup.Text>
        <Form.Control aria-describedby="kotOut" onChange={event => edit('kotOut', event)}/>
      </InputGroup>
      <InputGroup className="mt-3">
        <InputGroup.Text id="TankIn">обратка из дома</InputGroup.Text>
        <Form.Control aria-describedby="TankIn" onChange={event => edit('tankIn', event)}/>
      </InputGroup>
      <InputGroup className="mt-3">
        <InputGroup.Text id="TankOut">подача в дом</InputGroup.Text>
        <Form.Control aria-describedby="TankOut" onChange={event => edit('tankOut', event)}/>
      </InputGroup>
      <CardItem></CardItem>
    </Container>
  )
}

export default Analytic