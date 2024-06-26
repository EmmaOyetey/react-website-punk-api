import "./ReturntoFilteredBeers.scss";
import BeerGallery from "../BeerGallery/BeerGallery";
import { BeerTypes } from "../../Types/beerTypes";
import { Link } from "react-router-dom";
import cricketTest from "../../Assets/cricketTest.png";


type ReturntoBeersProps = {
  filteredBeers: BeerTypes[];
};

const ReturntoFilteredBeers = ({ filteredBeers }: ReturntoBeersProps) => {
  return (
    <div className="filtered-beers__container">
      <div>
        <button className="filtered-beers__button">
          Start a New Search?
              <Link to="/" className="refresh to all beers">
            <img
              className="filtered-beers__cricket"
              src={cricketTest}
              alt="cricket image"
            />
          </Link>
          </button>
      </div>
      <div className="filtered-beers__beer-gallery">
        <BeerGallery beers={filteredBeers} heading="Your Selected Beers" />;
      </div>
    </div>
  );
};

export default ReturntoFilteredBeers;
