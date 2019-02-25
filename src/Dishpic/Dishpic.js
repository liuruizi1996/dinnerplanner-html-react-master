import React, { Component } from "react";
import "./Dishpic.css";

class Dishpic extends Component {
    constructor(props) {
        super(props);
        }
    








    render() {
        return (

            <div className="container-fluid col-sm-12 col-md-6">
            
                <h3 id="dish_name"><strong>{this.props.title}</strong></h3>
                <div id="dish_img" >
                    
                </div>
                    <p id="dish_intro"></p>
                    <button id="back_to_search" type="button" className="btn btn-primary btn-lg">Back to search</button>
                    <div >
                              <h4><strong>PREPARATION</strong></h4>
                              <p id="dish_description">           </p>
                    </div>
       </div>
        );
    }
}

export default Dishpic;