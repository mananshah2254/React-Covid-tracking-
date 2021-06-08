import React, {useEffect, useState} from 'react'
import './covid.css';

  const Covid = ()=> {

    const [data, setData]= useState([]);

    const getCovidData = async() =>{
      try{
        const res= await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0]);
      }
      catch(err){
        console.log(err);
      }
     
    }

    useEffect(()=>{
      
      getCovidData();


    },[]);
  
  return(

    <center>
   <div className="bodyb"> 
   <br></br>
   

  
  
  
  <marquee className =" alert1">🔴 Live Covid19 Tracker</marquee>
  <br></br>
   <br></br><br></br>


 

  <div className="w3-card-4">
    <header className="w3-container w3-blue">
      <h1>Country</h1>
    </header>
    <div className="w3-container">
      <p>India</p>
    </div>
  </div>

<br></br>

  <div className="w3-card-4">
    <header className="w3-container w3-blue">
      <h1>Recovered</h1>
    </header>
    <div className="w3-container  recovered">
      <p>{data.recovered}</p>
    </div>
  </div>

<br></br>

  <div className="w3-card-4">
    <header className="w3-container w3-blue">
      <h1>Confirmed</h1>
    </header>
    <div className="w3-container  confirmed">
      <p>{data.confirmed}</p>
    </div>
  </div>

<br></br>

  <div className="w3-card-4">
    <header className="w3-container w3-blue">
      <h1>Deaths</h1>
    </header>
    <div className="w3-container  deaths">
      <p>{data.deaths}</p>
    </div>
  </div>

<br></br>

  <div className="w3-card-4">
    <header className="w3-container w3-blue">
      <h1>Active</h1>
    </header>
    <div className="w3-container  active">
      <p>{data.active}</p>
    </div>
  </div>

<br></br>

  <div className="w3-card-4">
    <header className="w3-container w3-blue">
      <h1>Last Updated</h1>
    </header>
    <div className="w3-container  lastupdatedtime">
      <p>{data.lastupdatedtime}</p>
    </div>
  </div>

 <br></br>
  
   <div className="footer"> 
   <a href="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf" target="_blank" > Covid Helpline ||</a>
   <a href="https://covid.giveindia.org/" target="_blank" > Donate ||</a>
   <a href="https://www.covid19india.org/"target="_blank" > Stats ||</a>
   <a href="https://docs.google.com/document/d/1Cw7WPqZqAabU08DzMK5vdIB3S10s-oE08Fy1UbLMMi4/edit?usp=sharing" target="_blank" > Contact Me </a>
  <br></br><br></br>
   </div>

   </div>

  
</center>



    )
}
export default Covid;
