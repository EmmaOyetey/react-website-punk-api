//import { useState } from 'react'

import "./App.scss";
import beersData from "./Data/beers";
import {BeerTypes} from "./Types/beerTypes";
import BeerGallery from "./Components/BeerGallery/BeerGallery";
import Nav from "./Components/Nav/Nav";
import { useState } from "react";

const App = () => {
  const [filteredBeers, setFilteredBeers] = useState(beersData);

  const handleFilterByName = (filteredData:BeerTypes[]) => {
    setFilteredBeers(filteredData);
  };

  const handleFilterByKey = (filteredData : BeerTypes[]) =>{
    setFilteredBeers(filteredData);
  };

  return (
    <div className="app">
      <section className="header">
        <h1 className="header__name">
          Beer Cricket :
          <span style={{ fontSize: "2rem" }}> All about the hops</span>
        </h1>
        <img className="header__cricket" src="./assets/cricket1.png" alt="" />
      </section>
      <section className="main">
        <section className="main__navigation">
          <Nav handleFilterByName={handleFilterByName} handleFilterByKey={handleFilterByKey} allBeers={beersData}/>
        </section>
        <section className="beerGallery">
          <BeerGallery beers={filteredBeers} heading="" />
        </section>
      </section>
    </div>
  );
};

export default App;
