import React from 'react';
import pic3 from '../Images/1.jpg';
import pic4 from '../Images/2.jpg';
import pic5 from '../Images/3.jpg';
import pic6 from '../Images/4.jpg';


function ConnectNgo(props) {
    let st={
        borderTopLeftRadius:"3rem",
        borderTopRightRadius:"3rem"
    }

    
    const url="https://www.thegoodfellows.in/";
    const url1="https://agewellfoundation.org/donatenow/?gad=1&gclid=CjwKCAjwhJukBhBPEiwAniIcNVsegKbBTpyD8K4ShJj_k_xJgUxgNGgM07pR5MvFT9BaOoa2ixJKmRoCVqIQAvD_BwE";
    const url2="https://www.helpageindia.org/";
    const url3="https://www.smilefoundationindia.org/"
    return (
        <>
        <div style={{backgroundColor:"#8fc4b7"}}>
        <div id="ngo" class="data-mdb-container">
            <center><h1 style={{color:"blue",paddingBottom:"10px"}}><marquee width="80%" direction="left" height="50px">
           <font color="#FF2626">NGO's </font>
           <font color="#252A34">Working </font>
           <font color="#753422">for </font>
           <font color="#FFD523">65+ </font>
           <font color="#FF2626">Senior </font>
           <font color="#FFCCCC">Citizen </font>
           <font color="#252A34">Selflessly</font>
           <font color="#71EFA3">- </font>
           <font color="#FFCCCC">:)</font>
    </marquee></h1></center>
            <div style={{marginTop:"100px"}}>
        <div className="container">
        <div className="row text center">
        
        <div className="col">
         <div classNameass="card" style={{width:"30rem",paddingLeft:"100px",st}}>
           <img src={pic3}  class="card-img-top" alt="..." style={st}></img>
              <div className="card-body">
                <h5 classNames="card-title"><i><b>GOODFELLOWS</b></i></h5>
                <p classNamess="card-text">Everything Grandkids Do!
                Spirited, empathetic youth companions for the elderly.</p>
            <a class="btn btn-primary" href={url}>Learn More..</a> 
          </div>
         </div>
        </div>

        <div className="col">
         <div classNameass="card" style={{width:"30rem",paddingLeft:"100px"}}>
           <img src={pic4}  class="card-img-top" alt="..."style={st}></img>
              <div className="card-body">
                <h5 classNames="card-title"><i><b>AGEWELL FOUNDATION</b></i></h5>
                <p classNamess="card-text">Agewell Foundation is committed to make a coordinated effort with compassion and understanding to transform social attitudes towards senior citizens. 
                The effort is to create the infrastructure to empower every older person.</p>
            <a class="btn btn-primary" href={url1}>Learn More..</a> 
          </div>
         </div>
        </div>
        <div className="col">
         <div classNameass="card" style={{width:"30rem" ,paddingLeft:"100px"}}>
           <img src={pic5}  class="card-img-top" alt="..."style={st}></img>
              <div className="card-body">
                <h5 classNames="card-title"><i><b>HELPAGE INDIA</b></i></h5>
                <p classNamess="card-text">Dr Sanjay Dudhat, a surgical oncologist at Nanavati who gave an awareness talk at the session.</p>
            <a class="btn btn-primary" href={url2}>Learn More..</a> 
          </div>
         </div>
        </div>
        <div className="col">
         <div classNameass="card" style={{width:"30rem" ,paddingLeft:"100px"}}>
           <img src={pic6}  class="card-img-top" alt="..." style={{borderTopLeftRadius:"2em",borderTopRightRadius:"2em"}}></img>
              <div className="card-body">
                <h5 classNames="card-title"><i><b>SMILE FOUNDATION</b></i></h5>
                <p classNamess="card-text">Dr Sanjay Dudhat, a surgical oncologist at Nanavati who gave an awareness talk at the session.</p>
            <a class="btn btn-primary" href={url3}>Learn More..</a> 
          </div>
         </div>
        </div>
        
    </div>
  </div>
</div>
</div>
</div>
</>
    );
}

export default ConnectNgo;