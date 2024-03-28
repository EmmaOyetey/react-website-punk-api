import { ChangeEventHandler } from "react";
//import "./DropDownBox.scss";

type FilterProps = {
  label: string;
  selectedItems: string[];
  items: string[];
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
};

const Filter = ({ label, selectedItems, items, handleInputChange }: FilterProps) => {
  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <div className="search-box">
      <div className="search-box__byRole">
        <label className="search-box__label">{capitalizedLabel}</label>
        <div className="search-box__checkboxes">
          {items.map((item: string, index: number) => (
            <div key={index} className="search-box__checkbox">
              <input
                type="checkbox"
                id={`${label}-${index}`}
                name={item}
                value={item}
                checked={selectedItems.includes(item)}
                onChange={handleInputChange}
              />
              <label htmlFor={`${label}-${index}`}>{item}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;