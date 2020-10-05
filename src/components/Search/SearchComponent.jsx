import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import SearchList from "./SearchList";
import "./SearchComponent.styles.css"

const apiKey=`K447WmBKHQuT6URO6t6Lxjxuo4bGMNxr`;


class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchText:"",
            isSubmitted: false,
            gifs: {}
         }
        this._onChange = this._onChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
    }

    _onChange=(e)=>{
        this.setState({searchText : e.target.value})
    }
    _onSubmit=(e)=>{
        e.preventDefault();
        this.setState({isSubmitted:true})
        this.fetchGifs(this.state.searchText)
    }

    async fetchGifs(searchTerm) {
        try {
            const res = await fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=24`);
            const json = await res.json();
            if (json.error) {
                alert("Error");
            } else {
                console.log("json:  ", json);
                this.setState({
                    gifs: json
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() { 
            return ( 
            <Fragment>
                <section id="searchSectionDiv">
                    <div>
                        <form className="d-flex" onSubmit={this._onSubmit}>
                            <input type="search" id="search" className="form-control searchBlock" placeholder="Search Gifs ..." onChange={this._onChange}/>
                            <button className="btn btn-warning btn-rounded ml-3 w-25" >Search</button>
                        </form>
                    </div>
                     {this.state.gifs.data!== undefined ?<SearchList gifs={this.state.gifs.data}/> : null}
                </section>
            </Fragment> 
        );
    }
}
 
export default withRouter(SearchComponent);