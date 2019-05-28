import {BrowserRouter, Route} from 'react-router-dom';
import React, {Component} from "react";
import VeganBurger from './VeganBurger.png'
import CategoryBreakfast from "./components/Toolbar/CategoryBreakfast.js";
import CategoryMeal from "./components/Toolbar/CategoryMeal.js";
import Header from "./components/Toolbar/Header";
import Menu from "./components/Toolbar/Menu";
import data from './components/Toolbar/menuItems.json'
import { Row, Col, Container } from 'react-bootstrap';
import ChefView from "./components/Toolbar/ChefView";
import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      data:'' ,
      saveOrder : []
    };
  }

  // extraname es el indice 
  addToOrder = (extraname, type) => {
    let saveData = Array.from(this.state.saveOrder); 
    saveData.push(data[type][extraname])
    this.setState({
        saveOrder: saveData
    })
};

  printOrder = () => { 
    return this.state.saveOrder.map((item, i) => {
      return (<div key={"order"+i}> 
      <span>{item.description} {item.price} <input type="button" onClick={() => this.deleteItem(i)} value="X"></input></span>
      </div>)
    })
  }

  deleteItem = (index) => {
    
    let items = Array.from(this.state.saveOrder);
    items = items.slice(0, index).concat(items.slice(index + 1, items.length));
    this.setState({ saveOrder: items });
  }



handle(event)
{
  this.setState({
      data:event.target.value
  }) 
 
} 
  render () {
    return (
      <div className = "App">
 <Header/>
 <BrowserRouter>
 <Route exact path = "/ChefView" Component = {ChefView}/>
 </BrowserRouter>
 <Container>
   <Row>
     <Col sm= {7}><div className="card">
  <div className="card-body">
     <div className = 'customer-name'>
     <span className="input-group-text">Ingresa el nombre del cliente: </span>
     <input type = 'text' onChange= {this.handle.bind(this)} aria-label="First name" className="form-control"></input>
     <h1>{this.state.data}</h1>
     </div>
     <div className="p-3 mb-2 bg-light text-dark menu">
      <li>
      <Menu/>
        <CategoryBreakfast addToOrder={this.addToOrder} name="Almuerzos"/>
        <CategoryMeal addToOrder={this.addToOrder} name= "Comida y cena"/>
        <Menu/>
      </li>
      </div>
     </div>
  </div>
     </Col>
     <Col sm= {5}> 
     <div className = "logo">
      <img src = {VeganBurger} alt = 'A'/>
      </div>
     <div className = "print-order">
     {this.printOrder()}
     </div>
     </Col>
   </Row>
 </Container>
  </div>
  );
    }
     }

export default App;