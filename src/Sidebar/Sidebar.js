import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

class Sidebar extends Component {
    constructor(props) {
        super(props);

        // we put on state the properties we want to use and modify in the component
        this.state = {
            numberOfGuests: this.props.model.getNumberOfGuests(),
            ordermenu: this.props.ordermenu,
            total_price: this.props.total_price
        };
        this.returnDishPrice = this.returnDishPrice.bind(this)
        

    }

    // this methods is called by React lifecycle when the
    // component is actually shown to the user (mounted to DOM)
    // that's a good place to setup model observer
    componentDidMount() {
        this.props.model.addObserver(this);
    }

    // this is called when component is removed from the DOM
    // good place to remove observer
    componentWillUnmount() {
        this.props.model.removeObserver(this);

    }


    // in our update function we modify the state which will
    // cause the component to re-render
    update() {
        this.setState({
            numberOfGuests: this.props.model.getNumberOfGuests()
        });
    }
    
    // our handler for the input's on change event
    onNumberOfGuestsChanged = e => {
        localStorage.setItem("numberOfGuests", e.target.value)
        console.log(localStorage.numberOfGuests)
        this.props.model.setNumberOfGuests(e.target.value);
    };

    returnDishPrice(array) {
        console.log("returnDishPrice")
        if (array && array.length) {
            return (((array.length) * (this.state.numberOfGuests)).toFixed(2))
        }
        return ""

    }

    Addtotal_price(dishes){
        let sum=0;
        function getSum(item){
            sum += item.extendedIngredients.length;
        }
        dishes.forEach(getSum);
        return sum 

    }

    render() {
        let selectedMenu = null
        let ordermenu = this.state.ordermenu.filter(d => d)
        let total_price=this.Addtotal_price(ordermenu)*this.state.numberOfGuests
        localStorage.total_price=total_price
        selectedMenu = ordermenu && ordermenu.map(dish => (
            <div key={dish.id+dish.title} className="d-flex row">
              <p className="col-3">{dish.title}</p>
              <p className="col-3"></p>
              <p className="col-3"></p>
              <p className="col-3">SEK{dish.extendedIngredients.length*this.state.numberOfGuests}</p>
            </div>
        ))
        

        return (
            <div className="Sidebar container-fluid col-sm-12 col-md-3">
          <div className="navbar navbar-default" role="navigation" style={{margin: "0px -30px 0px -10px"}}>
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle bg-primary" data-toggle="collapse" data-target="#navbar-collapse">
                                    <span >☰</span>
                                </button>
                                <a className="navbar-brand" >My Dinner</a>
                            </div>
                            <div className="collapse navbar-collapse" id="navbar-collapse">
                                <div id="people" className="row mt-3">
                                    <h5 className="col-4">people</h5>
                                    <div className="col-4"></div>
                                    <input
                                      type="number"
                                      value={this.state.numberOfGuests}
                                      onChange={this.onNumberOfGuestsChanged}
                                    />
                                </div>
                                <div id="gray_text" className="row  border-top border-bottom">
                                    <p className="col-6 ">Dish name</p>
                                    
                                    <div className="col-6">
                                        <p className="cost">Cost</p>
                                    </div>
                                </div>
                                <div id="selectedmenu" >{selectedMenu}
                                </div>
                                <div align="right">
                                    <p id="total_price">Total price SEK {total_price}</p>
                                </div>
                                <div id="button" className="align-middle mb-5" align="center">
                                    <Link to="/dishoverview">
                                    <button id="Confirm_dinner" type="button" className="btn btn-secondary btn-lg">Confirm Dinner</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        );
    }
}

export default Sidebar;