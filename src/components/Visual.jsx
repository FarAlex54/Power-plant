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
          <Col xxl={4} xl={4} className='bg-danger'>
            <div>Ширина div = {heighBox}</div>
            <div>
              <button style={{borderRadius:'50%'}} onClick={()=>changePos('up')} disabled={position!==270 ? false:true}><i className='bi bi-arrow-up-circle-fill'></i></button>
            </div>
            <br />
            <div>
              <button style={{borderRadius:'50%'}} onClick={()=>changePos('down')} disabled={position!==360 ? false:true}><i className='bi bi-arrow-down-circle-fill'></i></button>
            </div>
          </Col>
          <Col className=''>
          <div>
              <button style={{borderRadius:'50%'}} onClick={()=>changePos('up')} disabled={position!==270 ? false:true}><i className='bi bi-arrow-up-circle-fill'></i></button>
            </div>
            <br />
            <div>
              <button style={{borderRadius:'50%'}} onClick={()=>changePos('down')} disabled={position!==360 ? false:true}><i className='bi bi-arrow-down-circle-fill'></i></button>
            </div>
          </Col>
          <Col ref={boxRef} xxl={4} xl={4} style={{height:heighBox}}>
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
        <Col xxl={3} xl={4} className='px-0'><Image className='' src='/img/Tank1.png' fluid/></Col>
        <Col xxl={9} xl={8} className='px-0'>
          <Row className='justify-content-center'>
            <Col>
              <Row className='mt-4 justify-content-center'><span>{visualContext.tempData.tankOut} C</span></Row>
              <Row style={{height:'2px'}} className='bg-dark'></Row>
              <div className='h-25 mx-auto' style={{width:'2px'}}></div>
              <Row style={{height:'2px'}} className='bg-dark'></Row>
              <Row className='justify-content-center'><span>{visualContext.tempData.tankIn} C</span></Row>
            </Col>
            <Col xxl={5} xl={5}><Image src='/img/house.png' fluid/></Col>
          </Row>
          <Row>
            <Col>
              <Row className='mt-3 justify-content-end'><span>{visualContext.tempData.kotOut} C</span></Row>
              <Row style={{height:'2px'}} className='bg-dark'></Row>
              <div className='h-50 bg-dark mx-auto' style={{width:'2px'}}></div>
              <Row style={{height:'2px'}} className='bg-dark'></Row>
              <Row className='justify-content-end'><span>{visualContext.tempData.kotIn} C</span></Row>
            </Col>
            <Col xxl={4} xl={4}><Image src='/img/kotel2.png' fluid/></Col>
          </Row>
        </Col>
      </Row>
    </Container>




/* <div className='d-flex flex-column align-items-center classFont'>
<div className="d-flex flex-row">
  <div className='d-flex flex-column'>
  </div>
  <div className='d-flex flex-column justify-content-between'>
    <Button variant='success' size='sm' onClick={()=>clickUp()}>Up</Button>
    <Button variant='success' size='sm' onClick={()=>clickDown()}>Down</Button>
  </div>
  <div className='table_valve d-flex flex-row justify-content-center'>
    <div className='dot_center'></div>
    {[...Array(60)].map((grade, i)=>{
            const container = {transform: 'rotate('+6*i+'deg)'}; 
            i++;                  
            return <div className='grade' style={container}></div>
                  })}
    <div className="position-hand" style={{transform: 'rotate('+position+'deg)'}}></div>
  </div>
  <div className='d-flex flex-column justify-content-between'>
    <div>id:  {visualContext.info[0].id} </div>
    // <div>posInControl: {visualContext.info[0].kran} </div>
  </div>
</div>
<div className='d-flex flex-row flex-fill align-items-end'>
  <div className='w-25'><img src="/img/Tank1.png" className='img-fluid' alt="" /></div>
  <div className='d-flex flex-fill flex-column'>
    <div className='feed_pipe d-flex flex-row justify-content-end'>
      <div>Out: {visualContext.info[0].kotOut}</div>
    </div>
    <div className="d-flex flex-row justify-content-center">
      <div className='return_circle'></div>
    </div>
    <div className='return_pipe mb-3 d-flex flex-row justify-content-between'>
      <div>posInBase: {visualContext.info[0].kran}</div>
      <div>In: {visualContext.info[0].kotIn}</div>
    </div>
  </div>
  <div className='w-25'><img src="/img/kotel2.png" className='img-fluid' alt="" /></div>
</div>
</div> */
  )
}

export default Visual