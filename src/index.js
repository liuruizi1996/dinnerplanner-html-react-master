import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";


if(localStorage.ordermenu==null)
{var ordermenuinitial=[];
localStorage.setItem("ordermenu",JSON.stringify(ordermenuinitial));}

if(localStorage.numberOfGuests==null)
{var numberOfGuests=4;
localStorage.setItem("numberOfGuests",numberOfGuests);}



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
