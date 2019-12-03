
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";
 
const ROOT = document.querySelector(".app");
  
ReactDOM.render(<Hello compiler="compiler" framework="fre"/>, ROOT);
