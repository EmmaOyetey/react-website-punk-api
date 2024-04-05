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
      <section className="Main__beer-gallery">
        <BeerGallery beers={filteredBeers} heading="" />
      </section>
    </section>
  );
};




export default Home;