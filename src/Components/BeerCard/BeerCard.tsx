import "./BeerCard.scss"
//import beerTypes from "../../Types/BeerTypes";

type BeerCardProps = {
  name: string,
  imageUrl: string,
  description: string,
  styleVariant: string,
};


const BeerCard = ({name, imageUrl, description, styleVariant} : BeerCardProps) => {

    const truncateDescription = () => {
        const words = description.split(' ');
        if (words.length > 12 ) {
          return words.slice(0, 12).join(' ') + '...';
        }
        return description;
    }

const className = `beer-card beer-card--${styleVariant}`;
    return (
        <div className = {className}>
            <div className = "beer-card__content">
                <div className ="beer-card__image-container">
                    <img className = "beer-card__image"
                    key ={name}
                    src={imageUrl} 
                    alt={name} />
                </div>
                <p className = "beer-card__name">{name}</p>
                <p className = "beer-card__abrv-info" >{truncateDescription()}</p>
            </div>
        </div>
    );

};

export default BeerCard;