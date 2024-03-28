import {BeerTypes} from "../../Types/beerTypes";
import BeerCard from "../BeerCard/BeerCard";
import "./BeerGallery.scss"; 

type BeerGalleryProps = {
    beers: BeerTypes[];
    heading: string;
};

const BeerGallery = ({beers, heading} : BeerGalleryProps) => {

const filteredBeers = beers.filter(beer => beer.image_url);

        return(
            <div className = "beer-gallery">
                <h2 className = "beer-gallery__heading">{heading}</h2>
                <div className = "beer-gallery__content">
                {filteredBeers.map(beer => (
                    <BeerCard 
                        name = {beer.name} 
                        imageUrl = {beer.image_url}
                        description = {beer.description}
                        styleVariant = "mainPageGallery"
                    />
                  ))};       
                </div>
            </div>
        );
    
};

export default BeerGallery;