import { ChangeEventHandler } from "react";
import "./Filter.scss";

type FilterProps = {
  label: string;
  selectedItems: string[];
  items: string[];
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
};

const Filter = ({ label, selectedItems, items, handleInputChange }: FilterProps) => {
  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <div className="filter-box">
      <div className="filter-box__content">
        <label className="filter-box__label">{capitalizedLabel}</label>
        <div className="filter-box__checkboxes">
          {items.map((item: string, index: number) => (
            <div key={index} className="filter-box__checkboxItems">
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