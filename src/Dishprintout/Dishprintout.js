import React, {Component} from "react"
import {Link} from "react-router-dom"
import "./Dishprintout.css"
import NavBar from "../NavBar/NavBar"
import Ordermenulist from "../Ordermenulist/Ordermenulist"



class Dishprintout extends Component{
    constructor(props){
        super(props)
        this.state={
            ordermenu:this.props.ordermenu
        }
    }
   
    
    render(){
        return(
          <div className="container-fluid">
            <NavBar/>
            <Ordermenulist ordermenu={this.state.ordermenu}/>
          </div>
        )
    }
}

export default Dishprintout ;