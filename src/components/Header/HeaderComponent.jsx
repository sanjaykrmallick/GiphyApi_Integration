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
                <nav className="nav">
                    <div className="container">
                    <div className="logo">
                    <Link to="/"><img id="logoImg" src="./images/Logo.jpg" alt=""/>   </Link>
            </div>
            <div id="mainListDiv" className="main_list" >
                <ul className="navlinks" >
                    <li><Link to="/trending">Trending</Link></li>
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