import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";
import "./HeaderComponent.styles.css"

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                {/* <section id="navBarWrapper">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-success" style={{height: "10vh"}}>
                        <a className="navbar-brand" href="#/" style={{fontSize: "30px"}}>API-Integration</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active" to="/">Trending <span className="sr-only">(current)</span></Link>
                                <Link className="nav-link" to="/search">Search</Link>
                                <Link className="nav-link" to="/upload">Upload</Link>
                                <Link className="nav-link" to="/preview" >Preview</Link>
                            </div>
                        </div>
                    </nav>;
                </section> */}
                <nav className="nav">
                    <div className="container">
                    <div className="logo">
                    <Link to="/">API Integration    </Link>
            </div>
            <div id="mainListDiv" className="main_list" >
                <ul className="navlinks" >
                    <li><Link to="/">Trending</Link></li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/upload">Upload</Link></li>
                    <li><Link to="/preview">Preview</Link></li>  
                </ul>
            </div>
            <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
            </Fragment> 
        );
    }
}
 
export default HeaderComponent;