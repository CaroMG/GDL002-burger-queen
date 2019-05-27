import React, { Component } from "react";
import data from './menuItems.json';


class Menu extends Component {   
    render() {
        return (
                <button variant="dark" className = "menu-buttons" onClick={() => this.props.addToOrder(this.props.extraname, this.props.type)}>
                    {this.props.name}
                </button>
        );
    }
}

export default Menu