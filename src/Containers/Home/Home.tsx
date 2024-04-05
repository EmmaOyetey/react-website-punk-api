import BeerGallery from "../BeerGallery/BeerGallery";
import Nav from "../../Components/Nav/Nav";
import beersData from "../../Data/beers";
import { BeerTypes } from "../../Types/beerTypes";
//import { useState } from "react";
import "./Home.scss";
//import {Link} from "react-router-dom";


type HomeProps = {
    filteredBeers: BeerTypes[];
    handleFilterByName:(filteredData:BeerTypes[]) => void;
    handleFilterByKey : (filteredData: BeerTypes[]) => void;
}

const Home = ({filteredBeers, handleFilterByKey, handleFilterByName}: HomeProps) => {

    const noMatchingBeers = filteredBeers.length === 0;
    const hasFilterApplied = filteredBeers.length !== beersData.length;

    return( 
        <section className="main">
            <section className="main__navigation">
            <Nav
                handleFilterByName={handleFilterByName}
                handleFilterByKey={handleFilterByKey}
                allBeers={beersData}
            />
            </section>
            <section className = "main__beer-gallery">
                {noMatchingBeers && hasFilterApplied ? (
                    <section className ="main__beer-gallery--nobeers">
                        <p>Sorry! No Beers matched that search..</p>
                        <p>Please try again by clearing your search, or</p>
                        <p>use the CRICKET to go back to the home page!</p>
                    </section>
                ) : (
                    <BeerGallery beers={filteredBeers} heading="" />
                )}
            </section>
        </section >

    )


}



export default Home;