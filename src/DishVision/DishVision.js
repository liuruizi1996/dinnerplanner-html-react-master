import React, {Component} from "react";
import "./DishVision.css";

class DishVision extends Component{
    constructor(props){
        super(props)
    }
    
       
    render(){
        let dishvision = null
        if(dishvision==null){
        dishvision = this.props.dishes && this.props.dishes.map(dish =>(
        <div key={dish.id} className="col-xs-12 col-sm-4">
          <div id="vision_pic"className="gallery border" >
            <img src={dish.image} alt={dish.title}/>
            <div className="desc" >{dish.title}</div>
          </div>
          <h6 align="right">SEK</h6>
        </div>
    ))}
        
        return(
            <div className="row">
               <div className="col-xs-12 col-sm-2"></div>
               <div id="dishvision"  className="col-xs-12 col-sm-8 container-fluid row">{dishvision}           
               </div>
               <div id="pricevision" className="col-xs-12 col-sm-1 container row">
                  <p >Total: </p>
                  <p id="total1"></p>     
               </div>
               <div className="col-xs-12 col-sm-1"></div>
            </div>
        )
    }
}




export default DishVision;