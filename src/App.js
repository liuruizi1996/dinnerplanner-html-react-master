import React, { Component } from "react";
import { Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import modelInstance from "./data/DinnerModel";
import SelectDish from "./SelectDish/SelectDish";
import Dishdetails from "./Dishdetails/Dishdetails"
import DishOverview from "./DishOverview/DishOverview"
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Dinner Planner"
    };
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title vertical-container">{this.state.title}</h1>
          <Route exact path="/" component={Welcome} />
          <Route path="/search" render={() => <SelectDish model={modelInstance} />}/>
          <Route path="/dishdetails" render={() => <Dishdetails model={modelInstance}/>}/>
          <Route path="/dishoverview" render={() => <DishOverview/>}/>
        </header>
      </div>
    );
  }
}

export default App;
