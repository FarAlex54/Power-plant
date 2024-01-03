import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'

/* "homepage": "https://github.com/FarAlex54/Power-plant.git", */

export const AppContext = React.createContext({});
function App() {
  const [info,setInfo] = useState({
    id:0,
    dates:'00:00:00',
    kran:0,
    kotIn:0,
    kotOut:0,
    tankIn:0,
    tankOut:0    
  });
  const [infoAll,setInfoAll] = useState();
  const [checkDate, setCheckDate] = useState(false);
  useEffect (()=>{
    async function axiosData(){
      await axios.get('http://192.168.2.180/modules/prino/singlerecords.php')
            .then(infoData=>{updateDate(infoData);})
    }
    if (checkDate) {axiosData();setCheckDate(false)}
  },[checkDate]);
  function updateDate(infoData){//преобразование температурных данных
    const e = {
      id: infoData.data[0].id,
      dates: infoData.data[0].dates,
      kran: infoData.data[0].kran,
      kotIn: infoData.data[0].kotIn/100,
      kotOut:infoData.data[0].kotOut/100,
      tankIn:infoData.data[0].tankIn/100,
      tankOut:infoData.data[0].tankOut/100  
    }
    setInfo(e);
  }
  return (
    <AppContext.Provider
    value={
      {info, setInfo,
       infoAll,setInfoAll,
       checkDate, setCheckDate
      }
    }>

      <div className="App">
        
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
