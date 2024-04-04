import { BeerTypes } from "../../Types/beerTypes";
import BeerCard from "../../Components/BeerCard/BeerCard";
import "./BeerGallery.scss";
import { Link } from "react-router-dom";

type BeerGalleryProps = {
  beers: BeerTypes[];
  heading: string;
};

const BeerGallery = ({ beers, heading }: BeerGalleryProps) => {
  const filteredBeers = beers.filter((beer) => beer.image_url);

  // useEffect(() => {
  //   window.scrollTo(0,0);
  // }, [beers]);

  return (
    <div className="beer-gallery">
      <h2 className="beer-gallery__heading">{heading}</h2>
      <div className="beer-gallery__content">
        {filteredBeers.map((beer) => (
          <Link to = {`/beerGallery/${beer.id}`}key={beer.id}>
          <BeerCard
            name={beer.name}
            imageUrl={String(beer.image_url)}
            tagline={beer.tagline}
            styleVariant="mainPageGallery"
          />
          </Link>
        ))}
        ;
      </div>
    </div>
  );
};

export default BeerGallery;
