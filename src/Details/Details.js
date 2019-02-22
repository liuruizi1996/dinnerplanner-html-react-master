import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Details.css";

class Details extends Component {
    Constructor(props){
        super(props)
        this.state={}
    }
    
    componentDidMount(){
        modelInstance
        
    }
    
    render() {
      
    return (
      <div className="SelectDish">
        {/* We pass the model as property to the Sidebar component */}
       <div className="row"> 
        <Sidebar model={this.props.model} />
      </div>
      </div>
    );
  }
}

export default SelectDish;
