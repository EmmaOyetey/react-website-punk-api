//import { useState } from 'react'

import "./App.scss";
import beers from "./Data/beers";
import BeerGallery from "./Components/BeerGallery/BeerGallery";
import Nav from "./Components/Nav/Nav";

//import { useState } from 'react';

//const [count, setCount] = useState(0) removed this from the boiler plate
//const getGreetingMessage = (hour: number): string => {

const App = () => {

  return (
    <div className="app">
      <section className = "header">
          <h1 className="header__name">
              Beer Cricket :  
              <span style={{ fontSize: '2rem' }}> All about the hops</span>
          </h1>
          <img className = "header__cricket" src="./assets/cricket.png" alt="" />
      </section>
      <section className = "main">
          <section className = "main__navigation">
            <Nav />
          </section>
          <section className = "beerGallery">
            <BeerGallery beers = {beers} heading = ""/>
          </section>
      </section>
    </div>
  );
};

export default App;

