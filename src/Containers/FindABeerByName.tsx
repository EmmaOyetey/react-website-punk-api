import { FormEvent, useState } from "react";
import SearchBox from "../Components/SearchBox/SearchBox";
import {BeerTypes} from "../Types/beerTypes";
import BeerGallery from "../Components/BeerGallery/BeerGallery";

type FindABeerByNameProps = {
  beers: BeerTypes[];
};

const FindABeerByName= ({beers}: FindABeerByNameProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const cleanInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredBeers = beers.filter((beers) =>
    beers.name.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <SearchBox
        label="Search by Name"
        handleInput={handleInput}
        searchTerm={searchTerm}
      />
      {searchTerm && <BeerGallery beers={filteredBeers} heading = "Beers Matching Your Search"/>}
    </>
  );
};

export default FindABeerByName;