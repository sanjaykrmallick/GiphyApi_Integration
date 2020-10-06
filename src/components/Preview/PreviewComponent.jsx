import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Preview from './Preview';

const apiKey=`K447WmBKHQuT6URO6t6Lxjxuo4bGMNxr`;
const id = `TtrQVa4RpBtcRSbavu`;

class PreviewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            gifs:{},
            isRecieved:false,
         }
    }
    
    componentDidMount(){
        this.getGifs(id);
    }
    async getGifs(id) {
        try {
            const res = await fetch(`http://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`);
            const json = await res.json();
            if (json.error) {
                alert("Error");
            } else {
                console.log("json:  ", json);
                this.setState({
                    gifs:json,
                    isRecieved:true,
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() { 
        return ( 
            <Fragment>
                <h1 style={{color:"#fff",fontWeight:"bold"}}>Feed Preview</h1>
                {this.state.isRecieved=== true ?<Preview gifs={this.state.gifs.data}/> : null}
            </Fragment> 
        );
    }
}
 
export default withRouter(PreviewComponent);