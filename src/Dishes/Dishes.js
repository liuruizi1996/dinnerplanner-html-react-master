import React, { Component } from "react";
import "./Dishes.css";



const BASE_URL= "http://sunset.nada.kth.se:8080/iprog/group/25/recipes/"
const httpOptions = {headers: { //"X-Mashape-Key": "51d2d93092msh294ff1f5d680033p1aa16ejsnb444793dd0bc",
             "X-Mashape-Key":"3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767",
             "Access-Control-Allow-Origin": "http://sunset.nada.kth.se:8080/iprog/group/25/recipes/"}}

class Dishes extends Component {
    constructor(props) {
    super(props);
    this.state = {
      status: "LOADING",
      baseurl:"https://spoonacular.com/recipeImages/",
      keywords:this.props.keywords,
      type:this.props.type,
      dishLoad:this.props.dishLoad
    };
     this.getAllDishes=this.getAllDishes.bind(this)
     this.processResponse=this.processResponse.bind(this)
     this.getFilterDishes=this.getFilterDishes.bind(this)
    }    

   getAllDishes(type,keywords) {
    if (keywords || type !== "All") {
    let URL = BASE_URL+ "search?number=12&type=" + type + "&query=" + keywords;
    return fetch(URL,httpOptions).then(this.processResponse).then(this.getFilterDishes).catch(() => {this.setState({status: "ERROR"})})
    } 
    else{
        let url = BASE_URL+"random?number=12";
        return fetch(url, httpOptions).then(this.processResponse).then(this.getFilterDishes).catch(() => {this.setState({status: "ERROR"})})
    }
  }
   processResponse(response) {
    if (response.ok) {
      return response.json();
    }
    throw response;
  }
   getFilterDishes(dishes){
       if(this.state.keywords || this.state.type !== "All"){
          this.setState({
          status: "LOADED",
          dishes: dishes.results,
          addBaseurl:true
        });
        }
        else
        {
          this.setState({
          status: "LOADED",
          dishes: dishes.recipes,
          addBaseurl:false
        });}   
   }
    
   componentDidMount() {
    this.getAllDishes(this.state.type,this.state.keywords)
   }
   static getDerivedStateFromProps(nextProps, prevState){
      if(nextProps.dishLoad!==prevState.dishLoad){
      return {dishLoad : nextProps.dishLoad,
              keywords : nextProps.keywords,
              type : nextProps.type};
    }
      else return null;
   }
   componentDidUpdate(prevProps, prevState) {
    if (prevState.dishLoad !== this.state.dishLoad) {
       this.getAllDishes(this.state.type,this.state.keywords) 
    }
  }
    

  render() {
    let dishesList = null;
    switch (this.state.status) {
      case "LOADING":
        dishesList = <em>Loading...</em>;
        break;
      case "LOADED":
        if(this.state.addBaseurl){
          this.state.dishes.forEach(dish=>dish.image="https://spoonacular.com/recipeImages/"+dish.image);
        }
        dishesList = this.state.dishes.map(dish => ( 
            <Link to="/dishprintout">
          <div key={dish.id} id={dish.id} className="col-xs-12 col-sm-4 dishitemclass" >
           <div className="gallery">
           <img src={dish.image} alt={dish.title}/>
           <div className="desc">{dish.title}</div>
           </div>
          </div>
            </Link>
        ));
        break;
      default:
        console.log(this.state.status);
        dishesList = <b>Failed to load data, please try again</b>;
        break;
    }

    return (
    <div className="Dishes container-fluid row">
         {dishesList}
    </div>
    );
  }
}

export default Dishes;
