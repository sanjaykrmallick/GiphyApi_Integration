
import React, { Component, Fragment } from 'react';
// import { } from 'mdbreact'
// import {input} from 'mdbbootstrap'
// const apiKey=`K447WmBKHQuT6URO6t6Lxjxuo4bGMNxr`;
import axios from 'axios';
const url= `https://upload.giphy.com/v1/gifs`
const api_key= `K447WmBKHQuT6URO6t6Lxjxuo4bGMNxr`;


// const submitForm=(contentType, data, setResponse)=> {
// 	axios({
// 	url: `https://upload.giphy.com/v1/gifs`,
// 	method: 'POST',
// 	data: data,

// 	}).then((response) => {
// 		console.log("response: ",response);
// 	setResponse(response.data);

// 	}).catch((error) => {
// 	setResponse("error");
// 	})
// }

class UploadComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
				url:'',
				attachToken: false,
				params: {},
                // tags : '',
                // source_post_url: ''

         }
         this._uploadFileGif=this._uploadFileGif.bind(this)
        //  this._onSubmit=this._onSubmit.bind(this)
    }

    _uploadFileGif=(e)=>{
        //  async (signedRequest, file) => {
        //     const base64 = await fs.readFile(file.uri, 'base64')
        //     const buffer = Buffer.from(base64, 'base64')
        //     return fetch(signedRequest, {
        //       method: 'PUT',
        //       headers: {
        //       'Content-Type': 'image/gif; charset=utf-8',
        //       'x-amz-acl': 'public-read',
        //      },
        //       body: buffer,
        //     })

        e.preventDefault();

            let reader = new FileReader();
            let file1 = e.target.files[0];
            console.log("file: ",file1)

            reader.onloadend = () => {
              this.setState({
				url: url,
                attachToken: false,
                params:{
					api_key:api_key,
					file:file1,
				}


                // tags: "",
              });
            }
           return reader.readAsDataURL(file1);

    }

    _onSubmit= async (
		url,
		attachToken = false,
		params = {}
	  ) => {
		let headers = {
		  Accept: "application/json",
		  "Content-Type": "application/json"
		};
		// if (attachToken) {
		//   try {
		// 	const authToken = await getToken();
		// 	if (authToken) {
		// 	  headers["Authorization"] = "Bearer " + authToken;
		// 	}
		//   } catch (e) {
		// 	console.log("Error fetching auth token: ", e);
		//   }
		// }
		return new Promise((resolve, reject) => {
		  try {
			fetch(url, {
			  method: "POST",
			  headers: headers,
			  body: JSON.stringify(params)
			})
			  .then(
				res => res.json(),
				error => {
				  reject(error);
				}
			  )
			  .then(
				jsonResponse => {
				  if (jsonResponse.error === false) {
					resolve("success:",jsonResponse);
				  } else {
					console.log(jsonResponse);
					reject("reject:",jsonResponse);
				  }
				},
				error => {
				  reject(error);
				}
			  )
			  .catch(error => {
				reject(error);
			  });
		  } catch (e) {
			console.log(e);
			reject();
		  }
		});
	  };
		
        // fetch('https://upload.giphy.com/v1/gifs', {
        //     // content-type header should not be specified!
        //     method: 'POST',
        //     body: JSON.stringify(this.state),
        // })
        // .then(response => response.json())
        // .then(success => {
        //     console.log("success: ",success)
        //     })
        // .catch(error => console.log(error)
        // );

        // const formData = new FormData();
		// formData.append("api_key",this.state.api_key);
		// formData.append("file",this.state.file);

        // // eslint-disable-next-line no-undef
        // submitForm("multipart/form-data", formData, (msg) => console.log("msg",msg));

		
    

     


    // _uploadFileUrl=(e)=>{

    //     let reader = new FileReader();
    //     let file = e.target.files[0];

    //     reader.onload = () => {
    //       this.setState({
    //         file: file,
    //         tags: ""q
    //       });
    //     }

    // }

    render() {
        return (
            <Fragment>
                <h4 style={{color:'#fff',fontWeight:"bold" }}>Upload Your Gif file ... </h4>
                <div className="file-upload-wrapper">
                    <div>
                        <form className="d-flex" onSubmit={this._onSubmit}>
                            <input type="file" id="input-file-now-custom-2" className="file-upload"data-height="500" placeholder="Upload Gif File ..." onKeyDown={this._uploadFileGif}/>
                            <button className="btn btn-warning btn-rounded ml-3 w-25"  onClick={this._onSubmit}>Upload Gif</button>
                        </form>
                    </div>

                    {/* <div>
                        <form className="d-flex" onSubmit={this._onSubmit}>
                            <input type="file" id="input-file-now-custom-2" className="file-upload"data-height="500" placeholder="Upload Url Link..." onKeyDown={this._uploadFileUrl}/>
                            <button className="btn btn-warning btn-rounded ml-3 w-25" >Upload Url</button>
                        </form>
                    </div> */}
                    </div>
            </Fragment>
        );
    }
}

export default UploadComponent;