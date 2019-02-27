import React, { Component } from "react";
import { Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import modelInstance from "./data/DinnerModel";
import SelectDish from "./SelectDish/SelectDish";
import Dishdetails from "./Dishdetails/Dishdetails"
import DishOverview from "./DishOverview/DishOverview"
import Dishprintout from "./Dishprintout/Dishprintout"
import "./App.css";
const httpOptions = {
    headers: { //"X-Mashape-Key": "51d2d93092msh294ff1f5d680033p1aa16ejsnb444793dd0bc",
        "X-Mashape-Key": "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767",
        "Access-Control-Allow-Origin": "http://sunset.nada.kth.se:8080/iprog/group/25/recipes/"
    }
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Dinner Planner",
            dishID: "",
            ordermenu: JSON.parse(localStorage.getItem("ordermenu")),
            menuType: ['main course', 'side dish', 'dessert', 'appetizer', 'salad', 'bread', 'breakfast', 'soup', 'beverage', 'sauce', 'drink', 'undefined'],
            
        };
        this.appIDCall = this.appIDCall.bind(this)
        this.ordermenuCall = this.ordermenuCall.bind(this)


    }

    appIDCall(dishID) {
        var dishID = dishID
        this.setState({ dishID: dishID })
    }


    ordermenuCall(menu) {
        var menu = menu
        this.setState({
            ordermenu: menu
        })
    }

    componentDidMount() {
        this.setState({
            title: "Dinner",
        });

    }

    render() {

        return (
            <div className="App">
        <header className="App-header">
          <h1 className="App-title vertical-container">{this.state.title}</h1>
          <Route exact path="/" component={Welcome} />
          <Route path="/search" render={() => <SelectDish model={modelInstance} 
                                                          appIDCall={this.appIDCall}
                                                          ordermenu={this.state.ordermenu}
                                                          />}/>
          <Route path="/dishdetails" render={() => <Dishdetails model={modelInstance} 
                                                                dishID={this.state.dishID}
                                                                ordermenuCall={this.ordermenuCall}
                                                                ordermenu={this.state.ordermenu}
                                                                total_price={this.state.total_price}/>}/>
          <Route path="/dishoverview" render={() => <DishOverview ordermenu={this.state.ordermenu}
                                                                  total_price={this.state.total_price}/>}/>
          <Route path="/dishprintout" render={()=><Dishprintout ordermenu={this.state.ordermenu}
                                                                total_price={this.state.total_price}/>}/>
        </header>
      </div>
        );
    }
}

export default App;