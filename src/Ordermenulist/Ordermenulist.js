import React, { Component } from "react";
import "./Ordermenulist.css";

class DishVision extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        let dishvision = null
        var styles1 = {
            padding_bottom: '15px',
             border_width: 'thin',
              border_style: 'dashed'
        };
        var styles = {
            width: '100%',
            height: 'auto',
        };
        var imagestyle={
          width: '100%'
        }
        if (dishvision == null) {
            let ordermenu=this.props.ordermenu.filter(d=>d)
            dishvision = ordermenu && ordermenu.map(dish => (

                <div id={dish.title} className="row" style={styles1}>
                    <div className="col-md-2" style={{width:"100%", padding_top:"15px"}}>
                        <img className="img-fluid img-thumbnail" src={dish.image} style={imagestyle} alt={dish.title}/ >
                    </div>
                    <div className="col-md-3" style={styles}>
                        <h2>{dish.title.toUpperCase()}</h2>
                        <p> {dish.creditText} </p>
                    </div>
                    <div className="col-md-1" style={styles}></div>
                    <div className="col-md-6" style={styles}>
                        <h4>PREPARATION</h4>
                        <p>{dish.instructions}</p>
                    </div>  
            </div> 





                
            ))
        }

        return (
            <div className="row">
               <div id="dishvision"  className="container-fluid row">{dishvision}           
               </div>
            </div>
        )
    }
}




export default DishVision;