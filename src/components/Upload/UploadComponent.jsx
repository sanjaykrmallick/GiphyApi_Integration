import React, { Component, Fragment } from 'react';
const api_key= `K447WmBKHQuT6URO6t6Lxjxuo4bGMNxr`;

class UploadComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
				url:'',
				attachToken: false,
        file: null,
        api_key:"",
                // tags : '',
                // source_post_url: ''
         }
         this._handleOnChange=this._handleOnChange.bind(this)
         this._handleOnSubmit=this._handleOnSubmit.bind(this)
         this._uploadFile=this._uploadFile.bind(this)
    }


    _handleOnChange = (e) => {
      e.preventDefault();
      this.setState({file:e.target.files[0] , api_key:api_key , attachToken:true})
    }

    _handleOnSubmit =(e) =>{
      e.preventDefault();
      this._uploadFile(this.state.file)
      }


    _uploadFile=(files)=> {
  
      let headers = {}
      var formData = new FormData();
        formData.append('file',files);
        formData.append('api_key',api_key);


      fetch('https://upload.giphy.com/v1/gifs', {
        // content-type header should not be specified!
        method: 'POST',
        headers: headers,
        body: formData,
      })
        .then(response => response.json())
        .then(success => {
          // Do something with the successful response
          console.log("success--> ",success)
        })
        .catch(error => console.log(error)
      );
    }
    render() {
        return (
            <Fragment>
              <h1 style={{color:"#fff",fontWeight:"bold"}}>Upload</h1>
                <h4 style={{color:'#fff',fontWeight:"bold" }}>Upload Your Gif file ... </h4>
                  <div className="file-upload-wrapper">
                        <form className="d-flex" onSubmit={this._handleOnSubmit}>
                            <input type="file" id="input-file-now-custom-2" className="file-upload"data-height="500" placeholder="Upload Gif File ..." accept="image/gif" onChange={this._handleOnChange}/>
                            <button className="btn btn-warning btn-rounded ml-3 w-25"  onClick={this._handleOnSubmit}>Upload Gif</button>
                        </form>
                  </div>
            </Fragment>
        );
    }
}

export default UploadComponent;