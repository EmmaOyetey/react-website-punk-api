import "./Nav.scss";
import FindABeerByName from "../../Containers/FindABeerByName/FindABeerByName";
import FilteredBeers from "../../Containers/FilterBeerByKey/FilterBeerByKey";
import beers from "../../Data/beers";
import { BeerTypes } from "../../Types/beerTypes";


type NavProps = {
  handleFilterByName: (filteredData: BeerTypes[]) => void;
  handleFilterByKey: (filteredData: BeerTypes[]) => void;
  allBeers: BeerTypes[];
};

const Nav = ({ handleFilterByName, handleFilterByKey, allBeers }: NavProps) => {
  return (
    <section className="find-a-beer">
      <p className="find-a-beer__info1">BEER </p>
      <p className="find-a-beer__info2">You're in the Right Place</p>
      <p className="find-a-beer__info3">Find One... </p>
      <FindABeerByName
        handleFilterByName={handleFilterByName}
        allBeers={allBeers}
      />
      <FilteredBeers
        handleFilterBeersByKey={handleFilterByKey}
        allBeers={beers}
      />
    </section>
  );
};

export default Nav;

