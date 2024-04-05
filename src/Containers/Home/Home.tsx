import BeerGallery from "../BeerGallery/BeerGallery";
import Nav from "../../Components/Nav/Nav";
import beersData from "../../Data/beers";
import { BeerTypes } from "../../Types/beerTypes";
import "./Home.scss";

type HomeProps = {
    filteredBeers: BeerTypes[];
    handleFilterByName:(filteredData:BeerTypes[]) => void;
    handleFilterByKey : (filteredData: BeerTypes[]) => void;
}

const Home = ({filteredBeers, handleFilterByKey, handleFilterByName}: HomeProps) => {

  return (
    <section className="main">
      <section className="main__navigation">
        <Nav
          handleFilterByName={handleFilterByName}
          handleFilterByKey={handleFilterByKey}
          allBeers={beersData}
        />
      </section>
      <section className="main__beer-gallery">
        {filteredBeers.length ? (
          <BeerGallery beers={filteredBeers} heading="" />
        ) : (
      <section className = "main__beer-gallery-nobeers">
          <p>No beers match your search. Please try again...</p>
          <p>Update your search choices or click on the cricket to start again!</p>
      </section>    
        )}
      </section>
    </section>
  );
};




export default Home;