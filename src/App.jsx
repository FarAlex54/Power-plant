import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'

export const AppContext = React.createContext({});
function App() {
  const [info,setInfo] = useState();
  const [infoAll,setInfoAll] = useState();
  const [isLoading, setLoading] = useState(true); //состояние получения ответа axios при открытии приложения
  const [checkDate, setCheckDate] = useState(false);
  useEffect (()=>{
    async function axiosData(){
/*       console.log('Выполнилась функция axiosData'); */
      await axios.get('http://192.168.2.180/modules/prino/singlerecords.php')
            .then(infoData=>{setInfo(infoData.data);setLoading(false)})
      const infoAllData = await axios.get('http://192.168.2.180/modules/prino/singlerecords.php')
      setInfoAll(infoAllData.data);
    }
    if (checkDate) {axiosData();setCheckDate(false)}
    axiosData();
  },[checkDate]);
  if (isLoading) {
    return <div className="App">Loading...</div>;
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