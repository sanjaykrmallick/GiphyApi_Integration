import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import SearchList from "../Search/SearchList";
const apiKey=`K447WmBKHQuT6URO6t6Lxjxuo4bGMNxr`;

class TrendingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            gifs:{},
         }
         this._fetchGifs= this._fetchGifs.bind(this)
    }

    componentDidMount= () => {
        this._fetchGifs()
    }

    _fetchGifs = async ()=>{
    const res = await fetch(`http://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}`);
        const json = await res.json();
        if (json.error) {
            alert("Error");
        } else {
            console.log(json);
            this.setState({
                gifs: json
            });
        }
  }

    render() { 
        return ( 
            <Fragment>
                <section id="searchSectionDiv">
                    {this.state.gifs.data!== undefined ? <SearchList gifs={this.state.gifs.data}/> : null}
                </section>
            </Fragment> 
        );
    }
}
 
export default withRouter(TrendingComponent);