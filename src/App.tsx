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

      <section>
        <nav>This is where my nav with go it will have filters 123</nav>
      </section>
       <section className = "BeerGallery">
          <BeerGallery beers = {beers} heading = "Explore Beers!"/>
       </section>
    </div>
  );
};

export default App;

