import React, {Component} from "react"
import {Link} from "react-router-dom"
import "./DishOverview.css"
import DishVision from "../DishVision/DishVision"
import NavBar from "../NavBar/NavBar"



class DishOverview extends Component{
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
            <div className="container-fluid">
                <DishVision ordermenu={this.state.ordermenu}/>
                <div id="printfullrecipevision"className="row"  >
                   <div className="col-xs-12 col-sm-5"></div>
                   <div id="printfullrecipe" className="col-xs-12 col-sm-2">
                       <Link to="/dishprintout">
                       <button id="printrecipe" className="btn btn-warning " type="button">Print Full Recipe</button>
                       </Link>
                   </div>
                   <div className="col-xs-12 col-sm-5"></div>
                </div>
            </div>
          </div>
        )
    }
}

export default DishOverview ;