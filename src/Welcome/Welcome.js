import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

class Welcome extends Component {
    render() {
        return (
      <div className="Welcome">
        <div className="row" >
            <p className="Welcometext padding-top">Our handy meal planner helps you plan a whole week of meals and makes cooking and shopping easier than 
            ever Our handy meal planner helps you plan a whole week of meals and makes cooking and shopping easier than 
            ever Our handy meal planner helps you plan a whole week of meals and makes cooking and shopping easier than 
            ever Our handy meal planner helps you plan a whole week of meals and makes cooking and shopping easier than 
            ever Our handy meal planner helps you plan a whole week of meals and makes cooking and shopping easier than 
            ver Our handy meal planner helps you plan a whole week of meals and makes cooking and shopping easier than 
            ever Our handy meal planner helps you plan a whole week of meals and makes cooking and shopping easier than 
            ever Our handy meal planner helps you plan a whole week of meals and makes cooking and shopping easier than 
            ever
            </p>


          <Link to="/search">
            <button className="btn btn-primary btn-lg">Start planning</button>
          </Link>


        </div>
      </div>
        );
    }
}

export default Welcome;