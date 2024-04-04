import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Nav from "./Nav";
import beersData from "../../Data/beers"; 

describe("searchBox in Nav component", () => {

    const mockHandleFilterBeerByKey = () => {};
    const mockHandleFilterByName = () => {};

  // Tests for rendering FindABeerByName component
  it("should render FindABeerByName search component; show a searchbox which allows a user to input and see what is written", async () => {
    render(
      <Nav
        handleFilterByName={mockHandleFilterByName}
        handleFilterByKey={mockHandleFilterBeerByKey}
        allBeers={beersData}
      />
    );

    // Check if the label "Search by Name" is rendered
    const searchLabel = screen.getByText(/Search by Name/i);
    expect(searchLabel).toBeInTheDocument();

    // Check if the SearchBox component is rendered
    const searchBox = screen.getByRole("textbox");
    expect(searchBox).toBeInTheDocument();

    //check the user sees the typed letter 'a' in the searchbox
    await userEvent.type(searchBox, "a");
    expect(searchBox).toHaveDisplayValue("a");
   // expect(searchBox.value).toBe("a");

  });
});

describe("Filters in Nav component", () => {

    const mockHandleFilterBeerByKey = () => {};
    const mockHandleFilterByName = () => {};

    // Tests for rendering FindABeerByName component
    it("should render FilterBeerByKey Filter component; with 3 options which can be selected for filtering ", async () => {
      render(
        <Nav
          handleFilterByName={mockHandleFilterByName}
          handleFilterByKey={mockHandleFilterBeerByKey}
          allBeers={beersData}
        />
      );
  
    // Check if the label "Filter..." is rendered
    const filterLabel = screen.getByText(/Filter.../i);
    expect(filterLabel).toBeInTheDocument();

    // Check if all three checkboxes and their labels are rendered
    const classicCheckbox = screen.getByRole("checkbox", { name: /Classic Beers/i });
    expect(classicCheckbox).toBeInTheDocument();

    const highAlcoholCheckbox = screen.getByRole("checkbox", { name: /High Alcohol Beers/i });
    expect(highAlcoholCheckbox).toBeInTheDocument();

    const highAcidityCheckbox = screen.getByRole("checkbox", { name: /High Acidity Beers/i });
    expect(highAcidityCheckbox).toBeInTheDocument();

    // Select each checkbox
    await userEvent.click(classicCheckbox);
    await userEvent.click(highAlcoholCheckbox);
    await userEvent.click(highAcidityCheckbox);

    // Check if checkboxes are checked after being clicked
    expect(classicCheckbox).toBeChecked();
    expect(highAlcoholCheckbox).toBeChecked();
    expect(highAcidityCheckbox).toBeChecked();

    // Unselect checkboxes
    await userEvent.click(classicCheckbox);
    await userEvent.click(highAlcoholCheckbox);
    await userEvent.click(highAcidityCheckbox);

    // Check if checkboxes are unchecked after being clicked again
    expect(classicCheckbox).not.toBeChecked();
    expect(highAlcoholCheckbox).not.toBeChecked();
    expect(highAcidityCheckbox).not.toBeChecked();

    // Select multiple checkboxes
    await userEvent.click(classicCheckbox);
    await userEvent.click(highAlcoholCheckbox);

    // Check if multiple checkboxes are checked
    expect(classicCheckbox).toBeChecked();
    expect(highAlcoholCheckbox).toBeChecked();
    expect(highAcidityCheckbox).not.toBeChecked();
  });
});