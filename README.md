Author Emma Oyetey
Name: Beer Cricket

This website was built based on the following specifications;
•	Built entirely in React;
•	Uses the Punk API (https://punkapi.com/)
•	Contains initial testing on rendering and display. 

It provides the user the ability to
  •	Search different beers by their name; page content updates as each letter is typed in the searchbox. 
  •	Filter on three conditions:
      o	High Alcohol (ABV value greater than 6%)
      o	Classic Range (Was first brewed before 2010)
      o	High Acidity(pH lower than 4)
  •	Apply multiple filters simultaneously. 
  •	Return to filtered query results after exploring more information on a selected beer within that search result.

The website has the following components;
  •	Beer Cards; Containing topline information on a beer including an image, its name and tagline
  •	Beer Information; Showing more detailed information on a selected beer; including Malt, Hops and food suggestions.
  •	Filter; Basic layout minus the filtering logic
  •	SearchBox; Basic layout minus the search logic
  •	Navigation bar; A sticky Nav bar containing the filter and searchbox components

In addition to the home page it has the following containers;
  •	FilterBeerByKey : containing code relating to filters as above
  •	FindABeerByName : containing code relating to searching for a beer by its name
  •	Beer Gallery : where beer cards are displayed
  •	ReturntoFilteredBeers : enabling the current search items to be retained whilst exploring each for more info. 
