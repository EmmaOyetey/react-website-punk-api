import { ChangeEvent, useState, useEffect } from "react";
import Filter from "../Components/Filter/Filter";
import {BeerTypes} from "../Types/beerTypes";

type FilteredBeersProps = {
  handleFilterBeersByKey : (filteredData: BeerTypes[]) => void;
  allBeers: BeerTypes[];
};

const FilteredBeers = ({handleFilterBeersByKey ,allBeers}: FilteredBeersProps) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    setSelectedFilters(prevState => {
      if (prevState.includes(selectedValue)) {
        return prevState.filter(item => item !== selectedValue);
      } else {
        return [...prevState, selectedValue];
      }
    });
  };

  useEffect(() => {
    applyFilters();
  }, [selectedFilters]);

  const applyFilters = () =>{
    let filteredData: BeerTypes [] = [...allBeers];

    selectedFilters.forEach(filter => {
      if (filter === "Classic Beers") {
        filteredData = filteredData.filter(beer => {
          const year = parseInt(beer.first_brewed.split("/")?.[1]??"0");
          return year < 2010;
        });
      } else if (filter === "High Alcohol Beers") {
        filteredData = filteredData.filter(beer => beer.abv ?? 0 > 6);
      } else if (filter === "High Acidity Beers") {
        filteredData = filteredData.filter(beer => beer.ph ?? 0 < 4);
      }
    });

    handleFilterBeersByKey(filteredData);
  };

    return (
      <>
        <Filter
          label="Filter..."
          items={["Classic Beers", "High Alcohol Beers", "High Acidity Beers"]}
          selectedItems={selectedFilters}
          handleInputChange={handleInputChange}
        />
      </>
    );
  };
  
  export default FilteredBeers;


