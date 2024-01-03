import React, { useContext, useState, useRef, useLayoutEffect } from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap';
import '../App.css';
import { AppContext } from '../App';

const Visual = () => {
  const visualContext = useContext(AppContext);
  const [heighBox, setHeighBox] = useState(0);
  const boxRef = useRef();
  const [position, setPosition] = useState(270);
  useLayoutEffect(() => {
    const boxWidth = boxRef.current.getBoundingClientRect();
    setHeighBox(boxWidth.width);
  }, []);
  const containerStyleCenter = { // стили для центра циферблата
    top:heighBox/2-(heighBox*((heighBox*0.02)/100))/2+'px',
    height: heighBox*0.02+'%',
    width: heighBox*0.02+'%',
    left:heighBox/2-(heighBox*((heighBox*0.02)/100))/2+'px'
  }
  const containerStyleHand = { //ситли для стрелки
    top:heighBox/2-(heighBox*((heighBox*0.003)/100))/2+'px',
    left:heighBox/2-(heighBox*((heighBox*0.008)/100))/2+'px',
    width: heighBox*0.01+'%',
    height: heighBox/2-heighBox/10,
    transformOrigin: 50+'% '+ 1 +'px',
    transform: 'rotate('+position+'deg)'
  }
  function changePos(e){
    e==='up'? 
      (position-3>=270)? setPosition(position-3):setPosition(270) :
      (position+3<=360)? setPosition(position+3):setPosition(360);
  }
  return (
    <Container id='cont' fluid className=''>
      <Row className='justify-content-between'>
          <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4} className='bg-danger' style={{fontSize:'70%'}}>
            <div>Ширина div = {heighBox}</div>
            <div>Tank in = {visualContext.info.tankIn}</div>
            <div>Tank out = {visualContext.info.tankOut}</div>
            <div>Kot in = {visualContext.info.kotIn}</div>
            <div>Kot out = {visualContext.info.kotOut}</div>
            <div>id = {visualContext.info.id}</div>
            <div>Kran = {visualContext.info.kran}</div>
          </Col>
          <Col className='m-auto'> {/* кнопки */}
            <Row className='justify-content-end pb-4'>
              <button style={{borderRadius:'50%'}} onClick={()=>changePos('up')} disabled={position!==270 ? false:true}><i className='bi bi-arrow-up-circle-fill'></i></button>
            </Row>
            <Row className='justify-content-end'>
              <button style={{borderRadius:'50%'}} onClick={()=>changePos('down')} disabled={position!==360 ? false:true}><i className='bi bi-arrow-down-circle-fill'></i></button>   
            </Row>
          </Col>
          <Col ref={boxRef} xxl={4} xl={4} lg={4} md={4} sm={4} xs={4} style={{height:heighBox}}> {/* циферблат */}
            {visualContext.info.tankOut===0? <div className='getData text-center w-75'>Получение данных...</div>:null}
            <div className='center' style={containerStyleCenter}></div>
            {[...Array(60)].map((grade, i)=>{
              const containerStyleGrade = {transform: 'rotate('+6*i+'deg)', // стили для циферблата
                left:heighBox/2-(heighBox*((heighBox*0.02)/100))/8-heighBox*0.45+'px',
                top:heighBox/2-(heighBox*((heighBox*0.02)/100))/8+'px',
                transformOrigin: heighBox*0.45+'px'
              }
              i++;                  
              return <div className='grade' style={containerStyleGrade}></div>
                    })}
            <div className="position-hand" style={containerStyleHand}></div>
          </Col>
      </Row>
      <Row className='align-items-end justify-content-between'>
        <Col xxl={3} xl={4} lg={4} md={4} sm={4} xs={4} className='px-0'><Image className='' src='/img/Tank1.png' fluid/></Col>
        <Col xxl={9} xl={8} lg={8} md={8} sm={8} xs={8} className='px-0' style={{fontSize:'90%'}}>
          <Row className='justify-content-center'>
            <Col>
              <Row className='mt-4 justify-content-center'><span>{visualContext.info.tankOut} &#8451;</span></Row>
              <Row style={{height:'2px'}} className='bg-dark'></Row>
              <div className='h-25 mx-auto' style={{width:'2px'}}></div>
              <Row style={{height:'2px'}} className='bg-dark'></Row>
              <Row className='justify-content-center'><span>{visualContext.info.tankIn} &#8451;</span></Row>
            </Col>
            <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={5}><Image src='/img/house.png' fluid/></Col>
          </Row>
          <Row>
            <Col>
              <Row className='mt-3 justify-content-between'>
                <span>{visualContext.info.kotOut} &#8451;</span>
                <span>{visualContext.info.kotOut} &#8451;</span>
                <span>{visualContext.info.kotOut} &#8451;</span>
              </Row>
              <Row style={{height:'2px'}} className='bg-dark'></Row>
              <div className='h-50 bg-dark mx-auto' style={{width:'2px'}}></div>
              <Row style={{height:'2px'}} className='bg-dark'></Row>
              <Row className='justify-content-between'>
                <span>{visualContext.info.tankIn} &#8451;</span>
                {/* <span>{visualContext.info.kotOut-6} &#8451;</span> */}
                <span>{visualContext.info.kotIn} &#8451;</span>
              </Row>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4}><Image src='/img/kotel2.png' fluid/></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Visual