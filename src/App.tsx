//import { useState } from 'react'

import "./App.scss";
import beers from "./Data/beers";
import BeerGallery from "./Components/BeerGallery/BeerGallery";

//import { useState } from 'react';

//const [count, setCount] = useState(0) removed this from the boiler plate
//const getGreetingMessage = (hour: number): string => {

const App = () => {

  return (
    <div className="app">
       
          <BeerGallery beers = {beers} heading = "Explore Beers!"/>
       


    </div>
  );
};

export default App;

