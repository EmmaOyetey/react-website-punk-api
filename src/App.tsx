//import { useState } from 'react'

import "./App.scss";
import beersData from "./Data/beers";
import { BeerTypes } from "./Types/beerTypes";
//import BeerGallery from "./Containers/BeerGallery/BeerGallery";
import Nav from "./Components/Nav/Nav";
import { useState } from "react";
import cricketTest from "./Assets/cricketTest.png";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import BeerInfo from "./Components/BeerInfo/BeerInfo";
import ReturntoFilteredBeers from "./Containers/Home/ReturntoFilteredBeers";
import BeerGallery from "./Containers/BeerGallery/BeerGallery";

const App = () => {
  const [filteredBeers, setFilteredBeers] = useState(beersData);

  const handleFilterByName = (filteredData: BeerTypes[]) => {
    setFilteredBeers(filteredData);
  };

  const handleFilterByKey = (filteredData: BeerTypes[]) => {
    setFilteredBeers(filteredData);
  };

  return (
    <BrowserRouter>
    <div className="app">
      <section className="header">
        <h1 className="header__name">
          Beer Cricket :
          <span style={{ fontSize: "2rem" }}> All about the hops</span>
        </h1>
        <Link to="/" className = "refresh to all beers">
        <img
          className="header__cricket"
          src={cricketTest}
          alt="cricket image"
        />
        </Link>
      </section>
      <section className="main">
        <section className="main__navigation">
          <Nav
            handleFilterByName={handleFilterByName}
            handleFilterByKey={handleFilterByKey}
            allBeers={beersData}
          />
        </section>
        <Routes>
          <Route path ="/" element ={<BeerGallery beers = {filteredBeers} heading = ""/> }/>
          <Route path = "/beerGallery" element={<ReturntoFilteredBeers filteredBeers= {filteredBeers}/>} />
          <Route path = "/beerGallery/:beerId" element = {<BeerInfo beers={beersData}/>} />
        </Routes>
      </section>
    </div>
  </BrowserRouter> 
  );
};

export default App;
