//import "./Home.scss";
//import beers from "../../Data/beers";
import BeerGallery from "../BeerGallery/BeerGallery";
import { BeerTypes } from "../../Types/beerTypes";
//import Nav from "../../Components/Nav/Nav";
//import {filteredBeers} from "App.tsx" ;

//import { useState } from 'react';
type ReturntoBeersProps = {
  filteredBeers: BeerTypes[];
};

const ReturntoFilteredBeers = ({ filteredBeers }: ReturntoBeersProps) => {
  return (
    <div className="filtered-beers__container">
      <div>
        <button className="filtered-beers__button">Start a New Search?</button>
      </div>
      <div>
        <BeerGallery beers={filteredBeers} heading="Your Selected Beers" />;
      </div>
    </div>
  );
};

export default ReturntoFilteredBeers;
