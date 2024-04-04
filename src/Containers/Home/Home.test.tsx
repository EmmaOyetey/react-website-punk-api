


// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import BeerGallery from "../BeerGallery/BeerGallery";
// import Nav from "../../Components/Nav/Nav";
// import { BeerTypes } from "../../Types/beerTypes";  


// describe("BeerGallery component in Home", () => {
//   const mockBeers= [
//     { id: 1, name: "5am Saint" },
//     { id: 2, name: "Arcade Nation" }
//   ];

//   const mockHandleFilterBeerByKey = () => {};
//   const mockHandleFilterByName = () => {};



//   //check beers returned by name search contain entered values and can handle both number and capitals
//   it("should display beers containing the entered value (handle numbers)", async () => {
//     render (
//       <section className="main">
//           <section className="main__navigation">
//           <Nav
//               handleFilterByName={mockHandleFilterBeerByKey}
//               handleFilterByKey={mockHandleFilterByName}
//               allBeers={mockBeers as BeerTypes[] }
//           />
//           </section>
//           <section className = "Main__beer-gallery">
//           <BeerGallery beers = {mockBeers as BeerTypes[]} heading = ""/> 
//           </section>
//       </section >
//       );

//     const searchBox = screen.getByRole("textbox");
    
//     await userEvent.type(searchBox, "5am");

//     const beer1 = screen.getByText("5am");
//     expect(beer1).toBeInTheDocument();

//     const otherBeer = screen.queryByText("Arcade Nation");
//     expect(otherBeer).not.toBeInTheDocument();
//   });
// });

//   it("should display beers containing the entered value (handle capitals)", async () => {
//     render (<BeerGallery beers = {mockBeers as BeerTypes[]} heading = ""/> );
//     const searchInput = screen.getByRole("textbox", { name: /search/i });

//     await userEvent.type(searchInput, "Arcade");

//     const beer2 = screen.getByText("Arcade Nation");
//     expect(beer2).toBeInTheDocument();

//     const otherBeer = screen.queryByText("5am Amber Ale");
//     expect(otherBeer).not.toBeInTheDocument();
//   });
// });

// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import Home from "../Home/Home";
// import beersData from "../../Data/beers";

// describe("Home component", () => {

//   const mockHandleFilterBeerByKey = () => {};
//   const mockHandleFilterByName = () => {};

//   it("should display a beer card in the beer gallery when '5am' is typed in the search filter", async () => {
//     render(<Home 
//       filteredBeers={beersData} 
//       handleFilterByKey={mockHandleFilterBeerByKey}
//       handleFilterByName={mockHandleFilterByName}/>);

//     // Type '5am' in the search filter
//     const searchInput = screen.getByRole("textbox", { name: /search/i });
//     await userEvent.type(searchInput, "5am");

//     // Check if a beer card with the name '5am Saint' is rendered in the beer gallery
//     const beerCard = screen.getByText("5am Saint");
//     expect(beerCard).toBeInTheDocument();
//   });
// });