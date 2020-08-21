import React, { useState, useEffect } from 'react'
import axios from "axios";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.css';
import * as yup from 'yup'
import formSchema from './validation/formSchema'
import PizzaForm from './PizzaForm'


//Step 1 Build the UI to have the basic options that you need according to the 
//Step 2 Set up the states
//Step 3 set up the functions and useEffects to change the states
//Step 4 pass them to the form.js component via props
//Step 5 retrieve the propos on the form.js component and build out the ui with all the form fun stuff
//Step 6 apply the props to the form
//Step 7 Build out the routes
//Step 8 Build out the validation with yup
//Step 9 Build out the testing with cypress
//STRETCH


const App = () => {
  return (
    <Router>
      <header>

        <nav>
          <h3>
            LAMBDA EATS
          </h3>
          <div>
            <a href='/'>Home</a>
            <a href='/'>Help</a>
          </div>
        </nav>

        <div>
          <h1>Lambda Eats</h1>
          <p>Your favorite food delivered while coding</p>

          <Link to='/PizzaForm'>PIZZA</Link>

          {/* <PizzaForm/> */}


          <Switch>
          <Route path="/PizzaForm">
            <PizzaForm />
          </Route>
          {/* <Route path="/">
            <App />
          </Route> */}
        </Switch>

        </div>
      </header>


      
    </Router>
  );
};
export default App;
