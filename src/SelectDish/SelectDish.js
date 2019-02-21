import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Dishes from "../Dishes/Dishes";
import "./SelectDish.css";

class SelectDish extends Component {
  render() {
    return (
      <div className="SelectDish">
        {/* We pass the model as property to the Sidebar component */}
       <div className="row"> 
        <Sidebar model={this.props.model} />
        <Dishes />
      </div>
      </div>
    );
  }
}

export default SelectDish;
