import React, {Component} from "react";
import {HashRouter, Route} from 'react-router-dom';
import "./Header.css";
import {Link} from 'react-router-dom'
import ChefView from "./ChefView";

class Header extends Component {
    render(){
        return(
                
<div className= "Header">
<nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Vegan Burger Queen</a>
        <a className="nav-link" href="#">Mesera<span className="sr-only">(current)</span></a>
        <HashRouter>    
      <li className="nav-item">
  <Link to = "/ChefView"className="nav-link" href="#">Cocina</Link>
      </li>
      </HashRouter>
</nav>

</div> 
         ) }

}
export default Header
