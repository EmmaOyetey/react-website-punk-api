import { FormEvent, useState } from "react";
import SearchBox from "../Components/SearchBox/SearchBox";
import {BeerTypes} from "../Types/beerTypes";


type FindABeerByNameProps = {
  handleFilter: (filtereData:BeerTypes[]) => void;
  allBeers: BeerTypes[];
};

const FindABeerByName= ({handleFilter, allBeers}: FindABeerByNameProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const cleanInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(cleanInput);

    if(cleanInput.trim() === "") {
      handleFilter(allBeers);
    } else {
      const filteredData = allBeers.filter((beers =>
    beers.name.toLowerCase().includes(cleanInput))
    );
    handleFilter(filteredData);
    }
};

  return (
    <>
      <SearchBox 
        label="Search by Name"
        handleInput={handleInput}
        searchTerm={searchTerm}
      />
    </>
  );
};

export default FindABeerByName;