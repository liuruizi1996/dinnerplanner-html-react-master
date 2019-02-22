import React, { Component } from "react";
// Alternative to passing the moderl as the component property,
// we can import the model instance directly
import modelInstance from "../data/DinnerModel";
import "./Dishes.css";

class Dishes extends Component {
    constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error
    this.state = {
      status: "LOADING",
      baseurl:"https://spoonacular.com/recipeImages/"
    };
  }

  // this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  componentDidMount() {
    // when data is retrieved we update the state
    // this will cause the component to re-render
    modelInstance
      .getAllDishes()
      .then(dishes => {
        this.setState({
          status: "LOADED",
          dishes: dishes.recipes
        });
      })
      .catch(() => {
        this.setState({
          status: "ERROR"
        });
      });
  }

  render() {
    let dishesList = null;

    // depending on the state we either generate
    // useful message to the user or show the list
    // of returned dishes
    switch (this.state.status) {
      case "LOADING":
        dishesList = <em>Loading...</em>;
        break;
      case "LOADED":
        console.log(this.state.dishes);
        dishesList = this.state.dishes.map(dish => (
          
          <div key={dish.id} id={dish.id} className="col-xs-12 col-sm-4 dishitemclass">
           <div className="gallery">
           <img src={dish.image} alt={dish.title}/>
           <div className="desc">{dish.title}</div>
           </div>
          </div>
        ));
        break;
      default:
        dishesList = <b>Failed to load data, please try again</b>;
        break;
    }

    return (
    <div className="Dishes container-fluid col-sm-12 col-md-9">
      <div className="Dishes">
         <div id="searchBar" className="container-fluid ">
  
                        <h5 className="pt-3"><strong>FIND A DISH</strong></h5>
                        <form>
                        <div className="form-row align-item-center pb-3">
                            
                            <div className="col-xs-12 col-sm-3">
                              <input 
                              id="enterKeyWord" 
                              type="text" 
                              className="form-control" 
                              name="enterKeyWord" 
                              placeholder="Enter Key Word"/>
                            </div>
                            <div className="col-xs-12 col-sm-2">
                              <select id="filter" className="form-control">
                                  <option >All</option>
                                  <option value="main course">Main dish</option>
                                  <option value="dessert">Dessert</option>
                                  <option value="side dish">Side dish</option>
                                  <option value="appetizer">Appetizer</option>
                                  <option value="salad">Salad</option>
                                  <option value="bread">Bread</option>
                                  <option value="breakfast">Breakfast</option>
                                  <option value="soup">Soup</option>
                                  <option value="beverage">Beverage</option>
                                  <option value="sauce">Sauce</option>
                                  <option value="drink">Drink</option>
                        
                              </select>
                             </div>
                             <div className="col-xs-12 col-sm-2">
                              <button id="searchBotton" type="button" className="btn-danger btn-sm " >Search</button>
                             </div>
                        </div>
                        </form>
                    </div>
        <div>{dishesList}</div>
      </div>
    </div>
    );
  }
}

export default Dishes;
