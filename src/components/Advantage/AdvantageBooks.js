import React from "react";
import './Advantege.css'
const AdvantageBook =()=>{
    return(
        <div style={{padding:'80px 0'}}>
            <h4>Advantage of reading a book</h4>
            <div className="row" style={{flexDirection:'row-reverse'}}>
            <div  className="col-md-3 text-center advantege-card" data-aos="fade-down"  data-aos-delay="200" >
            <img src="https://cdn-icons-png.flaticon.com/512/4206/4206283.png" className="advantage-icon"></img>        
            <h5>Light of Knowlege</h5>
            <hr/>
            </div>
            <div  className="col-md-3 text-center advantege-card" data-aos="fade-down"   data-aos-delay="300" style={{marginTop:'50px'}}>
            <img src="https://cdn-icons-png.flaticon.com/512/1964/1964587.png" className="advantage-icon"></img>
            <h5>impreoved Concentration</h5>
            <hr/>
            </div>
            <div  className="col-md-3 text-center advantege-card" data-aos="fade-down"      data-aos-delay="400" style={{marginTop:'100px'}}>
            <img src="https://cdn-icons-png.flaticon.com/512/4646/4646856.png" className="advantage-icon"></img>
             <h5>Sharpens Brain</h5>
            <hr/>
            </div>
            <div  className="col-md-3 text-center advantege-card" data-aos="fade-down"      data-aos-delay="500" style={{marginTop:'150px'}}>
            <img src="https://cdn-icons-png.flaticon.com/512/10771/10771435.png" className="advantage-icon"></img>
            <h5>Writing Skills</h5>
            <hr/>
            </div>
            </div>
           
        </div>
    )
}
export default AdvantageBook;