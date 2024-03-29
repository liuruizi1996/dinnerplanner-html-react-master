import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dishdetails.css";
import Sidebar from "../Sidebar/Sidebar";
import PicDescribtion from "../Pic_Describtion/Pic_Describtion";
import IngredientsList from "../Ingredientslist/Ingredientslist";




const BASE_URL = "http://sunset.nada.kth.se:8080/iprog/group/25/recipes/"
const httpOptions = {
    headers: { //"X-Mashape-Key": "51d2d93092msh294ff1f5d680033p1aa16ejsnb444793dd0bc",
        "X-Mashape-Key": "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767",
        "Access-Control-Allow-Origin": "http://sunset.nada.kth.se:8080/iprog/group/25/recipes/"
    }
}

class Dishdetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dish:"",
            status: "LOADING",
            ordermenu:this.props.ordermenu
        }
        this.getDish = this.getDish.bind(this)
        this.processResponse = this.processResponse.bind(this)
        this.ordermenuCall = this.ordermenuCall.bind(this)
    }
    
    componentWillMount() {
        this.getDish(this.props.dishID);
    }

    getDish(id) {
        var URL = BASE_URL + "informationBulk?ids=" + id;
        return fetch(URL, httpOptions).then(this.processResponse)
            .then(dish =>this.setState({
                dish:dish[0],
                status:"LOADED"}))
            .catch(() => {this.setState({status: "ERROR"})})
    } 

    processResponse(response) {
        if (response.ok) {
            return response.json();
        }
        throw response;
    }

    ordermenuCall(menu){
        var menu=menu
        this.props.ordermenuCall(menu)
    }
    /*static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.dishLoad !== prevState.dishLoad) {
            return {
                dishLoad: nextProps.dishLoad,
                keywords: nextProps.keywords,
                type: nextProps.type
            };
        } else return null;
    }*/
    
  
    render() {
        let dishVis=null

        switch (this.state.status) {
          case "LOADING":
            dishVis = <em>Loading...</em>;
            break;
          case "LOADED":
            dishVis = 
             <div className="row">
                 <PicDescribtion dish={this.state.dish}/>
                 <IngredientsList dish={this.state.dish} ordermenuCall={this.ordermenuCall} 
                                  ordermenu={this.state.ordermenu}/>
              </div>
            break;
          default:
            console.log(this.state.status);
            dishVis = <b>Failed to load data, please try again</b>;
            break;}
        console.log(this.state.ordermenu)
        return (
          <div className="row">
             <Sidebar model={this.props.model} ordermenu={this.props.ordermenu}/>
             <div className="container-fluid col-sm-12 col-md-9">      
                  {dishVis} 
              </div>  
          </div>
        );
    }
  
}

export default Dishdetails;