import "./BeerCard.scss"

type BeerCardProps = {
  name: string,
  imageUrl: string,
  tagline: string,
  styleVariant: string,
};


const BeerCard = ({name, imageUrl, tagline, styleVariant} : BeerCardProps) => {

    const truncateDescription = () => {
        const words = tagline.split(' ');
        if (words.length > 12 ) {
          return words.slice(0, 12).join(' ') + '...';
        }
        return tagline;
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