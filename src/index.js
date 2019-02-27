import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
if(localStorage==null)
{var ordermenuinitial=[];
localStorage.setItem("ordermenu",JSON.stringify(ordermenuinitial));}
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
