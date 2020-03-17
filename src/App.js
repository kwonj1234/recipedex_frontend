import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import MyProfile from './components/MyProfile';
import Home from './components/Home';
import PlanMeal from './components/PlanMeal'
import FormatRecipe from './components/FormatRecipe'
import CreateAccount from './components/CreateAccount';
import './App.css';


function App() {

  return (
    <BrowserRouter className="Browser">
      <NavBar />
      <div className="App">
        <Route path="/Home" component={Home}/>
        <Route path="/MyProfile" component={MyProfile}/>
        <Route path="/PlanMeal" component={PlanMeal}/>
        <Route path="/Format" component={FormatRecipe}/>
        <Route path="/CreateAccount" component={CreateAccount}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
