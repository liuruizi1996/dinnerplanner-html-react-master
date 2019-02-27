import React, { Component } from "react";
import "./Pic_Describtion.css";
import {Link} from "react-router-dom"

class PicDescribtion extends Component {
    constructor(props) {
        super(props);
        this.state={
            dish:this.props.dish
        }
    }
    
    render() {
        return (
            <div id="pic_discription" className="container-fluid col-sm-12 col-md-6">
                <h3 id="dish_name"><strong>{this.state.dish.title}</strong></h3>
                <div id="dish_img" >
                    <img className="img-thumbnail" src={this.state.dish.image} alt={this.state.dish.image} />
                </div>
                <p id="dish_intro"></p>
                <Link to="./search"><button id="back_to_search" type="button" className="btn btn-primary btn-lg">Back to search
                </button></Link>
                <div >
                    <h4><strong>PREPARATION</strong></h4>
                    <p id="dish_instructions">{this.state.dish.instructions}</p>
                </div>
            </div>
        );
    }
}

export default PicDescribtion;