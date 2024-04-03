import {BeerTypes} from "../../Types/beerTypes"
import "./BeerInfo.scss";
import {Link, useParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {useEffect} from "react";


type BeerInfoProps = {
  beers: BeerTypes[];
};

const BeerInfo = ({ beers }: BeerInfoProps) => {

  const {beerId} = useParams();
  console.log (beerId);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [beerId]);

  const beer = beers.find(beer => beer.id === Number(beerId));
  if (!beer) return <p>Couldn't find a beer with that id</p>;

  return (
    
    <article className="beer-info">
      <div className="beer-info__banner">
        <img className="beer-info__image" src={beer.image_url ?? undefined} alt={beer.name} />
      </div>
      <div className="beer-info__content">
        <div className = "beer-info__header">
            <h2 className="beer-info__name">
              {beer.name}{' :  '}
                <span className="beer-info__tagline">
                  {beer.tagline ?? `No description available`}</span>
            </h2>
            <Link to="/beerGallery" className="close-link">
              <FontAwesomeIcon icon={faTimes}/>
            </Link>
        </div>
        <p className = "beer-info__description">{beer.description ?? `No description available`}</p>
        <p className = "beer-info__first-brewed">First Brewed: {beer.first_brewed}</p>
        <div className="beer-info__ingredients">
        <div>
          <h3>Malts:</h3>
          <ul>
            {beer.ingredients?.malt?.map((malt: any, index: number) => (
              <li key={index}>{malt.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Hops:</h3>
          <ul>
            {beer.ingredients?.hops?.map((hop: any, index: number) => (
              <li key={index}>{hop.name} - {hop.attribute}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3 className = "beer-info__food-pairing-header">Food Pairing:</h3>
        <p>
          {beer.food_pairing?.join(", ")}
        </p>
      </div>
  
    </div>
    </article>
  );
};

export default BeerInfo;

