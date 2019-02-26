import React, { Component } from "react";
import { Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import modelInstance from "./data/DinnerModel";
import SelectDish from "./SelectDish/SelectDish";
import Dishdetails from "./Dishdetails/Dishdetails"
import DishOverview from "./DishOverview/DishOverview"
import Dishprintout from "./Dishprintout/Dishprintout"
import "./App.css";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Dinner Planner",
      dishID:"",
      ordermenu:""
    };
    this.appIDCall=this.appIDCall.bind(this)
    this.ordermenuCall= this.ordermenuCall.bind(this)
  }
  
  appIDCall(dishID){
      var dishID=dishID
      this.setState({dishID:dishID})
  }
    
  ordermenuCall(menu){
      var menu=menu
      this.setState({ordermenu:menu})
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title vertical-container">{this.state.title}</h1>
          <Route exact path="/" component={Welcome} />
          <Route path="/search" render={() => <SelectDish model={modelInstance} appIDCall={this.appIDCall}/>}/>
          <Route path="/dishdetails" render={() => <Dishdetails model={modelInstance} 
                                                                dishID={this.state.dishID}
                                                                ordermenuCall={this.ordermenuCall}
      ordermenu={this.state.ordermenu}/>}/>
          <Route path="/dishoverview" render={() => <DishOverview/>}/>
          <Route path="/dishprintout" render={()=><Dishprintout/>}/>
        </header>
      </div>
    );
  }
}

export default App;
