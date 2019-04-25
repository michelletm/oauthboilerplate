import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//the provider takes a store prop
//and gives all of our other components the access to that store
//when they need it 
import {Provider} from "react-redux";


//we need the createStore function to house all of our state
import {createStore} from "redux";

import reducers from "./reducers";

const store = createStore(reducers)
//creates store and takes in reducers responsible for managing its state

ReactDOM.render(
    <Provider store={store}> 
      <App />
   </Provider> 
, 
   document.getElementById("root"));
