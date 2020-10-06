import React from 'react';
import { withRouter } from 'react-router-dom';
import Moment from 'moment';

const Preview = ({gifs}) => {
  console.log("gifs",gifs);
  let date = gifs.import_datetime.split(" ",1)
            console.log(date)
            let dates = Moment(date[0]).format('DD-MM-YYYY')
    
    if(!gifs) {
      return null
    } else {
      return (
        <div id="template" className="d-flex flex-wrap justify-content-around mt-5"> 
            <div className="card" key={gifs.id} style={{width:'22rem',height:'21rem',marginBottom:'30px',backgroundColor: '#fff'}}>
                <form >
                    <div className="m-auto shadow mb-5 bg-white rounded" style={{height:"230px"}}>
                        <img src={gifs.images.fixed_height_small.url} alt="gifImg" style={{height:"100%",width:"100%",objectFit:"cover"}}/>
                    </div>
                    <div className="" style={{padding: '3px 20px 0px 20px',height:"50px"}}>
                        <h5 style={{fontWeight:"bold", textAlign:"left", paddingLeft:"10px" ,margin: "0"}}>{(gifs.title!== "")?gifs.title:"Excited gifs"}</h5>
                    </div>
                    <div className="" style={{padding: '0px 20px', textAlign:"end"}}>
                        <h5 style={{margin: "0"}}>{(gifs.username!== "")?gifs.username:"Sanjay_Kumar"}</h5>
                        <p style={{margin:"0"}}>{dates}</p>
                        <p style={{margin:"0"}}>{date[1]}</p>
                    </div>
                </form>
            </div>
         </div>
      )
    }
    
}

export default withRouter(Preview);