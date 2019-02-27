import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Dishes from "../Dishes/Dishes";
import "./SelectDish.css";


class SelectDish extends Component {
    constructor(props){
        super(props)
        this.state={
            keywords:"",
            type:"All",  
            dishLoad:false,
            key:"",
            ordermenu:this.props.ordermenu
        }
        this.keywordsChange=this.keywordsChange.bind(this)
        this.typeChange=this.typeChange.bind(this)
        this.loadDishItem=this.loadDishItem.bind(this)
        this.dishIDCall=this.dishIDCall.bind(this)
    }
    dishIDCall(dishID){
        var dishID=dishID
        this.props.appIDCall(dishID)
        console.log(localStorage)
    }
    
    keywordsChange(e){
        var keywords=e.target.value
        this.setState({keywords:keywords})
        e.preventDefault()
    }
    typeChange(e){
        var type=e.target.value 
        this.setState({type:type})
        e.preventDefault()
    }
    loadDishItem(){
        this.setState({dishLoad:!this.state.dishLoad})
    }
    
    render() {
        return (
        <div className="SelectDish container-fluid">
           <div className="row">
             <Sidebar model={this.props.model}
                      ordermenu={this.state.ordermenu}
                      total_price={this.props.total_price}/>
             <div className="container-fluid col-sm-12 col-md-9">
               <SearchBar keywords={this.state.keywords}
                     type={this.state.type}
                     keywordsChange={this.keywordsChange}
                     typeChange={this.typeChange}
                     loadDishItem={this.loadDishItem}/>
               <Dishes keywords={this.state.keywords}
                       type={this.state.type}
                       dishLoad={this.state.dishLoad}
                       dishIDCall={this.dishIDCall}/>
             </div>
          </div>
        </div>
      )
    }
}

export default SelectDish;

class SearchBar extends Component{
    render(){
        return(
            <div id="searchBar" className="container-fluid ">
              <h5 className="pt-3"><strong>FIND A DISH</strong></h5>
              <form>
                <div className="form-row align-item-center pb-3">
            
                  <div className="col-xs-12 col-sm-3">
                    <input id="enterKeyWord" type="text" className="form-control" name="enterKeyWord" placeholder="Enter Key Word" value={this.props.keywords}
                    onChange={(e)=>this.props.keywordsChange(e)}/>
                  </div>
            
                  <div className="col-xs-12 col-sm-2">
                    <select id="dishType" className="form-control" value={this.props.type}
                    onChange={(e)=>this.props.typeChange(e)}>
                      <option value="All">All</option>
                      <option value="main course">Main dish</option>
                      <option value="dessert">Dessert</option>
                      <option value="side dish">Side dish</option>
                      <option value="appetizer">Appetizer</option>
                      <option value="salad">Salad</option>
                      <option value="bread">Bread</option>
                      <option value="breakfast">Breakfast</option>
                      <option value="soup">Soup</option>
                      <option value="beverage">Beverage</option>
                      <option value="sauce">Sauce</option>
                      <option value="drink">Drink</option>
                    </select>
                  </div>
            
                  <div className="col-xs-12 col-sm-2">
                    <button id="searchBotton" type="button" className="btn-danger btn-sm" 
                     onClick={this.props.loadDishItem}>Search</button>
                  </div>
            
                </div>
               </form>
             </div>
        )
    }
}
