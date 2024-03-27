//import "./BeerCard.scss"
//import beerTypes from "../../Types/BeerTypes";

type BeerCardProps = {
  name: string,
  imageUrl: string,
  description: string
};


const BeerCard = ({name, imageUrl, description} : BeerCardProps) => {

    return (
        <div className = "beer-card">
            <img className = "beer-card__image"
            key ={name}
            src={imageUrl} 
            alt={name} />
            <p className = "beer-card__name">{name}</p>
            <p className = "beer-card__abrv-info" >{description}description</p>
        </div>
    );

};

export default BeerCard;