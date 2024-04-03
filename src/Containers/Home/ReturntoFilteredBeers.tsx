import "./Home.scss";
//import beers from "../../Data/beers";
import BeerGallery from "../BeerGallery/BeerGallery";
import { BeerTypes } from "../../Types/beerTypes";
//import Nav from "../../Components/Nav/Nav";
//import {filteredBeers} from "App.tsx" ;

//import { useState } from 'react';
type ReturntoBeersProps ={
  filteredBeers: BeerTypes[];
};

const ReturntoFilteredBeers = ({filteredBeers} : ReturntoBeersProps) => {
  return  <BeerGallery beers={filteredBeers} heading="" />;
};

export default ReturntoFilteredBeers;
