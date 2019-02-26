import React, {Component} from "react"
import {Link} from "react-router-dom"
import "./Dishprintout.css"
import NavBar from "../NavBar/NavBar"
import Ordermenulist from "../Ordermenulist/Ordermenulist"



class Dishprintout extends Component{
    constructor(props){
        super(props)
        this.state={
            dishes:""
        }
    }
    componentDidMount(){
        this.setState({
            dishes:[{id:207766,title:"Dinner Tonight: Hunan Beef with Cumin",image:"https://spoonacular.com/recipeImages/207766-556x370.jpg"} ,
                    {id:207766,title:"Dinner Tonight: Hunan Beef with Cumin",image:"https://spoonacular.com/recipeImages/207766-556x370.jpg"}]  
        })
    }
    
    render(){
        return(
          <div className="container-fluid">
            <NavBar/>
            <Ordermenulist dishes={this.state.dishes}/>
          </div>
        )
    }
}

export default Dishprintout ;