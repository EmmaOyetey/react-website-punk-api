import "./App.scss";
import beersData from "./Data/beers";
import cricketTest from "./Assets/cricketTest.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BeerInfo from "./Components/BeerInfo/BeerInfo";
import ReturntoFilteredBeers from "./Containers/ReturntoFilteredBeers/ReturntoFilteredBeers";
import Home from "./Containers/Home/Home";
import { useState } from "react";
import { BeerTypes } from "./Types/beerTypes";

const App = () => {
  const [filteredBeers, setFilteredBeers] = useState(beersData);

  const handleFilterByName = (filteredData: BeerTypes[]) => {
    setFilteredBeers(filteredData);
  };

  const handleFilterByKey = (filteredData: BeerTypes[]) => {
    setFilteredBeers(filteredData);
  };

  return (
    <BrowserRouter basename= "react-website-punk-api">
      <div className="app">
        <section className="header">
          <h1 className="header__name">
            Beer Cricket :
            <span style={{ fontSize: "2rem" }}> All about the hops</span>
          </h1>
          <Link to="/" className="refresh to all beers">
            <img
              className="header__cricket"
              src={cricketTest}
              alt="cricket image"
            />
          </Link>
        </section>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                filteredBeers={filteredBeers}
                handleFilterByKey={handleFilterByKey}
                handleFilterByName={handleFilterByName}
              />
            }
          />
          <Route
            path="/beerGallery"
            element={<ReturntoFilteredBeers filteredBeers={filteredBeers} />}
          />
          <Route
            path="/beerGallery/:beerId"
            element={<BeerInfo beers={beersData} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
