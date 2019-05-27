import {BrowserRouter, Route} from 'react-router-dom';
import React, {Component} from "react";
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
      <span>{item.description}/{item.price} &nbsp; <input type="button" onClick={() => this.deleteItem(i)} value="X"></input></span>
      </div>)
    })
  }

  deleteItem = (index) => {
    
    let items = Array.from(this.state.saveOrder);
    items = items.slice(0, index).concat(items.slice(index + 1, items.length));
    this.setState({ saveOrder: items });
  }

  render () {
    return (
      <div className = "App">
 <Header/>
 <BrowserRouter>
 <Route exact path = "/ChefView" Component = {ChefView}/>
 </BrowserRouter>
 <Menu/>
 <Container>
   <Row>
     <Col sm= {7}>
     <div className="menu">
      <li>
        <CategoryBreakfast addToOrder={this.addToOrder} name="Almuerzos"/>
        <CategoryMeal addToOrder={this.addToOrder} name= "Comida y cena"/>
      </li>
    </div>
     </Col>
     <Col sm= {5}>
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