import React, {Component} from "react";
import CategoryBreakfast from "./components/Toolbar/CategoryBreakfast.js";
import CategoryMeal from "./components/Toolbar/CategoryMeal.js";
import Header from "./components/Toolbar/Header";
import Menu from "./components/Toolbar/Menu";
import { Row, Col, Container } from 'react-bootstrap';
import "./App.css";


class App extends Component {
  render () {
    return (
      <div className = "App">
 <Header/>
 <Menu/>
 <Container>
   <Row>
     <Col sm= {8}>
     <div className="menu">
      <button>
        <CategoryBreakfast name= "Almuerzos"/>
        <CategoryMeal name= "Comida y cena"/>
      </button>
    </div>
     </Col>
     <Col sm= {4}></Col>
   </Row>
 </Container>

 
  </div>
  );
    }
     }

export default App;
