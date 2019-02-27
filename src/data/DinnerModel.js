import ObservableModel from "./ObservableModel";

/*const BASE_URL = "http://sunset.nada.kth.se:8080/iprog/group/25/recipes/";
const httpOptions = {
  headers: { //"X-Mashape-Key": "51d2d93092msh294ff1f5d680033p1aa16ejsnb444793dd0bc",
             "X-Mashape-Key":"3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767",
             "Access-Control-Allow-Origin": "http://sunset.nada.kth.se:8080/iprog/group/25/recipes/"}
};*/

class DinnerModel extends ObservableModel {
  constructor() {
    super();
    this._numberOfGuests = parseInt(localStorage.numberOfGuests);
    this.getNumberOfGuests();
  }

  /**
   * Get the number of guests
   * @returns {number}
   */
  getNumberOfGuests() {
    return this._numberOfGuests;
  }

  /**
   * Set number of guests
   * @param {number} num
   */
  setNumberOfGuests(num) {
    this._numberOfGuests = num;
    this.notifyObservers();
  }

  // API methods

  /**
   * Do an API call to the search API endpoint.
   * @returns {Promise<any>}
   */
    
}

// Export an instance of DinnerModel
const modelInstance = new DinnerModel();
export default modelInstance;
