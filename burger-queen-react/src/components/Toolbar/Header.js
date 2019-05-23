import React, {Component} from "react";
import "./Header.css";

class Header extends Component {
    render(){
        return(
                
<div className= "Header">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Vegan Burger Queen</a>
        <a class="nav-link" href="#">Mesera<span class="sr-only">(current)</span></a>
      <li class="nav-item">
  <a class="nav-link" href="#">Cocina</a>
      </li>
</nav>

</div> 
         ) }

}
export default Header
