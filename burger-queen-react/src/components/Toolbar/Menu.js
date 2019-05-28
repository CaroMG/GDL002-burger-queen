import React, { Component } from "react";
import data from './menuItems.json';
import './Menu.css'
import {Button, ButtonToolbar} from 'react-bootstrap'; 



class Menu extends Component {   
    render() {
        return (
            <button className="btn btn-secondary btn-lg btn-block menu-buttons" onClick={() => this.props.addToOrder(this.props.extraname, this.props.type)}>
                    {this.props.name}
            </button>
        );
    }
}

export default Menu