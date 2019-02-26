import React, { Component } from "react";
import "./Ingredientslist.css";


class IngredientsList extends Component {
     constructor(props) {
        super(props);
        this.state={
            dish:this.props.dish,
            menuType:['main course', 'side dish', 'dessert', 'appetizer', 'salad', 'bread', 'breakfast', 'soup', 'beverage', 'sauce', 'drink','undefined'],
            ordermenu:[]
         }
         this.addDishToMenu=this.addDishToMenu.bind(this)
    }
    
    
    addDishToMenu() {
        var index = -1;
        do {
            index++;
        } while ((this.state.menuType.indexOf(this.state.dish.dishTypes[index]) == -1) && ((index + 1) < this.state.dish.dishTypes.length));
        var newOrdermenu= this.state.ordermenu
        newOrdermenu[this.state.menuType.indexOf(this.state.dish.dishTypes[index])]=this.state.dish
        this.setState({
             ordermenu: newOrdermenu
        });
        this.props.ordermenuCall(this.state.ordermenu)
    }

    
    
    render() {
        console.log(this.state)
        let ingredientslist = null;
        ingredientslist = this.state.dish.extendedIngredients && this.state.dish.extendedIngredients.map(ingredient => ( 
          <tr key={ingredient.id}>
              <th>{ingredient.amount/*(ingredient.amount*model.getNumberOfGuests()).toFixed(2)*/}</th>
              <th>{ingredient.unit}</th>
              <th>{ingredient.name}</th>
              <th>SEK</th>
              <th>{/*(1*model.getNumberOfGuests()).toFixed(2)*/}</th>
          </tr>
        ));
           
    
    
        
    
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
                          <button id="add_to_menu" type="button" className="btn btn-primary btn-sm col-md-4 col-sm-12" onClick={this.addDishToMenu}>Add to menu</button>
                          <div className="col-md-4 col-sm-12"></div>
                          <div id="total" className="col-md-4 col-sm-12 text-right "></div>
                      </div>
                  </div> 
          </div>
        );
    }
}

export default IngredientsList      ;
