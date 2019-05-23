import React, { Component } from "react";
import data from './menuItems.json';

let saveData = []


class Menu extends Component {
    constructor() {
        super();
        this.state = {
            saveOrder:[]
        }
        this.addToOrder = this.addToOrder.bind(this);
    }

    addToOrder(event){
        console.log(this.props)
        let target = event.currentTarget;
        let extraname = target.getAttribute("extraname");
        console.log(extraname)
        saveData.push(data.breakfast[extraname])
        console.log(saveData)   
        this.setState({
            saveOrder: saveData
        }) 
            this.printOrder()
    };

    printOrder (){ 
        let seeTheOrder = document.getElementsByClassName ("print-order")[0];
        seeTheOrder.innerHTML=""
        saveData.map((item) => {
            seeTheOrder.innerHTML += 
           ` <div> 
            ${item.description}/${item.price}
            </div> `
        })
    }
    
    render() {
        return (
                <button extraname = {this.props.extraname} variant="dark" className = "menu-buttons" onClick={this.addToOrder}>
                    {this.props.name}
                </button>
        );
    }
}

export default Menu
