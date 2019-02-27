import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);

  }
  
    render(){
        return(
            <div id="navigation" className="navbar navbar-expand-sm sticky-top col-12" >
                <div id="mydinnerpeople"className="col-xs-12 col-sm-4" align="center" >
                    <h4 id="dinner_people">My Dinner</h4>
                </div>
                <div className="col-xs-12 col-sm-4"></div>
                <div id="gobackandeditdinner"className="col-xs-12 col-sm-4" align="center" >
                    <Link to="/search">
                    <button id="back2editdinner" type="button" className="btn btn-danger">Go back and edit dinner</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default NavBar