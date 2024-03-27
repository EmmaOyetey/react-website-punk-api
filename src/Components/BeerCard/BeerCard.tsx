//import "./BeerCard.scss"
import { beerTypes } from "../../Types/Beertypes";

type BeerCardProps = {
  beer: beerTypes[];
};

const BeerCard = ({beer}) : BeerCardProps) => {

if (!BeerCard) {return "beer not found"};

return (
    <div className = "beer-card">
        <p className = "beer-card__name">{BeerCard.name}</p>
        <img 
        src={"BeerCard.image-url"} alt="picture of beer" />
        <p className = "beer-card__abrv-info" >{BeerCard.description</p>
    </div>
);

}