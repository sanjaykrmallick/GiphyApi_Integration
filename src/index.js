import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.js";
import { BrowserRouter as Router } from 'react-router-dom';

import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'; 
import '../node_modules/bootstrap-css-only/css/bootstrap.min.css'; 
import '../node_modules/mdbreact/dist/css/mdb.css';
import '../node_modules/mdbootstrap/css/bootstrap.css';
import "../node_modules/jquery/dist/jquery"
import "../node_modules/popper.js/dist/popper"


// import "../node_modules/bootstrap/dist/css/bootstrap.css"

import "./index.css"

ReactDOM.render(<Router><App/></Router>, document.getElementById("root"));