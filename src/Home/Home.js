import React from 'react';
import '../Navigation/Home.css'
import Ngo from '../Contents/ConnectNgo';
import Know from '../Contents/KnowAyurved';

function Home() {
    const form={
        position:"absolute",
        width:"50%",
        top:"250px",
        borderRadius:"10px",
        color:"black",
        left:"120px"
    }
    return (
        <div>
       
        <div className="imgSlider">
            <div class="mx-auto" style={form}>
              <h1><span style={{fontWeight:"bold"}}>#ElderlyCare:)</span></h1> 
              <i><h3>"Your body hears everything your mind says,</h3>
               <h3>We Enlighten you for the wellness of your Health and Better Life"</h3></i>
            </div>
        </div>

        <div ><Ngo></Ngo> </div>
        <div class="mc-auto" style={{form}}>
            <div style={{backgroundColor:"yellow"}}>
       <center> <h1><span> Top Ayurvedic Treatment for you:)</span></h1></center>
        <a href="/feed"><button type="button" class="btn btn-danger">TAKE A LOOk!</button></a> 
        </div>
        </div>
            <Know></Know> 
        
            
        </div>
    );
}

export default Home;