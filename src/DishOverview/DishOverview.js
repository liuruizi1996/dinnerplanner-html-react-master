import React, {Component} from "react"
import {Link} from "react-router-dom"
import "./DishOverview.css"
import DishVision from "../DishVision/DishVision"
import NavBar from "../NavBar/NavBar"



class DishOverview extends Component{
    constructor(props){
        super(props)
        this.state={
            dishes:""
        }
    }
    componentDidMount(){
        this.setState({
            dishes:[{id:207766,title:"Dinner Tonight: Hunan Beef with Cumin",image:"https://spoonacular.com/recipeImages/207766-556x370.jpg"} ,
                    {id:207766,title:"good",image:"https://spoonacular.com/recipeImages/207766-556x370.jpg"} ]  
        })
    }
    
    render(){
        return(
          <div className="container-fluid">
            <NavBar/>
            <div className="container-fluid">
                <DishVision dishes={this.state.dishes}/>
                <div id="printfullrecipevision"className="row"  >
                   <div className="col-xs-12 col-sm-5"></div>
                   <div id="printfullrecipe" className="col-xs-12 col-sm-2">
                       <button id="printrecipe" className="btn btn-warning " type="button">Print Full Recipe</button>
                   </div>
                   <div className="col-xs-12 col-sm-5"></div>
                </div>
            </div>
          </div>
        )
    }
}

export default DishOverview ;