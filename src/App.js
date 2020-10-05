import React, { Component,Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import HeaderComponent from './components/Header/HeaderComponent'
import Trending from "./components/Trending/TrendingComponent";
import Search from "./components/Search/SearchComponent";
import Upload from "./components/Upload/UploadComponent";
import Preview from "./components/Preview/PreviewComponent";
import PageNotFoundComponent from "./components/PageNotFound/PageNotFoundComponent";
// import "./api_requests"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
			userData: [],
			apiKey:`K447WmBKHQuT6URO6t6Lxjxuo4bGMNxr`,
			gifs: {}
		 }
    }
    render() { 
        return ( 
            <Fragment>
                <Router>
					<header>
						<HeaderComponent/>
					</header>
					<ToastContainer />
					<main id="mainDiv" className="container">
						<Switch>
							<Route path="/" exact component={Trending} />
							<Route path="/search" exact component={Search} />
							<Route path="/upload" exact component={Upload} />
							<Route path="/preview" exact component={Preview} />
							<Route path="**" component={PageNotFoundComponent} />
						</Switch>
					</main>
				</Router>
            </Fragment>
         );
    }
}
 
export default App;