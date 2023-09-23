import React, { useContext, useState } from 'react'
import '../App.css';
import { AppContext } from '../App';
import { Button } from 'react-bootstrap';
/* import {InputGroup} from 'react-bootstrap'; */



const Visual = () => {
  const visualContext = useContext(AppContext);
  const [position,setPosition] = useState(0);
  const clickUp=()=>{if(position-3 > -90){setPosition(position-3);console.log(position);}
                     else{setPosition(-90);console.log('клапан полностью закрыт');}}
  const clickDown=()=>{if(position+3 < 0){setPosition(position+3);console.log(position);}
  else{setPosition(0);console.log('клапан полностью открыт');}}
  return (
    <div className='d-flex flex-column align-items-center'>
        <div className="d-flex flex-row">
          <div className='d-flex flex-column'>
{/*             <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Radio aria-label="Radio button for following text input" />
              </InputGroup.Prepend>
            </InputGroup> */}
          </div>
          <div className='d-flex flex-column justify-content-between'>
            <Button onClick={()=>clickUp()}>Up</Button>
            <Button onClick={()=>clickDown()}>Down</Button>
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
            <div>id: {visualContext.info[0].id}</div>
            <div>posInControl: {visualContext.info[0].kran}</div>
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
    </div>
  )
}

export default Visual