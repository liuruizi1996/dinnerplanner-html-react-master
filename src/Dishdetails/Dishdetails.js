import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dishdetails.css";

class Dishdetails extends Component {
    render() {
        return (
    <div className="Welcome">
      <div className="text-center">
          <Link to="/search">
            <button className="btn btn-primary btn-lg Startbtn">Start planning</button>
          </Link>
       </div>



    </div>
        );
    }
}

export default Dishdetails;