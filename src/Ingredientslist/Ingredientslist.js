import React, { Component } from "react";
import "./Ingredientslist.css";

class IngredientsList extends Component {
     constructor(props) {
        super(props);
    }
    
    
    render() {
        let ingredientslist = null;
        if(ingredientslist==null){
        ingredientslist = this.props.extendedIngredients && this.props.extendedIngredients.map(ingredient => ( 
          <tr key={ingredient.id}>
              <th>{ingredient.amount/*(ingredient.amount*model.getNumberOfGuests()).toFixed(2)*/}</th>
              <th>{ingredient.unit}</th>
              <th>{ingredient.name}</th>
              <th>SEK</th>
              <th>{/*(1*model.getNumberOfGuests()).toFixed(2)*/}</th>
          </tr>
        ));
            }
    
    
        
    
        return (
          <div id="ingredients_table" className="container-fluid col-sm-12 col-md-6 ">
                 <h5><strong>Ingredients For People</strong></h5>
                 <div className="table-responsitve">
                    <table id="ingredient" className="table" >
                      <tbody>{ingredientslist}</tbody>
                    </table>
                  </div>
                  <div className="container-fluid">
                      <div className="d-flex align-self-center row ml-0 mr-4">
                          <button id="add_to_menu" type="button" className="btn btn-primary btn-sm col-md-4 col-sm-12">Add to menu</button>
                          <div className="col-md-4 col-sm-12"></div>
                          <div id="total" className="col-md-4 col-sm-12 text-right "></div>
                      </div>
                  </div> 
          </div>
        );
    }
}

export default IngredientsList      ;
