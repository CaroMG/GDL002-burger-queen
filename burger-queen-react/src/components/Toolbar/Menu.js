import React, { Component } from "react";



class Menu extends Component {
    constructor() {
        super();
        this.state = {}
        this.addToOrder = this.addToOrder.bind(this);
    }

    addToOrder(event){
        console.log(this.props)
        let target = event.currentTarget;
        let extraname = target.getAttribute("extraname");
    
    };
    
    render() {
        return (
                <button className = "menu-buttons" onClick={this.addToOrder}>
                    {this.props.name}
                </button>
        );
    }
}

export default Menu
