import React, {Component} from "react";
import Menu from "./Menu";
import "./Category.css";
import data from './menuItems.json'
  
class CategoryMeal extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible:false, 
            order:[]
        }
    }

    handleClick(event){
        event.preventDefault();
        this.setState({
            visible:!this.state.visible
        })
    }


    render() {
        return (
            <div className="category">
                <h3 onClick={this.handleClick.bind(this)}>{this.props.name}</h3>
                <ul className={this.state.visible? "visible" : "no-visible"}>
                    {data.meal.map((item,i)=> {
                      return <Menu type="meal" addToOrder={this.props.addToOrder} extraname = {i} name= {item.description} price={item.price} key={"meal"+i} />
                    })}
                </ul>
            </div>
        );
    }
}

export default CategoryMeal;