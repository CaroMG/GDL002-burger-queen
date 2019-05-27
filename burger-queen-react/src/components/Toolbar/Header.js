import React, {Component} from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import "./Header.css";
import {Link} from 'react-router-dom'
import ChefView from "./ChefView";

class Header extends Component {
    render(){
        return(
                
<div className= "Header">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Vegan Burger Queen</a>
        <a className="nav-link" href="#">Mesera<span className="sr-only">(current)</span></a>
      <li className="nav-item">
      <BrowserRouter>
  <Link to = "/ChefView"className="nav-link" href="#">Cocina</Link>
  </BrowserRouter>
      </li>
</nav>

</div> 
         ) }

}
export default Header
