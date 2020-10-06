import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Moment from 'moment';

// import SearchList from "./SearchList";
import "./SearchComponent.styles.css"


const apiKey=`K447WmBKHQuT6URO6t6Lxjxuo4bGMNxr`;

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchText:"",
            isSubmitted: false,
            gifs: {},
            offset: 0,
            perPage: 12,
            currentPage: 0
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
            const res = await fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`);
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
        this.componentDidCatch()
    }
    componentDidCatch=()=>{
        const data = this.state.gifs.data;
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map(gif =>{
            let date = gif.import_datetime.split(" ",1)
            console.log(date)
            let dates = Moment(date[0]).format('DD-MM-YYYY')
            let times = Moment(date[1],'hh:mm A').format('hh:mm A');
            
         return (
            <div className="card" key={gif.id} style={{width:'22rem',height:'23rem',marginBottom:'30px',backgroundColor: '#fff'}}>
                <form>
                <div className="" style={{padding: '15px 20px',display:"flex"}}>
                        <div className="" style={{height:"50px", width:"50px"}}>
                            <img src={(gif.user)?(gif.user.avatar_url):('../../images/user_avatar.png')} alt="avatar" style={{height:"100%",width:"100%",objectFit:"cover", borderRadius:"100%"}} />
                        </div>
                        <div style={{paddingLeft: "13px"}}>
                            <h5 style={{marginBottom: "8px",fontSize:"19px"}}>{(gif.user) ? ((gif.user.display_name!=="")?gif.user.display_name: "Sanjay_Kumar") : ((gif.username!==" ") ? gif.username : "Sanjay_Kumar")}</h5>
                            <pre style={{margin:"0", fontSize:"12px"}}>{dates} at {times}</pre> 
                            {/* <p style={{margin:"0", fontSize:"12px"}}>{date[1]}</p> */}
                        </div>
                    </div>
                    <div className="" style={{padding: '0 6px',height:"55px"}}>
                        <h5 style={{textAlign:"left", paddingLeft:"10px" ,margin: "0",fontSize:"15px"}}>{(gif.title!== "")?gif.title:"Excited gifs"}</h5>
                    </div>
                    <div className="m-auto shadow mt-5 bg-white rounded" style={{height:"230px"}}>
                        <img src={gif.images.fixed_height_small.url} data-src={"../../images/logo.png"} alt="Loading ..." style={{height:"100%",width:"100%",objectFit:"cover"}}/>
                    </div>    
                </form>
            </div> 
        )}
    )
        
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
           
            postData
        })
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.componentDidCatch()
        });

    };

    render() { 
            return ( 
            <Fragment>
                <h1 style={{color:"#fff",fontWeight:"bold"}}>Search</h1>
                <section id="searchSectionDiv">
                    <div>
                        <form className="d-flex" style={{alignItems: "center"}} onSubmit={this._onSubmit}>
                            <input type="search" id="search" className="form-control searchBlock" placeholder="Search Gifs ..." onChange={this._onChange}/>
                            <button className="btn btn-warning btn-rounded ml-3 w-25" >Search</button>
                        </form>
                    </div>
                    <div id="template" className="d-flex flex-wrap justify-content-around mt-5"> {this.state.postData} </div>
                         <div className="pagination">
                            <ReactPaginate
                                previousLabel={"prev"}
                                nextLabel={"next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={this.state.pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}
                            />
                         </div>
                </section>
            </Fragment> 
        );
    }
}
 
export default withRouter(SearchComponent);