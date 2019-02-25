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
    constructor() {
        super()
        this.state = {
            id: "385108"
        }
        this.getDish = this.getDish.bind(this)
        this.processResponse = this.processResponse.bind(this)
    }


    getDish(id) {
        var URL = BASE_URL + "informationBulk?ids=" + id;
        return fetch(URL, httpOptions)
            .then(this.processResponse)
            .then(dish => {this.setState({
                image: dish[0].image,
                title: dish[0].title,
                instructions:dish[0].instructions,
                extendedIngredients:dish[0].extendedIngredients
            });
             console.log(this.state)})
            .catch(() => { console.log("error") })
    }

    processResponse(response) {
        if (response.ok) {
            return response.json();
        }
        throw response;
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
    componentDidMount() {
        this.getDish(385108);
    }

    /*componentDidUpdate(prevProps, prevState) {
        if (prevState.id !== this.state.id) {
            this.getDish(this.state.id)
        }
    }*/

    render() {
        return (
    <div className="row">
       <Sidebar model={this.props.model}/>
       <div className="container-fluid col-sm-12 col-md-9">
          <div className="row">
             <PicDescribtion image={this.state.image}
                              title={this.state.title}
                              instructions={this.state.instructions}/>
             <IngredientsList extendedIngredients={this.state.extendedIngredients}/>
          </div>
       </div>
    </div>
        );
    }
}

export default Dishdetails;