import React from 'react';
import { withRouter } from 'react-router-dom';

const Preview = ({gifs}) => {
  console.log("gifs",gifs);
    
    if(!gifs) {
      return null
    } else {
      return (
        <div id="template" className="d-flex flex-wrap justify-content-around mt-5"> 
            <div className="card" style={{width:'22rem',height:'21rem',marginBottom:'30px',backgroundColor: '#fff'}}>
            <div className="" style={{padding: '0px 20px'}}>
              <h5>{gifs.username}</h5>
              <p>{gifs.import_datetime}</p>
            </div>
            <div className="" style={{padding: '0px 20px'}}>
              <h5>{gifs.title}</h5>
            </div>
            <div className="m-auto">
              <img src={gifs.images.fixed_height_small.url} alt="gifImg" style={{height: '9.5rem',borderRadius:'10px'}}/>
            </div>
          </div>
         </div>
      )
    }
    
}

export default withRouter(Preview);