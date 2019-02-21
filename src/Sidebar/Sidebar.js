import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    // we put on state the properties we want to use and modify in the component
    this.state = {
      numberOfGuests: this.props.model.getNumberOfGuests()
    };
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
    this.props.model.setNumberOfGuests(e.target.value);
  };

  render() {
    return (
      <div className="Sidebar container-fluid col-sm-12 col-md-3">
          <nav className="navbar navbar-default" role="navigation" style={{margin: "0px -30px 0px -30px"}}>
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle bg-primary" data-toggle="collapse" data-target="#navbar-collapse">
                                    <span >☰</span>
                                </button>
                                <a className="navbar-brand" href="#">My Dinner</a>
                            </div>
                            <div className="collapse navbar-collapse" id="navbar-collapse">
                                <div id="people" className="row mt-3">
                                    <h5 className="col-4">people</h5>
                                    <div class="col-4"></div>
                                    <input
                                      type="number"
                                      value={this.state.numberOfGuests}
                                      onChange={this.onNumberOfGuestsChanged}
                                    />
                                </div>
                                <div id="gray_text" class="row  border-top border-bottom">
                                    <p class="col-6 ">Dish name</p>
                                    <div className="col-6">
                                        <p className="cost">Cost</p>
                                    </div>
                                </div>
                                <div id="selctedmenu">
                                </div>
                                <div align="right">
                                    <p id="total_pricesm"></p>
                                </div>
                                <div id="button" className="align-middle mb-5" align="center">
                                    <button id="Confirm_dinner" type="button" className="btn btn-secondary btn-lg">Confirm Dinner</button>
                                </div>
                            </div>
                        </div>
                    </nav>
            </div>

    );
  }
}

export default Sidebar;
