import React,{useEffect, useState} from 'react';
import axios from 'axios';

function HealthFeed(props) {
    
const[news,Setnews]=useState([]);
    useEffect(()=>{
       axios.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=a160eaad7b7f4f7daccdabc2bce7634f")
       .then((res)=>{
        console.log(res.data.articles);
        Setnews(res.data.articles);
       })
    },[])
    
    return (
        <div style={{marginTop:"100px"}}>
        <div className="container">
        <div className="row text center">
        {
            news.map((val)=>{
                return(
        <div className="col">
         <div classNameass="card" style={{width:"30rem"}}>
           <img src={val.urlToImage}  class="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 classNames="card-title">{val.title}</h5>
                <p classNamess="card-text">{val.description}</p>
            {/* <button class="btn btn-primary">{val.url}</button> */}
          </div>
         </div>
        </div>
        
                )
            })
        }
        </div>
  </div>
</div>
   
    );
}

export default HealthFeed;