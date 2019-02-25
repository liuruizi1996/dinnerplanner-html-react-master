import React, { Component } from "react";
import "./Pic_Describtion.css";

class PicDescribtion extends Component {
    constructor(props) {
        super(props);
    }
    
    








    render() {
        console.log(this.props)
        return (
            <div id="pic_discription" className="container-fluid col-sm-12 col-md-6">
                <h3 id="dish_name"><strong>{this.props.title}</strong></h3>
                <div id="dish_img" >
                    <img className="img-thumbnail" src={this.props.image} alt={this.props.image} />
                </div>
                <p id="dish_intro"></p>
                <button id="back_to_search" type="button" className="btn btn-primary btn-lg">Back to search</button>
                <div >
                    <h4><strong>PREPARATION</strong></h4>
                    <p id="dish_instructions">{this.props.instructions}</p>
                </div>
            </div>
        );
    }
}

export default PicDescribtion;