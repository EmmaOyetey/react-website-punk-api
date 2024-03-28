import { ChangeEvent, useState } from "react";
import Filter from "../Components/Filter/Filter";
import {BeerTypes} from "../Types/beerTypes";
import BeerGallery from "../Components/BeerGallery/BeerGallery";

type FilteredBeersProps = {
  beers: BeerTypes[];
};

const FilteredBeers = ({ beers }: FilteredBeersProps) => {
  const [searchTerm, setSearchTerm] = useState<string[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    setSearchTerm(prevState => {
      if (prevState.includes(selectedValue)) {
        return prevState.filter(item => item !== selectedValue);
      } else {
        return [...prevState, selectedValue];
      }
    });
  };

  const classicBeers = beers.filter(beer => {
    const year = parseInt(beer.first_brewed.split("/")[1]); // Extract and parse the year part
    return year < 2010; // Compare the parsed year with 2010
  });
  const highAlcoholBeers = beers.filter(beers => beers.abv > 6);
  const highAcidityBeers = beers.filter(beers => beers.ph < 4);

  const items = [
    { label: "Classic Beers", value: classicBeers },
    { label: "High Alcohol Beers", value: highAlcoholBeers },
    { label: "High Acidity Beers", value: highAcidityBeers }
  ];

  return (
    <>
      <Filter
        label="Find a Beer"
        selectedItems={searchTerm}
        items={items.map(item => item.label)}
        handleInputChange={handleInputChange}
      />
      {searchTerm.length > 0 && (
      <BeerGallery
        beers={beers.filter(beer => {
          return searchTerm.some(term => {
            if (term === "Classic Beers") {
              return classicBeers.includes(beer);
            }
            if (term === "High Alcohol Beers") {
              return highAlcoholBeers.includes(beer);
            }
            if (term === "High Acidity Beers") {
              return highAcidityBeers.includes(beer);
            }
            return false;
          });
        })}
        heading="Beers Matching your Search"
      />
    )}
    </>
  );
};

export default FilteredBeers;