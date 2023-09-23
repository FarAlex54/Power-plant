import React, { useState, useContext } from 'react'
import Clock from 'react-live-clock';
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AppContext } from '../App';

const Header = () => {
  const headerContext = useContext(AppContext);
  const changeDate = (date)=>{
    const formatDate = new Date(date);
    if (formatDate.getSeconds()===10 || formatDate.getSeconds()===30 || formatDate.getSeconds()===50) {headerContext.setCheckDate(true);}
  }
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='text-light' href="#home"><Clock format={'HH:mm:ss'} ticking={true} onChange={date => changeDate(date)}/></Navbar.Brand>
          <Nav className="text-light me-auto">
            <Nav.Link className='text-light' href="#home">Home</Nav.Link>
            <Nav.Link className='text-light' href="#features">Features</Nav.Link>
            <Nav.Link className='text-light' href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header